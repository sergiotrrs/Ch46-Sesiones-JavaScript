
const postUser = async ( newUser ) => {
    const url = "http://awc-demo.us-east-1.elasticbeanstalk.com/api/v1/users";
    // const url = "https://formsubmit.co/ajax/your@email.com";
 
    const options = { 
     method: "POST", // POST, PUT, DELETE, GET
     headers: { "Content-Type":"application/json" },
     body:  JSON.stringify( newUser ) 
    }
 
    try {
      const response = await fetch( url, options  );
      const registeredUser = await response.json(); 
      console.table( registeredUser );
      alert("Felicidades, el registro ha sido exitoso");
    } catch (error) {
      console.warn(error);
    }
 }

 export {postUser};