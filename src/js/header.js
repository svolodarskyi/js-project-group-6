/*
Blogpost with theme toggle implementation
https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2

-- add event listener on the toggle element and add callback function toggleTheme() below
*/

function toggleModalContentVisibility(themeName) {
  const modalContent = document.querySelector('.dynamic-content');
  if (themeName === 'theme-dark') {
    modalContent.style.display = 'flex';
  } else {
    modalContent.style.display = 'none';
  }
}

function setTheme(themeName) {
  document.body.className = themeName;
  localStorage.setItem('theme', themeName);

  toggleModalContentVisibility(themeName);
}

(function () {
  const savedTheme = localStorage.getItem('theme') || 'theme-light';
  setTheme(savedTheme);
})();
document.getElementById('themeToggle').addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
  setTheme(newTheme);
});

const burgerBtn = document.querySelector('.burger-btn');
const modal = document.getElementById('modal');
const modalContainer = modal.querySelector('.modal-container');
const closeBtn = document.getElementById('close-btn');

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
