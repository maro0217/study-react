import Head from 'next/head'
import { CommentList, Comments as CommentsComponent } from 'src/components/Comment/CommentList'
import { SWRConfig } from 'swr';
import { API_URL } from 'src/utils/const';

export const getStaticProps = async () => {
  // ユーザー一覧の取得
  const COMMENTS_API_URL = `${API_URL}/comments`;
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

const CommentsId =(props) => {
  const { fallback } = props

  return (
    <div>
      <Head>
        <title>Comment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fallback }}>

        <CommentList/>
      </SWRConfig>

    </div>
  )
}

export default CommentsId