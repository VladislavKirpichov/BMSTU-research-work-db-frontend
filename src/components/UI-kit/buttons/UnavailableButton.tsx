import React, { MouseEventHandler, ReactNode } from 'react'

type Props = {
    children: ReactNode
    onClick?: MouseEventHandler
}

const UnavailableButton: React.FC<Props> = (props: Props) => {
  return (
    <button
          onClick={props.onClick}
          className="bg-slate-50 hover:bg-slate-100 py-2 px-4 text-slate-600
                     rounded-lg shadow-lg shadow-slate-200/50 hover:shadow-slate-200/70 text-sm
                     border-2 border-slate-600/10">
          {props.children}
      </button>
  )
}

export default UnavailableButton
