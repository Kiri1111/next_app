import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'users nextjs' + keywords}></meta>
                <title>Main page</title>
            </Head>
            <div className='navbar'>
                <A href={'/'} text='Main'></A>
                <A href={'/users'} text='USERS'></A>
            </div>
            <div>
                {children}
            </div>
            <style>
                {`
                  .navbar {
                    background: aqua;
                    padding: 15px;
                  }

                `}
            </style>
        </>
    );
};

export default MainContainer;