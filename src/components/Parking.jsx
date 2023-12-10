import React from 'react'
import './Parking.css'
import ParkingSpace from './ParkingSpace'

const Parking = ({parkingId}) => {

  const isBookingPlace = (index) => {
    return [1, 6, 15, 21, 23, 54].indexOf(index) !== -1
  }

  const createParking = () => {
    const parking = [];
    const parkingEnd = parkingId + 12;
    const halfParking = parkingEnd - 6;


    for (let i = parkingId; i < parkingEnd; i++) {
      const isBookingPl = isBookingPlace(i);

      const content = isBookingPl ? <ParkingSpace isRotate={!(i < halfParking)}/> : i

      if ( i <  halfParking ) {
        parking.push(<div className={
          isBookingPl ? 'parkingPlace up' : 'parkingPlace up freePlace'
        }>{content}</div>)
      } else {
        parking.push(<div className={
          isBookingPl ? 'parkingPlace down' : 'parkingPlace down freePlace'
        }>{content}</div>)
      }
    }

    return parking
  }

  return (
    <div className='parking'>
      {createParking()}
    </div>
  )
}

export default Parking