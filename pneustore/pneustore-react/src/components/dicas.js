import React, { Component } from 'react';
import dica1 from '../images/dica1.png';
import dica2 from '../images/dica2.png';
import '../scss/dicas.scss';
 
export default class Dicas extends Component {
    render() {
      return (
        <div className="dicas not-select">
          <div className="dicas-title">
            <div className="dicas-line-before"></div>
            <div className="dicas-title-text">DICAS</div>
            <div className="dicas-line-after"></div>
          </div>
          <div className="dicas-items">
            <div className="dica-img-area">
              <img alt="dica" src={dica1} />
              <div className="divider-dica"></div>
              <div className="text-dica">Saiba como aumentar a<br /> durabilidade do seu pneu</div>
            </div>
            <div className="dica-img-area">
              <img alt="dica" src={dica2} />
              <div className="divider-dica"></div>
              <div className="text-dica">Como seu pneu pode ajudar <br /> a economizar combustível</div>
            </div>
          </div>       
        </div>
      );
    }
  }