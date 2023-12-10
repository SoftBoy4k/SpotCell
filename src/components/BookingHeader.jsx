import { Typography } from '@mui/material'
import React from 'react'

const BookingHeader = () => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100px', margin: '0 auto', backgroundColor: '#fff', alignItems: 'center', padding: '0 2%', marginBottom: '2%' }}>
        <Typography color="#0086DF" sx={{ fontSize: '30px', fontWeight: 'bold' }} >SPOTCELL</Typography>
        <Typography color="#0086DF" sx={{ fontSize: '30px', width: '70%', textAlign: 'center' }}>Выбор парковочного места</Typography>
    </div>
  )
}

export default BookingHeader