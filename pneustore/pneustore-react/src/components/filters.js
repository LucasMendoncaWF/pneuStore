import React, { Component } from 'react';
import '../scss/filters.scss';
import Filter from './filter';
import Ad from './ad';
import Cadastre from './cadastre';

var filtersItems = [
    {Title: "PREÇO", Options: ["R$0-R$49,99","R$50-R$199,99","R$200-R$499,99", "R$500-R$999,99", "R$1.000-R$100.000"]},
    {Title: "AVALIAÇÕES", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "ARO PENU", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "MARCA PNEU", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "MEDIDA PNEU", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "MODELO PNEU", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "RUN-FLAT", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "CONTRUÇÃO", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "DESENHO", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "EM ESTOQUE", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "INDICE DE PESO", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "INDICE DE VELOCIDADE", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "POSIÇÃO NO VEÍCULO", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "TERRENO/RODAGEM", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]},
    {Title: "TIPO", Options: ["LOREM IPSUM","LOREM IPSUM","LOREM IPSUM", "LOREM IPSUM", "LOREM IPSUM"]}
]
 
export default class Filters extends Component {

    state = {
        filtersMobile: false
    }

     unCheck = () => {
        var x = document.getElementsByClassName("check-filter-box");
        for(var i=0; i<=x.length - 1; i++) {
           x[i].checked = false;
         }   
      }

      showFiltersMobile = () =>{
        this.setState({filtersMobile: !this.state.filtersMobile});
      }

      mobileFilters = () =>{
          if(this.state.filtersMobile){
              return (
                  <div className="mobile-filters">
                    {filtersItems.map(filter =>{
                        return (
                            <Filter key={filter.Title} Title={filter.Title} Options={filter.Options} />
                        )
                    })}
                  </div>
              )
          }
      }

    render() {
      return (
        <div className="filters">
            <div className="filters-header">
                <div className="filters-header-title title-desktop">MAIS FILTROS</div>
                <div className="filters-header-title title-mobile" onClick={this.showFiltersMobile}>MAIS FILTROS</div>
                <div className="erase-filters" onClick={this.unCheck}>LIMPAR FILTROS <span className="x-filters">X</span></div>
            </div>
            <div className="filter-desktop">
                {filtersItems.map(filter =>{
                    return (
                        <Filter key={filter.Title} Title={filter.Title} Options={filter.Options} />
                    )
                })}
            </div>      
            {this.mobileFilters()} 
            <Cadastre />
            <Ad />
        </div>
      );
    }
  }