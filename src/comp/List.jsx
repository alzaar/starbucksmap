import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectShop } from '../action/index';

class List extends Component {
  changeText() {
    let dummyVariable = 'test';
    this.props.selectShop(dummyVariable);
  }
  render() {
    return(
      <div className="list">
        <button onClick={this.changeText.bind(this)}>Coffee Shop</button>
        {this.props.shops.map(shop => <p key={shop}>{shop}</p>)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectShop: selectShop },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    shops: state.shops
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
