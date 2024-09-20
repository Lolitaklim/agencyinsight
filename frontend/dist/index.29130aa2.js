// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7UyxY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b117ad9c29130aa2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1H72b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _coreJs = require("typewriter-effect/dist/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
new (0, _coreJsDefault.default)("#typewriter", {
    strings: [
        "\u0440\u0435\u0448\u0435\u043D\u0438\u044F",
        "\u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438",
        "\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438",
        "\u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438",
        "\u043F\u0440\u043E\u0440\u044B\u0432",
        "\u0443\u0441\u043F\u0435\u0445"
    ],
    autoStart: true,
    loop: true
});

},{"typewriter-effect/dist/core.js":"gppl0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gppl0":[function(require,module,exports) {
var process = require("ec6f68100f91676a");
!function(e, t) {
    module.exports = t();
}("undefined" != typeof self ? self : this, ()=>(()=>{
        var e = {
            75: function(e) {
                (function() {
                    var t, n, r, o, a, i;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now();
                    } : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                        return (t() - a) / 1e6;
                    }, n = process.hrtime, o = (t = function() {
                        var e;
                        return 1e9 * (e = n())[0] + e[1];
                    })(), i = 1e9 * process.uptime(), a = o - i) : Date.now ? (e.exports = function() {
                        return Date.now() - r;
                    }, r = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - r;
                    }, r = (new Date).getTime());
                }).call(this);
            },
            4087: (e, t, n)=>{
                for(var r = n(75), o = "undefined" == typeof window ? n.g : window, a = [
                    "moz",
                    "webkit"
                ], i = "AnimationFrame", s = o["request" + i], u = o["cancel" + i] || o["cancelRequest" + i], l = 0; !s && l < a.length; l++)s = o[a[l] + "Request" + i], u = o[a[l] + "Cancel" + i] || o[a[l] + "CancelRequest" + i];
                if (!s || !u) {
                    var c = 0, p = 0, d = [];
                    s = function(e) {
                        if (0 === d.length) {
                            var t = r(), n = Math.max(0, 16.666666666666668 - (t - c));
                            c = n + t, setTimeout(function() {
                                var e = d.slice(0);
                                d.length = 0;
                                for(var t = 0; t < e.length; t++)if (!e[t].cancelled) try {
                                    e[t].callback(c);
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e;
                                    }, 0);
                                }
                            }, Math.round(n));
                        }
                        return d.push({
                            handle: ++p,
                            callback: e,
                            cancelled: !1
                        }), p;
                    }, u = function(e) {
                        for(var t = 0; t < d.length; t++)d[t].handle === e && (d[t].cancelled = !0);
                    };
                }
                e.exports = function(e) {
                    return s.call(o, e);
                }, e.exports.cancel = function() {
                    u.apply(o, arguments);
                }, e.exports.polyfill = function(e) {
                    e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = u;
                };
            }
        }, t = {};
        function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var a = t[r] = {
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.exports;
        }
        n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var r in t)n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t);
        var r = {};
        return (()=>{
            "use strict";
            n.d(r, {
                default: ()=>C
            });
            var e = n(4087), t = n.n(e);
            const o = function(e) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(e);
            }, a = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            };
            var i = "TYPE_CHARACTER", s = "REMOVE_CHARACTER", u = "REMOVE_ALL", l = "REMOVE_LAST_VISIBLE_NODE", c = "PAUSE_FOR", p = "CALL_FUNCTION", d = "ADD_HTML_TAG_ELEMENT", f = "CHANGE_DELETE_SPEED", v = "CHANGE_DELAY", h = "CHANGE_CURSOR", m = "PASTE_STRING", y = "HTML_TAG";
            function g(e) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, g(e);
            }
            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function w(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach(function(t) {
                        A(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return T(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            }
            function S(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, N(r.key), r);
                }
            }
            function A(e, t, n) {
                return (t = N(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function N(e) {
                var t = function(e, t) {
                    if ("object" !== g(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" !== g(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" === g(t) ? t : String(t);
            }
            const C = function() {
                function n(r, g) {
                    var E = this;
                    if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, n), A(this, "state", {
                        cursorAnimation: null,
                        lastFrameTime: null,
                        pauseUntil: null,
                        eventQueue: [],
                        eventLoop: null,
                        eventLoopPaused: !1,
                        reverseCalledEvents: [],
                        calledEvents: [],
                        visibleNodes: [],
                        initialOptions: null,
                        elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span")
                        }
                    }), A(this, "options", {
                        strings: null,
                        cursor: "|",
                        delay: "natural",
                        pauseFor: 1500,
                        deleteSpeed: "natural",
                        loop: !1,
                        autoStart: !1,
                        devMode: !1,
                        skipAddStyles: !1,
                        wrapperClassName: "Typewriter__wrapper",
                        cursorClassName: "Typewriter__cursor",
                        stringSplitter: null,
                        onCreateTextNode: null,
                        onRemoveNode: null
                    }), A(this, "setupWrapperElement", function() {
                        E.state.elements.container && (E.state.elements.wrapper.className = E.options.wrapperClassName, E.state.elements.cursor.className = E.options.cursorClassName, E.state.elements.cursor.innerHTML = E.options.cursor, E.state.elements.container.innerHTML = "", E.state.elements.container.appendChild(E.state.elements.wrapper), E.state.elements.container.appendChild(E.state.elements.cursor));
                    }), A(this, "start", function() {
                        return E.state.eventLoopPaused = !1, E.runEventLoop(), E;
                    }), A(this, "pause", function() {
                        return E.state.eventLoopPaused = !0, E;
                    }), A(this, "stop", function() {
                        return E.state.eventLoop && ((0, e.cancel)(E.state.eventLoop), E.state.eventLoop = null), E;
                    }), A(this, "pauseFor", function(e) {
                        return E.addEventToQueue(c, {
                            ms: e
                        }), E;
                    }), A(this, "typeOutAllStrings", function() {
                        return "string" == typeof E.options.strings ? (E.typeString(E.options.strings).pauseFor(E.options.pauseFor), E) : (E.options.strings.forEach(function(e) {
                            E.typeString(e).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed);
                        }), E);
                    }), A(this, "typeString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (o(e)) return E.typeOutHTMLString(e, t);
                        if (e) {
                            var n = (E.options || {}).stringSplitter, r = "function" == typeof n ? n(e) : e.split("");
                            E.typeCharacters(r, t);
                        }
                        return E;
                    }), A(this, "pasteString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return o(e) ? E.typeOutHTMLString(e, t, !0) : (e && E.addEventToQueue(m, {
                            character: e,
                            node: t
                        }), E);
                    }), A(this, "typeOutHTMLString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0, r = function(e) {
                            var t = document.createElement("div");
                            return t.innerHTML = e, t.childNodes;
                        }(e);
                        if (r.length > 0) for(var o = 0; o < r.length; o++){
                            var a = r[o], i = a.innerHTML;
                            a && 3 !== a.nodeType ? (a.innerHTML = "", E.addEventToQueue(d, {
                                node: a,
                                parentNode: t
                            }), n ? E.pasteString(i, a) : E.typeString(i, a)) : a.textContent && (n ? E.pasteString(a.textContent, t) : E.typeString(a.textContent, t));
                        }
                        return E;
                    }), A(this, "deleteAll", function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                        return E.addEventToQueue(u, {
                            speed: e
                        }), E;
                    }), A(this, "changeDeleteSpeed", function(e) {
                        if (!e) throw new Error("Must provide new delete speed");
                        return E.addEventToQueue(f, {
                            speed: e
                        }), E;
                    }), A(this, "changeDelay", function(e) {
                        if (!e) throw new Error("Must provide new delay");
                        return E.addEventToQueue(v, {
                            delay: e
                        }), E;
                    }), A(this, "changeCursor", function(e) {
                        if (!e) throw new Error("Must provide new cursor");
                        return E.addEventToQueue(h, {
                            cursor: e
                        }), E;
                    }), A(this, "deleteChars", function(e) {
                        if (!e) throw new Error("Must provide amount of characters to delete");
                        for(var t = 0; t < e; t++)E.addEventToQueue(s);
                        return E;
                    }), A(this, "callFunction", function(e, t) {
                        if (!e || "function" != typeof e) throw new Error("Callback must be a function");
                        return E.addEventToQueue(p, {
                            cb: e,
                            thisArg: t
                        }), E;
                    }), A(this, "typeCharacters", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach(function(e) {
                            E.addEventToQueue(i, {
                                character: e,
                                node: t
                            });
                        }), E;
                    }), A(this, "removeCharacters", function(e) {
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach(function() {
                            E.addEventToQueue(s);
                        }), E;
                    }), A(this, "addEventToQueue", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return E.addEventToStateProperty(e, t, n, "eventQueue");
                    }), A(this, "addReverseCalledEvent", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return E.options.loop ? E.addEventToStateProperty(e, t, n, "reverseCalledEvents") : E;
                    }), A(this, "addEventToStateProperty", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = arguments.length > 3 ? arguments[3] : void 0, o = {
                            eventName: e,
                            eventArgs: t || {}
                        };
                        return E.state[r] = n ? [
                            o
                        ].concat(b(E.state[r])) : [].concat(b(E.state[r]), [
                            o
                        ]), E;
                    }), A(this, "runEventLoop", function() {
                        E.state.lastFrameTime || (E.state.lastFrameTime = Date.now());
                        var e = Date.now(), n = e - E.state.lastFrameTime;
                        if (!E.state.eventQueue.length) {
                            if (!E.options.loop) return;
                            E.state.eventQueue = b(E.state.calledEvents), E.state.calledEvents = [], E.options = w({}, E.state.initialOptions);
                        }
                        if (E.state.eventLoop = t()(E.runEventLoop), !E.state.eventLoopPaused) {
                            if (E.state.pauseUntil) {
                                if (e < E.state.pauseUntil) return;
                                E.state.pauseUntil = null;
                            }
                            var r, o = b(E.state.eventQueue), g = o.shift();
                            if (!(n <= (r = g.eventName === l || g.eventName === s ? "natural" === E.options.deleteSpeed ? a(40, 80) : E.options.deleteSpeed : "natural" === E.options.delay ? a(120, 160) : E.options.delay))) {
                                var T = g.eventName, S = g.eventArgs;
                                switch(E.logInDevMode({
                                    currentEvent: g,
                                    state: E.state,
                                    delay: r
                                }), T){
                                    case m:
                                    case i:
                                        var A = S.character, N = S.node, C = document.createTextNode(A), _ = C;
                                        E.options.onCreateTextNode && "function" == typeof E.options.onCreateTextNode && (_ = E.options.onCreateTextNode(A, C)), _ && (N ? N.appendChild(_) : E.state.elements.wrapper.appendChild(_)), E.state.visibleNodes = [].concat(b(E.state.visibleNodes), [
                                            {
                                                type: "TEXT_NODE",
                                                character: A,
                                                node: _
                                            }
                                        ]);
                                        break;
                                    case s:
                                        o.unshift({
                                            eventName: l,
                                            eventArgs: {
                                                removingCharacterNode: !0
                                            }
                                        });
                                        break;
                                    case c:
                                        var O = g.eventArgs.ms;
                                        E.state.pauseUntil = Date.now() + parseInt(O);
                                        break;
                                    case p:
                                        var L = g.eventArgs, D = L.cb, M = L.thisArg;
                                        D.call(M, {
                                            elements: E.state.elements
                                        });
                                        break;
                                    case d:
                                        var x = g.eventArgs, P = x.node, j = x.parentNode;
                                        j ? j.appendChild(P) : E.state.elements.wrapper.appendChild(P), E.state.visibleNodes = [].concat(b(E.state.visibleNodes), [
                                            {
                                                type: y,
                                                node: P,
                                                parentNode: j || E.state.elements.wrapper
                                            }
                                        ]);
                                        break;
                                    case u:
                                        var R = E.state.visibleNodes, k = S.speed, Q = [];
                                        k && Q.push({
                                            eventName: f,
                                            eventArgs: {
                                                speed: k,
                                                temp: !0
                                            }
                                        });
                                        for(var F = 0, H = R.length; F < H; F++)Q.push({
                                            eventName: l,
                                            eventArgs: {
                                                removingCharacterNode: !1
                                            }
                                        });
                                        k && Q.push({
                                            eventName: f,
                                            eventArgs: {
                                                speed: E.options.deleteSpeed,
                                                temp: !0
                                            }
                                        }), o.unshift.apply(o, Q);
                                        break;
                                    case l:
                                        var I = g.eventArgs.removingCharacterNode;
                                        if (E.state.visibleNodes.length) {
                                            var U = E.state.visibleNodes.pop(), q = U.type, G = U.node, Y = U.character;
                                            E.options.onRemoveNode && "function" == typeof E.options.onRemoveNode && E.options.onRemoveNode({
                                                node: G,
                                                character: Y
                                            }), G && G.parentNode.removeChild(G), q === y && I && o.unshift({
                                                eventName: l,
                                                eventArgs: {}
                                            });
                                        }
                                        break;
                                    case f:
                                        E.options.deleteSpeed = g.eventArgs.speed;
                                        break;
                                    case v:
                                        E.options.delay = g.eventArgs.delay;
                                        break;
                                    case h:
                                        E.options.cursor = g.eventArgs.cursor, E.state.elements.cursor.innerHTML = g.eventArgs.cursor;
                                }
                                E.options.loop && (g.eventName === l || g.eventArgs && g.eventArgs.temp || (E.state.calledEvents = [].concat(b(E.state.calledEvents), [
                                    g
                                ]))), E.state.eventQueue = o, E.state.lastFrameTime = e;
                            }
                        }
                    }), r) {
                        if ("string" == typeof r) {
                            var T = document.querySelector(r);
                            if (!T) throw new Error("Could not find container element");
                            this.state.elements.container = T;
                        } else this.state.elements.container = r;
                    }
                    g && (this.options = w(w({}, this.options), g)), this.state.initialOptions = w({}, this.options), this.init();
                }
                var r, g;
                return r = n, g = [
                    {
                        key: "init",
                        value: function() {
                            var e, t;
                            this.setupWrapperElement(), this.addEventToQueue(h, {
                                cursor: this.options.cursor
                            }, !0), this.addEventToQueue(u, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t = document.createElement("style")).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                        }
                    },
                    {
                        key: "logInDevMode",
                        value: function(e) {
                            this.options.devMode && console.log(e);
                        }
                    }
                ], S(r.prototype, g), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), n;
            }();
        })(), r.default;
    })());

},{"ec6f68100f91676a":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7UyxY","1H72b"], "1H72b", "parcelRequire834e")

//# sourceMappingURL=index.29130aa2.js.map
