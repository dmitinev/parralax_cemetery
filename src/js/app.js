import { testWebP as isWebPSupported } from './modules/testWebp.js';

isWebPSupported.then((result) => {
  const className = result ? 'webp' : 'no-webp';
  document.body.classList.add(className);
});

window.addEventListener('scroll', function () {
  document.body.style.cssText = `--scroll: ${window.scrollY}px`;
});
