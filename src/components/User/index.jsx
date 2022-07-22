import Head from 'next/head';
import { PostsByUserId } from 'src/components/Posts/PostsByUserId';
import { usePost, useUser } from 'src/hooks/useFetchData';




export const User = () => {
  const {data, error, isLoading} = useUser();

  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }

  return (
        <div>
            <Head>
                <title>{data?.name}</title>
            </Head>
            <h1>{data?.name}</h1>


            <PostsByUserId id={data.id}/>
        </div>
    )
}