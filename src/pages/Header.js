import React from 'react'
import { Heading, } from "@chakra-ui/react"

function Header() {
    return (
        <header>
            <Heading _hover={{ cursor: 'pointer' }} mb="25px" mt="25px" as="h1" size='4xl' textAlign="center" onClick={() => { window.location.reload() }}>SEB.ART</Heading>
        </header >
    )
}

export default Header