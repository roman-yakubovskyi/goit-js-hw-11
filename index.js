import{i as c,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery");function m(n){const o=n.map(e=>`<li class="gallery-item">
	  <a class="gallery-link" href="${e.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${e.webformatURL}" 
			alt="${e.tags}" 
			/>
        <div class="gallery-info">
        <p class="gallery-likes"><span>Likes:</span> ${e.likes}</p>
        <p class="gallery-views"><span>Views:</span> ${e.views}</p>
        <p class="gallery-comments"><span>Comments:</span> ${e.comments}</p>
        <p class="gallery-downloads"><span>Downloads:</span> ${e.downloads}</p>
      </div>    
	  </a>
    </li>
    `).join("");u.innerHTML="",u.insertAdjacentHTML("beforeend",o)}const d="47026899-90f4472111ba4dcf335a9f60a",y="https://pixabay.com/api/";function h(n){const o=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${y}?${o}`;return fetch(e).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>s).catch(s=>{iziToast.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topLeft"}),console.error("There was a problem with the fetch operation:",s)})}let i;const g=document.querySelector(".gallery"),p=document.querySelector(".form"),L=document.querySelector(".input"),l=document.querySelector(".loader");p.addEventListener("submit",w);function w(n){n.preventDefault();const o=L.value.trim();if(!o){c.error({title:"Error",message:"Please enter a search query...",position:"topLeft"});return}l.style.display="block",h(o).then(e=>{if(l.style.display="none",e.hits.length===0){g.innerHTML="",c.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft",timeout:3e3}),p.reset();return}m(e.hits),i?i.refresh():i=new f(".gallery a",{captions:!0,captionDelay:300,captionSelector:"img",captionType:"attr",captionsData:"alt"})}).catch(e=>{l.style.display="none",console.error(e)})}
//# sourceMappingURL=index.js.map
