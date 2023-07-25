import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '@@/layouts/Navbar'

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-32">
        <Outlet />
      </main>
    </>
  )
}

export default Layout