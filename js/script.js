
window.addEventListener('scroll',()=>{
 document.querySelectorAll('.fade').forEach(el=>{
  let pos=el.getBoundingClientRect().top;
  if(pos<window.innerHeight-100){el.style.opacity=1;el.style.transform='translateY(0)';}
 });
});
