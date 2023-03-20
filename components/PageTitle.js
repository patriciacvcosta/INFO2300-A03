import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
    return (
        <Head>
            <link rel='shortcut icon' href='/favicon.ico'/>
            <title>{title} - PalpiteBox</title>
        </Head>
    )
}

export default PageTitle

