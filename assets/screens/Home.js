import React from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import CategoryContainerCarousel from '../components/CategoryContainerCarousel';
import Subtitle from '../components/Detail/Subtitle';
import {CATEGORIES} from '../data/dummy-data';

const Home = ({navigation}) => {
  const carouselData = [
    'https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80',
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2402&q=80',
    'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80',
  ];
  function renderItem({item, index}) {
    console.log(item, index);
    return (
      <ImageBackground style={styles.imageBackground} source={{uri: item}}>
        <Text style={{fontSize: 30}}>Sale</Text>
        <Text>Buy Now</Text>
      </ImageBackground>
    );
  }
  const renderListItem = data => {
    function onPressHandler() {
      return navigation.navigate('Overview', {
        categoryId: data.item.id,
      });
    }
    return (
      <CategoryContainerCarousel
        title={data.item.title}
        id={data.item.id}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Subtitle textStyle={{textAlign: 'left'}}>Popular</Subtitle>
        <View style={styles.carouselContainer}>
          <Carousel
            layout={'default'}
            data={carouselData}
            sliderWidth={300}
            itemWidth={300}
            itemHeight={250}
            renderItem={renderItem}
            autoplay={true}
            loop={true}
          />
        </View>
        <Subtitle textStyle={{textAlign: 'left'}}>Shop by Category</Subtitle>
        <FlatList
          keyExtractor={item => item.id}
          data={CATEGORIES}
          renderItem={renderListItem}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageBackground: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 200,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
    width: 250,
  },
});

export default Home;
