import { Typography } from '@mui/material'
import React from 'react'

const Watermark = () => {
  return (
    <Typography
    component='div'
    sx={{ 
      color: 'rgba(34, 139, 230, 0.5)',
      margin: 0,
      fontSize: '24px',
      fontWeight: 'bold',
      zIndex: 1000, 
      position: 'absolute',
      bottom: 10,
      left: 10,
      width: '150px',
      WebkitTextStrokeColor: 'rgb(34, 139, 230)',
      WebkitTextStrokeWidth: '1px',
    }}>
        Made by
        SpotCell
    </Typography>
  )
}

export default Watermark