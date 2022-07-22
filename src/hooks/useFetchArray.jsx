import { useRouter } from "next/router"
import { API_URL } from "src/utils/const"
import { fetcher } from "src/utils/fetcher"
import useSWRImmutable from "swr/immutable"

export const useFetchArray = (url) => {
    const {data, error} = useSWRImmutable(url)
    return {
        data,
        error,
        isLoading: !data && !error,
        isEmpty: data && data.length === 0
    }
    
}



export const usePosts = () => {
    return useFetchArray(`${API_URL}/posts`);
}
export const useUsers = () => {
    return useFetchArray(`${API_URL}/users`);
}
export const useComments = () => {
    return useFetchArray(`${API_URL}/comments`);
}

export const useCommentsByPostId = (id) => {
    return useFetchArray( id ? `${API_URL}/comments?postId=${id}` : null);
};

export const usePostsByUserId = (id) => {
    return useFetchArray( id ? `${API_URL}/posts?userId=${id}` : null);
};

    
