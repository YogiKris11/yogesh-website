// Mobile nav
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger){
  hamburger.addEventListener('click', () => {
    const visible = nav.style.display === 'flex';
    nav.style.display = visible ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    hamburger.setAttribute('aria-expanded', String(!visible));
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
