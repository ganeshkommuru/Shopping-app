import React from 'react';

import {Pressable, View, Text, StyleSheet, ImageBackground} from 'react-native';

const CategoryTile = ({title, image, onPress}) => {
  return (
    <View style={[styles.container]}>
      <Pressable
        style={({pressed}) => [{flex: 1}, pressed ? {opacity: 0.4} : null]}
        onPress={onPress}>
        <View style={[styles.innerContainer]}>
          <ImageBackground source={{uri: image}} style={styles.image}>
            <Text style={styles.titleStyle}>{title}</Text>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    height: 150,
    borderRadius: 8,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: {height: 2, width: 2},
    shadowOpacity: 0.3,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    opacity: 0.7,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 12,
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    opacity: 1,
  },
});

export default CategoryTile;
