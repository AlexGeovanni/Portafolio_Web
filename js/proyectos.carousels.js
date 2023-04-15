const contentProyecto = document.querySelector('[data-proyectos]');
const puntos = document.querySelectorAll('.punto');
const moverFlecha = document.querySelectorAll('[data-mover]');
let posicion = 0;
puntos.forEach((cadaPunto, i)=>{
    cadaPunto.addEventListener('click',()=>{
        posicion = i;
        let operacion = posicion * -25;
        contentProyecto.style.transform=`translateX(${operacion}%)`
        puntos.forEach((cadaPunto)=>{
            cadaPunto.classList.remove('activo')
        })
        cadaPunto.classList.add('activo');
    })
})

moverFlecha.forEach((flecha)=>{
    flecha.addEventListener('click',()=>{
        if(posicion <=3 && posicion>=0){
            flecha.id=="left"? console.log(posicion--):console.log(posicion++);
            if(posicion==4) posicion=0;
            if(posicion<0) posicion=3;
            let operacion = posicion * -25;
            contentProyecto.style.transform=`translateX(${operacion}%)`
            puntos.forEach((cadaPunto)=>{
                cadaPunto.classList.remove('activo')
            })
            puntos[posicion].classList.add('activo');
            }
    })
})