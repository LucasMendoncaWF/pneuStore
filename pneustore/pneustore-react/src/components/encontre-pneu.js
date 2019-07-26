import React, { Component } from 'react';
import '../scss/encontre-pneu.scss';
 
var marcas = ["Marca1", "Marca2","Marca3","Marca4","Marca5","Marca6","Marca7","Marca8","Marca9","Marca5","Marca6","Marca7","Marca8","Marca9"];
var modelos = ["Modelo1", "Modelo2","Modelo3","Modelo4","Modelo5","Modelo6","Modelo7","Modelo8","Modelo9","Modelo5","Modelo6","Modelo7","Modelo8","Modelo9"];
var ano = ["1994", "1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005"];
var versao = ["New", "Premium","Premium","Turbo","New","Turbo","Premium","New","Turbo","Premium","New","New","New","Turbo","Premium","New","New"];

export default class EncontrePneu extends Component {

    state = {
        active: "1",
        popupOpen: false,
        popupAba: "1",
        marca: "",
        modelo: "",
        ano: "",
        versao: ""
    }

    changeSelected = (e) =>{
      this.setState({active: e.target.attributes.getNamedItem('data-value').value});
    }

    changeSelectedPopup = (e) =>{
        this.setState({popupAba: e.target.attributes.getNamedItem('data-value').value});
    }

    changeMarca = (e) =>{
        this.setState({marca: e.target.attributes.getNamedItem('data-value').value});
    }

    changeModelo = (e) =>{
        this.setState({modelo: e.target.attributes.getNamedItem('data-value').value});
    }

    changeAno= (e) =>{
        this.setState({ano: e.target.attributes.getNamedItem('data-value').value});
    }

    changeVersao = (e) =>{
        this.setState({versao: e.target.attributes.getNamedItem('data-value').value});
    }

    showPopup = () =>{
        if(this.state.popupOpen){
            return (
                <div className="popup-pneus-bg">
                    <div className="popup-pneus">
                        <div onClick={this.closePopup} className="close-popup">X</div>
                        <div className="popup-pneus-abas">
                            <div onClick={this.changeSelectedPopup} data-value="1" className={"popup-pneus-aba " + (this.state.popupAba === "1"? "popup-pneus-aba-active": "")}>Marca</div>
                            <div onClick={this.changeSelectedPopup} data-value="2" className={"popup-pneus-aba " + (this.state.popupAba === "2"? "popup-pneus-aba-active": "")}>Modelo</div>
                            <div onClick={this.changeSelectedPopup} data-value="3" className={"popup-pneus-aba " + (this.state.popupAba === "3"? "popup-pneus-aba-active": "")}>Ano</div>
                            <div onClick={this.changeSelectedPopup} data-value="4" className={"popup-pneus-aba " + (this.state.popupAba === "4"? "popup-pneus-aba-active": "")}>Versao</div>
                        </div>
                        <div className="popup-line-aba"></div>
                        <div className="popup-itens">
                            {this.showPopupContent()}
                        </div>
                    </div>
                </div>
            )
        
        }
    }

    openPopup = (v) =>{
        this.setState({popupOpen: true, popupAba: v});
    }

    closePopup = () =>{
        this.setState({popupOpen: false, popupAba: "1"});
    }

    showPopupContent = () =>{
        var popupItens = [];
        var poupTitleaba = [];
        if(this.state.popupAba === "1"){
            poupTitleaba = [
                <div className="title-item">MARCA: <span className="item-selecionado">{this.state.marca.toLocaleUpperCase()}</span></div>,
                <div className="popup-line"></div>
            ]

            marcas.map(item => {
                popupItens.push( <div data-value={item} onClick={this.changeMarca} className="item-popup marca">{item}</div>);
            });
        } else if(this.state.popupAba === "2"){
            poupTitleaba = [
                <div className="title-item">MODELO: <span className="item-selecionado">{this.state.modelo.toLocaleUpperCase()}</span></div>,
                <div className="popup-line"></div>
            ]

            modelos.map(item => {
                popupItens.push( <div data-value={item} onClick={this.changeModelo} className="item-popup marca">{item}</div>);
            });

        } else if(this.state.popupAba === "3"){          
            poupTitleaba = [
                <div className="title-item">ANO: <span className="item-selecionado">{this.state.ano.toLocaleUpperCase()}</span></div>,
                <div className="popup-line"></div>
            ]

            ano.map(item => {
                popupItens.push( <div data-value={item} onClick={this.changeAno} className="item-popup marca">{item}</div>);
            });

        } else if(this.state.popupAba === "4"){
            poupTitleaba = [
                <div className="title-item">VERSAO: <span className="item-selecionado">{this.state.versao.toLocaleUpperCase()}</span></div>,
                <div className="popup-line"></div>
            ]

            versao.map(item => {
                popupItens.push( <div data-value={item} onClick={this.changeVersao} className="item-popup marca">{item}</div>);
            });
        }else{
            return (popupItens.push(null), poupTitleaba.push(null))
        }

        return [poupTitleaba, popupItens];
    }

    render() {
      return (
        <div className="encontre-pneu not-select">
            <div className="title-encontre-pneu">ENCONTRE SEU PNEU</div>
            <div className="abas-encontre-pneu">
                <div data-value="1" onClick={this.changeSelected} className={"aba-encontre-pneu " + (this.state.active === "1"? "aba-encontre-pneu-active": "")}><span data-value="1" className="car-icone"></span>POR VEÍCULO</div>
                <div data-value="2" onClick={this.changeSelected} className={"aba-encontre-pneu " + (this.state.active === "2"? "aba-encontre-pneu-active": "")}><span data-value="2" className="tamanho-icone"></span>POR TAMANHO</div>
            </div>
            <div className="divider-encontre-pneu"></div>
            <div className="filters-encontre-pneu">
                <div onClick={() =>{this.openPopup("1")}} className="filter-encontre-pneu">{this.state.marca? this.state.marca.toUpperCase() : "MARCA"}</div>
                <div onClick={() =>{this.openPopup("2")}} className="filter-encontre-pneu">{this.state.modelo? this.state.modelo.toUpperCase() : "MODELO"}</div>
                <div onClick={() =>{this.openPopup("3")}} className="filter-encontre-pneu">{this.state.ano? this.state.ano.toUpperCase() : "ANO"}</div>
                <div onClick={() =>{this.openPopup("4")}} className="filter-encontre-pneu">{this.state.versao? this.state.versao.toUpperCase() : "VERSAO"}</div>
                <div className="button-encontre-pneu" onClick={()=>{this.props.changePage("interna")}}>BUSCAR</div>
            </div>
            {this.showPopup()}
        </div>
      );
    }
  }