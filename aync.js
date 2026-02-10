async function greet(){ //always returns a promise
  // return ("Safee");

  return new Promise((resolve, reject)=>{
    reject("Rohit");
  })
}

const response = greet();
// console.log(response);

response.then((data)=>console.log(data))
.catch((error)=>{
  console.log("Error: "+ error);
})