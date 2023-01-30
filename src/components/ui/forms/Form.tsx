import React, { FormEventHandler, ReactNode } from 'react'

type Props = {
    onSubmit?: FormEventHandler<Element>;
    children: ReactNode
}

const Form = (props: Props) => {
  return (
      <form onSubmit={props.onSubmit} className="flex flex-col gap-4">
          {props.children}
      </form>
  );
}

export default Form
