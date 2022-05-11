import { Box, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from '../components/hero/Hero'
import HomeProducts from '../components/product/HomeProducts'
import PurchasingProcess from '../components/purchasing-process/PurchasingProcess'
import Map from '../components/map/Map'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <PurchasingProcess />
      <HomeProducts />
      <Divider />
      <Map />
    </Box>
  )
}

export default Home
