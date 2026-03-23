import{a as L,S as w,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="55024510-6eda0fb880012efb9d7a730f7",S="https://pixabay.com/api/";async function f(o,t){return(await L.get(S,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(s=>`
<li class="gallery-item">
<a href="${s.largeImageURL}">
<img src="${s.webformatURL}" alt="${s.tags}" />
</a>

<div class="info">
<p><b>Likes</b> ${s.likes}</p>
<p><b>Views</b> ${s.views}</p>
<p><b>Comments</b> ${s.comments}</p>
<p><b>Downloads</b> ${s.downloads}</p>
</div>

</li>`).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function $(){m.innerHTML=""}function g(){p.classList.add("visible")}function b(){p.classList.remove("visible")}function M(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}const E=document.querySelector(".form"),O=document.querySelector(".load-more");let a=1,i="",d=0;E.addEventListener("submit",async o=>{o.preventDefault();debugger;if(i=o.target.elements["search-text"].value.trim(),!!i){a=1,$(),l(),g();try{const t=await f(i,a);if(d=t.totalHits,t.hits.length===0){n.error({message:"Sorry, no images found."});return}h(t.hits),M(),a*15>=d&&(l(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Something went wrong"})}finally{b()}}});O.addEventListener("click",async()=>{a+=1,l();try{const o=await f(i,a);h(o.hits);const t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"}),a*15<d?g():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong"})}finally{b()}});
//# sourceMappingURL=index.js.map
