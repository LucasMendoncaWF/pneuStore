import React, { Component } from 'react';
import '../scss/store.scss';
import pneu from '../images/pneupng.png';
import pneu2 from '../images/pneupng2.png';
import ItemStore from './item-store';
 
var Items = [
    {Image: pneu, Number: 1, Price: "236,00", Marca: "COOPER", Desc: "Aro 16 Evolution Tour", Page: 1},
    {Image: pneu2, Number: 2, Price: "412,66", Marca: "GOODYEAR", Desc: "Aro 17" , Page: 1},
    {Image: pneu, Number: 3, Price: "236,00", Marca: "COOPER", Desc: "Aro 18 Evolution Tour", Page: 1},
    {Image: pneu2, Number: 4, Price: "412,66", Marca: "COOPER", Desc: "Aro 16 Wangler", Page: 1},
    {Image: pneu, Number: 5, Price: "246,00", Marca: "COOPER", Desc: "Aro 16", Page: 1},
    {Image: pneu2, Number: 6, Price: "343,88", Marca: "GOODYEAR", Desc: "Evolution Tour", Page: 1},
    {Image: pneu2, Number: 7, Price: "269,99", Marca: "COOPER", Desc: "Wangler", Page: 1},
    {Image: pneu, Number: 8, Price: "199,99", Marca: "GOODYEAR", Desc: "Aro 17 Evolution Tour", Page: 1},
    {Image: pneu, Number: 9, Price: "236,00", Marca: "COOPER", Desc: "Aro 16 Evolution Tour", Page: 1},
    {Image: pneu2, Number: 10, Price: "412,66", Marca: "GOODYEAR", Desc: "Aro 17" , Page: 1},
    {Image: pneu, Number: 11, Price: "236,00", Marca: "COOPER", Desc: "Aro 18 Evolution Tour", Page: 1},
    {Image: pneu2, Number: 12, Price: "412,66", Marca: "COOPER", Desc: "Aro 16 Wangler", Page: 1},
    {Image: pneu, Number: 13, Price: "246,00", Marca: "COOPER", Desc: "Aro 16", Page: 1},
    {Image: pneu2, Number: 14, Price: "343,88", Marca: "GOODYEAR", Desc: "Evolution Tour", Page: 1},
    {Image: pneu2, Number: 15, Price: "269,99", Marca: "COOPER", Desc: "Wangler", Page: 1},
    {Image: pneu, Number: 17, Price: "236,00", Marca: "GOODYEAR", Desc: "Aro 16 LOREM Tour", Page: 2},
    {Image: pneu2, Number: 18, Price: "412,66", Marca: "LOREM", Desc: "Aro 17" , Page: 2},
    {Image: pneu, Number: 19, Price: "236,00", Marca: "LOREM", Desc: "Aro 18 LOREM Tour", Page: 2},
    {Image: pneu2, Number: 20, Price: "412,66", Marca: "GOODYEAR", Desc: "Aro 16 LOREM", Page: 2},
    {Image: pneu, Number: 21, Price: "246,00", Marca: "COOPER", Desc: "Aro 16", Page: 2},
    {Image: pneu2, Number: 22, Price: "343,88", Marca: "COOPER", Desc: "Evolution LOREM", Page: 2},
    {Image: pneu2, Number: 23, Price: "269,99", Marca: "COOPER", Desc: "LOREM", Page: 2},
    {Image: pneu, Number: 24, Price: "199,99", Marca: "LOREM", Desc: "Aro 17 LOREM Tour", Page: 2},
    {Image: pneu, Number: 25, Price: "236,00", Marca: "GOODYEAR", Desc: "Aro 16 LOREM Tour", Page: 2},
    {Image: pneu2, Number: 26, Price: "412,66", Marca: "LOREM", Desc: "Aro 17" , Page: 2},
    {Image: pneu, Number: 27, Price: "236,00", Marca: "LOREM", Desc: "Aro 18 LOREM Tour", Page: 2},
    {Image: pneu2, Number: 28, Price: "412,66", Marca: "GOODYEAR", Desc: "Aro 16 LOREM", Page: 2},
    {Image: pneu, Number: 29, Price: "246,00", Marca: "COOPER", Desc: "Aro 16", Page: 2},
    {Image: pneu2, Number: 30, Price: "343,88", Marca: "COOPER", Desc: "Evolution LOREM", Page: 2},
    {Image: pneu2, Number: 31, Price: "269,99", Marca: "COOPER", Desc: "LOREM", Page: 2}
]

export default class Store extends Component {

    state={
        page: 1,
        maxPage: Items[Items.length-1].Page,
        itemsCount: Items.length - 1
    }

    changePage = (count) =>{
        var actualPage = this.state.page;
        if(count === "-" && actualPage > 1){
            this.setState({page: actualPage - 1});
        }else if(count === "+" && actualPage < this.state.maxPage){
            this.setState({page: actualPage + 1});
        }
    }

    render() {
      return (
        <div className="store">
            <div className="store-title-filter">
                <div className="store-title">PNEUS DE CARRO ({this.state.itemsCount})</div>
                <select className="store-filtro">
                    <option>MAIS VENDIDOS</option>
                    <option>MAIOR PREÇO PARA MENOR PREÇO</option>
                    <option>MENOR PREÇO PARA MAIOR PREÇO</option>
                </select>
            </div>
            <div className="store-pager top-pager">
                <div className="pageNumber actual-page"><span onClick={() =>{this.changePage("-")}} className="left-page-arrow"></span>{this.state.page}</div>
                <div className="pageNumber">de</div>
                <div className="pageNumber max-page"><span onClick={() =>{this.changePage("+")}} className="right-page-arrow"></span>{this.state.maxPage}</div>
            </div>
            <div className="store-items">
                {Items.map(item =>{
                    if(this.state.page === item.Page){
                        return (
                            <ItemStore key={item.Number} Image={item.Image} Marca={item.Marca} Desc={item.Desc} Price={item.Price} />
                        )
                    }else{
                        return ( null )
                    }
                })}
            </div>
            <div className="store-pager">
                <div className="pageNumber actual-page"><span onClick={() =>{this.changePage("-")}} className="left-page-arrow"></span>{this.state.page}</div>
                <div className="pageNumber">de</div>
                <div className="pageNumber max-page"><span onClick={() =>{this.changePage("+")}} className="right-page-arrow"></span>{this.state.maxPage}</div>
            </div>
        </div>
      );
    }
  }