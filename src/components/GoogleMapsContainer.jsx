"use client";

import { useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export const GoogleMapsContainer = ({ data, pan }) => {
  const markerCoordinate = [
    { lat: -6.2388996, lng: 106.8095295 },
    { lat: -6.28841, lng: 106.65123 },
    { lat: -6.251272, lng: 106.79422 },
    { lat: -6.0943738, lng: 106.7396941 },
  ];

  const branch = ["Senopati", "BSD", "Gandaria", "Pantai Indah Kapuk"];

  const mapRef = useRef(null);

  const [mapProps, setMapProps] = useState({ lat: -6.26604, lng: 106.7332973 });
  const [markerKey, setMarkerKey] = useState(data?.markerKey ?? -1);
  const [showInfoWindow, setShowInfoWindow] = useState(markerKey !== -1);
  const [mapZoom, setMapZoom] = useState(11);
  const [loaded, setLoaded] = useState(false);

  // Simulasi load script delay
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Update markerKey jika prop `data` berubah
  useEffect(() => {
    if (data?.markerKey !== undefined) {
      setMarkerKey(data.markerKey);
      setShowInfoWindow(data.markerKey !== -1);
      if (data.markerKey !== -1) {
        setMapProps(markerCoordinate[data.markerKey]);
        setMapZoom(18);
      }
    }
  }, [data]);

  // Update pan jika prop `pan` berubah
  useEffect(() => {
    if (mapRef.current && pan !== undefined) {
      mapRef.current.panTo(mapProps);
    }
  }, [mapProps, pan]);

  return (
    <div className="grid">
      {loaded && (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GAPI_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "300px" }}
            center={mapProps}
            zoom={mapZoom}
            options={{ disableDefaultUI: true, gestureHandling: "greedy" }}
            onLoad={(map) => (mapRef.current = map)}
            onZoomChanged={() => {
              if (mapRef.current) {
                setMapZoom(mapRef.current.getZoom());
              }
            }}
            onMouseOut={() => {
              setShowInfoWindow(false);
              setMarkerKey(-1);
            }}
          >
            {markerCoordinate.map((coord, i) => (
              <Marker
                key={i}
                position={coord}
                icon="/images/pin.png"
                onMouseOver={() => {
                  setMarkerKey(i);
                  setShowInfoWindow(true);
                }}
                onClick={(marker) => {
                  setMapProps({
                    lat: marker.latLng.lat(),
                    lng: marker.latLng.lng(),
                  });
                  setMapZoom(18);
                  setShowInfoWindow(true);
                }}
              >
                {showInfoWindow && markerKey === i && (
                  <InfoWindow
                    position={coord}
                    onCloseClick={() => {
                      setShowInfoWindow(false);
                      setMarkerKey(-1);
                    }}
                  >
                    <p>{branch[i]}</p>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};
