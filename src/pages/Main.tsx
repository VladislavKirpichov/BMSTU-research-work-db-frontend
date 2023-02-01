import React from 'react'
import Header from '../components/ui/Header'
import { Link } from 'react-router-dom'
import PrimaryButton from '../components/ui/buttons/PrimaryButton';

const Main = () => {
  return (
      <>
          <Header />
          <div className="container grid grid-cols-12 gap-4 mx-auto min-h-screen">
              <div className="md:col-span-12 col-span-12 text-center flex gap-4 flex-col justify-center items-center">
                  <h1 className="font-bold text-3xl">Детский центр</h1>
                  <p className='font-normal w-96'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum tellus metus, venenatis at ligula vel,
                      imperdiet pellentesque erat.
                  </p>
                  <div className='flex gap-2 flex-row'>
                    <Link to="/signin">
                        <PrimaryButton>Войти</PrimaryButton>
                    </Link>
                    <Link to="/admin/login">
                        <PrimaryButton>Войти как админ</PrimaryButton>
                    </Link>
                  </div>
              </div>
              {/* <div className="md:col-span-6 col-span-12">
                <h3>Some photo here</h3>
              </div> */}
          </div>
      </>
  );
}

export default Main
