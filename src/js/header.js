/*
Blogpost with theme toggle implementation
https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2

-- add event listener on the toggle element and add callback function toggleTheme() below
*/

// Устанавливает тему и сохраняет в localStorage
function setTheme(themeName) {
  document.body.className = themeName;
  localStorage.setItem('theme', themeName);
}

// Переключает тему при клике
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

// Инициализация темы при загрузке страницы
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('theme-light'); // Тема по умолчанию
  }
})();

// Добавляем обработчик клика на кнопку
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

const burgerBtn = document.querySelector('.burger-btn');
const modal = document.getElementById('modal');
const modalContainer = modal.querySelector('.modal-container');
const closeBtn = document.getElementById('close-btn');

// Открытие модалки
burgerBtn.addEventListener('click', () => {
  modal.classList.add('active');
  modalContainer.classList.add('active');
});

// Закрытие модалки
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modalContainer.classList.remove('active');
});

// Закрытие при клике вне модалки
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
    modalContainer.classList.remove('active');
  }
});
