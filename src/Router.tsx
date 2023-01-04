import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/router/PrivateRoute'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import Main from './pages/Main'

const Router = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" index element={<Main />} />
              <Route path="admin/login" element={<AdminLogin />} />
              {/* <PrivateRoute rest={{ path: 'admin' }} component={Admin} /> */}
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<p>404...</p>} />
          </Routes>
      </BrowserRouter>
  );
}

export default Router
