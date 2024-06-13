import React from 'react'
import { Heading, Stack, VStack , Text, Button , Image, Box, HStack} from '@chakra-ui/react'
import "./home.css";
import { Link } from 'react-router-dom';
import vg from "../../assests/Images/bg3.jpg";
import {CgGoogle,CgYoutube} from "react-icons/cg";
import {SiCoursera,SiUdemy} from "react-icons/si";
import {DiAws} from "react-icons/di";
import introvideo from "../../assests/Videos/intro.mp4"

function Home() {
  return (
     <section className='Home'>
        <div className="container">
          <Stack
          direction={["column","row"]}
          height="100%"
          justifyContent={["center","space-between"]}
          alignItems="center"
          spacing={["16","56"]}
          >
            {/* Vstack starts... */}

          <VStack
          width={"full"}
          alignItems={["center","flex-end"]}
          spacing="8"
          >
            <Heading children="Learn From the Experts" size={"2xl"}/> 
            <Text textAlign={["center","left"]} children="Find Valuable courses at reasonable price"/>
            <Link to="/courses">
                <Button size={"lg"} colorScheme={"yellow"}>
                    Explore Now
                </Button>
            </Link>
          </VStack>
           
           {/* Vstack ends.. */}
           <Image className="vector-graphics"
            borderRadius={"3xl"}
            boxSize={"md"}
            src={vg}
            objectFit="contain"/>
          </Stack>
        </div>

        <Box padding="8" bg="blackAlpha.800">
            <Heading textAlign={"center"} 
            color={"yellow.400"}
            fontFamily="body"
            children={"Our Brands"}
            />
            <HStack className='brandsBanner' 
              justifyContent={"space-evenly" }
              marginTop="6">
              <CgGoogle/>
              <CgYoutube/>
              <SiCoursera/>
              <SiUdemy/>
              <DiAws/>
            </HStack>
        </Box>
        
        <div className="container2">
            <video
            src={introvideo}
            controls controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            >
            </video>
        </div>
     </section>
  )
}

export default Home
