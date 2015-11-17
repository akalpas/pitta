import React, { Component, PropTypes } from 'react';
import './style.sass'

export default class Header extends Component {

  render() {

    return (
      <div className="header container-fluid">
        <div className="row">
          <div className="col-xs-6 col-md-4 clearfix vcenter">
            <i className="zmdi zmdi-image zmdi-hc-5x mdc-text-red-700"></i>
          </div>
          <div className="col-xs-6 col-md-4 vcenter">
            <div className="input-group align-end">
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-addon">
                <i className="zmdi zmdi-search zmdi-hc-lg btn-search mdc-text-green"></i>
              </div>
            </div> 
          </div>
          <div className="col-xs-6 col-md-4 clearfix vcenter">
          </div>
        </div>
      </div>
    );
  }
}