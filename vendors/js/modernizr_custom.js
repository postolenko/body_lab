/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-atobbtoa-audio-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-checked-cssanimations-csscalc-csscolumns-cssfilters-csstransforms-csstransforms3d-csstransitions-cssvhunit-displaytable-formvalidation-htmlimports-ie8compat-inlinesvg-nthchild-opacity-overflowscrolling-placeholder-rgba-sandbox-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-textshadow-userselect-video-webaudio-printshiv-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var d in x)if(x.hasOwnProperty(d)){if(e=[],t=x[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),T.push((o?"":"no-")+s.join("-"))}}function a(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?S.className.baseVal=t:S.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function d(e,t){if("object"==typeof e)for(var n in e)N(e,n)&&d(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),a([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(){var e=t.body;return e||(e=i(E?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var a,s,d,l,u="modernizr",f=i("div"),p=c();if(parseInt(r,10))for(;r--;)d=i("div"),d.id=o?o[r]:u+(r+1),f.appendChild(d);return a=i("style"),a.type="text/css",a.id="s"+u,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):f.parentNode.removeChild(f),!!s}function f(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?p(o,n||t):o);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(h(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+h(t[o])+":"+r+")");return a=a.join(" or "),u("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==s(e,null,"position")})}return n}function v(e,t,o,a){function s(){c&&(delete A.style,delete A.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var d=g(e,o);if(!r(d,"undefined"))return d}for(var c,u,p,m,h,v=["modernizr","tspan","samp"];!A.style&&v.length;)c=!0,A.modElem=i(v.shift()),A.style=A.modElem.style;for(p=e.length,u=0;p>u;u++)if(m=e[u],h=A.style[m],f(m,"-")&&(m=l(m)),A.style[m]!==n){if(a||r(o,"undefined"))return s(),"pfx"==t?m:!0;try{A.style[m]=o}catch(y){}if(A.style[m]!=h)return s(),"pfx"==t?m:!0}return s(),!1}function y(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+L.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,a):(s=(e+" "+R.join(i+" ")+i).split(" "),m(s,t,n))}function b(e,t,r){return y(e,n,n,t,r)}var T=[],x=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("webaudio",function(){var t="webkitAudioContext"in e,n="AudioContext"in e;return Modernizr._config.usePrefixes?t||n:n}),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var S=t.documentElement,E="svg"===S.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t)}function a(e){var t=S[e[x]];return t||(t={},w++,e[x]=w,S[w]=t),t}function i(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():T.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||b.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),d=s.length;d>i;i++)o.createElement(s[i]);return o}function d(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function l(e){e||(e=t);var r=a(e);return!E.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||d(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,a=RegExp("^(?:"+r().join("|")+")$","i"),i=[];o--;)t=n[o],a.test(t.nodeName)&&i.push(t.applyElement(u(t)));return i}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(k+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function f(e){for(var t,n=e.split("{"),o=n.length,a=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+k+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(a,i),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(i._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,i=a(e),s=e.namespaces,d=e.parentWindow;return!_||e.printShived?e:("undefined"==typeof s[k]&&s.add(k),d.attachEvent("onbeforeprint",function(){t();for(var a,i,s,d=e.styleSheets,l=[],u=d.length,p=Array(u);u--;)p[u]=d[u];for(;s=p.pop();)if(!s.disabled&&C.test(s.media)){try{a=s.imports,i=a.length}catch(m){i=0}for(u=0;i>u;u++)p.push(a[u]);try{l.push(s.cssText)}catch(m){}}l=f(l.reverse().join("")),o=c(e),r=n(e,l)}),d.attachEvent("onafterprint",function(){p(o),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,g,v="3.7.3",y=e.html5||{},b=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,T=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,x="_html5shiv",w=0,S={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,g=!0}}();var E={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:y.shivCSS!==!1,supportsUnknownElements:g,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:o};e.html5=E,l(t);var C=/^$|\b(?:all|print)\b/,k="html5shiv",_=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();E.type+=" print",E.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("audio",function(){var e=i("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("video",function(){var e=i("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webanimations","animate"in i("div")),Modernizr.addTest("bgpositionshorthand",function(){var e=i("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("placeholder","placeholder"in i("input")&&"placeholder"in i("textarea")),Modernizr.addTest("sandbox","sandbox"in i("iframe")),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var C=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=C,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=i("a");return n.style.cssText=e+C.join(t+e),!!n.style.length}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var k="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",k||_);var P={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var N;!function(){var e={}.hasOwnProperty;N=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=d}),d("htmlimports","import"in i("link")),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addTest("atobbtoa","atob"in e&&"btoa"in e,{aliases:["atob-btoa"]});var z=w.testStyles=u;Modernizr.addTest("checked",function(){return z("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=i("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),z("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2),z("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),z("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(s(t,null,"height"),10);Modernizr.addTest("cssvhunit",r==n)}),Modernizr.addTest("formvalidation",function(){var t=i("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',z("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r});var j="Moz O ms Webkit",L=w._config.usePrefixes?j.split(" "):[];w._cssomPrefixes=L;var M=function(t){var r,o=C.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var i=0;o>i;i++){var s=C[i],d=s.toUpperCase()+"_"+r;if(d in a)return"@-"+s.toLowerCase()+"-"+t}return!1};w.atRule=M;var R=w._config.usePrefixes?j.toLowerCase().split(" "):[];w._domPrefixes=R;var $={elem:i("modernizr")};Modernizr._q.push(function(){delete $.elem});var A={style:$.elem.style};Modernizr._q.unshift(function(){delete A.style});var B=w.testProp=function(e,t,r){return v([e],n,t,r)};Modernizr.addTest("textshadow",B("textShadow","1px 1px")),w.testAllProps=y,w.testAllProps=b,Modernizr.addTest("cssanimations",b("animationName","a",!0)),Modernizr.addTest("backgroundcliptext",function(){return b("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("borderimage",b("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",b("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",b("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=b("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return b("filter","blur(2px)");var e=i("a");return e.style.cssText=C.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("overflowscrolling",b("overflowScrolling","touch",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",b("transition","all",!0)),Modernizr.addTest("userselect",b("userSelect","none",!0));var F=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=l(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("backgroundblendmode",F("backgroundBlendMode","text")),o(),a(T),delete w.addTest,delete w.addAsyncTest;for(var V=0;V<Modernizr._q.length;V++)Modernizr._q[V]();e.Modernizr=Modernizr}(window,document);