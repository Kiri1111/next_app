import {useRouter} from "next/router";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const onClickHandler = () => alert('vse dobra')
    const {query} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1> User with id: {query.id}</h1>
                <h2>User name: {user.name}</h2>
                <h3>User email: {user.email}</h3>
                <button onClick={onClickHandler}>sxsxls,xp
                </button>
            </div>
        </MainContainer>
    )

}

export async function getServerSideProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}