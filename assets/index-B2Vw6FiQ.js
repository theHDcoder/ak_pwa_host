(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",y="/favicon.svg";function L(l){let s=0;const a=i=>{s=i,l.innerHTML=`count is ${s}`};l.addEventListener("click",()=>a(s+1)),a(0)}const b="modulepreload",S=function(l){return"/"+l},h={},E=function(s,a,i){let t=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),r=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(a.map(c=>{if(c=S(c),c in h)return;h[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const e=document.createElement("link");if(e.rel=u?"stylesheet":b,u||(e.as="script"),e.crossOrigin="",e.href=c,r&&e.setAttribute("nonce",r),document.head.appendChild(e),u)return new Promise((d,p)=>{e.addEventListener("load",d),e.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return t.then(n=>{for(const r of n||[])r.status==="rejected"&&o(r.reason);return s().catch(o)})};function P(l={}){const{immediate:s=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:t,onRegisteredSW:o,onRegisterError:n}=l;let r,c;const u=async(e=!0)=>{await c};async function f(){if("serviceWorker"in navigator){if(r=await E(async()=>{const{Workbox:e}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:e}},[]).then(({Workbox:e})=>new e("/sw.js",{scope:"/",type:"classic"})).catch(e=>{n==null||n(e)}),!r)return;r.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),r.addEventListener("installed",e=>{e.isUpdate||i==null||i()}),r.register({immediate:s}).then(e=>{o?o("/sw.js",e):t==null||t(e)}).catch(e=>{n==null||n(e)})}}return c=f(),u}function k(l){const s=l.querySelector("#pwa-toast"),a=s.querySelector(".message #toast-message"),i=s.querySelector("#pwa-close"),t=s.querySelector("#pwa-refresh");let o;const n=()=>o==null?void 0:o(!0);function r(e){if(e){requestAnimationFrame(()=>r(!1));return}s.classList.contains("refresh")&&t.removeEventListener("click",n),s.classList.remove("show","refresh")}function c(e){e||t.addEventListener("click",n),requestAnimationFrame(()=>{r(!1),e||s.classList.add("refresh"),s.classList.add("show")})}let u=!1;const f=60*60*1e3;window.addEventListener("load",()=>{i.addEventListener("click",()=>r(!0)),o=P({immediate:!0,onOfflineReady(){a.innerHTML="App ready to work offline",c(!0)},onNeedRefresh(){a.innerHTML="New content available, click on reload button to update",c(!1)},onRegisteredSW(e,d){var p;((p=d==null?void 0:d.active)==null?void 0:p.state)==="activated"?(u=!0,v(f,e,d)):d!=null&&d.installing&&d.installing.addEventListener("statechange",g=>{u=g.target.state==="activated",u&&v(f,e,d)})}})})}function v(l,s,a){setInterval(async()=>{if("onLine"in navigator&&!navigator.onLine)return;const i=await fetch(s,{cache:"no-store",headers:{cache:"no-store","cache-control":"no-cache"}});(i==null?void 0:i.status)===200&&await a.update()},l)}const m=document.querySelector("#app");m.innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${y}" class="logo" alt="event_a_pwa logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${w}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>event_a_pwa</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <div
    id="pwa-toast"
    role="alert"
    aria-labelledby="toast-message"
  >
    <div class="message">
      <span id="toast-message"></span>
    </div>
    <div class="buttons">
      <button id="pwa-refresh" type="button">
        Reload
      </button>
      <button id="pwa-close" type="button">
        Close
      </button>
    </div>
  </div>
`;L(document.querySelector("#counter"));k(m);
