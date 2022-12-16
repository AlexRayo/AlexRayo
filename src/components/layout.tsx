import React from 'react'
import Header from './header'
import Footer from './footer'

function Layout({ children }: any) {
    return (
        <main className='bg-slate-900'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout