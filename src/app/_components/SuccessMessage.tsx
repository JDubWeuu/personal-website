import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


type Props = {
    successMessage: string
}

const SuccessMessage = (props: Props) => {
  return (
    <div className="flex space-x-3">
      <IoIosCheckmarkCircleOutline className="text-green-500" />
      <p className="font-semibold text-green-500">{props.successMessage}</p>
    </div>
  );
}

export default SuccessMessage