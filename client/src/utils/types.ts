export interface IUser {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface GenericResponse {
  status: string
  message: string
}

export interface ILoginResponse {
  status: string
  access_token: string
}

export interface IUserResponse {
  status: string
  data: {
    user: IUser
  }
}

export interface RegisterInput {
  user: {
    email: string
    password: string
    password_confirmation: string
  }
}
