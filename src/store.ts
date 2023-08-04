import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BASE_API_REDUCER_KEY, baseApi } from '@/services/query/baseApi.ts'

const rootReducer = combineReducers({
  [BASE_API_REDUCER_KEY]: baseApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware)
  },
})
