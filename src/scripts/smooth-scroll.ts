// Smooth scrolling for anchor links
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    if (targetId !== '#') {
      const targetElement = targetId ? document.querySelector(targetId) : null;
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});
