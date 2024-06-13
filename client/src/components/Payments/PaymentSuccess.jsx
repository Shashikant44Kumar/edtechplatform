// import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
// import React from 'react'
// import { RiCheckboxCircleFill } from 'react-icons/ri'
// import { Link } from 'react-router-dom'

// const PaymentSuccess = () => {
//   return (
//      <Container h="90vh" p="16">
//        <Heading my="8" textAlign={"center"}>You have a pro pack</Heading>
//        <VStack
//        boxShadow={"dark-lg"}
//        pb="16"
//        alignItems={"center"}
//        borderRadius="lg"
//        >
//          <Box w="full" bg="yellow.200" p="4" css={{borderRadius:"8px 8px 0 0"}}>
//             <Text color={"green"} fontSize="lg">
//                 Payment success
//             </Text>
//          </Box>
//          <Box p="4"
//          >
//             <VStack textAlign={"center"}
//             px="8"
//             mt="4"
//             spacing={"8"}
//             >
//                 <Text textAlign={"center"}>Congratulations You are a Pro member!! you can access our premium content now</Text>
//                 <Heading size={"3xl"}>
//                     <RiCheckboxCircleFill/>
//                 </Heading>

//             </VStack>
//         </Box>
//         <Link to="/profile">
//             <Button variant={"ghost"}>Go to profile</Button>
//         </Link>
//         <Heading size="xs">
//        Reference : ooeroejffkdfkkdadieruakdkdjdjfieori
//         </Heading>
//        </VStack>
//      </Container>
//   )
// }

// export default PaymentSuccess;


import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get('reference');

  return (
    <Container h="90vh" p="16">
      <Heading my="8" textAlign={'center'}>
        You have Pro Pack
      </Heading>

      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w="full"
          bg="yellow.400"
          p="4"
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'}>Payment Success</Text>
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulation you're a pro member. You have access to premium
              content.
            </Text>

            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to="/profile">
          <Button variant={'ghost'}>Go to profile</Button>
        </Link>

        <Heading size={'xs'}>Reference: {reference}</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;

