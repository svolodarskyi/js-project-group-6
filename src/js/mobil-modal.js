const burgerBtn = document.querySelector('.burger-btn');
const modal = document.getElementById('modal');
const modalContainer = modal.querySelector('.modal-container');
const closeBtn = document.getElementById('close-btn');

const mobileLinks = document.querySelectorAll('mobile-menu-link');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    modal.classList.remove('active');
    modalContainer.classList.remove('active');
  });
});

burgerBtn.addEventListener('click', () => {
  modal.classList.add('active');
  modalContainer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modalContainer.classList.remove('active');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
    modalContainer.classList.remove('active');
  }
});
