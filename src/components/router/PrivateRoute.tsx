import React, { Component, ReactNode } from 'react'
import type { RouteProps } from 'react-router'
import { Route } from 'react-router'
import {Navigate} from 'react-router-dom'
import { isLogin } from '../../utils/authorization'

type Props = {
    component: React.FC,
    rest: RouteProps
}

const PrivateRoute: React.FC<Props> = (props) => {
  return (
      <Route
          {...props.rest}
          element={isLogin() ? <props.component /> : <Navigate to={'/'} replace />}
      />
  )
}

export default PrivateRoute
