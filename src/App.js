import React, { useState } from 'react';
import Header from './pages/Header';
import Landing from './pages/Landing';
import Wordpress from './pages/Wordpress';
import Eshop from './pages/Eshop';
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { BsBriefcase, BsShop, BsWordpress } from "react-icons/bs";

function App() {

  const [select, setSelect] = useState("");

  function changeSelect(e) {
    setSelect(e);
  }

  if (select === "") {
    return (
      <main>
        <Box h="auto" display="flex" justifyContent="center">

          <Box _hover={{ transitionDuration: '700ms', background: "white", w: '50%' }} transitionDuration='500ms' w="300px" p="3" mb="25px" mr="15px" ml="15px" display="flex" flexDirection="column" alignItems="center" borderRadius="15px" boxShadow='md' bg="lightblue">
            <Heading as='h4' size='md' mt="25px" mb="25px" textAlign="center">Landing Page</Heading>
            <BsBriefcase size={70} />
            <Text textAlign="center" fontSize='lg' mt="25px" mb="25px">We create a landing page for your business</Text>
            <Button boxShadow='md' colorScheme='blue' mb="25px" onClick={() => { changeSelect("landing") }}>I want this</Button>
          </Box>

          <Box _hover={{ transitionDuration: '700ms', background: "white", w: '50%' }} transitionDuration='500ms' w="300px" p="3" mb="25px" mr="15px" ml="15px" display="flex" flexDirection="column" alignItems="center" borderRadius="15px" boxShadow='md' bg="lightgreen">
            <Heading as='h4' size='md' mt="25px" mb="25px" textAlign="center">eShop</Heading>
            <BsShop size={70} />
            <Text textAlign="center" mb="25px" mt="25px" fontSize='lg'>We create an eshop site for your business</Text>
            <Button boxShadow='md' colorScheme='blue' mb="25px" onClick={() => { changeSelect("eshop") }}>I want this</Button>
          </Box>

          <Box _hover={{ transitionDuration: '700ms', background: "white", w: '50%' }} transitionDuration='500ms' h='400px' w="300px" p="3" mb="25px" mr="15px" ml="15px" display="flex" flexDirection="column" alignItems="center" borderRadius="15px" boxShadow='md' bg="tomato">
            <Heading as='h4' size='md' mt="25px" mb="25px" textAlign="center">Wordpress</Heading>
            <BsWordpress size={70} />
            <Text textAlign="center" mb="25px" mt="25px" fontSize='lg'>We create a wordpress site according to your needs</Text>
            <Button boxShadow='md' colorScheme='blue' mb="25px" onClick={() => { changeSelect("wordpress") }}>I want this</Button>
          </Box>

        </Box >
      </main >
    );
  } else if (select === "eshop") {
    return (
      <main>
        <Eshop />
      </main >
    );
  } else if (select === "wordpress") {
    return (
      <main>
        <Wordpress />
      </main >
    );
  }
  else if (select === "landing") {
    return (
      <main>
        <Landing />
      </main>
    );
  }
}

export default App;
