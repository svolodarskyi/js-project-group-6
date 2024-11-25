const cta = document.querySelector('.rectangle');

cta.addEventListener('click', (event)=>{
    if (event.target.classList.contains('rectangle')) {

        const targetSection = document.getElementById('work-together');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
})


const socialLinks = document.querySelectorAll('.s-m-item');


const addVibrationEffect = (link) => {
    link.classList.add('vibrate'); 
    setTimeout(() => {
        link.classList.remove('vibrate');
    }, 300);
};

socialLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => addVibrationEffect(link));
});
