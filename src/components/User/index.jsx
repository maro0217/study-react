import Head from 'next/head';
import { usePost } from 'src/hooks/usePost'
import { useUser } from 'src/hooks/useUser';



export const User = () => {
  const {user, post, error, isLoading} = useUser();

  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }

  return (
        <div>
            <Head>
                <title>{user?.name}</title>
            </Head>
            <h1>{user?.name}</h1>
            <p>{post?.body}</p>
        </div>
    )
}