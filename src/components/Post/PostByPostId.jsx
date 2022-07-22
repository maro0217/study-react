import Link from "next/link"
import { fetcher } from "src/utils/fetcher"
import useSWR from "swr"

export const PostByPostId = (props) => {
    const {data, error} =  useSWR(
        props.id
         ? `https://jsonplaceholder.typicode.com/posts/${props.id}`
         : null,
        fetcher)

        if(!data && !error) {
            return <div>ローディング中です</div>
          }

        if(error) {
            return <div>{error.message}</div>
          }
    
    return (
        <div>
            <Link href={`/posts/${data.id}`}>
                <a className="text-lg hover:text-blue-500">{data?.title}</a>
            </Link>
        </div>
    )
}