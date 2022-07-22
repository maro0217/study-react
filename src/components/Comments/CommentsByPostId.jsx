import Link from "next/link";

const { useCommentsByPostId } = require("src/hooks/useFetchArray");

export const CommentsByPostId = (props) => {
    const {data, error, isLoading, isEmpty} = useCommentsByPostId(props.id)

    if(isLoading) {
        return <div>ローディング中です</div>
      }
    if(error) {
    return <div>{error.message}</div>
    }
    if(isEmpty) {
    return <div>データは空です</div>
    }

    return (
        <ol>
            {data.map((comment) => {
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



