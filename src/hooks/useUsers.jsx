import { fetcher } from "src/utils/fetcher"
import useSWR from "swr"

export const useUsers = () => {
    const {data: users, error: userError} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)
    return {
        users,
        userError,
        isLoading: !users && !userError,
        isEmpty: users && users.length === 0
    }
    
}