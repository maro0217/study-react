import Head from 'next/head'
import Image from 'next/image'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import styles from 'src/styles/Home.module.css'

const Index = () => {

  return (
    <div className={styles.container}>
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
