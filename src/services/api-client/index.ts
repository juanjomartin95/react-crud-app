import axios, { AxiosError } from 'axios'
import env from '@/environment.ts'
import { BaseQueryFn } from '@reduxjs/toolkit/query'

const client = axios.create({
  baseURL: `${env.baseApiUrl}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const axiosBaseQuery = (): BaseQueryFn => {
  // return async (requestOpts: { url: string }, { getState }) => {
  return async (requestOpts: { url: string }) => {
    try {
      return await client({ ...requestOpts, url: `${env.baseApiUrl}/${requestOpts.url}` })
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return { error: { status: err.response?.status, data: err.response?.data } }
    }
  }
}

export default client
