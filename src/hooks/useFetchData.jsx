import { useRouter } from "next/router"
import useSWRImmutable from "swr/immutable"

export const useFetchArray = (url) => {
    const router = useRouter();
    const PRIVATE_URL = url + router.query.id;
    const {data, error} = useSWRImmutable(PRIVATE_URL)
    return {
        data,
        error,
        isLoading: !data && !error,
        isEmpty: data && data.length === 0
    }
    
}
const API_URL = "https://jsonplaceholder.typicode.com"

export const usePost = () => {
    return useFetchArray(`${API_URL}/posts/`);
}
export const useUser = () => {
    return useFetchArray(`${API_URL}/users/`);
}
export const useComment = () => {
    return useFetchArray(`${API_URL}/comments/`);
}
