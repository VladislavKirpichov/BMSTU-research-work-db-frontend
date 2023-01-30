import React, { FormEvent, FormEventHandler, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import { signIn } from '../redux/actions/adminActions';

const AdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const navigateToAdmin = () => navigate('/admin');

    const authLoader = signIn(dispatch, navigateToAdmin)

    const onSubmit: FormEventHandler<Element> = async (e: FormEvent<Element>) => {
        e.preventDefault();
        setError(() => false)

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        try {
            await authLoader(
                formData.get('username') as string,
                formData.get('password') as string
            );
            navigateToAdmin()
        } catch (e) {
            setError(() => true)
        }
    };

  return (
      <div className="w-full h-screen flex min-h-min justify-center items-center bg-gray-50">
          <form
              onSubmit={onSubmit}
              className="flex flex-col align-items-center bg-white shadow-sm rounded-md px-8 py-8"
              method="POST">
              <div className="mb-4">
                  <label className="block font-medium text-gray-900 mb-2">
                      Username
                  </label>
                  <input
                      required
                      name="username"
                      placeholder="Login"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
              </div>
              <div className="mb-4">
                  <label className="block font-medium text-gray-900 mb-2">
                      Password
                  </label>
                  <input
                      required
                      type="password"
                      name="password"
                      placeholder="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
              </div>
              {error && <p className='text-red-700 text-sm'>Ошибка в логине или пароле</p>}
              <PrimaryButton>Sign In</PrimaryButton>
              <Link to={'/admin'} />
          </form>
      </div>
  );
}

export default AdminLogin
