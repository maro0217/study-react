import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";




export const Comments = () => {
    const {data: comments, error: commentError, isLoading, isEmpty} = useComments();

    if(isLoading) {
        return <div>ローディング中です</div>
      }
    if(commentError) {
    return <div>{commentError.message}</div>
    }
    if(isEmpty) {
    return <div>データは空です</div>
    }

    return (
        <ul className="space-y-2">
            {comments.map((comment) => {
                return (
                    <li key={comment.id} className="border-b pb-2">
                        <Link href={`/comments/${comment.id}`}>
                            <a className="block hover:text-blue-500">{comment.body}</a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};
