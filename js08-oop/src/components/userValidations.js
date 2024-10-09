


const isValid = ( newUser ) =>{
    let valid = true;

    if( newUser.password.length < 8  || newUser.password.length > 51  ) {
       alert("La longitud del password debe ser mayor a 8");
       valid = false;
    } else if( !newUser.checkbox ) {
        alert("Debes aceptar los términos y condiciones");
        valid = false;
    }

    return valid;
}

export { isValid };