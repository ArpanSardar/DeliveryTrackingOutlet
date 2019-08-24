import React, { Component } from 'react';
import Map from './MapComponent';

import { connect } from 'react-redux';
import { getLocationDetails } from '../Actions/locationFinderActions';

import { Input, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

class LocationFinderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Setting default address
      address: {
        lat: 16.370487,
        lng: 48.1958732
      }
    };
  }
  handleSearch = value => {
    try {
      this.props.getLocationDetails(value);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Search
          placeholder='Please enter your address'
          enterButton='Search'
          size='large'
          onSearch={value => {
            this.handleSearch(value);
          }}
          style={{ width: '50%' }}
          name='address'
        />
        <br />
        <Map />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  address: state.address.address
});

export default connect(
  mapStateToProps,
  { getLocationDetails }
)(LocationFinderContainer);
