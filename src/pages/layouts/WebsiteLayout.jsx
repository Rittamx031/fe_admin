import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import "../../assets/css/navbar.css"
import UserState from '../../components/header/UserState'

const WebsiteLayout = () => {
  return (
    <>
      <UserState />
      <header className="header">
        <Header />
      </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default WebsiteLayout
