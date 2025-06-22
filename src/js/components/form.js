import {parsePhoneNumberFromString} from 'libphonenumber-js'
import IMask from 'imask';

/*
const form = document.querySelector('.price__form-container')
const name = document.getElementById('name')
const tel = document.getElementById('tel')

form.addEventListener('submit', (e) => {
  const namePattern = /^[А-Яа-яЇїІіЄєҐґA-Za-z\s'-]+$/;
  if (!namePattern.test(name.value.trim()) || name.value.trim().length <= 2){
    name.value = "Невірне ім'я"
  }

  const telPattern = parsePhoneNumberFromString(tel.value, 'UA')
  if (!telPattern || !telPattern.isValid()){
    tel.value = 'Невірний номер'
  }

  e.preventDefault()
})
 */
document.addEventListener('DOMContentLoaded', () => {
  initMask()
})

export function initMask () {
  document.querySelectorAll('#tel').forEach(tel =>{
    if (!tel._mask){
      tel._mask = IMask(tel,{
        mask: '+{380} (00) 000-00-00'
      });
      console.log('Mask applied to:', tel);
    }
  })
}

const modalBook = document.querySelector('.modal-book');
const modalAccept = document.querySelector('.modal-accept');

document.addEventListener('submit', event => {
   if(event.target.classList.contains('price__form')){
    event.preventDefault()

     const errorName = event.target.querySelector('.price__error_name');
     const errorTel = event.target.querySelector('.price__error_tel');

     errorName.classList.remove('active');
     errorTel.classList.remove('active');

     let isValid = true;

    const name = event.target.querySelector('#name')
    const namePattern = /^[А-Яа-яЇїІіЄєҐґA-Za-z\s'-]+$/;
    if (!namePattern.test(name.value.trim()) || name.value.trim().length <= 1){
      name.value = '';
      errorName.classList.add('active')
      isValid = false;
    }

    const tel = event.target.querySelector('#tel')
    const fullTel = tel._mask.value;
    const telPattern = parsePhoneNumberFromString(fullTel, 'UA')
    if (!telPattern || !telPattern.isValid()){
      tel.value = '';
      tel._mask.updateValue()
      errorTel.classList.add('active')
      isValid = false;
    }

    if (!isValid){
      return;
    }

    if (modalBook.classList.contains('modal-open')) {
      modalBook.classList.remove('modal-open')
    }

    name.value = '';
    tel.value = '';
    modalAccept.classList.add('modal-open')
  }
})

function closeModal () {
  modalAccept.classList.remove('modal-open');
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = ``;
}

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal-accept') && e.target.classList.contains('modal-open')){
    closeModal();
  }

  if (e.target.classList.contains('modal-accept__close') && e.target.closest('.modal-open')){
    closeModal()
  }
})