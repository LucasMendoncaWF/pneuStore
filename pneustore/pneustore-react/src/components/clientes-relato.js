import React, { Component } from 'react';
import pessoa1 from '../images/pessoa1.png';
import pessoa2 from '../images/pessoa2.png';
import pessoa3 from '../images/pessoa3.png';
import '../scss/clientes-relato.scss';
 
var clientesRelatos = [
  {"Image": pessoa1, "Name": "Claudio Antunes Paiva", "Job": "Engenheiro", "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum est sed placerat. Aenean odio dui, luctus in odio eu, euismod dapibus urna.", Number: 1}, 
  {"Image": pessoa2, "Name": "Andrea Nunes Caimbra", "Job": "Arquiteta", "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum est sed placerat. Aenean odio dui, luctus in odio eu, euismod dapibus urna.", Number: 2}, 
  {"Image": pessoa3, "Name": "Walter Gusmão", "Job": "Mecânico", "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla interdum est sed placerat. Aenean odio dui, luctus in odio eu, euismod dapibus urna.", Number: 3}
];

export default class ClientesRelato extends Component {
    render() {
      return (
        <div className="relatos-clients">
         <div className="relatos-title">
            <div className="relatos-line-before"></div>
            <div className="relatos-title-text">O QUE DIZEM NOSSOS CLIENTES</div>
            <div className="relatos-line-after"></div>
          </div>
           { clientesRelatos.map(relato => {
            const backgroundImageStyle = {
              backgroundImage: `url(${relato.Image})`
            };
             return (
              <div className="relato-client" key={relato.Number}>
                <div className="relato-client-picture" style={backgroundImageStyle}></div>
                <div className="relato-client-name">{relato.Name}</div>
                <div className="relato-client-job">{(relato.Job).toUpperCase()}</div>
                <div className="relato-client-text">"{relato.Text}"</div>
              </div>
             )
           })}
        </div>
      );
    }
  }