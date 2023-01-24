import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Weevil chat</span>
            <div className='user'>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <span>Jenny</span>
                <button>logout</button>
            </div>
        </div>
    );
}

export default Navbar;