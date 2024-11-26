function setTheme(themeName) {
  document.body.className = themeName;
  localStorage.setItem('theme', themeName);
}

const savedTheme = localStorage.getItem('theme') || 'theme-light';
  setTheme(savedTheme);

document.getElementById('themeToggle').addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
  setTheme(newTheme);
});

const burgerBtn = document.querySelector('.burger-btn');
const modal = document.getElementById('modal');
const modalContainer = modal.querySelector('.modal-container');
const closeBtn = document.getElementById('close-btn');

const mobileLinks = document.querySelectorAll(".modal-link");

mobileLinks.forEach(link =>{
  link.addEventListener("click", ()=>{
    modal.classList.remove('active');
  })
})

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
