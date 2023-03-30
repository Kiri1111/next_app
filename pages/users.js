import {useState} from "react";
import Link from "next/link";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Ker9'},
        {id: 2, name: 'Tanya'},
    ])
    return (

        <div>
            <a href={'/'}>Main</a>
            <h1>List users</h1>
            <ul>
                {users.map(u =>
                    <li key={u.id}>
                        <Link href={`/users/${u.id}`}>
                            <span>{u.name}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;