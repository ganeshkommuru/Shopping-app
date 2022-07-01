import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Details({price, material, textStyle}) {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.detailItem, textStyle]}>{price} only </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {material.toUpperCase()}
      </Text>
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
