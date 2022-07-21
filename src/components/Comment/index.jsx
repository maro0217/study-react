import Head from 'next/head';
import { useComment } from 'src/hooks/useComment';


export const Comment = () => {
  const {comment, user, error, isLoading} = useComment();

  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }

  return (
        <div>
            <Head>
                <title>{comment?.id}</title>
            </Head>
            <h1>{comment?.body}</h1>
            {comment.body ? (<p>Created by {user.name}</p>) : null}
        </div>
    )
}