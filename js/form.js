    const form = document.querySelector('[data-formContacto]');
    form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Nombre = document.querySelector('#nombre').value;
    const Email = document.querySelector('#email').value;
    const Msj = document.querySelector('#mensaje').value;
    window.location.href=`mailto:geovanialex8@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A${Nombre}%0ACorrreo%3A${Email}%0AMensaje%3A${Msj}`
})

