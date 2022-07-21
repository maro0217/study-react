import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";


export const Users = (props) => {
    const {users, userError, isLoading, isEmpty} = useUsers();

    if(isLoading) {
        return <div>ローディング中です</div>
      }
    if(userError) {
    return <div>{userError.message}</div>
    }
    if(isEmpty) {
    return <div>データは空です</div>
    }

    return (
        <ol>
            {users.map((user) => {
                return (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
};
