import { useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export const GoogleMapsContainer = ({ data, pan }) => {
  const markerCoordinate = [
    {
      lat: -6.2388996, // Senopati
      lng: 106.8095295,
    },
    {
      lat: -6.28841, // BSD
      lng: 106.65123,
    },
    {
      lat: -6.251272, // Gandaria
      lng: 106.79422,
    },
    {
      lat: -6.0943738, // Pantai Indah Kapuk
      lng: 106.7396941,
    },
    {
      lat: -6.2736171, // Bintaro
      lng: 106.7380908,
    },
  ];

  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloaded(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const branch = [
    "Senopati",
    "BSD",
    "Gandaria",
    "Pantai Indah Kapuk",
    "Bintaro",
  ];

  const mapRef = useRef(null);

  const [mapProps, setmapProps] = useState({
    lat: -6.26604,
    lng: 106.7332973,
  });

  const [markerKey, setmarkerKey] = useState(-1);
  const [showInfoWindow, setshowInfoWindow] = useState(false);

  const [mapZoom, setmapZoom] = useState(11);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(mapProps);
    }
  }, [mapProps]);

  useEffect(() => {
    if (pan !== -1) {
      setmapProps(markerCoordinate[pan]);
      setmapZoom(18);
      setmarkerKey(pan);
      setshowInfoWindow(true);
    }
  }, [pan]);

  useEffect(() => {
    if (data !== -1) {
      setmapProps(markerCoordinate[data]);
      setmapZoom(14);
      setmarkerKey(data);
      setshowInfoWindow(true);
    } else if (pan === -1) {
      setmapZoom(11);
    }
  }, [data, pan]);

  return (
    <div className="grid">
      {loaded && (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GAPI_KEY}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "300px",
            }}
            options={{
              disableDefaultUI: true,
              gestureHandling: "greedy",
            }}
            center={mapProps}
            zoom={mapZoom}
            onLoad={(e) => {
              mapRef.current = e;
            }}
            onZoomChanged={() => {
              // FIX: Ensure mapRef.current exists before calling getZoom()
              if (mapRef.current) {
                const newZoom = mapRef.current.getZoom();
                if (newZoom !== mapZoom) {
                  setmapZoom(newZoom);
                }
              }
            }}
            onMouseOut={() => {
              // Removed logic
            }}
          >
            {markerCoordinate.map((e, i) => {
              return (
                <Marker
                  key={i}
                  onMouseOver={() => {
                    setmarkerKey(i);
                    setshowInfoWindow(true);
                  }}
                  onClick={() => {
                    setmapProps(e);
                    setmapZoom(18);
                    setmarkerKey(i);
                    setshowInfoWindow(true);
                  }}
                  position={e}
                  icon={"/images/pin.png"}
                >
                  {showInfoWindow && markerKey === i && (
                    <InfoWindow
                      position={e}
                      onCloseClick={() => {
                        setshowInfoWindow(false);
                        setmarkerKey(-1);
                      }}
                    >
                      <p>{branch[i]}</p>
                    </InfoWindow>
                  )}
                </Marker>
              );
            })}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};
