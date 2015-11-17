import React, { Component, PropTypes } from 'react';
import './header.css'

export default class Header extends Component {

  render() {

    return (
      <div className="header container-fluid">
        <div className="row">
          <div className="col-xs-6 col-md-4 clearfix vcenter">
            <button className="btn"><i className="zmdi zmdi-menu zmdi-hc-lg"></i></button>
          </div>
          <div className="col-xs-6 col-md-4 vcenter">
            <h1 className="text-center">Pitta</h1>
          </div>
          <div className="col-xs-6 col-md-4 clearfix vcenter">
            <div className="input-group align-end">
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-addon">
                <i className="zmdi zmdi-search zmdi-hc-lg btn-search"></i>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
