import React from 'react';
import Usernames from './Usernames';

export interface HomeProps {

}

const Home = (props: HomeProps) => {

    return (
        <div>
            Enter the username you want to register

            <div>
                <Usernames />
            </div>
        </div>
    )
}

export default Home;