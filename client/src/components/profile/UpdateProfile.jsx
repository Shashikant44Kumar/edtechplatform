import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const dispatch = useDispatch();
    const submitHandler = e => {
      e.preventDefault();
      dispatch(updateProfile(name,email));
    }
    const {loading,message,error} = useSelector(state => state.profile);

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:'clearError'});
      }
      if(message){
        toast.success(message);
        dispatch({type:'clearMessage'});
      }
    },[dispatch,error,message]);

  return (
    <Container
    py={"16"}
    minH="90vh"
    >
     <form onSubmit={submitHandler}>
         <Heading children="Update Profile" my="16" textAlign={["center","left"]} textTransform="uppercase"/>
         <VStack spacing={"8"}>
         <Input 
                 value={name} 
                 onChange={(e)=>setName(e.target.value)} 
                 type="text"
                 placeholder='New Name'
                 focusBorderColor='yellow.500'
         />
              <Input 
                 value={email} 
                 onChange={(e)=>setEmail(e.target.value)} 
                 type="email"
                 placeholder='Enter your email'
                 focusBorderColor='yellow.500'
         />
         <Button 
         w="full" 
         type="submit" 
         colorScheme={"yellow"} 
         isLoading={loading}
         >Update</Button>
         </VStack>
     </form>
 
    </Container>
  )
}

export default UpdateProfile
