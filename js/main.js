import { initYear } from './modules/year.js';
import { initReveal } from './modules/reveal.js';
import { initParallax } from './modules/parallax.js';
import { initHeader } from './modules/header.js';
import { initMobileMenu } from './modules/mobile-menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initReveal();
  initParallax();
  initHeader();
  initMobileMenu();
});