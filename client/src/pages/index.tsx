import React from 'react'
import { NextPage } from 'next'

import Layout from '~/components/templates/Layout'

type Props = {}

const Index: NextPage<Props> = (): JSX.Element => {
  return (
    <Layout>
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        This is a home page
      </main>
    </Layout>
  )
}

export default Index
