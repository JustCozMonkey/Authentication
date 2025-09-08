import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { getSession } from '../services/userSession';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [signShow, setSignShow] = useState<boolean>(false)
    const [name, setName] = useState("")

    const toggleMene = () => {
        setMenuOpen(!menuOpen)
    }
    useEffect(() => {
        const init = async () => {
            const sessionName = await getSession()
            if (sessionName) setName(sessionName)
        }
        init()
    }, [name])

    return (

        <header className='flex flex-row justify-between h-12 px-6 bg-blue-400 text-white font-mono text-lg relative shadow-md items-center border-b-2 border-blue-500'>
            <h1>Logo</h1>
            <GiHamburgerMenu className='text-3xl sm:hidden' onClick={toggleMene} />
            <nav className='hidden sm:flex flex-row gap-4 h-full items-center'>
                <Link className='text-xl' to={"/"}>Home</Link>
                <Link className='text-xl' to={"/about"}>About</Link>
                <Link className='text-xl' to={"/contact"}>Contact</Link>
                <Link className='flex items-center text-2xl h-full aspect-square justify-center' to={'/signin'} onMouseEnter={() => setSignShow(true)} onMouseLeave={() => setSignShow(false)}><IoMdPerson /><p className='text-xl font-mono'>{name}</p></Link>
            </nav>
            {menuOpen &&
                <nav className='sm:hidden flex flex-col absolute bg-blue-400 right-0 top-full w-1/2 h-40'>
                    <Link className='flex items-center text-2xl px-3 h-8 hover:bg-blue-500' to={'/signin'}><IoMdPerson /><p className='text-xl font-mono'>{name}</p></Link>
                    <Link className=' hover:bg-blue-500 px-3 h-8' to={"/"}>Home</Link>
                    <Link className=' hover:bg-blue-500 px-3 h-8' to={"/about"}>About</Link>
                    <Link className=' hover:bg-blue-500 px-3 h-8' to={"/contact"}>Contact</Link>
                </nav>
            }
            {signShow &&
                <div className='hidden sm:flex flex-col bg-blue-400 absolute right-0 top-full' onMouseEnter={() => setSignShow(true)} onMouseLeave={() => setSignShow(false)} >
                    <Link className='px-3 hover:bg-blue-500 h-8' to={"/signin"}>Sign In</Link>
                    <Link className='px-3 hover:bg-blue-500 h-8' to={"/register"}>Registration</Link>
                </div>
            }
        </header>

    )
}

export default Header
