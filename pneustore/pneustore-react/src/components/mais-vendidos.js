import React, { Component } from 'react';
import pneu from '../images/pneupng.png';
import pneu2 from '../images/pneupng2.png';
import pneuMoto from '../images/pneu-moto.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../scss/mais-vendidos.scss';
import ItemStore from './item-store';

var maisVendidosCarros = [
    {Image: pneu, Number: 1, Price: "236,00", Marca: "COOPER", Desc: "Aro 16 Evolution Tour"},
    {Image: pneu2, Number: 2, Price: "412,66", Marca: "GOODYEAR", Desc: "Aro 17"},
    {Image: pneu, Number: 3, Price: "236,00", Marca: "COOPER", Desc: "Aro 18 Evolution Tour"},
    {Image: pneu2, Number: 4, Price: "412,66", Marca: "COOPER", Desc: "Aro 16 Wangler"},
    {Image: pneu, Number: 5, Price: "246,00", Marca: "COOPER", Desc: "Aro 16"},
    {Image: pneu2, Number: 6, Price: "343,88", Marca: "GOODYEAR", Desc: "Evolution Tour"},
    {Image: pneu2, Number: 7, Price: "269,99", Marca: "COOPER", Desc: "Wangler"},
    {Image: pneu, Number: 8, Price: "199,99", Marca: "GOODYEAR", Desc: "Aro 17 Evolution Tour"}
]

var maisVendidosMotos = [
    {Image: pneuMoto, Number: 1, Price: "236,00", Marca: "COOPER", Desc: "Aro 16 Evolution Tour moto"},
    {Image: pneuMoto, Number: 2, Price: "412,66", Marca: "GOODYEAR", Desc: "Aro 17 moto"},
    {Image: pneuMoto, Number: 3, Price: "236,00", Marca: "COOPER", Desc: "Aro 18 Evolution Tour moto"},
    {Image: pneuMoto, Number: 4, Price: "412,66", Marca: "COOPER", Desc: "Aro 16 Wangler moto"},
    {Image: pneuMoto, Number: 5, Price: "246,00", Marca: "COOPER", Desc: "Aro 16 moto"},
    {Image: pneuMoto, Number: 6, Price: "343,88", Marca: "GOODYEAR", Desc: "Evolution Tour moto"},
    {Image: pneuMoto, Number: 7, Price: "269,99", Marca: "COOPER", Desc: "Wangler moto"},
    {Image: pneuMoto, Number: 8, Price: "199,99", Marca: "GOODYEAR", Desc: "Aro 17 Evolution Tour moto"}
]

export default class MaisVendidos extends Component {
    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 6 },
      };

      state = {
          active: "1"
      }

      changeSelected = (e) =>{
        this.setState({active: e.target.attributes.getNamedItem('data-value').value});
      }

      renderCars = () =>{
        if(this.state.active === "1"){
            return (
                <div  className="items-store">
                    <AliceCarousel responsive={this.responsive} >
                        { maisVendidosCarros.map(item => {
                            return (
                                <ItemStore key={item.Number} Image={item.Image} Marca={item.Marca} Desc={item.Desc} Price={item.Price} />
                            )
                        })}
                    </AliceCarousel>
                </div>
            )
        }
      }

      renderMotos = () =>{
        if(this.state.active === "2"){
            return (
                <div  className="items-store">
                    <AliceCarousel responsive={this.responsive} >
                        { maisVendidosMotos.map(item => {
                            return (
                                <ItemStore key={item.Number} Image={item.Image} Marca={item.Marca} Desc={item.Desc} Price={item.Price} />
                            )
                        })}
                    </AliceCarousel>
                </div>
            )
        }
      }

    render() {
      return (
        <div className="mais-vendidos not-select">
        <div className="mais-vendidos-title ">
            <div className="mais-vendidos-title-text">Mais Vendidos</div>
            <div className="mais-vendidos-line-after"></div>
            <div className="mais-vendidos-abas">
                <div className={"mais-vendidos-aba " + (this.state.active === "1"? "mais-vendidos-aba-active": "")} data-value="1" onClick={this.changeSelected}>CARRO</div>
                <div className={"mais-vendidos-aba " + (this.state.active === "2"? "mais-vendidos-aba-active": "")} data-value="2" onClick={this.changeSelected}>MOTO</div>
            </div>
          </div>         
                {this.renderCars()}
                {this.renderMotos()}
         </div>
      );
    }
  }