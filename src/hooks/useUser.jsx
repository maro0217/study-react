// import { useRouter } from 'next/router'
// import { fetcher } from 'src/utils/fetcher'
// import useSWR from 'swr'


// export const useUser = () => {
//     const router = useRouter()

//     const {data: user, error: userError} =  useSWR(router.query.id ? `https://jsonplaceholder.typicode.com/users/${router.query.id}` : null, fetcher)
//     const {data: post, error: postError} =  useSWR(user?.id ? `https://jsonplaceholder.typicode.com/posts/${user.id}` : null, fetcher)

//     return {
//         user,
//         post,
//         error: postError || userError,
//         isLoading: !post && !postError
//     }
// }