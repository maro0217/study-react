import { useRouter } from 'next/router';
import { PostTitleByCommentId } from 'src/components/Post/PostTitleByCommentId';
import { useFetch } from 'src/hooks/useFetch';
import { API_URL } from 'src/utils/const';


export const CommentDetail = () => {
  const router = useRouter();
  const {data, error, isLoading} = useFetch(router.query.id ? `${API_URL}/comments/${router.query.id}`: null);

  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }

  return (
        <div>
            {data.body ? (<p className='text-lg'>Created by {data.name}</p>) : null}
            <h1 className='text-3xl font-bold'>{data?.body}</h1>
            <h2 className='text-xl font-bold mt-20'>Original Feed</h2>
            <PostTitleByCommentId id={data.postId} />
        </div>
    )
}