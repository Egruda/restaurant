import initial, {initialTab} from './initial.js';
import contact from './contact.js';
import menu from './menu.js';
import './style.css';
import logoimg from './logo.jpg';
import storeimg from './store.jpg';



initial();

const contactTab = document.querySelector('#contact');
contactTab.addEventListener('click', () => document.body.replaceChild(contact(),document.querySelector('#content')));

const menuTab = document.querySelector('#menu');
menuTab.addEventListener('click', () => document.body.replaceChild(menu(),document.querySelector('#content')));

const homeTab = document.querySelector('#home');
homeTab.addEventListener('click', () => document.body.replaceChild(initialTab(),document.querySelector('#content')));