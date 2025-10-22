"use client";
import React, { useEffect, useState} from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import { setDefaults, fromAddress } from 'react-geocode';
import Spinner from './Spinner';
import Image from 'next/image';
import pin from '@/assets/images/pin.svg';
import { set } from 'mongoose';

const PropertyMap = ({property}) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [loading, setLoading] = useState(true);
    const [geocodeError, setGeocodeError] = useState(null);
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 12,
        width: '100%',
        height: '500px',
    });

    setDefaults({
        key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODE_API_KEY,
        language: 'en',
        region: 'us',
    });

    useEffect(() => {
        const fetchCoords = async () => {
            try {
            const res = await fromAddress(`${property.location.street},
                 ${property.location.city},
                  ${property.location.state},
                   ${property.location.zip}`);

            // Check for results
            if(res.results.length === 0) {
                setGeocodeError(true);
                setLoading(false);
                return;
            }
            const { lat, lng } = res.results[0].geometry.location;
            setLat(0);
            setLng(0);
            setViewport({
                ...viewport,
                latitude: 0,
                longitude: 0,
            });
            setLoading(false);
        } catch (error) {
            console.error('Geocoding error:', error);
            setGeocodeError(true);
            setLoading(false);
        }
    }
        fetchCoords();
    }, []);

    if (loading) {
        return <Spinner message="Loading map..." />
    }

    if (geocodeError) {
        //Handle geocode error
        return <div className="text-xl">Unable to load map for the provided address.</div>
    }

  return !loading && (
    <Map mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    mapLib={import('mapbox-gl')}
    initialViewState={{
        longitude:0,
        latitude:0,
        zoom:15,
    }}
    style={{width: '100%', height: '500px'}}
    mapStyle='mapbox://styles/mapbox/streets-v9'
    >
        {/* <NavigationControl position='top-right' /> */}
        <Marker latitude={lat} longitude={lng} anchor="bottom">
            <Image src={pin} alt="Property Location" />
        </Marker>
    </Map>
  )
}

export default PropertyMap