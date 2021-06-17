import menuCard from './templates/menu-cards.hbs';
import menu from './menu.json';
import theme from './theme.js';
import './sass/main.scss';

const menuContainer = document.querySelector('.js-menu');

// const menuMarkup = createMenuItem(menu);

menuContainer.insertAdjacentHTML('beforeend', menuCard(menu));

// function createMenuItem(menu) {
//   return menu.map(menuCard).join('');
// }
