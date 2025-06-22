import { initMask } from './form.js';
/*
const btnBook = document.querySelector('.our-trip__button')
const form = document.querySelector('.price__form-container')
const modalWrap = document.querySelector('.modal-book__wrapper')

function innerModal (){
   return form.innerHTML
}
btnBook.addEventListener('click', () => {
 modalWrap.insertAdjacentHTML('beforeend', innerModal(form))
})
 */
const scrollbar = window.innerWidth - document.documentElement.clientWidth;

window.addEventListener('click', function(e){
  const modal = document.querySelector('.modal-book');
  const modalWrap = document.querySelector('.modal-book__wrapper');
  const form = document.querySelector('.price__form-container');

  if (e.target.classList.contains('our-trip__button')) {
    if (!modal.querySelector('.price__form-container')){
      modalWrap.insertAdjacentHTML('beforeend', form.outerHTML)
      initMask()
    }

    if (modal){
      modal.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbar}px`;
    }
  }

  function closeModal () {
    modal.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = ``;
  }

  if (e.target.classList.contains('modal-book') && e.target.classList.contains('modal-open')){
    closeModal();
  }

  if (e.target.classList.contains('modal-book__close') && e.target.closest('.modal-open')){
    closeModal()
  }
})