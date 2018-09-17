import React from 'react';
import {
  Marker,
  Circle,
  GoogleMap,
  InfoWindow,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

const DROP_ANIMATION = 2;

const arePointsNear = (checkPoint, centerPoint, km) => {
  // https://stackoverflow.com/a/49642054/3967587
  const ky = 40000 / 360;
  const kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
  const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
  const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
  return Math.sqrt((dx * dx) + (dy * dy)) <= km;
};

const MapWrapper = withScriptjs(
  withGoogleMap(
    ({
      markers, onMarkerClick, onMarkerCloseClick, radius, center, zoom
    }) => (
      <GoogleMap
        zoom={zoom}
        defaultCenter={center}
      >
        <Circle
          radius={radius * 1000}
          defaultCenter={center}
        />

        {markers
          .filter((marker) => arePointsNear(marker.position, center, radius))
          .map((marker, index) => (
            <Marker
              key={marker.placeId}
              position={marker.position}
              onClick={() => onMarkerClick(index)}
              animation={DROP_ANIMATION}
            >
              {marker.showInfo && (
                <InfoWindow onCloseClick={() => onMarkerCloseClick(index)}>
                  <p>{marker.address}</p>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    )
  )
);

export default MapWrapper;
