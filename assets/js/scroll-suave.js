export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] li a');
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
  })

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}