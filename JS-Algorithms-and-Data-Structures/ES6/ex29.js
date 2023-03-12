// Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
    makeServerRequest.catch(error); // added code
    console.log(error); // added code
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });