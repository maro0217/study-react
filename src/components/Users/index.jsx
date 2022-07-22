import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";


export const Users = () => {
    const {data: users, error: userError, isLoading, isEmpty} = useUsers();

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
        <ul className="grid grid-cols-2 gap-6">
            {users.map((user) => {
                return (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a className="p-2 shadow block rounded hover:bg-gray-100">
                                <h1 className="text-xl font-bold truncate">{user.name}</h1>
                                <p className="text-lg truncate">{user.email}</p> 
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};
