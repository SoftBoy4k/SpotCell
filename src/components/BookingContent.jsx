import { Container } from '@mui/material'
import React from 'react'
import Parking from './Parking'

const BookingContent = () => {
  return (
    <Container sx={{ width: '80%', margin: '0 auto', height: '75%', backgroundColor: '#fff', padding: '2%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center' }}>
      <Parking parkingId={1}/>
      <Parking parkingId={13}/>
      <Parking parkingId={26}/>
      <Parking parkingId={39}/>
      <Parking parkingId={52}/>
      <Parking parkingId={65}/>
    </Container>
  )
}

export default BookingContent