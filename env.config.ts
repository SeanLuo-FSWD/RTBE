import dotenv from "dotenv";

let client_port: any;

if (process.env.NODE_ENV === "production") {
    client_port = "some link from aws";
  } else {
    client_port = 'http://localhost:3000';
  }


export default client_port;