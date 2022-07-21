import { fetcher } from "src/utils/fetcher"
import useSWR from "swr"

export const useComments = () => {
    const {data: comments, error: commentError} = useSWR("https://jsonplaceholder.typicode.com/comments", fetcher)
    return {
        comments,
        commentError,
        isLoading: !comments && !commentError,
        isEmpty: comments && comments.length === 0
    }
    
}