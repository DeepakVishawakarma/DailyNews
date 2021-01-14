/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmptyList = ({ loading }) => {
  if (loading) {
    return <View />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
      }}>
      <Icon name="database-remove" color="lightgray" size={96} />
      <View style={{ marginHorizontal: '10%' }}>
        <Text>No Data</Text>
      </View>
    </View>
  );
};
export default EmptyList;
