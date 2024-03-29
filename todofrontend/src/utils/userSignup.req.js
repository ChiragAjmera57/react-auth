import axios from "axios"


export function signUpUser({name,email,mobile,password}) {
  return new Promise((resolve, reject) => {
    const apiUrl = 'http://localhost:8080/signup';
    const userData = {
      name,email,mobile,password
    };

    // Make a POST request to the server
    axios
      .post(apiUrl, userData)
      .then((response) => {
        console.log(response)
        // Handle success - You can navigate to another page or display a success message.
        resolve(response.data); // Resolve the promise with the response data
      })
      .catch((error) => {
        // Handle error - Display an error message or take appropriate action.
        reject(error.response.data); // Reject the promise with the error data
      });
  });
}


