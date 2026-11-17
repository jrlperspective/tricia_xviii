const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
const observeSections=()=>document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
// traditions.js creates the participant sections before this script runs.
observeSections();

// Swipeable memory lane carousel: native touch scrolling, arrow controls, progress.
const photoRail = document.querySelector('.swipe-gallery');
if (photoRail) {
  const cards = [...photoRail.querySelectorAll('.swipe-card')];
  const fill = document.querySelector('.gallery-progress-fill');
  const count = document.querySelector('.gallery-count');
  const prev = document.querySelector('[data-gallery-prev]');
  const next = document.querySelector('[data-gallery-next]');
  const updateGalleryProgress = () => {
    const maxScroll = photoRail.scrollWidth - photoRail.clientWidth;
    const progress = maxScroll > 0 ? photoRail.scrollLeft / maxScroll : 0;
    if (fill) fill.style.width = `${Math.max(20, (progress * 80) + 20)}%`;
    const active = Math.min(cards.length, Math.round(photoRail.scrollLeft / (cards[0].getBoundingClientRect().width + 14)) + 1);
    if (count) count.textContent = `${String(active).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  };
  const moveGallery = direction => {
    const card = cards[0];
    photoRail.scrollBy({ left: direction * (card.getBoundingClientRect().width + 14), behavior: 'smooth' });
  };
  prev?.addEventListener('click', () => moveGallery(-1));
  next?.addEventListener('click', () => moveGallery(1));
  photoRail.addEventListener('scroll', updateGalleryProgress, { passive: true });
  photoRail.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') moveGallery(1);
    if (event.key === 'ArrowLeft') moveGallery(-1);
  });
  updateGalleryProgress();
}


// Full Facebook album: paste the album's public/share URL here before publishing.
// const FACEBOOK_ALBUM_URL = 'https://www.facebook.com/share/p/1JgaeMwYc5/';
// const albumButton = document.querySelector('[data-facebook-album]');
// if (albumButton) albumButton.addEventListener('click', event => {
//   if (!FACEBOOK_ALBUM_URL || FACEBOOK_ALBUM_URL === 'https://www.facebook.com/share/p/1JgaeMwYc5/') {
//     event.preventDefault();
//     alert('Add Tricia’s Facebook pre-debut album link in script.js first.');
//     return;
//   }
//   albumButton.href = FACEBOOK_ALBUM_URL;
// });

// Second, independent 10-photo pre-debut highlights carousel.
const filmRail = document.querySelector('.film-carousel');
if (filmRail) {
  const step = () => { const card = filmRail.querySelector('.film-card'); return card ? card.getBoundingClientRect().width + 14 : 260; };
  document.querySelector('[data-film-prev]')?.addEventListener('click', () => filmRail.scrollBy({left:-step(),behavior:'smooth'}));
  document.querySelector('[data-film-next]')?.addEventListener('click', () => filmRail.scrollBy({left:step(),behavior:'smooth'}));
  filmRail.addEventListener('keydown', event => { if(event.key==='ArrowRight') filmRail.scrollBy({left:step(),behavior:'smooth'}); if(event.key==='ArrowLeft') filmRail.scrollBy({left:-step(),behavior:'smooth'}); });
}
