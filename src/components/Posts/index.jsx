import { useCallback, useEffect, useState } from 'react'

export const Posts = (props) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const getPosts = useCallback(async () => {
    try {

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok) {
        throw new Error("データの取得に失敗しました")
      }
      const json = await res.json();
      console.log(res);
      console.log(json);
      setPosts(json)
    } catch (error) {
      setError(error);

    } finally {
      setLoading(false);

    }
  }, [])

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if(loading) {
    return <div>ローディング中です</div>
  }
  if(error) {
    return <div>{error.message}</div>
  }
  if(posts.length === 0) {
    return <div>データは空です</div>
  }


  return (
        <ol>
            {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>
            }) }
        </ol>
    )
}