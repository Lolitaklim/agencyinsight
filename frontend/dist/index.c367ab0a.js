var e=globalThis,t={},r={},i=e.parcelRequire834e;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequire834e=i),(0,i.register)("jeq0d",function(e,t){Object.defineProperty(e.exports,"checkScreenWidthServices",{get:()=>n,set:void 0,enumerable:!0,configurable:!0});let r=document.querySelectorAll(".btnServices");function i(e){e.classList.toggle("active");let t=e.closest(".card").querySelector(".content");e.classList.toggle("expanded")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=null}function n(){window.innerWidth<670?r.forEach(e=>{e.disabled=!1,e.addEventListener("click",()=>i(e))}):r.forEach(e=>{e.disabled=!0,e.removeEventListener("click",()=>i(e))})}n()}),i("jeq0d");
//# sourceMappingURL=index.c367ab0a.js.map
