export default function initScrollAnimacao() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.4;

    function animaScroll(e) {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = (sectionTop - windowMetade) < 0;

        if(isSectionVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active')
        }

      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
};