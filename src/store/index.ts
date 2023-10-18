import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import fieldsReducer from './slices/fieldsSlice';
import selectedFieldReducer from './slices/selectedFieldSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  fields: fieldsReducer,
  selectedField: selectedFieldReducer,
});

export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
