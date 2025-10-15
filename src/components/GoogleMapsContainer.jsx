import { useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

class LoadScriptOnlyIfNeeded extends LoadScript {
  componentDidMount() {
    const cleaningUp = true;
    const isBrowser = typeof document !== "undefined"; // require('@react-google-maps/api/src/utils/isbrowser')
    const isAlreadyLoaded =
      window.google &&
      window.google.maps &&
      document.querySelector("body.first-hit-completed"); // AJAX page loading system is adding this class the first time the app is loaded
    if (!isAlreadyLoaded && isBrowser) {
      // @ts-ignore
      if (window.google && !cleaningUp) {
        console.error("google api is already presented");
        return;
      }

      this.isCleaningUp().then(this.injectScript);
    }

    if (isAlreadyLoaded) {
      this.setState({ loaded: true });
    }
  }
}

export const GoogleMapsContainer = ({ data }) => {
  const markerCoordinate = [
    {
      lat: -6.2388996,
      lng: 106.8095295,
    },
    {
      lat: -6.28841,
      lng: 106.65123,
    },
    {
      lat: -6.251272,
      lng: 106.79422,
    },
    {
      lat: -6.0943738,
      lng: 106.7396941,
    },
  ];

  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloaded(true);
    }, 200);
    return () => {
      clearTimeout();
    };
  }, []);

  const branch = ["Senopati", "BSD", "Gandaria", "Pantai Indah Kapuk"];

  const mapRef = useRef(null);

  const [mapProps, setmapProps] = useState({
    lat: -6.26604,
    lng: 106.7332973,
  });

  const [markerKey, setmarkerKey] = useState(-1);
  // const [marker, setmarker] = useState(null);
  const [showInfoWindow, setshowInfoWindow] = useState(false);

  const [mapZoom, setmapZoom] = useState(11);

  useEffect(() => {
    mapRef.current?.panTo(mapProps);
  }, [mapProps]);

  useEffect(() => {
    setmapZoom(mapZoom);
  }, [mapZoom]);

  useEffect(() => {
    console.log(data);
    data.markerKey != -1 && setshowInfoWindow(true);
  }, [data]);

  return (
    <div className="grid">
      {loaded && (
        <LoadScriptOnlyIfNeeded
          googleMapsApiKey={process.env.NEXT_PUBLIC_GAPI_KEY}
        >
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
              setmapZoom(11);
            }}
            onMouseOut={() => {
              setshowInfoWindow(false);
              setmarkerKey(-1);
            }}
          >
            {markerCoordinate.map((e, i) => {
              return (
                <Marker
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={i}
                  onMouseOver={() => {
                    setmarkerKey(i);
                    setshowInfoWindow(true);
                  }}
                  // onLoad={(marker) => {
                  // }}
                  onClick={(marker) => {
                    setmapProps({
                      lat: marker.latLng.lat(),
                      lng: marker.latLng.lng(),
                    });
                    setmapZoom(18);
                    setshowInfoWindow(true);
                  }}
                  position={e}
                  icon={"/images/pin.png"}
                >
                  {showInfoWindow &&
                    (markerKey === i || data.markerKey === i) && (
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
        </LoadScriptOnlyIfNeeded>
      )}
    </div>
  );
};
