import { w, W } from 'windstitch'
import classNames from 'classnames'
import { FieldError } from 'react-hook-form'

const iserror = (value: boolean | FieldError | undefined): string =>
  value
    ? 'border-2 border-rose-500 ring-rose-500 group-focus:border-rose-500 group-focus:ring-rose-500'
    : ''

const Input = w.input(
  classNames(
    'disabled:cursor-not-allowed disabled:opacity-50',
    'placeholder:font-normal placeholder:text-gray-400 w-full',
    'transition ease-in-out duration-150 border'
  ),
  {
    variants: {
      color: {
        black: classNames(
          'bg-gray-50 border-gray-300 text-gray-900 rounded-lg',
          'focus:border-black-500 block w-full'
        ),
        blue: classNames(
          'bg-gray-50 border-gray-300 text-gray-900 rounded-lg',
          'focus:border-blue-500 block w-full'
        )
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
      },
      iserror
    },
    defaultVariants: {
      iserror: false,
      color: 'blue',
      size: 'sm'
    }
  }
)

export type InputProps = W.Infer<typeof Input>

export default Input
