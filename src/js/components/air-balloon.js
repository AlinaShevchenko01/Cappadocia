window.addEventListener('click', (e) => {
  if (e.target.classList.contains('price__balloon')) {
    e.target.classList.add('fly')
    setTimeout(() => { e.target.classList.remove('fly') }, 5000)
  }
})