import { useCallback, useEffect, useReducer, useState } from 'react'

const initialState = {
  data: [],
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end" :
      return  {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error" :
      return  {
        ...state,
        error,
        loading: false,
    };
    default:
      throw new Error("no such action type!");
  }
}

export const Posts = (props) => {

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
const [state, dispatch] =  useReducer(reducer, initialState)

  const getPosts = useCallback(async () => {
    try {

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok) {
        throw new Error("データの取得に失敗しました")
      }
      const json = await res.json();
      dispatch({type: "end", data: "json"})

      // setPosts(json)
    } catch (error) {
      dispatch({type: "error", error})
    } finally {
      // setLoading(false);

    }
  }, [])

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if(state.loading) {
    return <div>ローディング中です</div>
  }
  if(state.error) {
    return <div>{state.error.message}</div>
  }
  if(state.data.length === 0) {
    return <div>データは空です</div>
  }


  return (
        <ol>
            {state.data.map((post) => {
            return <li key={post.id}>{post.title}</li>
            }) }
        </ol>
    )
}