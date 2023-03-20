import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Link href='/'>
                        <a><img className='mx-auto' src='/logo_palpitebox.png' alt='Palpite Box' /></a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-300 p-4 shadow-md text-center'>
                <Link href='/about'>
                    <a className='px-2 hover:underline'>About</a>
                </Link>
                <Link href='/contact'>
                    <a className='px-2 hover:underline'>Contact</a>
                </Link>
                <a href='/opinions-suggestions' className='px-2 hover:underline'>Opinions/Sugestions</a>
            </div>
        </React.Fragment>
    )
}

export default Header