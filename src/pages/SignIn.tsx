import React, { FormEvent, FormEventHandler } from 'react'
import {useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import { signIn } from '../redux/actions/profileActions';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateToServices = () => navigate('/services');

    const signInLoader = signIn(dispatch, navigateToServices)

    const onSubmit: FormEventHandler<Element> = (e: FormEvent<Element>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        signInLoader(
            formData.get('email') as string,
            formData.get('password') as string
        );
    };

  return (
      <div className="w-full h-screen flex flex-col gap-2 min-h-min justify-center items-center bg-gray-50">
          <form
              className="flex flex-col gap-4 align-items-center bg-white shadow-sm rounded-lg px-8 py-8"
              method="POST"
              onSubmit={onSubmit}>
              <div>
                  <label className="block font-medium text-gray-900 mb-2">
                      Email
                  </label>
                  <input
                      name="email"
                      required
                      placeholder="Email"
                      className="bg-gray-50 min-w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
              </div>
              <div>
                  <label className="block font-medium text-gray-900 mb-2">
                      Пароль
                  </label>
                  <input
                      name="password"
                      required
                      type="password"
                      placeholder="*********"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
              </div>
              <PrimaryButton>Войти</PrimaryButton>
              <Link to={'/signup'}>
                  <p className="font-bold text-center">Зарегистрироваться</p>
              </Link>
          </form>
      </div>
  );
}

export default SignIn
