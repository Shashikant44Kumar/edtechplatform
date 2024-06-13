import React from 'react'
import { Container,Button,Heading,VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { RiFileWarningFill } from 'react-icons/ri'
function NotFound() {
  return (
    <Container h="90vh">
    <VStack
     justifyContent={"center"}
     h="full"
     spacing={"4"}
    >
    <RiFileWarningFill color='red' size={"5rem"}/>
    <Heading>Page Not Found</Heading>
     <Link to="/">
         <Button bg={"yellow.300"} variant={"ghost"}>Go to Home</Button>
     </Link>
     <Heading size="xs">
    Reference : ooeroejffkdfkkdadieruakdkdjdjfieori
     </Heading>
    </VStack>
  </Container>
  )
}

export default NotFound
