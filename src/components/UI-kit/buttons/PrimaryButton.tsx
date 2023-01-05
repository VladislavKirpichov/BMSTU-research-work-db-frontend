import React, { MouseEventHandler, ReactNode } from 'react'

type Props = {
    children: ReactNode
    onClick?: MouseEventHandler
}

const PrimaryButton: React.FC<Props> = (props: Props) => {
  return (
      <button
          onClick={props.onClick}
          className="bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white
                     rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/60 text-sm
                     border-2 border-blue-900/20">
          {props.children}
      </button>
  );
}

export default PrimaryButton
