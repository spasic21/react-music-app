import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from "./services/shazamCore";
import { deezerCoreApi } from "./services/deezerCore";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [deezerCoreApi.reducerPath]: deezerCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
          .concat(shazamCoreApi.middleware)
          .concat(deezerCoreApi.middleware)
});
