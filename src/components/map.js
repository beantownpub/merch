import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 42.350730, lng: -71.172720 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 42.350730, lng: -71.172720 }} />}
    </GoogleMap>
))
