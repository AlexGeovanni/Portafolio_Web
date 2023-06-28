const abrir_nav = document.querySelector("#abrir-nav");
const cerrar_nav = document.querySelector("#cerrar-nav");
const nav = document.querySelector("[data-nav]");
const a = nav.querySelectorAll('a')

abrir_nav.addEventListener('click',()=>{
    abrir_nav.style.opacity="0";
    abrir_nav.style.display= "none"
    cerrar_nav.style.opacity="1";
    cerrar_nav.style.display= "block"
    cerrar_nav.style.color="#fff"
    menu();
})

cerrar_nav.addEventListener('click', ()=>{
    abrir_nav.style.opacity="1";
    abrir_nav.style.display= "block"
    cerrar_nav.style.opacity="0";
    cerrar_nav.style.display= "none"
    menu();
})

a.forEach((Element)=>{
    Element.addEventListener('click',()=>{
        abrir_nav.style.opacity="1";
        abrir_nav.style.display= "block"
        cerrar_nav.style.opacity="0";
        cerrar_nav.style.display= "none"
        menu();
    })
})



function  menu(){
    nav.classList.toggle("abrir__nav");
}

