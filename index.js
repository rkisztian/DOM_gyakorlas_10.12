class Etel {
    constructor(eteleNev,etelKaloria){
        this.eteleNev = eteleNev;
        this.etelKaloria = etelKaloria;
    }
}





let Etelek = [];

let osszKaloria = 0;

document.getElementById('alma').addEventListener('click', () =>{
    osszKaloria += 100;
    let lista = document.getElementById('lista');
    let liElem = document.createElement('li');

    let eleje = document.createElement('span');
    eleje.textContent = 'Alma(';

    let vege = document.createElement('span');
    vege.textContent = ')';

    let kozepe = document.createElement('i');
    kozepe.textContent = 100;

    liElem.appendChild(eleje);
    liElem.appendChild(kozepe);
    liElem.appendChild(vege);

    lista.appendChild(liElem);

    document.getElementById('kaloria').textContent = osszKaloria + " kaloria";
})

document.getElementById('burger').addEventListener('click', ()=>{
    osszKaloria += 200;

    let lista = document.getElementById('lista');
    let liElem = document.createElement('li');

    let eleje = document.createElement('span');
    eleje.textContent = 'Burger(';

    let vege = document.createElement('span');
    vege.textContent = ')';

    let kozepe = document.createElement('i');
    kozepe.textContent = 200;

    liElem.appendChild(eleje);
    liElem.appendChild(kozepe);
    liElem.appendChild(vege);

    lista.appendChild(liElem);

    document.getElementById('kaloria').textContent = osszKaloria + " kaloria";
})

document.getElementById('viz').addEventListener('click', ()=>{
    osszKaloria += 1;

    let lista = document.getElementById('lista');
    let liElem = document.createElement('li');

    let eleje = document.createElement('span');
    eleje.textContent = 'Viz(';

    let vege = document.createElement('span');
    vege.textContent = ')';

    let kozepe = document.createElement('i');
    kozepe.textContent = 1;

    liElem.appendChild(eleje);
    liElem.appendChild(kozepe);
    liElem.appendChild(vege);

    lista.appendChild(liElem);

    document.getElementById('kaloria').textContent = osszKaloria + " kaloria";
})

document.getElementById('reset').addEventListener('click', ()=>{
    osszKaloria = 0;

    document.getElementById('lista').textContent = "";
    document.getElementById('kaloria').textContent = 0 + " kaloria";
})


document.getElementById('statisztika').addEventListener('click', ()=>{
    if(etelKaloria < 200){
        Etelek.push(Etel);
    }
})