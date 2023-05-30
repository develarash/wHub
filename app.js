import dotenv from "dotenv" ;
import express from'express';
import cookieParser from"cookie-parser";
import  bodyParser from"body-parser";
import cors from"cors";
import routes from './routes.js';
import morgan from "morgan"
dotenv.config();
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'))

// Routes Middlewares


const port = process.env.PORT

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})