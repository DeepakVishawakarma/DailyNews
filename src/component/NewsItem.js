/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NewsItem = ({ item, index, goToDetail }) => {
  const { title, urlToImage, url } = item;
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TouchableOpacity onPress={() => goToDetail(url)}>
        <Animatable.View
          key={index}
          animation="fadeInUp"
          style={{
            backgroundColor: '#c1c1c1',
            width: '100%',
            height: hp('30'),
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={{ uri: urlToImage }}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}>
            <View
              style={{
                backgroundColor: 'black',
                opacity: 0.5,
                position: 'absolute',
                bottom: 0,
                height: hp('10%'),
                width: '100%',
              }}
            />
            <View style={{ position: 'absolute', bottom: 0, padding: hp('2') }}>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, color: 'white', opacity: 1 }}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsItem;
