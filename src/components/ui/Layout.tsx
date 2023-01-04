import React from 'react'
import Header from './Header'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
      <>
          <Header />
          <div className="grid grid-cols-12 gap-2 sm:px-8 md:px-24 px-4 py-8 ">
              {props.children}
          </div>
      </>
  );
}

export default Layout
