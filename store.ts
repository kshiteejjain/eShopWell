import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    counter: cartReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch