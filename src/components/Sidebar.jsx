import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    );
}

export default Sidebar;

/*
import React from 'react'

const Sidebar = () => {
    return (
        <div>Sidebar
        </div>
    );
}

export default Sidebar;
*/