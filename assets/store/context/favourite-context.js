import {createContext, useState} from 'react';
import React from 'react';

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
});

function FavouriteContextProvider({children}) {
  const [favouriteIds, setFavouriteIds] = useState([]);
  function addFavourite(id) {
    return setFavouriteIds(currentIds => [...currentIds, id]);
  }
  function removeFavourite(id) {
    return setFavouriteIds(currentIds =>
      currentIds.filter(currentId => currentId != id),
    );
  }

  const value = {
    ids: favouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return <FavouriteContext value={value}>{children}</FavouriteContext>;
}

export default FavouriteContextProvider;
