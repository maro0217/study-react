import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Comment } from 'src/components/Comment';
import { SWRConfig } from 'swr';

export const getStaticPaths = async() => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: {id: comment.id.toString()}
  }))

  return {
    paths,
    fallback: false
  }
};


export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  // ユーザー一覧の取得
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments${id}`;
  const comments = await fetch(COMMENTS_API_URL)
  const commentsData = await comments.json();
  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      }
    },
  }
};


const CommentId = (props) => {
  const { fallback } = props

    return (
      <div>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SWRConfig value={{ fallback }}>
          <Header/>
    
          <Comment/>
          </SWRConfig>

      </div>
    )
  }

  export default CommentId