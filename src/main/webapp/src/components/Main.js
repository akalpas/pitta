import React, { Component, PropTypes } from 'react';
import WebAPIUtils from '../utils/WebAPIUtils';
import ListView from './ListView'
import Header from './Header'
import Footer from './Footer'
import { gameInit } from './game'
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
    setTimeout(()=>{gameInit()}, 500)
  }

  render() {
    let { events } = this.props;
    return (
      <div className="wrapper">
        <Header />
        <div className="wrapper-content">
           
           <p className="center">Space Invadors destroyed this page! Take revenge on them!
            <br/> Use <span className="label label-danger">Space</span> to shoot and <span className="label label-danger">←</span>&#160;<span className="label label-danger">→</span> to move!&#160;&#160;&#160;<button className="btn btn-default btn-xs" id="restart">Restart</button></p>

            <canvas id="space-invaders">
            </canvas>

        </div>
        <Footer />
      </div>
    );
  }
}
// <ListView {...this.props} />