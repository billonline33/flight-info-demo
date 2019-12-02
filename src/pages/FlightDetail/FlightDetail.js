import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';

class FlightDetail extends Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id;

    const airportInfo = this.props.flighInfoList[id];

    this.state = {
      index: props.match.params.id,
      airportInfo
    };
  }

  handleClick() {
    this.props.history.push('/flightmaster');
  }
  render() {
    const {
      airportCode,
      airportName,
      city,
      country,
      region
    } = this.state.airportInfo;
    return (
      <div className="container">
        <div className="header-text">
          <h1>Airport Name: {airportName}</h1>
        </div>
        <div className="row">
          <div className="label col-xs-12 col-sm-6 col-md-4 col-lg-4">
            Airport Code
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
            {airportCode}
          </div>
          <div className="divider col-md-12 col-xs-12">
            <Divider />
          </div>
          <div className="label col-xs-12 col-sm-6 col-md-4 col-lg-4">City</div>
          <div className=" col-xs-12 col-sm-6 col-md-8 col-lg-8">
            <div className="row">
              <div className="label col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Code
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                {city.cityCode}
              </div>
              <div className="label col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Name
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                {city.cityName}
              </div>
              <div className="label col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Time Zone
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                {city.timeZoneName}
              </div>
            </div>
          </div>
          <div className="divider col-md-12 col-xs-12">
            <Divider />
          </div>

          <div className="label col-xs-12 col-sm-6 col-md-4 col-lg-4">
            Country
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
            <div className="row">
              <div className="label col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Code
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                {country.countryCode}
              </div>
              <div className="label col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Name
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                {country.countryName}
              </div>
            </div>
          </div>
          <div className="divider col-md-12 col-xs-12">
            <Divider />
          </div>
          <div className="label  col-xs-12 col-sm-6 col-md-4 col-lg-4">
            Region
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
            <div className="row">
              <div className="label  col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Code
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                {region.regionCode}
              </div>
              <div className="label  col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Name
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                {region.regionName}
              </div>
            </div>
          </div>
        </div>
        <div className="form-footer">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick.bind(this)}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    flighInfoList: state.flightInfoReducer.flightInfo
  };
};

export default connect(mapStateToProps)(FlightDetail);
