(function(){var n=this,aa=function(a,b){var e=a.split("."),c=n;e[0]in c||!c.execScript||c.execScript("var "+e[0]);for(var d;e.length&&(d=e.shift());)e.length||void 0===b?c=c[d]?c[d]:c[d]={}:c[d]=b},ba=function(a,b,e){return a.call.apply(a.bind,arguments)},ca=function(a,b,e){if(!a)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,c);return a.apply(b,e)}}return function(){return a.apply(b,
arguments)}},p=function(a,b,e){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return p.apply(null,arguments)},da=function(a,b){var e=Array.prototype.slice.call(arguments,1);return function(){var b=e.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var v=(new Date).getTime();var w=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},x=function(a){return/^true$/.test(a)?!0:!1},ea=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,z=function(a,b){if(!a)return b;var e=a.match(ea);return e?e[0]:b};var fa=w("0.15"),ga=w("0.001"),ha=w("1.0"),ia=w("0.05"),ja=w("0.001"),ka=w("0.0"),la=w("0.001"),ma=w("0.2");var na=x("false"),oa=x("false"),pa=x("false"),qa=x("false");var ra=function(){return z("","pagead2.googlesyndication.com")};var sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,B={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},C={"'":"\\'"};var D=document,E=window,G,xa=null,H=D.getElementsByTagName("script");H&&H.length&&(xa=H[H.length-1]);G=xa;ra();var I=function(a,b){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&b.call(null,a[e],e,a)},J=function(a){return!!a&&"function"==typeof a&&!!a.call},ya=function(a,b){if(!(2>arguments.length))for(var e=1,c=arguments.length;e<c;++e)a.push(arguments[e])};function za(a,b){K(a,"load",b)}
var K=function(a,b,e,c){return a.addEventListener?(a.addEventListener(b,e,c||!1),!0):a.attachEvent?(a.attachEvent("on"+b,e),!0):!1},L=function(a,b,e,c){e=p(c,e);return K(a,b,e,void 0)?e:null},M=function(a,b,e){a.removeEventListener?a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)},Aa=function(){var a=window;"google_onload_fired"in a||(a.google_onload_fired=!1,za(a,function(){a.google_onload_fired=!0}))},N=function(a,b){if(!(1E-4>Math.random())){var e=Math.random();if(e<b){try{var c=
new Uint16Array(1);window.crypto.getRandomValues(c);e=c[0]/65536}catch(d){e=Math.random()}return a[Math.floor(e*a.length)]}}return null},Ba=function(a){for(var b=[],e=0;a&&25>e;++e){var c=9!=a.nodeType&&a.id,c=c?"/"+c:"",d;o:{var f=a.parentElement;d=a.nodeName.toLowerCase();if(f)for(var f=f.childNodes,g=0,l=0;l<f.length;++l){var h=f[l];if(h.nodeName&&h.nodeName.toLowerCase()==d){if(a==h){d="."+g;break o}++g}}d=""}b.push((a.nodeName&&a.nodeName.toLowerCase())+c+d);a=a.parentElement}return b.join()},
Ca=function(){var a=E,b=[];if(a)try{for(var e=a.parent,c=0;e&&e!=a&&25>c;++c){for(var d=e.frames,f=0;f<d.length;++f)if(a==d[f]){b.push(f);break}a=e;e=a.parent}}catch(g){}return b.join()},Da=function(a,b,e){b=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];if(e){e=[];for(var c=0;a&&25>c;a=a.parentNode,++c)e.push(9!=a.nodeType&&a.id||"");(a=e.join())&&b.push(a)}else b.push(Ba(a)),b.push(Ca());b=b.join(":");a=b.length;if(0==a)b=0;else{e=305419896;for(c=0;c<
a;c++)e^=(e<<5)+(e>>2)+b.charCodeAt(c)&4294967295;b=0<e?e:4294967296+e}return b.toString()},O=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return!1}};var Ea=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Fa=/Android/;var P=null,Ga=function(){if(!P){for(var a=window,b=a,e=0;a!=a.parent;)if(a=a.parent,e++,O(a))b=a;else break;P=b}return P};var Ha=function(a,b,e){e||(e=qa?"https":"http");return[e,"://",a,b].join("")};var Ia=function(){},Ka=function(a,b,e){switch(typeof b){case "string":Ja(b,e);break;case "number":e.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":e.push(b);break;case "undefined":e.push("null");break;case "object":if(null==b){e.push("null");break}if(b instanceof Array){var c=b.length;e.push("[");for(var d="",f=0;f<c;f++)e.push(d),Ka(a,b[f],e),d=",";e.push("]");break}e.push("{");c="";for(d in b)b.hasOwnProperty(d)&&(f=b[d],"function"!=typeof f&&(e.push(c),Ja(d,e),e.push(":"),Ka(a,f,e),
c=","));e.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},La={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ma=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ja=function(a,b){b.push('"');b.push(a.replace(Ma,function(a){if(a in La)return La[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return La[a]=d+b.toString(16)}));b.push('"')};var Q="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_bid google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_num_slots_to_rotate google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_previous_watch google_previous_searches google_referrer_url google_region google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Na=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];I(a,function(a,c){if(null!=a){var d;try{var f=[];Ka(new Ia,a,f);d=f.join("")}catch(g){}d&&ya(b,c,"=",d,";")}});return b.join("")};var Oa=/\.((google(|groups|mail|images|print))|gmail)\./,Pa=function(a){try{var b=Oa.test(a.location.host);return!(!a.postMessage||!a.localStorage||!a.JSON||b)}catch(e){return!1}};var R=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.n,this)});this.l=a.google_iframe_oncopy},Qa;var S="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[&<>"']/.test(S)&&(-1!=S.indexOf("&")&&(S=S.replace(sa,"&amp;")),-1!=S.indexOf("<")&&(S=S.replace(ta,"&lt;")),-1!=S.indexOf(">")&&(S=S.replace(ua,"&gt;")),-1!=S.indexOf('"')&&(S=S.replace(va,"&quot;")),-1!=S.indexOf("'")&&(S=S.replace(wa,"&#39;")));Qa=S;R.prototype.set=function(a,b){this.l.handlers[a]=b;this.b.addEventListener&&this.b.addEventListener("load",p(this.m,this,a),!1)};
R.prototype.m=function(a){a=this.b.document.getElementById(a);var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};R.prototype.n=function(a,b){var e=Ra("rs",a),c;o:{if(a&&(c=a.match("dt=([^&]+)"))&&2==c.length){c=c[1];break o}c=""}c=(new Date).getTime()-c;e=e.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>c?c+"":"M"));this.set(b,e);return e};var Ra=function(a,b){var e=RegExp("\\b"+a+"=(\\d+)"),c=e.exec(b);c&&(b=b.replace(e,a+"="+(+c[1]+1||1)));return b};var T,U,V,Sa,Ta=function(){return n.navigator?n.navigator.userAgent:null};Sa=V=U=T=!1;var W;if(W=Ta()){var Ua=n.navigator;T=0==W.lastIndexOf("Opera",0);U=!T&&(-1!=W.indexOf("MSIE")||-1!=W.indexOf("Trident"));V=!T&&-1!=W.indexOf("WebKit");Sa=!T&&!V&&!U&&"Gecko"==Ua.product}var Va=U,Wa=Sa,Xa=V;var X;if(T&&n.opera){var Ya=n.opera.version;"function"==typeof Ya&&Ya()}else Wa?X=/rv\:([^\);]+)(\)|;)/:Va?X=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(X=/WebKit\/(\S+)/),X&&X.exec(Ta());var Za={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",zrtm:"google_ad_handling_mode",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment"},ab=function(a,b,e,c){var d;try{d=e()}catch(f){e=!pa;try{var g=f.toString();f.name&&-1==g.indexOf(f.name)&&(g+=": "+f.name);f.message&&-1==g.indexOf(f.message)&&(g+=": "+f.message);if(f.stack){var l=f.stack,
h=g;try{-1==l.indexOf(h)&&(l=h+"\n"+l);for(var k;l!=k;)k=l,l=l.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");g=l.replace(/\n */g,"\n")}catch(m){g=h}}l="";f.fileName&&(l=f.fileName);k=-1;f.lineNumber&&(k=f.lineNumber);var q;o:{try{q=c?c():"";break o}catch(F){}q=""}e=b(a,g,l,k,q)}catch(t){$a({context:"protectAndRun",msg:t.toString()+"\n"+(t.stack||"")})}if(!e)throw f;}return d};aa("google_protectAndRun",ab);
var cb=function(a,b,e,c,d){a={jscb:na?1:0,jscd:oa?1:0,context:a,msg:b.substring(0,512),eid:d&&d.substring(0,40),file:e,line:c.toString(),url:D.URL.substring(0,512),ref:D.referrer.substring(0,512)};bb(a);$a(a);return!pa};aa("google_handleError",cb);
var $a=function(a){if(0.01>Math.random()){a="/pagead/gen_204?id=jserror"+db(a);a=Ha(z("","pagead2.googlesyndication.com"),a);a=a.substring(0,2E3);E.google_image_requests||(E.google_image_requests=[]);var b=E.document.createElement("img");b.src=a;E.google_image_requests.push(b)}},bb=function(a){var b=a||{};I(Za,function(a,c){b[c]=E[a]})},eb=function(a,b){return da(ab,a,cb,b,void 0)},db=function(a){var b="";I(a,function(a,c){if(0===a||a)b+="&"+c+"="+("function"==typeof encodeURIComponent?
encodeURIComponent(a):escape(a))});return b};var Y,Z=function(a){this.c=[];this.b=a||window;this.a=0;this.d=null},fb=function(a,b){this.k=a;this.win=b};Z.prototype.p=function(a,b){0!=this.a||0!=this.c.length||b&&b!=window?this.g(a,b):(this.a=2,this.f(new fb(a,window)))};Z.prototype.g=function(a,b){this.c.push(new fb(a,b||this.b));gb(this)};Z.prototype.q=function(a){this.a=1;if(a){var b=eb("sjr::timeout",p(this.e,this));this.d=this.b.setTimeout(b,a)}};
Z.prototype.e=function(){1==this.a&&(null!=this.d&&(this.b.clearTimeout(this.d),this.d=null),this.a=0);gb(this)};Z.prototype.r=function(){return!(!window||!Array)};Z.prototype.nq=Z.prototype.p;Z.prototype.nqa=Z.prototype.g;Z.prototype.al=Z.prototype.q;Z.prototype.rl=Z.prototype.e;Z.prototype.sz=Z.prototype.r;var gb=function(a){var b=eb("sjr::tryrun",p(a.o,a));a.b.setTimeout(b,0)};
Z.prototype.o=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;var b=eb("sjr::run",p(this.f,this,a));a.win.setTimeout(b,0);gb(this)}};Z.prototype.f=function(a){this.a=0;a.k()};
var hb=function(a){try{return a.sz()}catch(b){return!1}},ib=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&hb(a)&&J(a.nq)&&J(a.nqa)&&J(a.al)&&J(a.rl)},jb=function(){if(Y&&hb(Y))return Y;var a=Ga(),b=a.google_jobrunner;return ib(b)?Y=b:a.google_jobrunner=Y=new Z(a)},kb=function(a,b){jb().nq(a,b)},lb=function(a,b){jb().nqa(a,b)};var mb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0},nb=function(){var a="script";return["<",a,' src="',Ha(ra(),"/pagead/js/r20131203/r20131125/show_ads_impl.js",""),'"></',a,">"].join("")},ob=function(a,b,e,c){return function(){var d=!1;c&&jb().al(3E4);try{if(O(a.document.getElementById(b).contentWindow)){var f=a.document.getElementById(b).contentWindow,
g=f.document;g.body&&g.body.firstChild||(g.open(),f.google_async_iframe_close=!0,g.write(e))}else{var l=a.document.getElementById(b).contentWindow,h;f=e;f=String(f);if(f.quote)h=f.quote();else{for(var g=['"'],k=0;k<f.length;k++){var m=f.charAt(k),q=m.charCodeAt(0),F=g,t=k+1,y;if(!(y=B[m])){var r;if(31<q&&127>q)r=m;else{var u=m;if(u in C)r=C[u];else if(u in B)r=C[u]=B[u];else{var s=u,A=u.charCodeAt(0);if(31<A&&127>A)s=u;else{if(256>A){if(s="\\x",16>A||256<A)s+="0"}else s="\\u",4096>A&&(s+="0");s+=
A.toString(16).toUpperCase()}r=C[u]=s}}y=r}F[t]=y}g.push('"');h=g.join("")}l.location.replace("javascript:"+h)}d=!0}catch(yb){l=Ga().google_jobrunner,ib(l)&&l.rl()}d&&(d=Ra("google_async_rrc",e),(new R(a)).set(b,ob(a,b,d,!1)))}},pb=function(a){var b=["<iframe"];I(a,function(a,c){null!=a&&b.push(" "+c+'="'+a+'"')});b.push("></iframe>");return b.join("")},qb=function(a,b,e,c){c=c?'"':"";var d=c+"0"+c;a.width=c+b+c;a.height=c+e+c;a.frameborder=d;a.marginwidth=d;a.marginheight=d;a.vspace=d;a.hspace=d;
a.allowtransparency=c+"true"+c;a.scrolling=c+"no"+c},rb=function(a,b){var e=a.google_ad_output,c=a.google_ad_format;c||"html"!=e&&null!=e||(c=a.google_ad_width+"x"+a.google_ad_height,b&&(c+="_as"));e=!a.google_ad_slot||a.google_override_format||!mb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used;c=c&&e?c.toLowerCase():"";a.google_ad_format=c;a.google_ad_unit_key=Da(G.parentElement,a,!0);c=window.google_adk2_experiment=window.google_adk2_experiment||N(["C","E"],la)||"N";"E"==
c?a.google_ad_unit_key_2=Da(G,a):"C"==c&&(a.google_ad_unit_key_2="ctrl")},sb=Math.floor(1E6*Math.random()),tb=function(a){for(var b=a.data.split("\n"),e={},c=0;c<b.length;c++){var d=b[c].indexOf("=");-1!=d&&(e[b[c].substr(0,d)]=b[c].substr(d+1))}b=e[3];if(e[1]==sb&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=e,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();
window.google_top_js_callbacks.length=0}};var ub=function(a,b,e){this.x=a;this.y=b;this.z=e},vb=function(a,b,e){this.beta=a;this.gamma=b;this.alpha=e},wb=function(a,b){this.deviceAccelerationWithGravity=this.deviceAccelerationWithoutGravity=null;this.deviceMotionEventCallbacks=[];this.deviceOrientation=null;this.deviceOrientationEventCallbacks=[];this.isDeviceOrientationEventListenerRegistered=this.isDeviceMotionEventListenerRegistered=this.didDeviceOrientationCallbacksTimeoutExpire=this.didDeviceMotionCallbacksTimeoutExpire=!1;this.registeredMozOrientationEventListener=
this.registeredDeviceOrientationEventListener=this.registeredDeviceMotionEventListener=null;this.sensorsExperiment=b;this.stopTimeStamp=this.startTimeStamp=null;this.win=a},$=function(a){this.a=a;this.a.win.DeviceOrientationEvent?(this.a.registeredDeviceOrientationEventListener=L(this.a.win,"deviceorientation",this,this.i),this.a.isDeviceOrientationEventListenerRegistered=!0):this.a.win.OrientationEvent&&(this.a.registeredMozOrientationEventListener=L(this.a.win,"MozOrientation",this,this.j),this.a.isDeviceOrientationEventListenerRegistered=
!0);this.a.win.DeviceMotionEvent&&(this.a.registeredDeviceMotionEventListener=L(this.a.win,"devicemotion",this,this.h),this.a.isDeviceMotionEventListenerRegistered=!0)};
$.prototype.h=function(a){a.acceleration&&(this.a.deviceAccelerationWithoutGravity=new ub(a.acceleration.x,a.acceleration.y,a.acceleration.z));a.accelerationIncludingGravity&&(this.a.deviceAccelerationWithGravity=new ub(a.accelerationIncludingGravity.x,a.accelerationIncludingGravity.y,a.accelerationIncludingGravity.z));xb(this.a.deviceMotionEventCallbacks);M(this.a.win,"devicemotion",this.a.registeredDeviceMotionEventListener)};
$.prototype.i=function(a){this.a.deviceOrientation=new vb(a.beta,a.gamma,a.alpha);xb(this.a.deviceOrientationEventCallbacks);M(this.a.win,"deviceorientation",this.a.registeredDeviceOrientationEventListener)};$.prototype.j=function(a){this.a.deviceOrientation=new vb(-90*a.y,90*a.x,null);xb(this.a.deviceOrientationEventCallbacks);M(this.a.win,"MozOrientation",this.a.registeredMozOrientationEventListener)};var xb=function(a){for(var b=0;b<a.length;++b)a[b]();a.length=0};ab("sa::main",cb,function(){Aa();if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:O(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=E.top.frames.google_top_static_frame?!0:!1}catch(e){b=!1}if(b){if(window.google_top_experiment=N(["jp_c","jp_zl","jp_wfpmr"],fa),"jp_c"!==window.google_top_experiment){K(window,"message",tb);window.google_top_js_status=3;a={0:"google_loc_request",1:sb};b=[];for(var c in a)b.push(c+"="+a[c]);
top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}var d;d=d||window;c=!1;d&&d.navigator&&d.navigator.userAgent&&(d=d.navigator.userAgent,c=0!=d.indexOf("Opera")&&-1!=d.indexOf("WebKit")&&-1!=d.indexOf("Mobile"));if(c){d=window;if(c=!/Android/.test(d.navigator.userAgent))c=d.google_unique_id,c=0==("number"==typeof c?c:0)&&!d.google_sensors;c&&(c=null,d.google_top_experiment&&"jp_c"!=d.google_top_experiment||(c=N(["ds_c","ds_zl","ds_wfea"],ka)),
c&&(d.google_sensors=new wb(d,c),"ds_c"!=c&&new $(d.google_sensors)))}d=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||d&&"html"!=d||(window.google_always_use_delayed_impressions_experiment=N(["C","E"],ja));(d=!1===window.google_enable_async)||(d=navigator.userAgent,Ea.test(d)?d=!1:(void 0!==window.google_async_for_oa_experiment||!Fa.test(navigator.userAgent)||Ea.test(navigator.userAgent)||(window.google_async_for_oa_experiment=N(["E","C"],ia)),d=Fa.test(d)?
"E"===window.google_async_for_oa_experiment:!0),d=!d||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output);if(d)window.google_loader_used="sb",window.google_start_time=v,rb(window),document.write(nb());else{d=window;d.google_unique_id?++d.google_unique_id:d.google_unique_id=1;d=window;c={};a=0;for(b=Q.length;a<b;a++){var f=Q[a];null!=d[f]&&(c[f]=d[f])}c.google_loader_used="sa";a=0;for(b=Q.length;a<b;a++)d[Q[a]]=null;a=c.google_ad_width;b=c.google_ad_height;f={};qb(f,
a,b,!0);f.onload='"'+Qa+'"';for(var g,l=d.document,h=f.id,k=0;!h||l.getElementById(h);)h="aswift_"+k++;f.id=h;f.name=h;var k=c.google_ad_width,m=c.google_ad_height,h=["<iframe"];for(g in f)f.hasOwnProperty(g)&&ya(h,g+"="+f[g]);h.push('style="left:0;position:absolute;top:0;"');h.push("></iframe>");g="border:none;height:"+m+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+k+"px;background-color:transparent";l.write(['<ins style="display:inline-table;',g,'"><ins id="',f.id+"_anchor",
'" style="display:block;',g,'">',h.join(" "),"</ins></ins>"].join(""));g=f.id;f=window.google_override_format||!mb[window.google_ad_width+"x"+window.google_ad_height]&&"aa"==window.google_loader_used?N(["c","e"],ma):null;rb(c,"e"==f);l=Na(c);h=Pa(d);k=d.document;k=3==({visible:1,hidden:2,prerender:3,preview:4}[k.webkitVisibilityState||k.mozVisibilityState||k.visibilityState||""]||0);h&&!k&&void 0===d.google_ad_handling_mode&&(d.google_ad_handling_mode=N(["XN","AZ","S"],ga)||N(["EI"],ha));h=d.google_ad_handling_mode?
String(d.google_ad_handling_mode):null;if(Pa(d)&&1==d.google_unique_id&&"XN"!=h&&"S"!=h){k="zrt_ads_frame"+d.google_unique_id;m=c.google_page_url;if(!m){e:{var m=d.document,q=a||d.google_ad_width,F=b||d.google_ad_height;if(d.top==d)m=!1;else{var t=m.documentElement;if(q&&F){var y=1,r=1;d.innerHeight?(y=d.innerWidth,r=d.innerHeight):t&&t.clientHeight?(y=t.clientWidth,r=t.clientHeight):m.body&&(y=m.body.clientWidth,r=m.body.clientHeight);if(r>2*F||y>2*q){m=!1;break e}}m=!0}}m=m?d.document.referrer:
d.document.URL}m=encodeURIComponent(m);q=null;if("PC"==h||"EI"==h||"AZ"==h){switch(h){case "EI":q="I";break;case "AZ":q="Z";break;default:q="K"}q=q+"-"+(m+"/"+c.google_ad_unit_key+"/"+d.google_unique_id)}c={};qb(c,a,b,!1);c.style="display:none";a=q;c.id=k;c.name=k;a=Ha(z("","googleads.g.doubleclick.net"),["/pagead/html/r20131203/r20131125/zrt_lookup.html",a?"#"+encodeURIComponent(a):""].join(""));
c.src=a;c=pb(c)}else c=null;a=(new Date).getTime();b=d.google_top_experiment;k=d.google_async_for_oa_experiment;m=d.google_always_use_delayed_impressions_experiment;c=["<!doctype html><html><body>",c,"<script>",l,"google_show_ads_impl=true;google_unique_id=",d.google_unique_id,';google_async_iframe_id="',g,'";google_start_time=',v,";",b?'google_top_experiment="'+b+'";':"",h?'google_ad_handling_mode="'+h+'";':"",k?'google_async_for_oa_experiment="'+k+'";':"",m?'google_always_use_delayed_impressions_experiment="'+
m+'";':"",f?'google_append_as_for_format_override="'+f+'";':"","google_bpp=",a>v?a-v:1,";google_async_rrc=0;\x3c/script>",nb(),"</body></html>"].join("");(d.document.getElementById(g)?kb:lb)(ob(d,g,c,!0))}});})();
