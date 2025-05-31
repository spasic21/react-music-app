import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { deezerCoreApi } from "./services/deezerCore";

export const store = configureStore({
  reducer: {
    [deezerCoreApi.reducerPath]: deezerCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
          .concat(deezerCoreApi.middleware)
});
