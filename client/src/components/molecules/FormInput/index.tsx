import classNames from 'classnames'
import React, { FC, InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import Input from '~/components/atoms/Input'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'password'
  Icon?: any
  hasIcon?: boolean
  placeholder?: string
  disabled?: boolean
  register: UseFormRegisterReturn
  isError?: boolean | FieldError | undefined
}

const FormInput: FC<Props> = (props): JSX.Element => {
  const { register, type, hasIcon, Icon, placeholder, isError, disabled } = props

  return (
    <div className="relative">
      {hasIcon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon className="h-5 w-5 text-gray-500" />
        </div>
      )}
      <Input
        type={type}
        {...register}
        placeholder={placeholder}
        iserror={isError}
        disabled={disabled}
        className={classNames('p-2.5', hasIcon ? 'pl-10' : 'pl-4')}
      />
    </div>
  )
}

FormInput.defaultProps = {
  type: 'text',
  hasIcon: true,
  placeholder: '',
  isError: false,
  disabled: false
}

export default FormInput
