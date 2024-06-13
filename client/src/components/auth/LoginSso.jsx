import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ssoLogin } from '../../redux/actions/user';
import axios  from 'axios';
import { server } from '../../redux/store';


// const loginRequest = async (credentials) => {
//     try {
//     const response = await axios.post('http://localhost:4500/api/v1/user/sso/login', credentials);
//         return response.data;
//     } catch (error) {
//         console.error('Login failed:', error.response.data);
//         throw error;
//     }
// };


const getClientId = async() => {
    try{
        const response = await axios.get(`${server}/clientid`);
        return response.data;
    }catch(error){
        console.log("Unable to get client-id")
        throw error;
    }
}


const loginRequestToIdp = async ({email,password}) => {
    try {
    let CLIENT_ID = await getClientId();
    const credentials = {
        email:email,
        password:password,
        CLIENT_ID:CLIENT_ID.clientId
    }
    const response = await axios.post('http://localhost:4500/api/v1/user/sso/login', credentials);
    return response.data.token;
    } catch (error) {
        console.error('Login failed:', error.response.data);
        throw error;
    }
};


function LoginSso() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const dispatch = useDispatch();
    const submitHandler = async (e)=>{
       e.preventDefault();
       let token;
       try{
         token = await loginRequestToIdp({email,password});
         console.log(token);
       }catch(error){
         console.log('login failed',error);
       }
       dispatch(ssoLogin(token));
    }


  return (
    <Container height={"95vh"}>
       
        <VStack height="full" justifyContent={"center"} spacing="16">
            <Heading children={"Welcome to The-Algorithm"} /> 
            <form onSubmit={submitHandler}  style={{width:"100%"}}>
               <Box my={"4"}>
               <FormLabel htmlFor='email' children={"Email Address"} />
                <Input required id="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder="bond@gmail.com"
                type="email"
                focusBorderColor='yellow.500'
                />
               </Box>
               <Box my={"4"}>
               <FormLabel htmlFor='password' children={"Password"} />
                <Input required id="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder="Enter your password"
                type="password"
                focusBorderColor='yellow.500'
                />
               </Box>
               <Button my="4" colorScheme={"yellow"} type="submit" >
                 Login
               </Button>
            </form>
        </VStack>
    </Container>
  )
}

export default LoginSso;
