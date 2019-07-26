import React, { Component } from 'react';
import settings from '../images/settings.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

var infoBanner =[
    {"Image": settings, "text": "MONTAGEM GRÁTIS", Number: 1}, 
    {"Image": settings, "text": "TROCA NA HORA", Number: 2}
]

export default class Bannerheader extends Component {

    responsive = {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
      };

    renderBannerInfo = () =>{
        return (
                <AliceCarousel responsive={this.responsive} >
                    { infoBanner.map(item => {
                        return (
                            <div className="banner-header-item" key={item.Number}>
                                <img className="header-item-image" alt="settings" src={item.Image}/>
                                <div className="header-item-text">{item.text}</div>
                                <div className="item-link">Confira as regras</div>
                            </div>
                        )
                    })}
                </AliceCarousel>
            )
    }

    render() {
        return (
            <div className="banner">
                <div className="banner-header">
                    <div className="banner-items">
                        {this.renderBannerInfo()}
                    </div>
                </div>
            </div>
        )
    }
}