import initial, {initialTab} from './initial.js';
import contact from './contact.js';
import menu from './menu.js';
import logo from './logo.jpg';
import pizza from './pizza.jpg';
import store from './store.jpg';
import './style.css';

initial();

const contactTab = document.querySelector('#contact');
contactTab.addEventListener('click', () => document.body.replaceChild(contact(),document.querySelector('#content')));

const menuTab = document.querySelector('#menu');
menuTab.addEventListener('click', () => document.body.replaceChild(menu(),document.querySelector('#content')));

const homeTab = document.querySelector('#home');
homeTab.addEventListener('click', () => document.body.replaceChild(initialTab(),document.querySelector('#content')));