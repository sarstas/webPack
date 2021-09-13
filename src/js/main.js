import "../css/normalize.css";
import "../css/style.sass";


import renderCard from './card.js';
import items from './items.js';

const galleryRootEl = document.getElementById('galleryRoot');
items.map(item => galleryRootEl.appendChild(renderCard(item)));




