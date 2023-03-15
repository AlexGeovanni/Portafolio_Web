const abrir_nav = document.querySelector("#abrir-nav");
const cerrar_nav = document.querySelector("#cerrar-nav");


abrir_nav.addEventListener('click',(e)=>{
    let hamb = e.target;
    hamb.style.opacity="0";
    hamb.style.display= "none"

    cerrar_nav.style.opacity="1";
    cerrar_nav.style.display= "block"
    cerrar_nav.style.color="#fff"
    menu();
})

cerrar_nav.addEventListener('click', (e)=>{
    let cerrar = e.target;
    abrir_nav.style.opacity="1";
    abrir_nav.style.display= "block"

    cerrar.style.opacity="0";
    cerrar.style.display= "none"
    menu();

})
function menu(e){
    const nav = document.querySelector("[data-nav]");
    nav.classList.toggle("abrir__nav")
}
