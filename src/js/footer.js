
const socialLinks = document.querySelectorAll('.links-item a');


const addVibrationEffect = (link) => {
    link.classList.add('vibrate'); 

    setTimeout(() => {
        link.classList.remove('vibrate');
    }, 300);
};

socialLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => addVibrationEffect(link));
});
