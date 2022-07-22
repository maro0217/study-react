import { fetcher } from "src/utils/fetcher"
import useSWR from "swr"

export const UserByUserId = (props) => {
    const {data: user, error} =  useSWR(
        props.id
         ? `https://jsonplaceholder.typicode.com/users/${props.id}`
         : null,
        fetcher)

        if(!user && !error) {
            return <div>ローディング中です</div>
          }

        if(error) {
            return <div>{error.message}</div>
          }
    
    return (
        <div className="text-lg">Created by {user.name}</div>
    )
}