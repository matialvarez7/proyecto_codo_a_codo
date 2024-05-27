document.addEventListener('DOMContentLoaded', ()=>{
    const formulario = document.getElementById('formInicioSesion');
    
    formulario.addEventListener('submit', evento =>{
        evento.preventDefault()
    
        if(validarFormulario()){
            evento.preventDefault()
            console.log("El formualario es valido")
        }else{
            evento.preventDefault()
            console.log("El formulario no es valido")
        }
    })

    function validarFormulario(){
        let formularioValido = true;
        formularioValido = validarCampoEmail('email', "el correo electrónico no es válido") && formularioValido;
        formularioValido = validarCampoFormulario('password', "ingresar contraseña") && formularioValido;
        return formularioValido;
    }


    function validarEmail(email){
        const mailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        mailRegEx.test(email);
    }

    function mostrarError(campo, mensaje){
        const divPadre = campo.parentNode;
        const error = document.querySelector('.error-text');
        divPadre.classList.add('error');
        error.innerText = mensaje;
    }

    function eliminarError(input){
        const divPadre = input.parentNode;
        divPadre.classList.remove('error');
        const error = document.querySelector('.error-text');
        error.innerText = '';
    }

    formulario.querySelectorAll('input').forEach(input =>{
        input.addEventListener('change',()=>{
            const valor = input.value.trim();
            if(valor !== ''){
                eliminarError(input);
            }
        })
    })

    function validarCampoFormulario(id, mensaje){
        const campo = document.getElementById(id);
        const valor = campo.value.trim();
        if(valor === ''){
            mostrarError(campo, mensaje);
            return false;
        }else{
            eliminarError(campo)
            return true;
        }
    }

    function validarCampoEmail(id, mensaje){
        const campo = document.getElementById(id);
        const email = campo.value.trim();
        if(email === ''){
            mostrarError(campo, 'Ingresar correo electrónico');
            return false;
        }else if(!validarEmail(email)){
            mostrarError(campo, mensaje);
            return false
        }else{
            eliminarError(campo);
            return true
        }
    
    }
})
