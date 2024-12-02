import React, { Fragment } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <body>{children}</body>
            <Footer />
        </Fragment>
    )
}
