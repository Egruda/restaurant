export default function contact() {

    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    
    const menu = document.createElement('h1');
    menu.classList.add('menuTitle');
    menu.textContent = "Menu";
    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');

    const pFirstdiv = document.createElement('div');
    pFirstdiv.classList.add('menu');

    const pSeconddiv = document.createElement('div');
    pSeconddiv.classList.add('menu');

    const pThirddiv = document.createElement('div');
    pThirddiv.classList.add('menu');

    const pFourthdiv = document.createElement('div');
    pFourthdiv.classList.add('menu');

    const pFifthdiv = document.createElement('div');
    pFifthdiv.classList.add('menu');
    
    const pFirst = document.createElement('p');
    pFirst.textContent = 'Pepperoni Pizza'

    const pFirstprice = document.createElement('p');
    pFirstprice.textContent = '$15'

    pFirstdiv.appendChild(pFirst);
    pFirstdiv.appendChild(pFirstprice);

    const pSecond = document.createElement('p');
    pSecond.textContent = 'Hawaiian Pizza'


    const pSecondprice = document.createElement('p');
    pSecondprice.textContent = '$16'

    pSeconddiv.appendChild(pSecond);
    pSeconddiv.appendChild(pSecondprice);
    
    const pThird = document.createElement('p');
    pThird.textContent = 'Vegetarian Pizza'

    const pThirdprice = document.createElement('p');
    pThirdprice.textContent = '$14';

    pThirddiv.appendChild(pThird);
    pThirddiv.appendChild(pThirdprice);

    const pFourth = document.createElement('p');
    pFourth.textContent = 'Super Supreme Pizza';

    const pFourthprice = document.createElement('p');
    pFourthprice.textContent = '$18';

    pFourthdiv.appendChild(pFourth);
    pFourthdiv.appendChild(pFourthprice);


    menuDiv.appendChild(pFirstdiv);
    menuDiv.appendChild(pSeconddiv);
    menuDiv.appendChild(pThirddiv);
    menuDiv.appendChild(pFourthdiv);

    content.appendChild(menu);
    content.appendChild(menuDiv);
    
    return content;
}

