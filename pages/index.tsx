import { Box, Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from '../components/hero/Hero'
import PurchasingProcess from '../components/purchasing-process/PurchasingProcess'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <PurchasingProcess />
    </Box>
  )
}

export default Home
