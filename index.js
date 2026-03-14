import{a as u,S as d,i}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="55024510-6eda0fb880012efb9d7a730f7",p="https://pixabay.com/api/";async function m(s){return(await u.get(p,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`
<li class="gallery-item">
<a href="${t.largeImageURL}">
<img src="${t.webformatURL}" alt="${t.tags}" />
</a>

<div class="info">
<p><b>Likes</b> ${t.likes}</p>
<p><b>Views</b> ${t.views}</p>
<p><b>Comments</b> ${t.comments}</p>
<p><b>Downloads</b> ${t.downloads}</p>
</div>

</li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.add("visible")}function L(){l.classList.remove("visible")}const w=document.querySelector(".form");w.addEventListener("submit",v);async function v(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search word",position:"topRight"});return}g(),b();try{const t=await m(o);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}catch{i.error({message:"Error loading images",position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
