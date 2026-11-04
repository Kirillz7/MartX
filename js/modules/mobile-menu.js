export function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const panel = document.querySelector('.mobile-menu');
  const backdrop = document.querySelector('.mobile-menu-backdrop');
  const links = document.querySelectorAll('.mobile-menu a');

  if (!burger || !panel) return;

  const close = () => {
    burger.classList.remove('active');
    panel.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  const open = () => {
    burger.classList.add('active');
    panel.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
  };

  burger.addEventListener('click', () => {
    panel.classList.contains('active') ? close() : open();
  });

  if (backdrop) backdrop.addEventListener('click', close);

  links.forEach(link => link.addEventListener('click', close));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) close();
  });
}