import React from 'react';
import { Info, Repos, User, Search, Navbar } from "../components";
import loadImg from '../images/preloader.gif';
import { GithubContext } from '../context/context';

function Dashboard() {
    const { isLoading } = React.useContext(GithubContext);
    if (isLoading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img src={loadImg} className='loading-img' alt='loding' />
            </main>
        );
    }
    return (
        <main>
            <Navbar></Navbar>
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    );

}
export default Dashboard;