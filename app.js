// ---------- Render Cards ----------
const grid = document.getElementById('cardGrid');

function initials(name){
  return name.split(' ').filter(Boolean).slice(0,2).map(w => w[0]).join('').toUpperCase();
}

function renderCards(list){
  grid.innerHTML = '';
  list.forEach((person, i) => {
    const bg = palette[i % palette.length];
    const card = document.createElement('div');
    card.className = 'card';
    card.style.background = bg;
    card.innerHTML = `
      <div class="avatar">${initials(person.name)}</div>
      <h3>${person.name}</h3>
      <p class="role">${person.role}</p>
      <p class="peek">"${person.peek}"</p>
      <div class="click-hint">👉 Click to open my note</div>
    `;
    card.addEventListener('click', () => openModal(person, bg));
    grid.appendChild(card);
  });
}
renderCards(colleagues);

// ---------- Search ----------
document.getElementById('searchBox').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  const filtered = colleagues.filter(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q));
  renderCards(filtered);
});

// ---------- Modal ----------
const overlay = document.getElementById('overlay');
const modalBox = document.getElementById('modalBox');
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalMsg = document.getElementById('modalMsg');

function openModal(person, bg){
  modalAvatar.textContent = initials(person.name);
  modalName.textContent = person.name;
  modalRole.textContent = person.role;
  modalMsg.textContent = person.message;
  modalBox.style.background = bg;
  overlay.classList.add('active');
  burstConfetti(30);
}

function closeModal(){
  overlay.classList.remove('active');
}

document.getElementById('closeModal').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

// ---------- Confetti ----------
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const confettiColors = ['#ff6ec4','#7873f5','#42e695','#ffd36e','#4facfe','#fa709a','#fee140'];

function burstConfetti(count){
  for(let i=0;i<count;i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: -20,
      r: Math.random()*6+4,
      color: confettiColors[Math.floor(Math.random()*confettiColors.length)],
      vy: Math.random()*3+2,
      vx: Math.random()*4-2,
      rot: Math.random()*360,
      vrot: Math.random()*10-5
    });
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.rot += p.vrot;
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(p.rot*Math.PI/180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*0.6);
    ctx.restore();
  });
  particles = particles.filter(p => p.y < canvas.height + 20);
  requestAnimationFrame(animate);
}
animate();

document.getElementById('celebrateBtn').addEventListener('click', () => burstConfetti(150));

// Auto celebrate once on load for a nice first impression
window.addEventListener('load', () => setTimeout(() => burstConfetti(80), 600));
