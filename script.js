const root=document.documentElement,btn=document.querySelector('.theme'),menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
const saved=localStorage.getItem('aitri-theme'); if(saved) root.dataset.theme=saved;
function label(){if(btn)btn.textContent=root.dataset.theme==='dark'?'☀ LIGHT':'◐ DARK'} label();
btn?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('aitri-theme',root.dataset.theme);label()});
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';if(nav.style.display==='flex')Object.assign(nav.style,{position:'absolute',top:'74px',right:'4vw',flexDirection:'column',background:'var(--surface)',padding:'22px',border:'1px solid var(--line)'})});