(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function l(a){let c=(a-n)/o;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(l)}))},t=({idForm:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");try{if(!o)throw new Error("Потерялась форма");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=new FormData(o),l={};var a;n.style.color="white",n.textContent="Загрузка...",o.append(n),o.querySelectorAll("input").forEach((e=>e.value="")),e.forEach(((e,t)=>{l[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[t.id]=t.textContent:"input"===e.type&&(l[t.id]=t.value)})),(a=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.textContent="Спасибо! Наш менеджер с вами свяжется!"})).catch((e=>{n.textContent="Ошибка..."}))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),l=setInterval((()=>{const e=(()=>{let e=(new Date("20 january 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaning:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),a=e=>`0${e}`.slice(-2),c=document.getElementById("timer-days");e.timeRemaning>0?(c.textContent=a(e.days)+"д :",t.textContent=a(e.hours)+"ч",o.textContent=a(e.minutes)+"м",n.textContent=a(e.seconds)+"с"):(c.textContent="00",t.textContent="00",o.textContent="00",n.textContent="00",clearInterval(l))}),1e3);(()=>{const e=document.createElement("span");e.id="timer-days",document.getElementById("timer").prepend(e)})()})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{(e.classList.contains("active-menu")&&!t.target.closest("menu")||t.target.closest(".menu")||t.target.closest(".close-btn")||t.target.closest("menu>ul>li>a"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelectorAll("menu>ul>li>a"),t=document.querySelector("main>a");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),t.addEventListener("click",(e=>{e.preventDefault();const t=e.path[1].getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),n=t.querySelector(".popup-content");let l=document.documentElement.clientWidth>=768;window.addEventListener("resize",(()=>{l=document.documentElement.clientWidth>=768})),o.forEach((o=>{o.addEventListener("click",(()=>{l?(t.style.opacity="0",n.style.opacity="0",t.style.display="block",e({duration:150,timing:e=>e,draw(e){n.style.top=10*e+"%",n.style.opacity=e,t.style.opacity=e}})):t.style.display="block"}))})),t.addEventListener("click",(o=>{o.target.closest(".popup-content")&&!o.target.classList.contains("popup-close")||(l=document.documentElement.clientWidth>=768,l?(e({duration:150,timing:e=>e,draw(e){n.style.top=10*(1-e)+"%",n.style.opacity=1-e,t.style.opacity=1-e}}),setTimeout((()=>t.style.display="none"),150)):t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll(".form-name"),o=document.getElementById("form2-name"),n=document.querySelectorAll(".form-email"),l=document.querySelectorAll(".form-phone"),a=document.getElementById("form2-message");e.forEach((e=>{e.classList.contains("calc-type")||e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d\-()]/g,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-z\d@\-_.!~*']/gi,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\s]/gi,"")}))})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\s]/gi,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\-\s]/gi,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=e.querySelectorAll(".portfolio-item");let o,n,l=0;const a=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},r=()=>{a(t,l,"portfolio-item-active"),a(o,l,"dot-active"),l++,l>=t.length&&(l=0),c(t,l,"portfolio-item-active"),c(o,l,"dot-active")},s=(e=1500)=>{n=setInterval(r,e)};t.length>1?(t.forEach((()=>{const e=document.createElement("li");e.classList.add("dot"),document.querySelector(".portfolio-dots").append(e)})),o=e.querySelectorAll(".dot"),o[0].classList.add("dot-active"),s(2e3),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,l,"portfolio-item-active"),a(o,l,"dot-active"),e.target.matches("#arrow-right")?(l++,l>=t.length&&(l=0)):e.target.matches("#arrow-left")?(l--,l<0&&(l=t.length-1)):e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(l=o)})),c(t,l,"portfolio-item-active"),c(o,l,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s()}),!0)):1===t.length?(document.getElementById("arrow-left").style.display="none",document.getElementById("arrow-right").style.display="none"):(document.getElementById("portfolio").style.display="none",document.querySelectorAll("menu>ul>li")[1].style.display="none")})(),((t=100)=>{const o=document.querySelector(".calc-block"),n=o.querySelector(".calc-type"),l=o.querySelector(".calc-square"),a=o.querySelector(".calc-count"),c=o.querySelector(".calc-day"),r=document.getElementById("total");o.addEventListener("input",(o=>{(()=>{const o=+n.options[n.selectedIndex].value,s=+l.value;let i,d=1,m=1;a.value>1&&(d+=+a.value/10),c.value&&c.value<5?m=2:c.value&&c.value<10&&(m=1.5),n.value&&l.value?(i=t*o*s*d*m,e({duration:500,timing:e=>e,draw(e){r.textContent=Math.round(i*e)}})):r.textContent=0})()}))})(100),t({idForm:"form1",someElem:[{type:"block",id:"total"}]}),t({idForm:"form2",someElem:[{type:"block",id:"total"}]}),t({idForm:"form3",someElem:[{type:"block",id:"total"}]})})();