import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useHistory } from "react-router-dom";
import './SpotMap.css'


function SpotMap({
    spots,
    highlightedSpot,
    mapOptions = {},
    mapEventHandlers = {},
    markerEventHandlers = {}
}) {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null)
    const markers = useRef({});
    const history = useHistory();

    useEffect(() => {
        if (!map) {
          setMap(new window.google.maps.Map(mapRef.current, {
            center: {
              lat: 37.773972,
              lng: -122.431297
            }, // San Francisco coordinates
            zoom: 13,
            clickableIcons: false,
            ...mapOptions,
          }));
        }
      }, [mapRef, map, mapOptions]);

    useEffect(() => {
        if (map) {
            const listeners = Object.entries(mapEventHandlers).map(([event, handler]) => 
            window.google.maps.event.addListener(
                map, 
                event, 
                (...args) => handler(...args, map)
            )
            );
    
            return () => listeners.forEach(window.google.maps.event.removeListener);
        }
    }, [map, mapEventHandlers]);

    useEffect(() => {
        if (map) {
          // Add markers for new benches
          spots.forEach((spot) => {
            if (markers.current[spot.id]) return;
      
            const marker = new window.google.maps.Marker({ 
              map, 
              position: new window.google.maps.LatLng(spot.lat, spot.lng), 
              label: { 
                text: `$${spot.price.toString()}`, 
                fontWeight: 'bold',
                color: 'black'
              }, 
              icon: {
                path: `
                  M 1,0 
                  L 2,0 
                  A 1 1 0 0 1 3,1
                  A 1 1 0 0 1 2,2
                  L 1,2 
                  A 1 1 0 0 1 0,1
                  A 1 1 0 0 1 1,0
                  z
                `,
                fillOpacity: 1,
                fillColor: 'white',
                strokeColor: 'black',
                strokeWeight: 1,
                scale: 15,
                labelOrigin: new window.google.maps.Point(1.5, 1),
                anchor: new window.google.maps.Point(1.5, 1)
              }, 
            });
    
            Object.entries(markerEventHandlers).forEach(([event, handler]) => {
              marker.addListener(event, () => handler(spot));
            });
            markers.current[spot.id] = marker;
          })
      
          // Remove markers for old benches
          Object.entries(markers.current).forEach(([spotId, marker]) => {
            if (spots.some(spot => spot.id.toString() === spotId)) return;
            
            marker.setMap(null);
            delete markers.current[spotId];
          })
        }
    }, [spots, history, map, markerEventHandlers]);

    useEffect(() => {
        Object.entries(markers.current).forEach(([spotId, marker]) => {
          const label = marker.getLabel();
          const icon = marker.getIcon();
    
          if (parseInt(spotId) === highlightedSpot) {
            marker.setLabel({ ...label, color: 'white' });
            marker.setIcon({ ...icon, fillColor: 'black' });
          } else {
            marker.setLabel({ ...label, color: 'black' });
            marker.setIcon({ ...icon, fillColor: 'white' });
          }
        });
    }, [markers, highlightedSpot]);
    
    return (
    <div ref={mapRef} className="map">
        Map
    </div>
    );
}
    
    
    



function SpotMapWrapper(props) {
    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
          <SpotMap {...props} />
        </Wrapper>
    );
}

export default SpotMapWrapper;