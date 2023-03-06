import React from 'react'
import Navbar from './componants/Navbar';
import { Outlet } from 'react-router-dom';

const Nav=()=>
{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default Nav;