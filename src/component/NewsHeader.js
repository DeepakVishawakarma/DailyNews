/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  ImageBackground,
} from 'react-native';
import EmptyList from '../component/EmptyList';
import * as Animatable from 'react-native-animatable';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NewsItem = ({ trendingNews, loading }) => {
  const renderItem = ({ item, index }) => {
    const { title, urlToImage } = item;
    return (
      <Animatable.View
        animation="slideInRight"
        style={{
          backgroundColor: '#c1c1c1',
          width: wp('50'),
          height: hp('30'),
          marginLeft: 10,
          marginRight: index === trendingNews.length - 1 ? 10 : 0,
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
    );
  };

  return (
    <View style={{ paddingVertical: 4 }}>
      <View style={{}}>
        <FlatList
          horizontal
          data={trendingNews}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(v, i) => `${v.id}${i}`}
          ListEmptyComponent={
            <View
              style={{
                width: wp('100%'),
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <EmptyList loading={loading} />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default NewsItem;
