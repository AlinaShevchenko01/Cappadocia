function phoneLink() {
  const phone = document.querySelectorAll('[data-tel]')

  phone.forEach(el => {
    if (window.innerWidth < 768){
      if (!el.hasAttribute('href')){
        el.setAttribute('href', 'tel:+380665557776')
      }
    }else {
      if (el.hasAttribute('href')){
        el.removeAttribute('href')
      }
    }
  })
}
phoneLink();
window.addEventListener('resize', phoneLink);
