/** =======================================================================
 *  Vincent Hardy
 *  License terms: see svg-wow.org
 *  CC0 http://creativecommons.org/publicdomain/zero/1.0/
 *  ======================================================================= */

YUI.add("asset-loader", function (Y) {

sw = window.sw;
if (sw === undefined) { 
    window.sw = {};
}

var AudioFormatsTypeMap = {
    wav: 'audio/wav',
    mp3: 'audio/mpeg',
    ogg: 'audio/ogg'
};

/**
 * Utility class to load various assets and monitor their loading progress.
 *
 * 
 */
sw.AssetLoader = function () {
    /**
     * Array of queued audio, the ones for which a load has not been placed yet.
     */
    this._queuedAudio = [];

    /**
     * Array of audio whose loading has started but not completed.
     */
    this._pendingAudio = [];

    /**
     * Controls whether or not an error has been detected.
     */
    this._inError = false;
}

Y.mix(sw.AssetLoader.prototype, {
    /**
     * Request the loading of a new audio asset in the given formats.
     *
     * @param audioPath {String} the root path for the audio file.
     * @param formats {Array} an array of format strings.
     */
    addAudioAsset : function (audioPath, formats) {
        var audio = new Audio(), nFormats = formats.length, src, f, t,
            canPlayResponse, hasChances;

        for (var i = 0; i < nFormats; i++) {
            f = formats[i];
            t = AudioFormatsTypeMap[f];
            canPlayResponse = audio.canPlayType(t);
            if (canPlayResponse !== '') {
                src = audio.ownerDocument.createElement('source');
                src.type = AudioFormatsTypeMap[f];
                src.src = audioPath + '.' + f;
                if (canPlayResponse === 'probably') {
                    audio.insertBefore(src, audio.firstChild);
                } else {
                    audio.appendChild(src);
                }
                Y.log('type ' + t + ' is supported', 'info');
                hasChances = true;
            }
        }

        if (hasChances === false) {
            // No supported format
            Y.log('None of the audio format is supported', 'info');
            audio = undefined;
        } else {
            this._queuedAudio.push(audio);
        }

        // ----- Opera work around ---------------------------------------------
        // Without 'autoplay' set to true, a dynamically inserted audio element
        // never loads in Opera 10.6, even with a call to load. This work
        // around triggers an immediate load of the resource, as it gets
        // added.
        // ---------------------------------------------------------------------
        if (Y.UA.opera) {
            Y.log("Opera autoplay audio workaround kicks in");
            audio.setAttribute('autoplay', 'true');
            audio.addEventListener('canplay', function (evt) {
                audio.pause();
            }, false);
        }
        
        return Y.one(audio);
    },

    /**
     * Implementation helper. Checks if all the resources have been loaded.
     * If so, dispatches the 'all-loaded' event.
     */
    _checkAllLoaded : function () {
        if (this._pendingAudio.length === 0) {
            this.fire({
                type: 'all-loaded'
            });
        }
    },

    /**
     * Implementation helper. Reports an error to listeners.
     *
     * @param asset the asset which could not be loaded.
     */
    _reportError : function (asset) {
        this.fire({
            type: 'error',
            asset: asset
        });
    },

    _onMediaCanPlayThrough : function (media, pendingMedia) {
        var n = pendingMedia.length;
        for (var i = 0; i < n; i++) {
            if (pendingMedia[i] === media) {
                pendingMedia.splice(i, 0);
                break;
            }
        }

        if (pendingMedia.length === 0 && this._inError === false) {
            this._checkAllLoaded();
        }
    },

    _onMediaError : function (media, pendingMedia) {
        var n = pendingMedia.length;
        for (var i = 0; i < n; i++) {
            if (pendingMedia[i] === media) {
                pendingMedia.splice(i, 0);
                break;
            }
        }

        this._inError = true;
        this._reportError(media);
    },

    _onMediaEvent : function (media, pendingMedia, event) {
        Y.log(event.type + " on " + media.currentSrc, 'info');
    },

    /**
     * @param media the media to listen to
     * @param pendingMedia the list of pending items the media should be removed
     *        from.
     * @return the canplaythrough handler for the given media asset.
     */
    getMediaCanPlayThroughHandler : function (media, pendingMedia) {
        var that = this;
        return function () {
            Y.log('received canplaythrough on media', 'info');
            that._onMediaCanPlayThrough(media, pendingMedia);
        }
    },

    /**
     * @param media the media to listen to
     * @param pendingMedia the list of pending items the media should be removed
     *        from.
     * @return the error handler for the given media asset.
     */
    getMediaErrorHandler : function (media, pendingMedia) {
        var that = this;
        return function () {
            Y.log('received error on media', 'info');
            that._onMediaError(media, pendingMedia);
        }
    },

    getMediaEventHandler : function (media, pendingMedia) {
        var that = this;
        return function (event) {
            that._onMediaEvent(media, pendingMedia, event);
        }
    },

    /**
     * A call to <code>loadQueuedAssets</code> will make the
     * <code>AssetLoader</code> initiate loading of all queued resources.
     */
    loadQueuedAssets : function () {
        var queuedAudio = this._queuedAudio,
            nAudio = queuedAudio.length, handler,
            audio;

        // Reset queued audio
        this._queuedAudio = [];

        // Informative media events
        var mediaEvents = [
            'loadstart',
            'progress',
            'suspend',
            'abort',
            'emptied',
            'stalled',
            'play',
            'pause',
            'loadedmetadata',
            'loadeddata',
            'waiting',
            'playing',
            'canplay',
            'canplaythrough',
            'seeking',
            'seeked',
            /*'timeupdate',*/
            'ended',
            'ratechange',
            'durationchange',
            'volumechange'
        ];

        for (var i = 0; i < nAudio; i++) {
            audio = queuedAudio[i];
            
            handler =
                this.getMediaCanPlayThroughHandler(audio, this._pendingAudio);
            audio.addEventListener('canplaythrough', handler, false);

            handler =
                this.getMediaErrorHandler(audio, this._pendingAudio);
            audio.addEventListener('error', handler, false);

            for (var j = 0; j < mediaEvents.length; j++) {
                handler =
                    this.getMediaEventHandler(audio, this._pendingAudio);
                audio.addEventListener(mediaEvents[j], handler, false);
            }
            audio.load();
        }
    }
});

Y.augment(sw.AssetLoader, Y.EventTarget);

}, "1,0", {requires: ['node']});
