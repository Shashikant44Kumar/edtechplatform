import axios from "axios";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/sendToken.js";
import jwt from "jsonwebtoken";


const loginRequest = async (credentials) => {
    try {
    const response = await axios.post('http://localhost:4500/api/v1/user/sso/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Login failed:', error.response.data);
        throw error;
    }
};

const ssoLogin = catchAsyncError(async (req, res, next) => {
    const { email, password, username } = req.body;
    if (!email && !username || !password) {
        return next(new ErrorHandler("Bad request ", 400));
    }

    const credentials = {
        username:username,
        email:email,
        password: password,
        CLIENT_ID:process.env.SSO_CLIENT_ID
    };

    try {
        const loginResponse = await loginRequest(credentials);

        const token = loginResponse.token;

        const verifytoken = jwt.verify(token,process.env.SSO_CLIENT_SECRET);
        const email = verifytoken.email;
        const user = await User.findOne({email});
        
        if(!user){
            return next(new ErrorHandler("bad request",400));
        }

        sendToken(res,user,`welcome back ${user.name}`,200);

    } catch (error) {
        console.error('Login failed:', error);
        next(new ErrorHandler(error, 401)); 
    }
});


const ssoVerified = catchAsyncError(async(req,res,next) => {
    const {token} = req.body;
    if(!token){
        return next(new ErrorHandler("Bhai Kya Kar Raha Tu",400));
    }
    const verifytoken = jwt.verify(token,process.env.SSO_CLIENT_SECRET);
    const email = verifytoken.email;
    const user = await User.findOne({email});
    if(!user){
        return next(new ErrorHandler("Bhai tu nhi mil raha yar ",300));
    }
    sendToken(res,user,`Aaiye aapka intejar tha ${user.name}`,200);
})

export { 
    ssoLogin,
    ssoVerified
};


// 251198119229