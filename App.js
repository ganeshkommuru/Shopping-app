/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';

import CategoryScreens from './assets/screens/CategoryScreens';
import OverviewScreen from './assets/screens/OverviewScreen';
import DetailScreen from './assets/screens/DetailsScreen';
import FavouritesScreen from './assets/screens/FavouriteScreen';
import FavouriteContextProvider from './assets/store/context/favourite-context';
import {store} from './assets/store/redux/store';
import CartScreen from './assets/screens/Cart';
import Home from './assets/screens/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  function DrawerNavigation() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'grey'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#white'},
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Categories"
          component={CategoryScreens}
          options={{
            title: 'All Categories',
          }}
        />
        <Drawer.Screen name="Favourites" component={FavouritesScreen} />

        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: 'grey'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: 'white'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Overview" component={OverviewScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouriteContextProvider> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
