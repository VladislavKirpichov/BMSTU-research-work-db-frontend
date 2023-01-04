import React from 'react'
import Header from '../components/ui/Header'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
      <>
          <div className="conteiner mx-auto">
              <Header />
              <h1>Hello world</h1>
              <Link to="/admin/login"><button className="btn bg-blue-500 text-white py-4 px-8 rounded-md">Login as admin</button></Link>
          </div>
      </>
  )
}

export default Main
