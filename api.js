const api = "http://localhost:8080/getUser";

const getFatch = async() =>{
  let responce = await fetch(api);
  console.log(responce);


};

