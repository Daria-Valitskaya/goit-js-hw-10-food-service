import menuCard from './templates/menu-cards.hbs';
import menu from './menu.json';
import './sass/main.scss';

const menuContainer = document.querySelector('.js-menu');
const changerTheme = document.querySelector('#theme-switch-toggle')
const menuMarkup = createMenuItem (menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
changerTheme.addEventListener('change', switcherTheme);


function createMenuItem(menu){
    return menu.map(menuCard).join('')
};


function switcherTheme(){};

