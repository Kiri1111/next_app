import A from '../components/A'

const Index = () => {
    return (
        <div>
            <div className='navbar'>
                <A href={'/'} text='Main'></A>
                <A href={'/users'} text='USERS'></A>
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