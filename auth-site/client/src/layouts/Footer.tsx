import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-gray-800 p-4 text-white font-mono text-lg text-center'>
            <span >Here is the footer &copy;{currentYear}</span>
        </footer>
    )
}

export default Footer
