import React from 'react'

type Props = {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean
}

const Input = (props: Props) => {
  return (
      <div className='flex flex-col gap-1'>
          <label>{props.label}</label>
          <input
              name="name"
              className="bg-gray-50 min-w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required={props.required}
              placeholder={props.placeholder}
          />
      </div>
  );
}

export default Input
