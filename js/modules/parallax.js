export function initParallax() {
  const hero = document.querySelector('.hero');
  const mx = document.querySelector('.hero-mx'); // Ищем новый класс MX
  
  if (!hero || !mx) return;

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!isFinePointer || noMotion) return;

  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width  - 0.5;
    const dy = (e.clientY - r.top)  / r.height - 0.5;
    // Двигаем элемент в зависимости от положения мыши
    mx.style.transform = `translate(${dx * -18}px, calc(-50% + ${dy * -14}px))`;
  });

  hero.addEventListener('mouseleave', () => {
    // Возвращаем на место, если мышка ушла
    mx.style.transform = 'translateY(-50%)';
  });
}