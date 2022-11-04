import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { clickPersistReducer } from './contactsSlice';
import { filtringReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: clickPersistReducer,
    filter: filtringReducer,
  },
  middleware(getDefaultMiddleWare) {
    return getDefaultMiddleWare({
       serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    });
  },
});

export const persistor = persistStore(store);

