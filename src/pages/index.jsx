import Head from 'next/head'
import { Header } from 'src/components/Header'

const Index = () => {

  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header/>
      <h1>Choreograhy Search</h1>
      <p>お気に入りのコレオグラフを探せるよ！</p>

    </div>
  )
}

export default Index
