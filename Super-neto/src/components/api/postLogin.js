import { domainName } from "./domainName";

const postLogin = async ( registerFormData ) => {
  const url = `${domainName()}/api/v1/login`;

  const options = {
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerFormData),
  };

  const response = await fetch(url, options);

  if( response.status !== 200){
    const serverError = await response.json();
    throw serverError.message;
  }

  const loginResult = await response.json();
  console.log(loginResult);

  return loginResult;
};

export { postLogin };
