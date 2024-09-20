const e=document.getElementById("casesContainer"),t=document.getElementById("categoriesContainer"),a="http://localhost:8080",i={},n=(e,t,i,n,l,c,o)=>`
    <a href="case.html?case=${encodeURIComponent(e)}" class="case" style="grid-area: ${c}">
        <div class="container_img">
            <img src="${a}/uploads/${t}" alt="${i}" />
        </div>
        <p class="category" data-category="${o}">${l}</p>
        <p class="title">${n}</p>
    </a>
`;!async function(){try{let e=await fetch(`${a}/api/get_all_cases.php`);i.data=await e.json(),i.layout=[],l(),function(e){let a=[{category_id:"all",category:"Все"},...e].map(e=>s(e.category_id,e.category)).join("");t.innerHTML=a,document.querySelectorAll(".category").forEach(e=>{e.addEventListener("click",function(){var t;document.querySelector(".active").classList.remove("active"),e.classList.add("active"),t=e.dataset.category,c("all"===t?i.data.cases:i.data.cases.filter(e=>e.category_id===t))})})}(i.data.categories)}catch(e){console.error("Ошибка загрузки данных для Cases:",e)}}();const l=()=>{e.innerHTML="",window.innerWidth>=1200?o(4,"16vw",i.data.cases):window.innerWidth<=1200&&window.innerWidth>=900?o(3,"21.8vw",i.data.cases):window.innerWidth<=900&&r(i.data.cases)},c=t=>{e.innerHTML="",window.innerWidth>=1200?o(4,"16vw",t):window.innerWidth<=1200&&window.innerWidth>=900?o(3,"21.8vw",t):window.innerWidth<=900&&r(t)};function o(t,a,n){if(i.layout.length=0,r(n),i.layout.length%t>0){let e=t-i.layout.length%t;i.layout.push(...Array(e).fill("."))}let l="";for(let e=0;e<i.layout.length;e+=t){let a=i.layout.slice(e,e+t);e/t%2==1&&a.reverse(),l+=`'${a.join(" ")}' `}let c=Math.ceil(i.layout.length/t);e.style.gridTemplateRows=`repeat(${c}, ${a})`,e.style.gridTemplateAreas=l.trim()}function r(t){let a=t.map(e=>{let t=`item-${e.case_id}`,a=1==e.block_size?1:2;return i.layout.push(...Array(a).fill(t)),n(`${e.href}`,e.image_url,e.alt_image,e.title,e.category,`item-${e.case_id}`,e.category_id)}).join("");e.innerHTML=a}const s=(e,t)=>`
    <h3 class="category ${"all"===e?"active":""}" data-category="${e}" >${t}</h3>
`;
//# sourceMappingURL=cases.9c70965d.js.map
