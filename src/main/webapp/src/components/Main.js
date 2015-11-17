import React, { Component, PropTypes } from 'react';
import WebAPIUtils from '../utils/WebAPIUtils';
import ListView from './ListView'
import Header from './Header'
import Footer from './Footer'
import './style.sass'

export default class Main extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired
  }

  componentWillMount() {
    this.props.loadingStart();
    WebAPIUtils.getEvents(
      (events)=>{this.props.receiveEvents(events)},
      (error)=>{this.props.loadingFailed(error)}
    );
  }

  render() {
    let { events } = this.props;

    return (
      <div className="wrapper">
        <Header />
        <div className="wrapper-content">
          <ListView {...this.props} />
        </div>
        <Footer />
      </div>
    );
  }
}
