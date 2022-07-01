import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
// import { useContext } from 'react';

import CategoryList from '../components/CategoryList/CategoryList';
// import { FavoritesContext } from '../store/context/favorites-context';
import {ITEMS} from '../data/dummy-data';

function FavoritesScreen() {
  const favouriteItemIds = useSelector(state => state.favoriteItems.ids);

  const favouriteItems = ITEMS.filter(item =>
    favouriteItemIds.includes(item.id),
  );

  if (favouriteItems.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite Items yet.</Text>
      </View>
    );
  }

  return <CategoryList items={favouriteItems} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
});
