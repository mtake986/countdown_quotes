import React from 'react'
import Cd from './Cd/Cd'
import Quote from "./Quote/Quote";
import { useModalContext } from '../../../contexts/ModalContext';

const Actions = () => {
  const { selectedType } = useModalContext();

  return (
    <div>
      {selectedType === 'cd' ? <Cd /> : <Quote />}
    </div>
  )
}

export default Actions