import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@@/layouts/Layout'
import Home from '@@/pages/Home'
import Login from '@@/pages/Login'
import Question from '@@/pages/Question'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="/question/:id" element={<Question />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
