import React, { Component } from 'react';
import '../scss/ofertas-especiais.scss';
import logo1 from '../images/logo-bridgestone.png';
import logo2 from '../images/logo-continental.png';
import logo3 from '../images/pirelli-logo.jpg';
import logo4 from '../images/toyotires-logo.jpg';
 
var othersOffers = [
    {Image: logo1, Discount: "25%OFF", Number: 1},
    {Image: logo2, Discount: "15%OFF", Number: 2},
    {Image: logo3, Discount: "15%OFF", Number: 3},
    {Image: logo4, Discount: "10%OFF", Number: 4},
];

export default class OfertasEspeciais extends Component {
    render() {
      return (
        <div className="ofertas-especiais">
            <div className="ofertas-title not-select">
                <div className="ofertas-line-before"></div>
                <div className="ofertas-title-text">OFERTAS ESPECIAIS</div>
                <div className="ofertas-line-after"></div>
            </div>
            <div className="offers">
                <div className="primary-offers">
                    <div className="primary-offer left-primary">
                        <div className="left-offer">
                            <div className="left-offer-text">
                                4 PNEUS
                            </div>
                            <div className="left-offer-text light-offer-text">
                                POR APENAS
                            </div>
                            <div className="left-offer-price">
                                354,90
                            </div>
                            <div className="offer-button">
                                COMPRAR
                            </div>
                        </div>
                    </div>
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
                    <div className="primary-offer right-primary">
                        <div className="right-offer">
                            <div className="right-offer-text light-offer-text">
                                TODOS OS PNEUS
                            </div>
                            <div className="right-offer-text">
                                ARO 15
                            </div>
                            <div className="right-offer-price">
                                50%
                            </div>
                            <div className="right-offer-price-desc">
                                DE DESCONTO
                            </div>
                            <div className="offer-button">
                                CONFIRA
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offers-others not-select">
                    { othersOffers.map(others => {
                        return (
                            <div className="offer-other" key={others.Number}>
                                <img className="offer-other-image" alt="offer" src={others.Image} />
                                <div className="offer-other-info">ATÉ 
                                    <span className="offer-other-discount">{others.Discount}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      );
    }
  }