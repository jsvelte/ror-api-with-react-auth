import axios from 'axios'
import { GenericResponse, RegisterInput } from '~/utils/types'

const BASE_URL = 'http://localhost:3001/'

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

authApi.defaults.headers.common['Content-Type'] = 'application/json'

export const signUpUserFn = async (user: RegisterInput): Promise<GenericResponse> => {
  const response = await authApi.post<GenericResponse>('registrations', user)
  return response.data
}
