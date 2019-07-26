import React, { Component } from 'react';
import cart from '../images/cart.png';
import '../scss/header-fixed.scss';
import logo from '../images/logo.jpg';
 
export default class HeaderFixed extends Component {

    state ={
        mobileMenu: false
    }

    showMobileMenu = () =>{
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    hideMobileMenu = () =>{
        this.setState({mobileMenu: false});
    }

    mobileMenuComponent = () =>{
        if(this.state.mobileMenu){
            return (
                <div className="mobile-menu-items">
                    <div className="mobile-header-top">
                        <div className="mobile-header-top" onClick={()=>{this.props.changePage("interna"); this.showMobileMenu()}}>PNEUS</div>
                        <div className="mobile-header-top">ACESSÓRIOS</div>
                        <div className="mobile-header-top">RODAS</div>
                        <div className="mobile-header-top">MARCAS</div>
                    </div>
                </div>
            )         
        }
    }

    render() {
      return (
        <div className="header-pneuapp">
            <div className="mobile-menu" onClick={this.showMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="mobile-logo">
                <img className="header-logo" alt="logo" src={logo} onClick={()=>{this.props.changePage("home"); this.hideMobileMenu()}}/>           
            </div>
            <div className="links-header">
                <div className="link-header">Seus Pedidos</div>
                <div className="link-header">Contato</div>
                <div className="link-header">Ajuda</div>
            </div>
            <div className="client-area">
                <div className="client-link">ENTRE</div>
                <div className="client-link">CADASTRE-SE</div>
                <div className="client-divider"></div>
                <div className="cliente-area-cart">
                    <img className="cart-ico" alt="cart" src={cart}/>
                    <div className="cart-quantity">0</div>
                </div>
            </div>
            {this.mobileMenuComponent()}        
        </div>
      );
    }
  }