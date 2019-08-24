import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { Tooltip, Icon } from 'antd';
import 'antd/dist/antd.css';

const LocationMarker = ({ text }) => (
  // <div style={{ color: 'red' }}>{text}</div>
  <Tooltip placement='top' title={text}>
    <Icon
      style={{ fontSize: 20, color: 'red' }}
      type='environment'
      theme='filled'
    />
  </Tooltip>
);

class Map extends Component {
  state = {
    address: null,
    zoom: 3
  };
  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      this.setState({
        address: this.props.address
      });
    }
  }
  render() {
    // In below I commented some code where I tried to render the custom nearest store location which will come from API. As I could not implement the nearest search functionality, I commented this out.

    return (
      <div style={{ height: 400, width: 800 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAQQVBO-kAFRC5oPuMVrgIzftA-ckcjJZg' }}
          defaultCenter={this.state.address}
          defaultCenter={{
            lat: this.state.address
              ? this.state.address.geometry.location.lat
              : 16.370487,
            lng: this.state.address
              ? this.state.address.geometry.location.lng
              : 48.1958732
          }}
          // defaultCenter={{
          //   lat: this.state.address
          //     ? this.state.address.outletCoordinate.lat
          //     : 48.1958732,
          //   lng: this.state.address
          //     ? this.state.address.outletCoordinate.lng
          //     : 16.370487
          // }}
          defaultZoom={this.state.zoom}
        >
          <LocationMarker
            lat={
              this.state.address
                ? this.state.address.geometry.location.lat
                : 16.370487
            }
            lng={
              this.state.address
                ? this.state.address.geometry.location.lng
                : 48.1958732
            }
            text={
              this.state.address
                ? this.state.address.formatted_address
                : 'Default location'
            }
          />

          {/* In below commented code I tried to render the custom nearest store location which will come from API. As I could not implement the nearest search functionality, I commented this out. */}
          {/* <LocationMarker
            lat={
              this.state.address
                ? this.state.address.outletCoordinate.lat
                : 48.1958732
            }
            lng={
              this.state.address
                ? this.state.address.outletCoordinate.lng
                : 16.370487
            }
            text={
              this.state.address
                ? this.state.address.outletName
                : 'Default location'
            }
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.address.address
});

export default connect(
  mapStateToProps,
  {}
)(Map);
