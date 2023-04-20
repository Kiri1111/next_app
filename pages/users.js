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


import {useMutation} from '@tanstack/react-query';

import {AxiosError} from 'axios';

import {useRefreshToken} from '@/features/auth/hooks/login/useMeQuery';
import {PostsAPI} from '@/features/createPost/api';

// export const useCreatePostMutation = () => {
//     const { refetch } = useRefreshToken();
//     const createPost = useMutation({
//         queryKey:['createPost'],
// mutationFn: PostsAPI.createPost,
// onSuccess: () => {
//     alert('Пост опубликован')
// },
// onError: async (error: AxiosError, data) => {
//     alert('Кабзда')
//     if (error.response?.status === 401){
//         await refetch();
//         await createPost.mutateAsync(data)
//
//     }
// }
// });
// return createPost
// };