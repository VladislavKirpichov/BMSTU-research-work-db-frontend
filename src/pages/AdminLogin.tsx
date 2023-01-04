import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
      <div className="w-full h-screen flex min-h-min justify-center items-center bg-gray-50">
          <form
              className="flex flex-col align-items-center bg-white shadow-sm rounded px-8 py-8"
              method="POST">
              <div className="mb-4">
                  <label className="block font-medium text-gray-900 mb-2">
                      Login
                  </label>
                  <input
                      placeholder="Login"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
              </div>
              <div className="mb-4">
                  <label className="block font-medium text-gray-900 mb-2">
                      Password
                  </label>
                  <input
                      placeholder="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
              </div>
              <button
                  type="submit"
                  className="bg-blue-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Sign In
              </button>
              <Link to={'/admin'} />
          </form>
      </div>
  )
}

export default AdminLogin
