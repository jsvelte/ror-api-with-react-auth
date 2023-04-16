import { w, W } from 'windstitch'
import classNames from 'classnames'

const Button = w.button(
  classNames(
    'disabled:cursor-not-allowed disabled:opacity-50',
    'placeholder:font-normal placeholder:text-gray-400 w-full',
    'transition ease-in-out duration-150 border'
  ),
  {
    variants: {
      variant: {
        blue: classNames(
          'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br',
          ' focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center'
        ),
        green: classNames(
          'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br',
          'focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center'
        ),
        cyan: classNames(
          'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br',
          'focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm text-center'
        ),
        teal: classNames(
          'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br',
          'focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm text-center'
        )
      },
      size: {
        xs: 'text-xs px-3 py-2',
        sm: 'text-sm px-3 py-2',
        base: 'text-sm px-5 py-2.5',
        lg: 'text-base px-5 py-3',
        xl: 'text-base px-6 py-3.5'
      }
    },
    defaultVariants: {
      variant: 'blue',
      size: 'base'
    }
  }
)

export type ButtonProps = W.Infer<typeof Button>

export default Button
