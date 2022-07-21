import { useRouter } from 'next/router'
import { fetcher } from 'src/utils/fetcher'
import useSWR from 'swr'


export const useComment = () => {
    const router = useRouter()

    const {data: comment, error: commentError} =  useSWR(router.query.id ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}` : null, fetcher)
    const {data: user, error: userError} =  useSWR( comment?.id ? `https://jsonplaceholder.typicode.com/users/${comment?.id}` : null, fetcher)

    return {
        comment,
        user,
        error: commentError || userError,
        isLoading: !user && !userError
    }
}