import React from 'react';

import LoadingIndicator from 'components/LoadingIndicator';

import GoogleMap from './GoogleMap';
import { fetchPropertiesRoute } from './utils';

import data from '../../data.json';
import styles from './styles.scss';

class PropertiesRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      markers: [],
      zoom: 10,
      radius: 20,
      centerLocation: { lat: 51.5073835, lng: -0.1277801 }
    };
  }

  componentDidMount() {
    this.getPropertiesRoute();
  }

  onMarkerClick = (index) => {
    this.setState((prevState) => {
      const copyMarkers = [...prevState.markers];
      copyMarkers[index].showInfo = !copyMarkers[index].showInfo;

      return {
        markers: copyMarkers
      };
    });
  }

  onMarkerCloseClick = (index) => {
    this.setState((prevState) => {
      const copyMarkers = [...prevState.markers];
      copyMarkers[index].showInfo = false;

      return {
        markers: copyMarkers
      };
    });
  }

  getPropertiesRoute = () => {
    fetchPropertiesRoute(data)
      .then((markers) => {
        this.setState({
          loading: false,
          markers: [
            ...markers,
            {
              showInfo: false,
              placeId: 'examplePlaceId',
              position: { lat: 51.656489, lng: -0.39032 },
              address: 'Not in radius',
            }]
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  }

  handleRadiusChange = (operation) => {
    this.setState((prevState) => {
      let total;
      if (operation === 'increase') {
        total = prevState.radius + 2;
      } else {
        if (prevState.radius === 0) return {}; // maps can't accept minus.
        total = prevState.radius - 2;
      }

      return {
        radius: total,
        zoom: Math.round((10 - Math.log(Number(total))) / Math.LN2)
      };
    });
  }

  render() {
    const {
      markers, loading, centerLocation, radius, zoom
    } = this.state;

    if (loading) return <LoadingIndicator />;

    return (
      <div className={styles.propertiesRoutePage}>
        <div className={styles.playground}>
          <div className={styles.radius}>
            <p>Play with radius</p>
            <div className={styles.buttons}>
              <button onClick={() => this.handleRadiusChange('increase')}>
                +
              </button>
              <button onClick={() => this.handleRadiusChange('decrease')}>
                -
              </button>
            </div>
            <span>{radius}</span>
          </div>
        </div>
        <GoogleMap
          data={data}
          zoom={zoom}
          radius={radius}
          markers={markers}
          center={centerLocation}
          onMarkerClick={this.onMarkerClick}
          loadingElement={<LoadingIndicator />}
          onMarkerCloseClick={this.onMarkerCloseClick}
          mapElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: 'calc(100vh - 64px)' }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDNpaoitYV0_lcX-2aS8j20XAh8tcfV6Pk&libraries=geometry,drawing,places,circle"
        />
      </div>
    );
  }
}

export default PropertiesRoute;
