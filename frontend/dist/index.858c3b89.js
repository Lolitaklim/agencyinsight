const t=document.getElementById("casesContainer"),e=(t,e,a,i,l,s)=>`
    <a href="${t}" class="case" style="grid-area: ${s}">
        <div class="container_img">
            <img src="${SERVER_URL}/uploads/${e}" alt="${a}" />
        </div>
        <p class="category">${l}</p>
        <p class="title">${i}</p>
    </a>
`;!async function(){try{let t=await fetch(`${SERVER_URL}/api/get_homepage_cases.php`);state.data=await t.json(),state.layout=[],a()}catch(t){console.error("Ошибка загрузки данных для Cases:",t)}}();const a=()=>{t.innerHTML="",window.innerWidth>=1200?i(4,8):window.innerWidth<=1200&&window.innerWidth>=900?i(3,6):window.innerWidth<=900&&window.innerWidth>=650?l(state.data.slice(0,4)):window.innerWidth<=650&&l(state.data.slice(0,3))};function i(e,a){let i=function(t,e){let a=0,i=[];for(let l=0;l<t.length;l++){let s=parseInt(t[l].block_size,10);if(a+s<=e)a+=s,i.push(t[l]);else if(a+1==e&&2==s){let e={...t[l],block_size:"1"};a+=1,i.push(e)}if(a===e)break}return i}(state.data,a);if(state.layout.length=0,l(i),state.layout.length%e>0){let t=e-state.layout.length%e;state.layout.push(...Array(t).fill("."))}let s="";for(let t=0;t<state.layout.length;t+=e){let a=state.layout.slice(t,t+e);t/e%2==1&&a.reverse(),s+=`'${a.join(" ")}' `}t.style.gridTemplateAreas=s.trim()}function l(a){let i=a.map(t=>{let a=`item-${t.display_order}`,i=1==t.block_size?1:2;return state.layout.push(...Array(i).fill(a)),e(`#${t.href}`,t.image_url,t.alt_image,t.title,t.category,`item-${t.display_order}`)}).join("");t.innerHTML=i}
//# sourceMappingURL=index.858c3b89.js.map
