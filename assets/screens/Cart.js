import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';

import CategoryList from '../components/CategoryList/CategoryList';
import {ITEMS} from '../data/dummy-data';

function CartScreen() {
  const cartItemIds = useSelector(state => state.cartItems.ids);

  const cartItems = ITEMS.filter(item => cartItemIds.includes(item.id));

  if (cartItems.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          You Haven't added any items to the cart yet add items to the cart to
          proceed to checkout.
        </Text>
      </View>
    );
  }

  return (
    <>
      <CategoryList items={cartItems} />
      <View style={{paddingBottom: 50}}>
        <Button title="Procced to Checkout" />
      </View>
    </>
  );
}

export default CartScreen;

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
    padding: 20,
    textAlign: 'center',
  },
});
