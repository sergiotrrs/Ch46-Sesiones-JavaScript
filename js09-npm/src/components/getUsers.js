
const getUsers = async( url )=>{
   
    const response = await fetch( url );
    const users = await response.json();
    console.log( users );
}

export { getUsers };