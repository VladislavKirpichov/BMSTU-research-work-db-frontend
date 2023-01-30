import React from 'react'
import Header from '../components/ui/Header'
import { Link } from 'react-router-dom'
import PrimaryButton from '../components/ui/buttons/PrimaryButton';

const Main = () => {
  return (
      <>
          <Header />
          <div className="container grid grid-cols-12 gap-4 mx-auto min-h-screen">
              <div className="md:col-span-6 col-span-12 flex gap-2 flex-col justify-center">
                  <h1 className="font-bold text-3xl">Лучший детский центр</h1>
                  <p className='font-normal'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum tellus metus, venenatis at ligula vel,
                      imperdiet pellentesque erat. Suspendisse condimentum
                      dictum rutrum. Pellentesque sit amet nisl aliquam, auctor
                      dolor eget, elementum purus.
                  </p>
                  <Link to="/admin/login">
                      <PrimaryButton>Войти</PrimaryButton>
                  </Link>
              </div>
              <div className="md:col-span-6 col-span-12">
                <h3>Some photo here</h3>
              </div>
          </div>
      </>
  );
}

export default Main
