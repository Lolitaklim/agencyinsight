const e=document.getElementById("carouselContainer"),n=e.innerHTML;e.innerHTML+=n;let t=0,r=null;requestAnimationFrame(function n(l){r||(r=l);let a=l-r;r=l,(t+=3*a/60)>=e.scrollWidth/2&&(t=0),e.style.transform=`translateX(-${t}px)`,requestAnimationFrame(n)});
//# sourceMappingURL=index.18c55a48.js.map
