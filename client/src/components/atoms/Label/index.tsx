import { w, W } from 'windstitch'

const Label = w.label('block', {
  variants: {
    color: {
      gray: 'text-gray-900',
      blue: 'text-blue-900'
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    },
    fontWeight: {
      light: 'font-light',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extraBold: 'font-extrabold'
    }
  },
  defaultVariants: {
    color: 'gray',
    size: 'sm',
    fontWeight: 'medium'
  }
})

export type LabelProps = W.Infer<typeof Label>

export default Label
