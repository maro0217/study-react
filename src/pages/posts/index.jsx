import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Posts as PostsComponent } from 'src/components/Posts'

const PostsId =() => {

  return (
    <div>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <PostsComponent/>
    </div>
  )
}

export default PostsId