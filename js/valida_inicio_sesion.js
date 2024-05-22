const formulario = document.getElementById('formInicioSesion');

formulario.addEventListener('submit', evento =>{
    evento.preventDefault()

    if(validarFormulario()){
        formulario.submit();
    }
})

function validarFormulario(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === ''){
        mostarError('email', 'Por favor ingresar un email')
        return false;
    }else{
        mostarError('email','')
    }
    if(!validarEmail){
        mostarError('email', 'Por favor ingresar un email válido')
        return false;
    }else{
        mostarError('email','')
    }
    if(password === ''){
        mostarError('password', 'Ingresar una contraseña')
        return false;
    }else{
        mostarError('password','')
    }
    return true;

}

function validarEmail(email){
    const mailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    mailRegEx.test(email);
}

function mostarError(campo, mensaje){
    const campoError = document.getElementById(`${campo}-error`);
    campoError.innerText = mensaje;
}