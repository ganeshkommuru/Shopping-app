import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import CategoryItem from './CategoryItem';

function CategoryList({items}) {
  function renderItem(itemData) {
    const item = itemData.item;

    const itemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      material: item.material,
    };
    return <CategoryItem {...itemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
