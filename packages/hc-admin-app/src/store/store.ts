import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { appReducer } from './app';
import { ruleReducer } from './rule';
import sessionStorage from 'redux-persist/lib/storage/session';
import { uiReducer } from './ui';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    rule: ruleReducer,
    app: appReducer,
    ui: uiReducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
// export const store = configureStore({
//   reducer: {
//     rule: ruleReducer,
//     app: appReducer,
//   },
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
