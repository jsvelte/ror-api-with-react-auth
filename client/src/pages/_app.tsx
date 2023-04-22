import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from '@tanstack/react-query'

import '~/styles/globals.css'
import { queryClient } from '~/lib/queryClient'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default App
