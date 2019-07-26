import React, { Component } from 'react';
import '../scss/filter.scss';
 
export default class Filter extends Component {

    state ={
        open: false,      
    }

    openClose = () =>{
        this.setState({open: !this.state.open});
    }

    id = 0;
    
    render() {
      return (
        <div className="filter not-select">
            <div className="title-filter" onClick={this.openClose}>{this.props.Title} <span className="open-close">{this.state.open?"-":"+"}</span></div>
            <div className="filter-options" >
                {this.props.Options.map(option =>{
                    var optionsShow = {  display: this.state.open? "block" : "none"}
                    this.id++;
                    return (
                        <div className="check-filter" key={this.props.Title + "-" + this.id} style={optionsShow}>
                            <input className="check-filter-box" id={this.props.Title + "-" + this.id} type="checkbox" value={option} />
                            <label htmlFor={this.props.Title + "-" + this.id}>{option}</label>            
                        </div>             
                    )                
                })}
            </div>
        </div>
      );
    }
  }