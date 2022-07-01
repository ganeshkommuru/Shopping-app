import React from 'react';

import {View, StyleSheet, Text, Pressable, FlatList} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ITEMS} from '../data/dummy-data';
import Item from './Item';

const CategoryContainerCarousel = ({title, id, onPress}) => {
  const Items = ITEMS.filter(item => item.categoryIds.indexOf(id) >= 0);
  function renderItem({item, index}) {
    return <Item item={item} />;
  }
  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{title}</Text>
          <Icon name="arrow-forward" style={styles.iconStyle} />
        </View>
      </Pressable>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Carousel
          layout={'default'}
          data={Items}
          sliderWidth={200}
          itemWidth={200}
          itemHeight={200}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    color: '#e2b497',
    fontSize: 18,
    alignSelf: 'flex-end',
  },
});

export default CategoryContainerCarousel;
