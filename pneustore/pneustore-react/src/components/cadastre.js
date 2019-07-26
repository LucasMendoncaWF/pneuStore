import React, { Component } from 'react';
import cadastre from '../images/cadastre.png';
import '../scss/cadastre.scss';
 
export default class Cadastre extends Component {
    render() {
      return (
        <div className="cadastre not-select">
            <img className="cadastre-img" alt="cadastre" src={cadastre} />
            <div className="cadastro-area">
                <div className="cadastro-text">Cadastre-se e seja um dos primeiros a receber lançamentos e ofertas</div>
                <div className="cadastro">
                  <div className="cadastro-input-area">Enviar</div>
                  <input className="cadastro-input" type="text" placeholder="Digite seu e-mail"/>
                </div>
            </div>
        </div>
      );
    }
  }