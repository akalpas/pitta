import React, { Component, PropTypes } from 'react';
import WebAPIUtils from '../utils/WebAPIUtils';
import './list.css';

export default class ListView extends Component {

  static propTypes = {
    events: PropTypes.array.isRequired
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
      <div className="container-fluid ">
        {
          events.map((event)=>{
            console.log(event)
            return(
                <div className="wrapper-event">
                  <div className="row">
                    <div className="col-xs-4 col-md-4">
                      <img className="img-thumbnail" src={event.photo_200} alt="image" />
                    </div>
                    <div className="col-xs-8 col-md-8">
                      <h3>{event.name}</h3>
                    </div>
                  </div>
                  <div className="event-description">
                    <p>{event.descroption}</p>
                  </div>
                </div>
              );
          })
        }
      </div>
    );
  }
}
