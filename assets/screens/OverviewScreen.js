import React, {useLayoutEffect} from 'react';

import {FlatList} from 'react-native';
import Item from '../components/Item';
import {CATEGORIES, ITEMS} from '../data/dummy-data';

const OverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;
  const Items = ITEMS.filter(item => item.categoryIds.indexOf(catId) >= 0);
  useLayoutEffect(() => {
    const catName = CATEGORIES.find(item => item.id === catId);
    navigation.setOptions({
      title: catName.title,
    });
  }, [catId, navigation]);
  return (
    <FlatList
      data={Items}
      keyExtractor={item => item.id}
      renderItem={item => <Item item={item.item} />}
    />
  );
};

export default OverviewScreen;
