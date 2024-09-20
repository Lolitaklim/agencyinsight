const t=document.getElementById("casesContainer"),e=document.getElementById("categoriesContainer"),a=(t,e,a,i,s,n,l)=>`
    <a href="${t}" class="case" style="grid-area: ${n}">
        <div class="container_img">
            <img src="${SERVER_URL}/uploads/${e}" alt="${a}" />
        </div>
        <p class="category" data-category="${l}">${s}</p>
        <p class="title">${i}</p>
    </a>
`;!async function(){try{let t=await fetch(`${SERVER_URL}/api/get_all_cases.php`);state.data=await t.json(),state.layout=[],i(),function(t){let a=[{category_id:"all",category:"Все"},...t].map(t=>c(t.category_id,t.category)).join("");e.innerHTML=a,document.querySelectorAll(".category").forEach(t=>{t.addEventListener("click",function(){var e;document.querySelector(".active").classList.remove("active"),t.classList.add("active"),e=t.dataset.category,s("all"===e?state.data.cases:state.data.cases.filter(t=>t.category_id===e))})})}(state.data.categories)}catch(t){console.error("Ошибка загрузки данных для Cases:",t)}}();const i=()=>{t.innerHTML="",window.innerWidth>=1200?n(4,"16vw",state.data.cases):window.innerWidth<=1200&&window.innerWidth>=900?n(3,"21.8vw",state.data.cases):window.innerWidth<=900&&l(state.data.cases)},s=e=>{t.innerHTML="",window.innerWidth>=1200?n(4,"16vw",e):window.innerWidth<=1200&&window.innerWidth>=900?n(3,"21.8vw",e):window.innerWidth<=900&&l(e)};function n(e,a,i){if(state.layout.length=0,l(i),state.layout.length%e>0){let t=e-state.layout.length%e;state.layout.push(...Array(t).fill("."))}let s="";for(let t=0;t<state.layout.length;t+=e){let a=state.layout.slice(t,t+e);t/e%2==1&&a.reverse(),s+=`'${a.join(" ")}' `}let n=Math.ceil(state.layout.length/e);t.style.gridTemplateRows=`repeat(${n}, ${a})`,t.style.gridTemplateAreas=s.trim()}function l(e){let i=e.map(t=>{let e=`item-${t.case_id}`,i=1==t.block_size?1:2;return state.layout.push(...Array(i).fill(e)),a(`#${t.href}`,t.image_url,t.alt_image,t.title,t.category,`item-${t.case_id}`,t.category_id)}).join("");t.innerHTML=i}const c=(t,e)=>`
    <h3 class="category ${"all"===t?"active":""}" data-category="${t}" >${e}</h3>
`;
//# sourceMappingURL=cases.2d5e6cd3.js.map
