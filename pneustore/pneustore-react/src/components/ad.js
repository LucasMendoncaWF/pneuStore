import React, { Component } from 'react';
import '../scss/ad.scss';
 
export default class Ad extends Component {
    
    render() {
      return (
        <div className="ad not-select">
            <div className="primary-offer middle-primary offer-bg-reg">
                <div className="middle-offer">
                    <div className="middle-offer-text ">
                        COOPER
                    </div>
                    <div className="middle-offer-text light-offer-text">
                        EVOLUTION TOUR
                    </div>
                    <div className="middle-offer-price">
                        236,00
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }