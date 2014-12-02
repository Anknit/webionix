/** =======================================================================
 *  Vincent Hardy
 *  License terms: see svg-wow.org
 *  CC0 http://creativecommons.org/publicdomain/zero/1.0/
 *  ======================================================================= */
(function () {

var positions = {
    wherever: {
        translate: [239, 384],
        rotation: -90,
        scale: 0.6,
        opacity: 1
    },
    bigYou: {
        translate: [435, 337],
        rotation: 180,
        scale: 1,
        opacity: 1
    },
    go: {
        translate: [388 , 304],
        rotation: 0,
        scale: 0.3,
        opacity: 1
    },
    there: {
        translate: [528, 295],
        rotation: -68,
        scale: 0.6,
        opacity: 1
    },
    are: {
        translate: [440, 365],
        rotation: -90,
        scale: 0.5,
        opacity: 0.5
    },
    smallYou: {
        translate: [400,900],
        rotation: 0,
        scale: 1,
        opacity: 0
    }
};

var finalPositions = {
    wherever: {
        translate: [0, 0],
        rotation: 0,
        scale: 1,
        opacity: 1,
        length: 2
    },
    bigYou: {
        translate: [0, 0],
        rotation: 0,
        scale: 1,
        opacity: 1,
        length: 1.6
    },
    go: {
        translate: [0, 0],
        rotation: 0,
        scale: 1,
        opacity: 1,
        length: 2
    },
    there: {
        translate: [0, 0],
        rotation: 0,
        scale: 1,
        opacity: 1,
        length: 2.4
    },
    are: {
        translate: [0, 0],
        rotation: 0,
        scale: 1,
        opacity: 1,
        length: 2.4
    },
    smallYou: {
        translate: [0, 0],
        rotation: 0,
        scale: 1,
        opacity: 1,
        length: 2
    }
};

/**
 * Called by YUI when the scripts and content has been fully loaded and the DOM
 * is ready.
 *
 * @see YUI() call at the end of this file.
 * @param Y the YUI instance.
 * @param p_oAudio optional audio track to play.
 */
function loadDemo (Y, audio) {
    /*
    var audioTrack = Y.one("#trackHTML5");
    if (audioTrack.get("error") !== null) {
        // The audio error state is checked in the play method, so we just
        // continue on with the demo here.
        onAudioReady();
    } else if (audioTrack.get("readyState") !==
                audioTrack.get("HAVE_ENOUGH_DATA")) {
        // No error yet. Hook up event listeners.
        audioTrack.on("canplaythrough", onAudioReady);
        audioTrack.on("error", onAudioReady);
    } else {
        onAudioReady();
    }

    // The demo really starts when the audio has finished loading
    // =====================================================================
    function onAudioReady () {
        Y.one("#loadingAudio").setStyle('display', 'none');
        if (audioTrack.get("readyState") === audioTrack.get("HAVE_ENOUGH_DATA")) {
            audioTrack.play();
        }
        onReady(Y);
    }*/

    var clickHandler = Y.one('body').on('click', function () {
        if (audio !== undefined) {
            audio.play();
            Y.one("#loading-message-text").set('textContent', 'starting in 3s');
            setTimeout(function () {
                Y.one('#loading-message-text').remove();
                onReady(Y);
            }, 3000);
        } else {
             Y.one('#loading-message-text').remove();
            onReady(Y);
        }
        clickHandler.detach();
    });

}

function getPositionTransform (pos, node) {
    var bbox = node.getBBox(),
        transform =
            "translate(" + pos.translate[0] + ',' + pos.translate[1] + ')' +
            "scale(" + pos.scale + ')' +
            "rotate(" + pos.rotation + ')' +
            "translate(" + (-bbox.x - bbox.width / 2) + ',' +
                           (-bbox.y - bbox.height / 2) + ')';
    return transform;
}

function getThereTransformTemplate (Y) {
    var pos = positions.there, node = Y.one('#there'),
        bbox = node.getBBox(),
        transform =
            "translate(" + pos.translate[0] + ',' + pos.translate[1] + ')' +
            "scale(" + pos.scale + ')' +
            "rotate(" + pos.rotation + ')' +
            "translate(0, #ty)" +
            "translate(" + (-bbox.x - bbox.width / 2) + ',' +
                           (-bbox.y - bbox.height / 2) + ')';
    return transform;
}

function onReady(Y) {
    var p, e, bbox, m, items, vb, vbCx, vbCy,
        finalAnimations = [], center, reposition, cx, cy, svg,
        Easing = Y.Easing, Animate = sw.animation.Animate,
        cameraTarget = Y.one("#cameraTarget"),
        Camera = sw.tools.Camera,
        localAnimations = {},
        goAnim, thereAnim, areAnim;


    // Animation for 'go' after we have paused on the first 'you'
    goAnim = new Animate({
            node: Y.one('#go'),
            from: {
                transform: {ty: -300}
            },
            to: {
                transform: {ty: 0}
            },
            transformTemplate: "translate(0,#ty)" +
                               getPositionTransform(positions.go, Y.one('#go')),
            duration: 2,
            easing: Easing.elasticOut
        });

    goAnim.onBegin(function () {Y.one('#go').setStyle('display', 'inline');});
    goAnim.applyStartFrame();
    
    localAnimations['youPause'] = {
        anim : goAnim,
        offset: 0
    };

    // Animation for 'there'
    thereAnim = new Animate({
            node: Y.one('#there'),
            from: {
                transform: {ty: 40}
            },
            to: {
                transform: {ty: 0}
            },
            transformTemplate: getThereTransformTemplate(Y),
            duration: 1,
            easing: Easing.easeOut
        });

    thereAnim.onBegin(function () {Y.one('#there').setStyle('display', 'inline');});

    localAnimations['goPause'] = {
        anim : thereAnim,
        offset: 1
    };

    // Animation for 'are'
   areAnim = new Animate({
            node: Y.one('#are'),
            from: {
                'stroke-dashoffset': 200
            },
            to: {
                'stroke-dashoffset': 0
            },
            duration: 2,
            easing: Easing.easeNone
        });
    var areAnim2 = new Animate({
            node: Y.one('#are'),
            from: {
                'fill-opacity': 0,
                'stroke-opacity': 1
            },
            to: {
                'fill-opacity': 1,
                'stroke-opacity': 0
            },
            duration: 1,
            easing: Easing.easeNone
        });
    areAnim.onBegin(function () {
        var areNode = Y.one('#are');
        areNode.setStyle('display', 'inline');
        areNode.setStyle('fill', 'none');
        areNode.setStyle('stroke', 'black');
        areNode.setStyle('stroke-dasharray', '200,200');
        areNode.setStyle('stroke-dashoffset', '10');
        areNode.setStyle('stroke-linejoin', 'round');
        areNode.setStyle('stroke-linecap', 'round');
        areNode.setStyle('stroke-width', 0.5);
    });
    areAnim.onEnd(areAnim2);
    areAnim.onEnd(function () {
        var areNode = Y.one('#are');
        areNode.setStyle('fill', 'black');
    });
    areAnim2.onEnd(function () {
        var areNode = Y.one('#are');
        areNode.setStyle('stroke', 'none');
        areNode.setStyle('stroke-dashoffset', 'none');
        areNode.setStyle('stroke-dasharray', '');
        areNode.setStyle('fill-opacity', 1);
    });    

    localAnimations['you.2Pause'] = {
        anim : areAnim,
        offset: 2
    };
    
    function onSegmentComplete(event) {
        var segmentName = event.segment.name,
            localAnim = localAnimations[segmentName];

        if (localAnim !== undefined) {
            localAnim.anim.run(localAnim.offset);
        }
    }

    // The 'items' are not centered in the viewBox. Here, we compute the
    // centering transform so that it can be added lateron when we move the
    // elements to their final position.
    items = Y.one("#items");
    svg = Y.one("svg");
    vb = svg.get('viewBox').baseVal;
    bbox = items.getBBox()
    vbCx = -bbox.x + (vb.width - bbox.width) / 2;
    vbCy = -bbox.y + (vb.height - bbox.height) / 2;

    Y.each(positions, function (pos, p) {
        if (positions.hasOwnProperty(p)) {
            e = Y.one("#" + p);
            m = e.getMatrix();
            m.toIdentity();
            bbox = e.getBBox();

            m.translate(pos.translate[0], pos.translate[1]).
                 scale(pos.scale).
                 rotate(pos.rotation).
                 translate(-bbox.x - bbox.width / 2, -bbox.y - bbox.height / 2);
            e.r = pos.rotation;
            e.tx = pos.translate[0];
            e.ty = pos.translate[1];
            e.sx = pos.scale;
            e.sy = pos.scale;

            e.setMatrix(m);
            e.setStyle('opacity', pos.opacity)  ;
        }
    });

    var camera = new Camera({
        target: cameraTarget,
        viewport: {width: 800, height: 600},
        frameLength: 10,
        position: {x: 243, y: 68},
        direction: 90,
        zoom: 7
    });

    var defaultInterpolators = {
        zoom: Easing.easeNone,
        direction: Easing.easeBothStrong ,
        position: Easing.easeBothStrong
    };

    var noInterpolators = {
        zoom: Easing.easeNone,
        direction: Easing.easeNone,
        position: Easing.easeNone
    };

    camera.addTravelSegments([{
        name: "wherever",
        position: {x: 243, y: 384}, 
        direction: 90,
        zoom: 7,
        runLength: 1000,
        interpolators: defaultInterpolators
    }, {
        name: "whereverPause",
        position: {x: 243, y: 388},
        direction: 90,
        zoom: 7,
        runLength: 2000,
        interpolators: noInterpolators
    },{
        name: "you",
        position: {x: 440, y: 368},
        direction: 180,
        zoom: 1.6,
        runLength: 2000,
        interpolators: defaultInterpolators
    },{
        name: "youPause",
        position: {x: 440, y: 368},
        direction: 180,
        zoom: 1.4,
        runLength: 2000,
        interpolators: noInterpolators
    }, {
        name: "go",
        position: {x: 389, y: 301},
        direction: 0,
        zoom: 14,
        runLength: 1000,
        interpolators: defaultInterpolators
    }, {
        name: "goPause",
        position: {x: 389, y: 301},
        direction: 0,
        zoom: 14.5,
        runLength: 2000,
        interpolators: noInterpolators
    }, {
        name: "there",
        position: {x: 534, y: 299},
        direction: 68,
        zoom: 7,
        runLength: 1000,
        interpolators: defaultInterpolators
    }, {
        name: "therePause",
        position: {x: 534, y: 299},
        direction: 68,
        zoom: 6,
        runLength: 3000,
        interpolators: noInterpolators
    }, {
        name: "you.2",
        position: {x: 440, y: 368},
        direction: 180,
        zoom: 1.5,
        runLength: 1000,
        interpolators: defaultInterpolators
    }, {
        name: "you.2Pause",
        position: {x: 440, y: 368},
        direction: 180,
        zoom: 1.2,
        runLength: 2000,
        interpolators: noInterpolators
    }, {
        name: "are",
        position: {x: 440, y: 368},
        direction: 90,
        zoom: 8,
        runLength: 3000,
        interpolators: defaultInterpolators
    }, {
        name: "are pause",
        position: {x: 440, y: 368},
        direction: 90,
        zoom: 8.5,
        runLength: 3000,
        interpolators: noInterpolators
    }, {
        name: "final",
        position: {x: 400, y: 368},
        direction: 0,
        zoom: 1.2,
        runLength: 3000,
        interpolators: {
            zoom: Easing.easeNone,
            direction: Easing.easeNone,
            position: Easing.easeNone
        }
    }, {
        name: "finalEnd",
        position: {x: 400, y: 380},
        direction: 0,
        zoom: 1,
        runLength: 500,
        interpolators: {
            zoom: Easing.easeNone,
            direction: Easing.easeNone,
            position: Easing.easeNone
        }
    }]);

    camera.on(Camera.events.segmentComplete, onSegmentComplete);

    // Create the final word transitions where the words move to their place
    Y.each(finalPositions, function (pos, p) {
        // At the end, animate from the position set at the begining to the
        // 'final' position, which is actuallly one with no transform on the
        // different elements.
        //
        // So we have to animate from:
        // translate(tx, ty).scale(s).rotate(r).translate(-cx,-cy)
        // to:
        // translate(cx, cy) scale(1).rotate(0).translate(-cx, -cy) // Identity
        e = Y.one("#" + p);
        bbox = e.getBBox();
        cx = bbox.x + bbox.width / 2;
        cy = bbox.y + bbox.height / 2;
        center = "translate(" + (-cx) + "," + (-cy) + ")";
        reposition = "translate(" + vbCx + "," + vbCy + ")";
        finalAnimations.push(new Animate({
                node: e,
                duration: pos.length,
                easing: Easing.easeNone,
                to: {
                    transform: {
                        tx: cx,
                        ty: cy,
                        sx: pos.scale,
                        sy: pos.scale,
                        r: pos.rotation
                    },
                    opacity: pos.opacity
                 },
                 transformTemplate: reposition +
                           "translate(#tx, #ty) " +
                           "scale(#sx, #sy) rotate(#r)" + center
            }));
        
    });

   camera.on(Camera.events.segmentComplete, function (event) {
       if (event.segment.name === "finalEnd") {
            Y.each(finalAnimations, function (anim) {
                anim.run();
            });
       }
    });

    // Start now
    cameraTarget.setStyle('visibility', 'visible');

    // Hide objects which should not show initially
     Y.one('#go').setStyle('display', 'none');
     Y.one("#there").setStyle('display', 'none');
     Y.one("#are").setStyle('display', 'none');
    
    camera.action();

};

    /**
     * Main entry point. Refer to the YUI documentation to understand how the
     * YUI framework loads scripts and handles dependencies.
     *
     * The following declares the modules required by the code (such as
     * 'anim-svg') and their dependencies.
     *
     * The onScriptsReady function is called when the DOM tree is ready.
     */
    YUI({
        groups: {
            svg: {
                combine: false,
                base: "../res/3.0/scripts/yui/",
                modules:  {
                    "node-svg": {
                        path: 'svg/node-svg-debug.js',
                        requires: ['node']
                    },
                    "dom-style-svg": {
                        path: 'svg/dom-style-svg-debug.js',
                        requires: ['node', 'dom-svg']
                    },
                    "dom-svg": {
                        path: 'svg/dom-svg-debug.js',
                        requires: ['dom']
                    },
                    "anim-timing": {
                        path: 'anim-timing/anim-timing-debug.js',
                        requires: ['anim', 'node-svg']
                    },
                    "anim-svg": {
                        path: 'svg/anim-svg-debug.js',
                        requires: ['anim', 'dom-style-svg']
                    },
                    "asset-loader": {
                        path: '../tools/asset-loader.js',
                        requires: ['node', 'audio-events']
                    },
                    'audio-events': {
                        path: 'audio/audio-events-debug.js',
                        requires: ['node', 'events']
                    }
                }
            },
            "utils-3.0": {
                combine: false,
                base: "../res/3.0/scripts/",
                modules: {
                    "camera": {
                        path: "tools/camera.js"
                    }
                }
            }
        },
        filter: 'debug'
        // timeout: 10000
    }).use('anim-svg', 'anim-timing', 'camera', 'asset-loader', function(Y) {
        Y.on('contentready', function () {
            // Load the demo's assets
            var loader = new sw.AssetLoader(), audio, ready = false;

            audio = loader.addAudioAsset("../res/3.0/audio/wherever",
                                         ["mp3", "ogg", "wav"]);

            loader.on('all-loaded', function () {
                ready = true;
                Y.one("#loading-message-text").set('textContent', 'click to start');
                loadDemo(Y, audio);
            });
            loader.on('error', function () {
                loadDemo(Y, undefined);
            });

            audio.on('progress', function (evt) {
                if (!ready) {
                    Y.one("#loading-message-text").set('textContent', 'audio loading');
                }
            });

            loader.loadQueuedAssets();
        }, 'body');
    });
    
})();