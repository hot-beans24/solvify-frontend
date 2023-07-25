import { FC } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@@/layouts/Logo'
import home from '/home.svg'
import search from '/search.svg'
import user from '/user.svg'
import face from '/face.svg'
import setting from '/setting.svg'

const Navbar: FC = () => {
  return (
    <div className="navbar min-w-[380px] p-6 fixed top-0 left-0 z-[1000]">
      <div className="navbar-start">
        <div className="dropdown">
          <button type="button" className="btn btn-ghost mr-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
            <Link to="/" className="flex items-center">
              <img src={home} alt="home" className="w-3 h-3" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center">
              <img src={search} alt="search" className="w-3 h-3" />
              Search
            </Link>
          </li>
          <li>
            <details>
              <summary>
                <img src={user} alt="user" className="w-3 h-3" />
                User
              </summary>
              <ul className="p-2">
                <li>
                  <Link to="/mypage">
                    <img src={face} alt="face" className="w-3 h-3" />
                    My page
                  </Link>
                </li>
                <li>
                  <Link to="/setting">
                    <img src={setting} alt="setting" className="w-3 h-3" />
                    Setting
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="flex items-center">
              <img src={home} alt="home" className="w-4 h-4" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center">
              <img src={search} alt="search" className="w-4 h-4" />
              Search
            </Link>
          </li>
          <li>
            <details>
              <summary>
                <img src={user} alt="user" className="w-4 h-4" />
                User
              </summary>
              <ul className="p-2">
                <li>
                  <Link to="/mypage">
                    <img src={face} alt="face" className="w-4 h-4" />
                    My page
                  </Link>
                </li>
                <li>
                  <Link to="/setting">
                    <img src={setting} alt="setting" className="w-4 h-4" />
                    Setting
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <Link to="/login" className="btn btn-ghost"> Log in</Link>
        <Link to="/signup" className="btn">Sign up</Link>
      </div>
    </div>
  )
}

export default Navbar
