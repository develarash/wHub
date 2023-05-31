import dotenv from "dotenv" ;
import express from'express';
import cookieParser from"cookie-parser";
import  bodyParser from"body-parser";
import cors from"cors";
import routes from './routes.js';
import morgan from "morgan"
import * as http from 'http';
const mode="developmsent"


if(mode==="development"){
  app.use(morgan('combined'))
}
  


dotenv.config();
const app = express()
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Routes Middlewares
console.log("hello")


const port = process.env.PORT

routes(app)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


let promise = new Promise(function(resolve, reject) {

if(mode==="development"){
  console.log("server running on 3002")
 return http.createServer(app).listen(3002)}
  
  else{
   http.createServer(app).listen(3003)}
  }
  
);

