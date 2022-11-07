import React from 'react';
import "./Header.css"
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

const Header = () => {
    return (
        <>
            <Head />
            <Navbar />
            <Search />
        </>
    );
};


export default Header