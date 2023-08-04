import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/services/api-client';

export const BASE_API_REDUCER_KEY = 'baseApi';
export const baseApi = createApi({
  reducerPath: BASE_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
