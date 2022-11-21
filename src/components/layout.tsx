import React from 'react'
import Header from './header'
import Footer from './footer'

function Layout({children}:any) {
  return (
    <main className='container mx-auto'>
        <Header/>
            {children}
        <Footer/>
    </main>
  )
}

export default Layout