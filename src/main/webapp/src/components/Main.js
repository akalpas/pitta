import React, { Component, PropTypes } from 'react';


export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <h1>Hello from Pitta</h1>

            <p>We don't have really much to show for now.</p>
            <p>but in the meantime you can can share your ideas and feedback with us</p>
            <p>
                <a class="btn btn-primary btn-lg" href="http://goo.gl/forms/1BuUBkr6dQ">Share your ideas »</a>
            </p>
        </div>
      </div>
    );
  }
}
