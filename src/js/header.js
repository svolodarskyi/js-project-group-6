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
