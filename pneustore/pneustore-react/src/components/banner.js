import React, { Component } from 'react';
import banner2 from '../images/pneubanner2.jpg';
import banner from '../images/pneubanner1.jpg';
import '../scss/banner.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

var banners = [
    {"Image": banner, "Percent": "8%", Number: 1}, 
    {"Image": banner2, "Percent": "10%", Number: 2}
];

export default class Banner extends Component {

    render() {
      return (
        <div className="banner not-select">
            <div className="banner-images">
                {/* { banners.map(bannerItem => {
                    return (
                <div className={"banner-item " + (this.state.bannerShowing === bannerItem.Number? "banner-show" : "banner-hide" )} key={bannerItem.Number}>
                    <img alt="banner" className="banner-image" src={bannerItem.Image} />
                    <div className="banner-offer">
                        <div className="offer-text">
                            <div className="offer-percent">{bannerItem.Percent}</div>
                            <div className="offer-divider"></div>
                            <div className="offer-info-off">
                                <div className="offer-off">OFF</div>
                                <div className="offer-info">EM PAGAMENTO À VISTA NO BOLETO BANCARIO</div>
                                <div className="offer-sub-info">VÁLIDO DE 29/11 A 3/12</div>
                            </div>
                        </div>
                        <div className="offer-button">Comprar</div>
                    </div>
                </div>
                    )
                })} */}

                <Carousel showArrows={true} infiniteLoop={true} transitionTime={300} autoPlay={true} interval={5000}>
                { banners.map(bannerItem => {
                    return (
                <div className="banner-item" key={bannerItem.Number}>
                    <img src={bannerItem.Image} alt="banner" />
                    <div className="banner-offer">
                        <div className="offer-text">
                            <div className="offer-percent">{bannerItem.Percent}</div>
                            <div className="offer-divider"></div>
                            <div className="offer-info-off">
                                <div className="offer-off">OFF</div>
                                <div className="offer-info">EM PAGAMENTO À VISTA NO BOLETO BANCARIO</div>
                                <div className="offer-sub-info">VÁLIDO DE 29/11 A 3/12</div>
                            </div>
                        </div>
                        <div className="offer-button">Comprar</div>
                    </div>
                </div>
                    )
                })}
                </Carousel>
            </div>
        </div>
      );
    }
  }