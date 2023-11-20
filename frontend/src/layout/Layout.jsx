import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <>
    <Header />
        <main>
            <Routers />
        </main>
    <Footer />
    </>
  )
}

export default Layout
