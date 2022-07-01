import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import IconButton from '../components/IconButtons';
import List from '../components/Detail/List';
import Subtitle from '../components/Detail/Subtitle';
import Details from '../components/Details';
import {ITEMS} from '../data/dummy-data';
import {addFavorite, removeFavorite} from '../store/redux/favourite';
import {addToCart, removeFromCart} from '../store/redux/cart';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {color} from 'react-native-reanimated';

function DetailScreen({route, navigation}) {
  const [addedToCart, setAddedToCart] = useState(false);
  const favouriteItemIds = useSelector(state => state.favoriteItems.ids);
  const cartItemIds = useSelector(state => state.cartItems.ids);
  const dispatch = useDispatch();

  const itemId = route.params.id;
  console.log(route.params);
  console.log(itemId);
  const selectedItem = ITEMS.find(item => item.id === itemId);
  console.log(selectedItem);

  const isFavorite = favouriteItemIds.includes(itemId);
  useEffect(() => {
    setAddedToCart(cartItemIds.includes(itemId));
  }, [addedToCart, cartItemIds, itemId]);

  function changeFavoriteStatusHandler() {
    if (isFavorite) {
      dispatch(removeFavorite({id: itemId}));
    } else {
      dispatch(addFavorite({id: itemId}));
    }
  }

  function toggleCartItem() {
    if (addedToCart) {
      dispatch(removeFromCart({id: itemId}));
    } else {
      dispatch(addToCart({id: itemId}));
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function renderIcon() {
    return (
      <IconButton
        icon={isFavorite ? 'heart' : 'heart-outline'}
        color="white"
        onPress={changeFavoriteStatusHandler}
      />
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return renderIcon();
      },
    });
  }, [navigation, renderIcon]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedItem.imageUrl}} />
      <Text style={styles.title}>{selectedItem.title}</Text>
      <Details
        price={selectedItem.price}
        material={selectedItem.material}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Item Contains</Subtitle>
          <List data={selectedItem.ingredients} />
          <Subtitle>Washing instructions</Subtitle>
          <List data={selectedItem.washingInstructions} />
        </View>
      </View>
      <Pressable onPress={toggleCartItem}>
        <View style={styles.cart}>
          <Text style={{color: 'white'}}>
            {addedToCart ? 'Remove From Cart' : 'Add To Cart'}
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
  cart: {
    margin: 16,
    borderColor: 'blue',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: 6,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
});
