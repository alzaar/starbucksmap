import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    let map = 'Map';
    if (this.props.selectedShop === 'test') map = 'test'
    return(
      <div className="map">
        {map}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedShop: state.selectedShop
  }
}

export default connect(mapStateToProps)(Map);
