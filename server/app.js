import express  from "express";
import { config } from "dotenv";
import course from './routes/courseRoutes.js';
import user from './routes/userRoutes.js';
import errorMiddleWare from "./middlewares/error.js"
import cookieParser from "cookie-parser";
import payment from "./routes/paymentRoutes.js";
import other from "./routes/otherRoutes.js";
import cors from "cors";


config({
    path:"./config/config.env"
})
const app=express();


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    methods:['GET','POST','PATCH','PUT','DELETE'],
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(
    express.urlencoded({
    extended: true, 
})
);


app.use("/api/v1",course);
app.use("/api/v1",user);
app.use("/api/v1",payment);
app.use("/api/v1",other);


export default app;

app.use(errorMiddleWare);