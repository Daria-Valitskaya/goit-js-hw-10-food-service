const body = document.body;
const changerTheme = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

changerTheme.addEventListener('change', switcherTheme);

function switcherTheme() {
  if (changerTheme.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

if (localStorage.getItem('theme') === Theme.DARK) {
  changerTheme.checked = true;
  body.classList.add(Theme.DARK);
}
