import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../layouts'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
    </MainLayout>
  )
}

export default Home
