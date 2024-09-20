const t="http://localhost:8080",s=(s,a,e,i,l,c)=>`
    <div class="case-head">
        <img class="logo" src="${t}/uploads/${l}" alt="${c}" />
        <h1>${e}</h1>
        <p class="category">${i}</p>
        <div class="container_main_img">
            <img class="main-img" src="${t}/uploads/${s}" alt="${a}" />
        </div>
    </div>
`,a=(s,a,e,i,l)=>`
    <a href="${s}" class="also-case">
        <div class="container_img">
            <img src="${t}/uploads/${a}" alt="${e}" />
        </div>
        <p class="category">${l}</p>
        <p class="also-case-title">${i}</p>
    </a>
`;!async function(){try{let e=new URLSearchParams(window.location.search).get("case"),i=await fetch(`${t}/api/get_case.php?case=${encodeURIComponent(e)}`),l=await i.json();!function(t){let e=t.case[0];document.title=e.title_page,document.querySelector('meta[name="description"]').setAttribute("content",e.description),document.querySelector('meta[name="keywords"]').setAttribute("content",e.keywords),console.log(e);let i=s(e.image_url,e.alt_image,e.title,e.category,e.logo_url,e.alt_logo);t.case[0].page_data.case_blocks.forEach(t=>{let s="";switch(t.class){case"acquaintance":s=function(t){let s=t.points.map(t=>`
        <p class="point">
            ${t.text}
        </p>`).join("");return`
    <div class="acquaintance">
        <p class="title">${t.title}</p>
        <div class="line-points">
        <span class="line"></span>
        <div class="points">
            ${s}
        </div>
        </div>
    </div>
  `}(t);break;case"color-block":s=function(t){let s=t.points.map(t=>`
        <p class="point">
            ${t.text}
        </p>`).join("");return`
    <div class="color-block">
        <p class="title">${t.title}</p>
        <div class="points">
            ${s}
        </div>
    </div>
  `}(t);break;case"ordinary-block":s=function(t){let s=t.points.map(t=>`<p class="point">${t.text}</p>`).join("");return`
    <div class="ordinary-block">
        <p class="title">${t.title}</p>
        <div class="points">
            ${s}
        </div>
    </div>
  `}(t);break;case"mark-num-list":s=function(t){let s=t.points.map((t,s)=>{let a=t.ul?t.ul.map(t=>`<li>${t}</li>`).join(""):"";return`
        <div class="point">
          <div class="num">${String(s+1).padStart(2,"0")}</div>
          <div class="list">
            <p class="title-point">${t.title_point}</p>
            ${a?`<ul>${a}</ul>`:""}
          </div>
        </div>
      `}).join("");return`
      <div class="mark-num-list">
        <p class="title">${t.title}</p>
        <div class="points">
          ${s}
        </div>
      </div>
    `}(t);break;case"results":s=function(t){let s=t.points.map(t=>`
        <div class="point">
            <p class="top">${t.top}</p>
            <p class="bottom">${t.bottom}</p>
        </div>
      `).join("");return`
      <div class="results">
          <p class="title">${t.title}</p>
          <div class="points">
              ${s}
          </div>
      </div>
    `}(t);break;case"simple-paragraph":s=`
      <div class="simple-paragraph">
        ${t.content}
      </div>
    `;break;default:console.log("Неизвестный класс:",t.class)}i+=s}),document.getElementById("caseContainer").innerHTML=i;let l=t.also_cases.map(t=>a(`#${t.href}`,t.image_url,t.alt_image,t.title,t.category)).join("");document.getElementById("alsoCasesContainer").innerHTML=l}(l)}catch(t){console.error("Error fetching the case:",t)}}();
//# sourceMappingURL=case.269a09b8.js.map
