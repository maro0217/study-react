import Head from 'next/head';
import { CommentsByPostId } from 'src/components/Comments/CommentsByPostId';
import { UserByUserId } from 'src/components/User/UserByUserId';
import { usePost } from 'src/hooks/useFetchData'



export const Post = () => {
  const {data, error, isLoading} = usePost();


  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }

  return (
        <div>
            <Head>
                <title>{data?.title}</title>
            </Head>
            <UserByUserId id={data.userId} />
            <h1 className='test-3xl font-bold'>{data?.title}</h1>
            <p className='text-xl mt-2 text-gray-900'>{data?.body}</p>
            <h2 className='text-xl font-bold mt-20'>コメント一覧</h2>
            
            <CommentsByPostId id={data.id}/>
        </div>
    )
}