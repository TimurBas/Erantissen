import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Divider, Flex, Heading } from '@chakra-ui/react';

const containerStyle = {
    width: '65%',
    height: '400px'
};

const center = {
    lat: 56.09173178317564,
    lng: 9.757359211930163
};

const position = {
    lat: 56.09173178317564,
    lng: 9.757359211930163
}
function Map() {
    return (
        <Flex justifyContent="center" alignItems="center" mt={10} flexDir="column">
            <Heading mb={10}>Find os her!</Heading >
            <LoadScript googleMapsApiKey="AIzaSyBZp72l6IhoUVzzT7XlmqjZQ9T3LhLni8o">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={19}>
                    {

                    }
                    <></>
                </GoogleMap>
            </LoadScript>
        </Flex>
    )
}

export default React.memo(Map)