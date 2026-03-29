document.addEventListener('DOMContentLoaded', function () {
  console.log('Navigation moderne initialisée');

  document.addEventListener('click', function (e) {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
      e.preventDefault();
      const targetId = target.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });

  const pageLinks = document.querySelectorAll('a[href^="/"][href!="/"]');
  pageLinks.forEach((link) => {
    link.addEventListener('click', function (e) {});
  });
});
