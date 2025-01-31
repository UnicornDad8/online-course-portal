import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="sm:w-64 fixed hidden sm:block">
        <SideNav />
      </div>
      <div className="sm:ml-64">
        <Header />
        { children }
      </div>
    </div>
  )
}

export default Layout