import Link from 'next/link';
import { usePosts } from 'src/hooks/useFetchArray';



export const Posts = () => {
  const {data, error, isLoading, isEmpty} = usePosts();
  if(isLoading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }
  if(isEmpty) {
    return <div>データは空です</div>
  }

  console.log(data);
  return (
        <ul className='space-y-4'>
            {data.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a className='group'>
                    <h1 className='font-bold group-hover:text-blue-500 text-xl'>{post.title}</h1>
                    <p className='text-sm text-gray-500 group-hover:text-blue-500'>{post.body}</p>
                  </a>
                </Link>
              </li>)
            }) } 
        </ul>
    )
}