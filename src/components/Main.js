import React, { Component } from "react";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import ItemList from "./itemList.js";
import CartList from "./cartList.js";
import Total from "./total.js";

import { fetchProducts } from "../actions/fetchData";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div>
        <h1>heading</h1>
        <div style={{display:'flex'}}>
          <div style={{flex:1}}><ItemList /></div>
          <div style={{flex:1}}><CartList /></div>
          <div style={{flex:1}}><Total /></div>
        </div>
                
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Main);
