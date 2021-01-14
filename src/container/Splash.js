/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 2000);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }} />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'Nunito-Regular',
            }}>
            Daily{' '}
            <Animatable.Text
              animation="fadeInUp"
              easing="ease"
              delay={600}
              style={{
                color: '#737AE1',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Nunito-Regular',
                textAlign: 'center',
              }}>
              News
            </Animatable.Text>
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ position: 'absolute', bottom: 0 }}>
            <Animatable.Text
              animation="fadeInUpBig"
              easing="ease"
              delay={600}
              style={{
                fontSize: 20,
                fontFamily: 'Nunito-Regular',
              }}>
              Welcome to the Daily <Text>News</Text>
            </Animatable.Text>
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

export default Splash;
