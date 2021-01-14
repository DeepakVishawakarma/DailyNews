/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NewsItem = ({ tabs, tabIndex, filterNews }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginLeft: 10,
          marginRight: index === tabs.length - 1 ? 10 : 0,
        }}>
        <TouchableOpacity
          key={index}
          style={{
            borderWidth: 0.5,
            borderRadius: 50,
            padding: 6,
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: tabIndex === index ? '#737AE1' : '#c1c1c1',
            borderColor: tabIndex === index ? '#737AE1' : '#c1c1c1',
          }}
          onPress={() => {
            filterNews(index);
          }}>
          <Text
            allowFontScaling={false}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: tabIndex === index ? '#ffffff' : '#000000',
              fontFamily: tabIndex === index ? 'Nunito-Bold' : 'Nunito-Regular',
              fontSize: 12,
              minWidth: 80,
            }}>
            {item && item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 4 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <FlatList
          horizontal
          data={tabs}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(v, i) => `${v.id}${i}`}
        />
      </View>
    </View>
  );
};

export default NewsItem;
