import React from 'react';

import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Item = ({item}) => {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate('Details', {
      id: item.id,
    });
  };
  return (
    <View style={styles.Item}>
      <Pressable
        style={({pressed}) => [{flex: 1}, pressed ? {opacity: 0.4} : null]}
        onPress={navigationHandler}>
        <View>
          <Image source={{uri: item.imageUrl}} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{item.price}</Text>
          <Text style={styles.detailItem}>{item.material.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 8,
  },
  image: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    alignContent: 'center',
    alignSelf: 'center',
  },
  Item: {
    margin: 16,
    overflow: 'visible',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.3,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default Item;
