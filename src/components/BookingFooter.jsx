import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BookingFooter = () => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', borderTop: '2px solid #228BE6', backgroundColor: '#fff', height: '100px', position: 'absolute', bottom: 0, alignItems: 'center' }}>
        <Link to='/'>
            <Button variant='contained' sx={{ width: '170px', height: '45px', backgroundColor: '#228BE6' }}>Назад</Button>
        </Link>
        <div>
            <Typography color='#228BE6' sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>Цена за первый час</Typography>
            <Typography sx={{ textAlign: 'center', marginTop: '5%', fontWeight: 'bold' }}>5 руб/час</Typography>
        </div>
        <div>
            <Typography color='#228BE6' sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>Цена в следующие часы</Typography>
            <Typography sx={{ textAlign: 'center', marginTop: '5%', fontWeight: 'bold' }}>2 руб/час</Typography>
        </div>
        <div>
            <Typography color='#228BE6' sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>Место номер</Typography>
            <Typography sx={{ textAlign: 'center', marginTop: '5%', fontWeight: 'bold' }}>4</Typography>
        </div>
        <Link to='/'>
            <Button variant='contained' sx={{ width: '170px', height: '45px', backgroundColor: '#228BE6' }}>Забронировать</Button>
        </Link>
    </div>
  )
}

export default BookingFooter