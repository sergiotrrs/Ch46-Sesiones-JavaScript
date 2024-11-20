

const validateFullName = ( fullName ) => {
    const result = {
        isValid : true,
        error: ""
    }
    
    if( fullName.length < 3 ){ // Longitud mínima
        result.isValid = false;
        result.error = "El nombre debe ser mayor o igual a 3 caracteres";
    } else if (  fullName.length > 50 ){ // Longitud máxima
        result.isValid = false;
        result.error = "El nombre debe ser menos o igual a 50 caracteres";
    }

    return result;
}

export { validateFullName };
