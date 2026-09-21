const IMG={
  hero:"https://can-do-remodeling.com/wp-content/uploads/2021/03/IMG_0590-1-1024x768.jpg",
  bathDetail:"https://can-do-remodeling.com/wp-content/uploads/2021/03/IMG_1818-1-768x1024.jpg",
  bathAlt:"https://can-do-remodeling.com/wp-content/uploads/2021/03/IMG_1831-1.jpg",
  bathAlt2:"https://can-do-remodeling.com/wp-content/uploads/2021/03/IMG_1825.jpg",
  bathBefore:"https://can-do-remodeling.com/wp-content/uploads/2021/03/IMG_5020.jpg",
  bathBefore2:"https://can-do-remodeling.com/wp-content/uploads/2021/03/IMG_5019.jpg",
  exterior:"https://can-do-remodeling.com/wp-content/uploads/2021/01/IMG_8683-1-scaled.jpg",
  entryDoor:"https://can-do-remodeling.com/wp-content/uploads/2021/01/IMG_0789-1-scaled.jpg",
  entryDoor2:"https://can-do-remodeling.com/wp-content/uploads/2021/01/IMG_5674-scaled.jpg",
  restoration:"https://can-do-remodeling.com/wp-content/uploads/2021/01/IMG_8345-1024x768.jpg",
  restoration2:"https://can-do-remodeling.com/wp-content/uploads/2020/06/IMG_8344.jpg",
  kitchen:"https://can-do-remodeling.com/wp-content/uploads/2020/01/IMG_2224-1-scaled.jpg",
  kitchen2:"https://can-do-remodeling.com/wp-content/uploads/2020/01/IMG_2220-scaled.jpg",
  garage:"https://can-do-remodeling.com/wp-content/uploads/2019/10/IMG_0890.jpg",
  garage2:"https://can-do-remodeling.com/wp-content/uploads/2019/10/IMG_0564.jpg",
  drywall:"https://can-do-remodeling.com/wp-content/uploads/2019/10/IMG_0565.jpg",
  skyline:"https://can-do-remodeling.com/wp-content/uploads/2023/08/City-Skyline-Sunrise-1920x790.jpg",
  tim:"https://can-do-remodeling.com/wp-content/uploads/2023/02/Dad-Website-About-Us-180x180.jpg",
  rusty:"https://can-do-remodeling.com/wp-content/uploads/2023/02/Rusty-About-Us-Photo-180x180.jpg"
};
window.CANDO_IMAGES=IMG;

const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
const serviceFiles=['services.html','remodeling.html','restoration.html','carpentry.html','interior-painting.html','exterior-painting.html','drywall.html','doors-windows.html'];

const header=document.querySelector('[data-site-header]');
if(header){
  header.innerHTML=`
  <div class="concept">Unofficial redesign concept · prepared by KISS</div>
  <header class="site-header">
    <div class="wrap nav">
      <a class="brand" href="index.html"><strong>Can-Do Remodeling</strong><small>Milwaukee · Remodel · Restore · Build</small></a>
      <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html" class="${file==='index.html'?'active':''}">Home</a>
        <a href="projects.html" class="${file.startsWith('project-')||file==='projects.html'?'active':''}">Projects</a>
        <div class="nav-dropdown">
          <a href="services.html" class="${serviceFiles.includes(file)?'active':''}">Services</a>
          <div class="dropdown-menu">
            <a href="remodeling.html">Remodeling</a>
            <a href="restoration.html">Restoration</a>
            <a href="carpentry.html">Carpentry</a>
            <a href="interior-painting.html">Interior Painting</a>
            <a href="exterior-painting.html">Exterior Painting</a>
            <a href="drywall.html">Drywall</a>
            <a href="doors-windows.html">Doors & Windows</a>
          </div>
        </div>
        <a href="about.html" class="${file==='about.html'?'active':''}">About</a>
        <a href="reviews.html" class="${file==='reviews.html'?'active':''}">Reviews</a>
        <a href="service-area.html" class="${file==='service-area.html'?'active':''}">Service Area</a>
      </nav>
      <a class="btn" href="contact.html">Get an Estimate →</a>
    </div>
  </header>`;
  const toggle=header.querySelector('.nav-toggle');
  const nav=header.querySelector('.nav-links');
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
  });
}

const footer=document.querySelector('[data-site-footer]');
if(footer){
  footer.innerHTML=`
  <section class="cta-band">
    <img src="${IMG.skyline}" alt="Milwaukee skyline">
    <div class="wrap cta-inner">
      <div class="cta-copy">
        <p class="kicker">Let's build something great together</p>
        <h2>Start your next project.</h2>
        <p>Remodel. Restore. Improve. Can-Do.</p>
        <a class="btn" href="contact.html">Get an Estimate →</a>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div><div class="footer-title">Can-Do Remodeling</div><p class="small">Milwaukee · Remodel · Restore · Build</p><p class="small">Unofficial redesign concept using publicly available Can-Do business information and project imagery.</p></div>
      <div><strong>Contact</strong><p class="small"><a href="tel:+14144052718">(414) 405-2718</a><br>2510B S. Kinnickinnic Ave<br>Milwaukee, WI 53207</p></div>
      <div><strong>Explore</strong><p class="small"><a href="projects.html">Projects</a><br><a href="services.html">Services</a><br><a href="about.html">Our Story</a><br><a href="contact.html">Get an Estimate</a></p></div>
    </div>
  </footer>`;
}

document.querySelectorAll('[data-img]').forEach(el=>{
  const src=IMG[el.dataset.img];
  if(src) el.src=src;
});

document.querySelectorAll('[data-carousel]').forEach(shell=>{
  const track=shell.querySelector('.carousel');
  shell.querySelector('[data-prev]')?.addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.8,behavior:'smooth'}));
  shell.querySelector('[data-next]')?.addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.8,behavior:'smooth'}));
});

document.querySelectorAll('[data-filter]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat=btn.dataset.filter;
    document.querySelectorAll('[data-project]').forEach(p=>{
      p.style.display=(cat==='all'||p.dataset.project===cat)?'block':'none';
    });
  });
});

document.querySelectorAll('.before-after').forEach(component=>{
  const input=component.querySelector('input[type="range"]');
  const after=component.querySelector('.after');
  const sync=()=>after.style.clipPath=`inset(0 0 0 ${input.value}%)`;
  input.addEventListener('input',sync);
  sync();
});

const lb=document.querySelector('.lightbox');
if(lb){
  document.querySelectorAll('[data-lightbox]').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();
      lb.querySelector('img').src=a.href;
      lb.classList.add('open');
      lb.setAttribute('aria-hidden','false');
    });
  });
  const close=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true');};
  lb.querySelector('button')?.addEventListener('click',e=>{e.stopPropagation();close();});
  lb.addEventListener('click',e=>{if(e.target===lb)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}