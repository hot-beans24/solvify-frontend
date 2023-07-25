import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '/logo.svg'

const Logo: FC = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="w-16 h-16" />
    </Link>
  )
}

export default Logo