
document.addEventListener('DOMContentLoaded',function(){
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('slideMenu');
  const overlay = document.getElementById('overlay');
  function openMenu(){ menu.classList.add('open'); overlay.classList.add('show'); }
  function closeMenu(){ menu.classList.remove('open'); overlay.classList.remove('show'); }
  btn.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.menu-list a').forEach(a=>a.addEventListener('click', closeMenu));
});
