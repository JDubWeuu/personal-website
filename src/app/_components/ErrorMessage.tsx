import React from 'react'
import { MdErrorOutline } from "react-icons/md";

type Props = {
    errorMessage: string
}

const ErrorMessage = (props: Props) => {
  return (
    <div className='flex space-x-3'>
        <MdErrorOutline className='text-red-500' />
        <p className='font-semibold text-red-500'>{props.errorMessage}</p>
    </div>
  )
}

export default ErrorMessage