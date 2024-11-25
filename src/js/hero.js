const cta = document.querySelector('.rectangle');

cta.addEventListener('click', (event)=>{
    if (event.target.classList.contains('rectangle')) {

        const targetSection = document.getElementById('work-together');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
})
