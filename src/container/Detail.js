/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Container } from 'native-base';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ flex: 1 }}>
        <WebView source={{ uri: navigation.getParam('webUrl') }} />
      </Container>
    );
  }
}

export default Detail;
