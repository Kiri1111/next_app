import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className='navbar'>
                <Link href={'/'}>
                    <span className='link'>Main</span>
                </Link>
                <Link href={'/users'}>
                    <span className='link'>Users</span>
                </Link>
            </div>
            <h1>main</h1>
            <style>
                {`
                  .navbar {
                    background: aqua;
                    padding: 15px;
                  }

                  .link {
                    text-decoration: green;
                    color: white;
                    margin: 10px;
                    font-size: 20px;
                  }
                `}
            </style>
        </div>
    );
};

export default Index;