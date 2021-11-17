export default function initDropDownMenu() {
  const dropdown = document.querySelector('[data-dropdown]');
  const listDropdown = document.querySelectorAll('[list-dropdown]');
  const eventos = ['touchstart', 'click'];

  eventos.forEach(userEvent => {
    listDropdown.forEach(link => {
      link.addEventListener(userEvent, handleDropdown);
    })
  })

  function handleDropdown(e) {
    e.preventDefault();
    dropdown.classList.toggle('active');
  }
  

};