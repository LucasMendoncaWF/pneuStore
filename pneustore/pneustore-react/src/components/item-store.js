import React, { Component } from 'react';
import '../scss/item-store.scss';
 
export default class ItemStore extends Component {
    render() {
      return (
        <div className="item-store" >
            <img className="item-store-photo" alt="item" src={this.props.Image} />
            <div className="item-store-marca">{this.props.Marca}</div>
            <div className="item-store-desc">{this.props.Desc}</div>
            <div className="item-store-price">R$ {this.props.Price}</div>
            <div className="item-store-button"></div>
        </div>
      );
    }
  }