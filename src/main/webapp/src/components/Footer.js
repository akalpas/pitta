import React, { Component, PropTypes } from 'react';
import './footer.css'

export default class Footer extends Component {

  render() {

    return (
      <div className="footer">
        <div className="row">
          <div className="col-xs-6 col-md-4 vcenter">
          </div>
          <div className="col-xs-6 col-md-4 vcenter">
            <h5>Powered By Neutrino Bros</h5>
          </div>
          <div className="col-xs-6 col-md-4 vcenter clearfix">
            <a className="btn btn-primary btn-lg align-end" href="http://goo.gl/forms/1BuUBkr6dQ">Share your ideas »</a>
          </div>
        </div>
      </div>
    );
  }
}
