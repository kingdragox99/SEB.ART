import React from 'react'
import { Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Checkbox } from "@chakra-ui/react"

function Landing() {

    return (
        <Box>
            <Heading mb="25px" mt="25px" as="h2" size='2xl' textAlign="center">Landing</Heading>

            <Tabs isFitted>
                <TabList>
                    <Tab>Designe</Tab>
                    <Tab>Function</Tab>
                    <Tab>Prices</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Heading mb="25px" mt="25px" as="h3" size='xl' textAlign="center">Designe</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading mb="25px" mt="25px" as="h3" size='xl' textAlign="center">Function</Heading>
                    </TabPanel>
                    <TabPanel>
                        <Heading mb="25px" mt="25px" as="h3" size='xl' textAlign="center">Prices</Heading>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </Box>
    )
}

export default Landing