// import React from 'react'
// import { Container,Button,Heading,VStack } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
// import { RiFileWarningFill } from 'react-icons/ri'
// function PaymentFail() {
//   return (
//     <Container h="90vh">
//     <VStack
//      justifyContent={"center"}
//      h="full"
//      spacing={"4"}
//     >
//     <RiFileWarningFill color='red' size={"5rem"}/>
//     <Heading textTransform={"uppercase"}>Payment Fail</Heading>
//      <Link to="/subscribe">
//          <Button bg={"yellow.300"} variant={"ghost"}>Try again</Button>
//      </Link>
//      <Heading size="xs">
//     Reference : ooeroejffkdfkkdadieruakdkdjdjfieori
//      </Heading>
//     </VStack>
//   </Container>
//   )
// }

// export default PaymentFail;


import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h="90vh">
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading textTransform={'uppercase'}>Payment Fail</Heading>
        <Link to="/subscribe">
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
