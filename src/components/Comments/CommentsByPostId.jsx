import Link from "next/link";

const { useCommentByPostId } = require("src/hooks/useFetchArray");

export const CommentsByPostId = (props) => {
    const {data: comments, error, isLoading, isEmpty} = useCommentByPostId(props.id)

    if(isLoading) {
        return <div>ローディング中です</div>
      }
    if(error) {
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



