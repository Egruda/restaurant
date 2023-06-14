import storeimg from './store.jpg';

export default function contact() {

    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    
    const contactUs = document.createElement('h1');
    contactUs.classList.add('contact');
    contactUs.textContent = "Contact Us";
    
    const store = document.createElement('img');
    store.src = storeimg;
    store.setAttribute('alt', 'store');
    store.setAttribute('id', 'store');
    
    const addressphoneDiv = document.createElement('div');
    addressphoneDiv.classList.add('wholeAddress');

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('address');
    
    const firstAddress = document.createElement('h2');
    firstAddress.textContent = 'Address'; 
    firstAddress.classList.add('addressP');
    
    const secondAddress = document.createElement('p');
    secondAddress.textContent = '31 Mozarella Road';
    secondAddress.classList.add('addressP');
    
    const thirdAddress = document.createElement('p');
    thirdAddress.textContent = 'Pizza Town';
    thirdAddress.classList.add('addressP');

    const fourthAddress = document.createElement('p');
    fourthAddress.textContent = 'Pepperoni 55555';
    fourthAddress.classList.add('addressP');

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('address');
    
    const phone = document.createElement('h2');
    phone.textContent = 'Phone'
    phone.classList.add('addressP');
    
    const secondPhone = document.createElement('p');
    secondPhone.textContent = '(99) 999 999'
    secondPhone.classList.add('addressP');

    content.appendChild(contactUs);
    
    addressDiv.appendChild(firstAddress);
    addressDiv.appendChild(secondAddress);
    addressDiv.appendChild(thirdAddress);
    addressDiv.appendChild(fourthAddress);
    phoneDiv.appendChild(phone);
    phoneDiv.appendChild(secondPhone);
    addressphoneDiv.appendChild(store);
    addressphoneDiv.appendChild(addressDiv);
    addressphoneDiv.appendChild(phoneDiv);
    content.appendChild(addressphoneDiv);
    
    return content;
}

