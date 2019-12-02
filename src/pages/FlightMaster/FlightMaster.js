import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CircularProgress from '@material-ui/core/CircularProgress';

import { flightInfoActions } from '../../actions/flightInfoActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FlightMaster extends Component {
  componentDidMount() {
    // load flight information here
    if (this.props.flighInfoList.length === 0) this.props.loadFlightInfo();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="header-text">
            <h1>Airport List</h1>
          </div>
          <div className="spinner">
            <CircularProgress disableShrink />
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="header-text">
          <h1>Airport List</h1>
        </div>
        <div>{this.props.error ? this.props.error.message : ''}</div>
        <List>
          {this.props.flighInfoList.map((item, index) => {
            const firstLine =
              item.airportName + ' - ' + item.country.countryName;
            const secondLine = item.region.regionName;
            const linkURL = `/flightdetail/${index}`;

            return (
              <div key={index}>
                <ListItem alignItems="flex-start" className="flight-list">
                  <ListItemText primary={firstLine} secondary={secondLine} />
                  <Link to={linkURL}>
                    <ArrowForwardIosIcon />
                  </Link>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.flightInfoReducer.isLoading,
    flighInfoList: state.flightInfoReducer.flightInfo,
    error: state.flightInfoReducer.error
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadFlightInfo: flightInfoActions.loadFlightInfo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FlightMaster);
