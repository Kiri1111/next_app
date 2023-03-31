import {useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (

        <MainContainer keywords={'Users page'}>
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
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users},
    }
}