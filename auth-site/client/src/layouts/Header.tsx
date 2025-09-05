import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMene = () => {
        setMenuOpen(!menuOpen)
    }
    return (

        <header className='flex flex-row justify-between py-4 px-6 bg-blue-400 text-white font-mono text-lg relative shadow-md  '>
            <h1>Logo</h1>
            <GiHamburgerMenu className='text-3xl sm:hidden' onClick={toggleMene} />
            <nav className='hidden sm:flex flex-row gap-4'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>
            {menuOpen &&
                <nav className='sm:hidden flex flex-col absolute bg-blue-400 right-0 top-full text-center w-1/2'>
                    <Link className='border border-indigo-600 hover:bg-blue-500' to={"/"}>Home</Link>
                    <Link className='border border-indigo-600 hover:bg-blue-500' to={"/about"}>About</Link>
                    <Link className='border border-indigo-600 hover:bg-blue-500' to={"/contact"}>Contact</Link>
                </nav>
            }
        </header>

    )
}

export default Header
