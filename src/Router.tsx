import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import Main from './pages/Main'
import Services from './pages/Services'
// TODO: переделать
import {useDispatch} from 'react-redux';
import { auth as authUser } from './redux/actions/profileActions'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Users from './pages/Users'
import { auth as authAdmin } from './redux/actions/adminActions'

const Router = () => {
    const dispatch = useDispatch()
    const authUserLoader = authUser(dispatch)
    const authAdminLoader = authAdmin(dispatch)
    
    // TODO: переделать
    useEffect(() => {
        authUserLoader()
        authAdminLoader()
    }, [dispatch])

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" index element={<Main />} />
              <Route path="admin/login" element={<AdminLogin />} />
              <Route path='admin/users' element={<Users />} />
              {/* <PrivateRoute rest={{ path: 'admin' }} component={Admin} /> */}
              <Route path="admin" element={<Admin />} />
              <Route path='signin' element={<SignIn />} />
              <Route path='signup' element={<SignUp />} />
              <Route path="services" element={<Services />} />
              <Route path="*" element={<p>404...</p>} />
          </Routes>
      </BrowserRouter>
  );
}

export default Router
