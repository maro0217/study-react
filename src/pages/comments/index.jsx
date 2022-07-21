import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Comments as CommentsComponent } from 'src/components/Comments'

const CommentsId =() => {

  return (
    <div>
      <Head>
        <title>Comment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <CommentsComponent/>
    </div>
  )
}

export default CommentsId