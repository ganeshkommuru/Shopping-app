import {configureStore} from '@reduxjs/toolkit';

import favoritesReducer from './favourite';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    favoriteItems: favoritesReducer,
    cartItems: cartReducer,
  },
});
