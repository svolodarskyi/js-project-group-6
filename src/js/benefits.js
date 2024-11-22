

 const benefitsIcons = document.querySelectorAll('.benefits-icon');


  benefitsIcons.forEach(icon => {

    icon.addEventListener('mouseenter', () => {
      icon.classList.add('rotate-animation'); 
    });


    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('rotate-animation'); 
    });
  });