import React from 'react'
import { TextField } from '@mui/material'

const Input = ({ name, handleChange }) => {

  return (
    <TextField id="outlined-basic" label={name} variant="outlined" type={name} fullWidth sx={{ marginBottom: '20px' }} onChange={e => handleChange(e, name)}/>
  )
}

export default Input