import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Posts } from 'src/components/Posts'
import styles from 'src/styles/Home.module.css'






export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className={styles.header}/>

      <Posts/>
    </div>
  )
}