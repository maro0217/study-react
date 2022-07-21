import Link from "next/link";
import { useComments } from "src/hooks/useComments";


export const Comments = (props) => {
    const {comments, commentError, isLoading, isEmpty} = useComments();

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
        <ol>
            {comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <Link href={`/comments/${comment.id}`}>
                            {comment.body}
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
};
