import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4 pin-b'>
            <div className='container mx-auto text-center font-bold text-white'>
                Developed by:
                Patricia Costa / {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/patricia-costa-885038a0/' target='blank'>LinkedIn</a> / {' '}
                <a className='hover:underline' href='https://github.com/patriciacvcosta' target='blank'>Github</a>
                <div className='mt-2'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer