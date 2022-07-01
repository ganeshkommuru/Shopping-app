import React from 'react';

import {FlatList, View} from 'react-native';
import CategoryTile from '../components/CategoryTile';
import {CATEGORIES} from '../data/dummy-data';

const CategoryScreens = ({navigation}) => {
  const renderItem = data => {
    function onPressHandler() {
      return navigation.navigate('Overview', {
        categoryId: data.item.id,
      });
    }
    return (
      <CategoryTile
        title={data.item.title}
        image={data.item.image}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default CategoryScreens;
