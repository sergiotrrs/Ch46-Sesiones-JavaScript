import axios from '../../node_modules/axios/dist/esm/axios.js';


const getUsers = async( url )=>{
   
    const response = await fetch( url );
    console.log( response.status );
    const users = await response.json();
    console.log( users );
}

const getUsersAxios = async ( url ) =>{

   const response = await axios.get( url );
   console.log( response.status);
   console.log( response );

}

const myVar1 = 2;
const myVar2 = 2;

export { myVar1, getUsers, getUsersAxios };
export default myVar2;