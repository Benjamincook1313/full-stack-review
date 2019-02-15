import React, { Component } from 'react';
import Axios from 'axios';

export default class DetailMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {}
    };
  }

  componentDidMount() {
    Axios.get(`/api/message/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        message: res.data
      });
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Detailed View</h1>
        <h4>{this.state.message.message}</h4>
        <button onClick={() => this.props.history.push('/dashboard')}>
          Go Back
        </button>
      </div>
    );
  }
}
