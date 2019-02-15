import React, { Component } from 'react';
import Message from './Message';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      input: ''
    };
  }

  handleInput(val) {
    this.setState({
      input: val
    });
  }

  componentDidMount() {
    axios.get('/api/messages').then(res => {
      console.log(res.data);
      this.setState({
        messages: res.data
      });
    });
  }

  postMessage() {
    const { input } = this.state;
    axios.post('/api/message', { message: input }).then(res => {
      this.setState({
        messages: res.data,
        input: ''
      });
    });
  }

  deleteMessage = id => {
    axios.delete(`/api/message/${id}`).then(res => {
      this.setState({
        messages: res.data
      });
    });
  };

  onEdit = message => {
    console.log('editing');
    this.setState({
      input: message
    });
  };

  updateMessage = id => {
    const { input } = this.state;
    console.log(id);
    axios.put(`/api/message/${id}`, { message: input }).then(res => {
      this.setState({
        messages: res.data,
        input: '',
        editing: false
      });
    });
  };

  render() {
    const mappedMessages = this.state.messages.map(message => {
      return (
        <Message
          key={message.message_id}
          message={message}
          deleteMessage={this.deleteMessage}
          updateMessage={this.updateMessage}
          onEdit={this.onEdit}
        />
      );
    });
    return (
      <div className="App">
        <h1>Message App</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={() => this.postMessage()}>Send Message</button>
        {mappedMessages}
      </div>
    );
  }
}

export default Dashboard;
