export default function initial() {

    const content = document.querySelector('#content');
 
    
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Welcome to Pronto's Pizza!";
    
    const logo = new Image();
    logo.src = '../src/logo.jpg';
    logo.setAttribute('alt', 'logo');
    logo.setAttribute('id', 'logo');
    
    const about = document.createElement('div');
    about.classList.add('about');
    
    const pAbout = document.createElement('p');
    pAbout.textContent = 'We are the best Pizza in town. Our pizza use 100% 00 flour imported from Italy to bring authentic Italian pizza. All of our sauces are homemade, cooked for over 24 hours. We also only use the freshest and highest-quality ingredients in our Pizza.'
    
    const motto = document.createElement('h2');
    motto.textContent = '"Pronto, original Pizza!"'

    content.appendChild(title);
    content.appendChild(logo);
    about.appendChild(pAbout);
    about.appendChild(motto);
    content.appendChild(about);
}

export function initialTab() {

    const content = document.createElement('div');
    content.setAttribute('id', 'content');
 
    
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Welcome to Pronto's Pizza!";
    
    const logo = new Image();
    logo.src = '../src/logo.jpg';
    logo.setAttribute('alt', 'logo');
    logo.setAttribute('id', 'logo');
    
    const about = document.createElement('div');
    about.classList.add('about');
    
    const pAbout = document.createElement('p');
    pAbout.textContent = 'We are the best Pizza in town. Our pizza use 100% 00 flour imported from Italy to bring authentic Italian pizza. All of our sauces are homemade, cooked for over 24 hours. We also only use the freshest and highest-quality ingredients in our Pizza.'
    
    const motto = document.createElement('h2');
    motto.textContent = '"Pronto, original Pizza!"'

    content.appendChild(title);
    content.appendChild(logo);
    about.appendChild(pAbout);
    about.appendChild(motto);
    content.appendChild(about);

    return content;
}




