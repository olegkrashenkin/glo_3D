(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=setInterval((()=>{const e=(()=>{let e=(new Date("04 january 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaning:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),l=e=>`0${e}`.slice(-2),r=document.getElementById("timer-days");e.timeRemaning>0?(r.textContent=l(e.days)+"д :",t.textContent=l(e.hours)+"ч",n.textContent=l(e.minutes)+"м",o.textContent=l(e.seconds)+"с"):(r.textContent="00",t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(c))}),1e3);(()=>{const e=document.createElement("span");e.id="timer-days",document.getElementById("timer").prepend(e)})()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelectorAll("menu>ul>li>a"),t=document.querySelector("main>a");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),console.dir(e.target.getAttribute("href"));const t=e.target.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),t.addEventListener("click",(e=>{e.preventDefault();const t=e.path[1].getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-content"),o=e.querySelector(".popup-close");let c,l,r=document.documentElement.clientWidth>=768,i=-70;const s=()=>{c=requestAnimationFrame(s),l?i<10?(i+=3,n.style.top=i+"%"):cancelAnimationFrame(c):i>-70?(i-=3,n.style.top=i+"%"):(cancelAnimationFrame(c),e.style.display="none")};window.addEventListener("resize",(()=>{r=document.documentElement.clientWidth>=768})),t.forEach((t=>{t.addEventListener("click",(()=>{r?(l=!0,s()):n.style.top="10%",e.style.display="block"}))})),o.addEventListener("click",(()=>{r=document.documentElement.clientWidth>=768,r?(l=!1,s()):e.style.display="none"}))})()})();