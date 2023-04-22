import * as yup from 'yup'

export const SignUpSchema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup
    .string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .label('Password'),
  password_confirmation: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .label('Password Confirmation')
})
