import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  metaTitle?: string
}

const Layout: FC<Props> = ({ children, metaTitle }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <div>{children}</div>
    </>
  )
}

Layout.defaultProps = {
  metaTitle: 'Demo ROR API Auth + React'
}

export default Layout
