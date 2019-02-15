import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  onEdit(message) {
    this.props.onEdit(message);
    this.setState({
      editing: true
    });
  }

  updateMessage(id) {
    this.props.updateMessage(id);
    this.setState({
      editing: false
    });
  }

  render() {
    const { message, deleteMessage } = this.props;
    return (
      <div
        style={{
          width: '400px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto'
        }}
      >
        <Link to={`/message/${message.message_id}`}>
          <h4>{message.message}</h4>
        </Link>
        <div>
          <button onClick={() => deleteMessage(message.message_id)}>
            Delete
          </button>
          {this.state.editing ? (
            <button onClick={() => this.updateMessage(message.message_id)}>
              Save
            </button>
          ) : (
            <button onClick={() => this.onEdit(message.message)}>Edit</button>
          )}
        </div>
      </div>
    );
  }
}

export default Message;
