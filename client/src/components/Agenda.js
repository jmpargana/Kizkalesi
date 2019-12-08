import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:3001/events', {

      })
      .then(res => {
        this.setState({
          events: res.data,
        });
      })
      .catch(err => console.log(err));

  }

  render() {
    const eventId = this.props.match.params.eventId;
    return eventId ? (
      <Router>
        <Redirect to={'/location/' + eventId} />
      </Router>
    ) : (
      <div>
        <h1>Agenda</h1>
        {this.state.events.map((event, i) => (
          <div key={i}>
            <h2 key={"title"+i}>{event.title}</h2>
            <p key={"about"+i}>About: {event.about}</p>
            <p key={"date"+i}>Date: {event.date}</p>
            <p key={"img"+i}>Image: {event.img}</p>
            <p key={"genre"+i}>Genre: {event.genre}</p>
          </div>
       ))}
      </div>
    );
  }
}

export default Agenda;
