export default function initModal() {
  const buttonPlay = document.querySelector('.button-play');
  const modalWrapper = document.querySelector('.modal-wrapper');
  const buttonLogin = document.querySelector('.list-nav li a[href^="#login"]');
  const buttonClose = document.querySelector('[data-modal-close]');
  const eventos = ['touchstart', 'click'];


  eventos.forEach(userEvent => {
    buttonPlay.addEventListener(userEvent, handleModal);
    buttonClose.addEventListener(userEvent, handleCloseMenu);
    buttonLogin.addEventListener(userEvent, handleModal);
  })

  function handleModal(e) {
    e.preventDefault();
    modalWrapper.classList.add('active');  
  }

  function handleCloseMenu(e) {
    e.preventDefault();
    modalWrapper.classList.remove('active');
  }
  
};