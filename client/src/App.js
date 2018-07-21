import React, { Component } from 'react';

import './styles/global';

import socket from './services/socket';

import { Container, List } from './styles';

class App extends Component {
  state = {
    tweets: [],
  };

  componentDidMount() {
    // socket.on('message', console.log);
    socket.on('tweet', this.handleNewTweet);
  }

  handleNewTweet = tweet => {
    this.setState({ tweets: [ ...this.state.tweets, tweet ] });
  };

  render() {
    return (
      <Container>
        <h1>Jesus loves you!</h1>
        <List>
        {this.state.tweets.map(tweet => (
          <li key={tweet._id}>
            <img src={tweet.avatar_url} alt="avatar" />
            <strong>{tweet.content}</strong>
          </li>
        ))}
        </List>
      </Container>
    );
  }
}

export default App;
