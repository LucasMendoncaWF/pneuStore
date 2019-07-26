import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import '../scss/header-top.scss';
 
export default class HeaderTop extends Component {
    render() {
      return (
        <div className="header-top">
            <img className="header-logo" alt="logo" src={logo} onClick={()=>{this.props.changePage("home")}}/>
            <div className="links-header-top">
                <div className="link-header-top" onClick={()=>{this.props.changePage("interna")}}>PNEUS</div>
                <div className="link-header-top">ACESSÓRIOS</div>
                <div className="link-header-top">RODAS</div>
                <div className="link-header-top">MARCAS</div>
            </div>
            <input className="header-top-search" type="text" placeholder="Pesquise por pneus, medidas, veículos e etc" />
            <div className="header-top-search-ico"></div>
        </div>
      );
    }
  }