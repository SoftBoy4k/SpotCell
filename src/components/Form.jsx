import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react'
import Input from './Input'

const Form = ({title, handleClick, fields}) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (e, name) => {
        const value = e.target.value;
        const type = e.target.type;

        if (type === "email") {
            setEmail(value)
        } else if (type === "password") {
            setPass(value)
        } else if (type === "text") {
            if (name === "name") {
                setName(value)
            } else if (name === "lastName") {
                setLastName(value)
            } else if (name === "phone") {
                setPhone(value)
            }
        }
    }

    return (
        <div>
            <Typography textAlign="center" fontSize="35px" paddingTop="100px" marginBottom="3%">Вход</Typography>
            <Container 
                spacing={2} 
                margin="10% auto"
                sx={{ 
                    width: '400px', 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: '2% 5%'
                }}
            >
                {fields.map((name, id) => <Input key={id} name={name} handleChange={handleChange}/>)}
                <Button 
                    type="submit"
                    variant="contained"
                    sx={{
                        width: '150px',
                        height: '43px'
                    }}
                    onClick={() => handleClick(email, pass, name, lastName, phone)}
                >
                    {title}
                </Button>
            </Container>
        </div>
    )
}

export default Form