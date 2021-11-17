export default function initDigitalizacao() {
  let digitalizacao = document.querySelector('[data-digitalizacao]');
  const letras = digitalizacao.innerText.split('');
  console.log(letras);
  digitalizacao.innerHTML = '';

  window.addEventListener('load', handleDigitalizacao);

  function handleDigitalizacao(e) {
    e.preventDefault();
    letras.forEach((letra, indice) => {
      setTimeout(() => {
        digitalizacao.innerHTML += letra;
      }, 30 * indice)//letra = indice
    })
  }
}