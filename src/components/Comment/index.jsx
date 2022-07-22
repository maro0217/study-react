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
            {data.body ? (<p className='text-lg'>Created by {data.name}</p>) : null}
            <h1 className='text-3xl font-bold'>{data?.body}</h1>
            <h2 className='text-xl font-bold mt-20'>Original Feed</h2>
            <PostByPostId id={data.postId} />
        </div>
    )
}