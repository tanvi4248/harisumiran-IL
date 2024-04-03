import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { harisumiranApi } from "../api/harisumiranApi";

const store = configureStore({
  reducer: {
    [harisumiranApi.reducerPath]: harisumiranApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(harisumiranApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
