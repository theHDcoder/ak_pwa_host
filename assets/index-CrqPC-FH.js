(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",g="/favicon.svg";function y(d){let s=0;const a=n=>{s=n,d.innerHTML=`count is ${s}`};d.addEventListener("click",()=>a(s+1)),a(0)}const L="modulepreload",b=function(d){return"/"+d},h={},E=function(s,a,n){let t=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),e=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));t=Promise.allSettled(a.map(l=>{if(l=b(l),l in h)return;h[l]=!0;const c=l.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":L,c||(u.as="script"),u.crossOrigin="",u.href=l,e&&u.setAttribute("nonce",e),document.head.appendChild(u),c)return new Promise((i,p)=>{u.addEventListener("load",i),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(r){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r}return t.then(r=>{for(const e of r||[])e.status==="rejected"&&o(e.reason);return s().catch(o)})};function S(d={}){const{immediate:s=!1,onNeedRefresh:a,onOfflineReady:n,onRegistered:t,onRegisteredSW:o,onRegisterError:r}=d;let e,l,c;const m=async(i=!0)=>{await l,await(c==null?void 0:c())};async function u(){if("serviceWorker"in navigator){if(e=await E(async()=>{const{Workbox:i}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:i}},[]).then(({Workbox:i})=>new i("/sw.js",{scope:"/",type:"classic"})).catch(i=>{r==null||r(i)}),!e)return;c=async()=>{await(e==null?void 0:e.messageSkipWaiting())};{let i=!1;const p=()=>{i=!0,e==null||e.addEventListener("controlling",f=>{f.isUpdate&&window.location.reload()}),a==null||a()};e.addEventListener("installed",f=>{typeof f.isUpdate>"u"?typeof f.isExternal<"u"?f.isExternal?p():!i&&(n==null||n()):f.isExternal?window.location.reload():!i&&(n==null||n()):f.isUpdate||n==null||n()}),e.addEventListener("waiting",p),e.addEventListener("externalwaiting",p)}e.register({immediate:s}).then(i=>{o?o("/sw.js",i):t==null||t(i)}).catch(i=>{r==null||r(i)})}}return l=u(),m}function P(d){const s=d.querySelector("#pwa-toast"),a=s.querySelector(".message #toast-message"),n=s.querySelector("#pwa-close"),t=s.querySelector("#pwa-refresh");let o;const r=()=>o==null?void 0:o(!0);function e(c){if(c){requestAnimationFrame(()=>e(!1));return}s.classList.contains("refresh")&&t.removeEventListener("click",r),s.classList.remove("show","refresh")}function l(c){c||t.addEventListener("click",r),requestAnimationFrame(()=>{e(!1),c||s.classList.add("refresh"),s.classList.add("show")})}window.addEventListener("load",()=>{n.addEventListener("click",()=>e(!0)),o=S({immediate:!0,onOfflineReady(){a.innerHTML="App ready to work offline",l(!0)},onNeedRefresh(){a.innerHTML="New content available, click on reload button to update",l(!1)},onRegisteredSW(c,m){}})})}const v=document.querySelector("#app");v.innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${g}" class="logo" alt="event_a_pwa logo" />
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
`;y(document.querySelector("#counter"));P(v);
