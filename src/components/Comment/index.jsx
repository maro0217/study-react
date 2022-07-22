import Head from 'next/head';
import { PostByPostId } from 'src/components/Post/PostByPostId';
import { useComment } from 'src/hooks/useFetchData';


export const Comment = () => {
  const {data, error, isLoading} = useComment();

  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }

  return (
        <div>
            <Head>
                <title>{data?.id}</title>
            </Head>
            <h1>{data?.body}</h1>
            {data.body ? (<p>Created by {data.name}</p>) : null}
            <h3>Original Feed</h3>
            <PostByPostId id={data.postId} />

        </div>
    )
}