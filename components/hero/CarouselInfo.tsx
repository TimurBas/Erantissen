import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react"

const CarouselInfo = () => {
    return (
        <Flex position="relative" top={-250} left={-350}>
            <svg width="706px" height="282px" viewBox="0 0 706 282" fill="#f2f0e3">
                <path d="M26.1594618,3.82519082 C50.8853938,6.88643857 80.5467631,4.92348269 109.720682,5.67976262 C133.654507,6.29875607 158.630257,5.88689662 183.12465,5.50153105 C239.169283,4.62241584 295.018936,2.9725695 350.9478,1.57080224 C382.802697,0.773577214 414.88304,1.30104634 446.8598,1.44796696 C523.407824,1.79720451 599.852265,-0.678769277 676.412476,0.183486185 C695.295094,0.397845783 698.567106,2.5510759 689.53099,9.31183312 C687.666492,10.7063748 685.887297,12.0479287 686.332096,13.8254274 C692.169317,37.0942822 694.375031,60.4064906 695.429143,83.8054063 C697.208337,123.288517 695.977525,162.781263 698.701155,202.235472 C699.907595,219.644361 699.340934,237.060476 701.08357,254.459732 C701.638045,260.013813 703.429426,265.57512 705.555929,271.078622 C707.591035,276.341271 702.686064,279.207427 689.707691,278.272916 C661.935193,276.278649 634.022553,277.063831 606.2988,277.369715 C571.488733,277.752672 536.861461,276.493008 501.959998,276.900051 C428.671799,277.752672 355.481091,279.315811 282.375686,281.136663 C254.926124,281.820687 228.018851,280.611603 200.861759,280.604377 C141.045476,280.587517 81.3327772,281.736389 21.5591467,281.998919 C6.95390797,282.063949 1.76255903,279.195384 3.74892024,273.357096 C8.0811375,260.627989 7.83131906,247.865164 3.8342241,235.116789 C3.52956747,234.124472 3.29802843,233.120113 3.29802843,232.12298 C3.24928337,192.495357 4.5836794,152.858099 2.74355337,113.244927 C1.47008866,85.8044902 0.46472179,58.3688702 0.00773684784,30.9260245 C-0.120218936,23.3006033 1.35431914,15.7594808 3.2919353,8.20631564 C4.33386097,4.13107474 5.83886471,3.81555668 26.1594618,3.82519082" id="path-1"></path>
            </svg>
            <VStack alignItems="flex-start" top="15px" right="-50px" w={100} h={100} position="absolute" zIndex={2}>
                <Box position="absolute">
                    <svg width="120px" height="120px" viewBox="0 0 66 64" fill="#48BB78">
                        <path d="M27.0675979,63.7329169 C20.9404987,63.7877567 15.1873072,62.381241 10.7839221,57.9840876 C5.65577937,52.8634231 1.73224233,46.9251473 0.903413825,39.4071119 C0.528883049,36.0120309 -0.102397609,32.6412539 0.0141369251,29.2069127 C0.274625884,21.5249811 2.57166488,14.6319946 8.0967728,9.08507538 C11.5360995,5.63203873 15.8728044,4.0715977 20.6419958,3.54875024 C25.4217813,3.02465643 30.2196389,2.71119722 34.779442,0.870948671 C37.7407902,-0.324309278 40.9439319,-0.160413115 43.9806848,0.588648436 C47.6424865,1.49163528 51.2369849,2.71306676 54.6364281,4.38630326 C57.8258599,5.95609198 59.9465392,8.51548948 60.9112208,11.9292658 C62.5414579,17.7036455 64.5842397,23.3783164 65.2610125,29.3919969 C65.6075002,32.4754882 66.2487517,35.5645882 65.8985249,38.6649053 C65.4398649,42.7199332 63.2487664,46.0327545 60.7840922,49.1486511 C57.624573,53.1419843 53.6991664,56.2647359 49.3873887,58.9207262 C46.9121204,60.4462692 44.0922339,60.9678703 41.3165932,61.6053827 C36.6221833,62.6822366 31.9321357,63.7914958 27.0675979,63.7329169" id="Fill-1"></path>
                    </svg>
                </Box>
                <Flex position="relative" width="100%" height="100%" pt={5} pl={5} flexDir="column" alignItems="center">
                    <Text fontWeight="bold" fontSize={20}>Spar</Text>
                    <Text fontWeight="bold" fontSize={30}>26%</Text>
                </Flex>
            </VStack>
            <Flex alignItems="flex-start" justifyContent="flex-start" flexDir="column" position="absolute" p={10}>
                <Heading fontSize={40} mb={3}>Vilde Priser på Probiotika fra NDS</Heading>
                <Text>Probiotic Classic 10 med 15 udvalgte bakteriestammer i pulverform. Levende fra indtagelse og veldokumenteret overlevelse af stammerne i mave/tarm-kanalen.</Text>
                <Button variant="carouselButton" p={5} mt={3}>Find dem her</Button>
            </Flex>
        </Flex>
    )
}

export default CarouselInfo