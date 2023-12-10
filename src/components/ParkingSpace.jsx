import React from 'react'
import carIcon from '../icons/car.png'

const ParkingSpace = ({ isRotate }) => {
  return (
    <img src={carIcon} style={ isRotate ? { width: '50px', rotate: '180deg' } :{ width: '50px' }}/>
  )
}

export default ParkingSpace