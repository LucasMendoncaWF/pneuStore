import React, { Component } from 'react';
import HeaderFixed from './components/header-fixed';
import HeaderTop from './components/header-top';
import BannerHeader from './components/banner-header';
import Banner from './components/banner';
import EncontrePneu from './components/encontre-pneu';
import OfertasEspeciais from './components/ofertas-especiais';
import Dicas from './components/dicas';
import ClientesRelato from './components/clientes-relato';
import MaisVendidos from './components/mais-vendidos';
import Cadastre from './components/cadastre';
import footer from './images/footer.png';
import Store from './components/store';
import Filters from './components/filters';
import MaisVendidosMobile from './components/mais-vendidos-mobile';
import './scss/index.scss';

class PneuStoreApp extends Component {

  state = {
    page: "home"
  }

  checkHome = () =>{
    if(this.state.page === "home"){
      return (
        <div className="home">
          <BannerHeader />
          <Banner />
          <EncontrePneu changePage={this.changePage}/>
          <OfertasEspeciais />
          <MaisVendidos />
          <MaisVendidosMobile />
          <Dicas />
          <ClientesRelato />
          <Cadastre />
        </div>
       )
    }else if(this.state.page === "interna"){
      return (
        <div className="interna">
            <BannerHeader />
            <div className="interna-content">
              <Filters />
              <Store />
            </div>       
        </div>
      )
    }
  }

  changePage = (page) =>{
    this.setState({page: page});
  }

  render() {
    return (
      <div className="app">
        <HeaderFixed changePage={this.changePage}/>
        <HeaderTop changePage={this.changePage}/>
        {this.checkHome()}
        
        <img alt="footer" src={footer} className="footer"/>
      </div>
    );
  }
}

export default PneuStoreApp;
