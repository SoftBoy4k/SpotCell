import { Avatar, Button, Container, Icon, Typography } from '@mui/material'
import React from 'react'
import './ProfilePage.css'
import avatarIcon from '../icons/avatar.png'
import phoneIcon from '../icons/phoneIcon.png'
import mailIcon from '../icons/mailIcon.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth' 

const ProfilePage = () => {

    const { email, name, lastName, phone } = useAuth()

  return (
    <div className='profilePage'>
        <Container sx={{display: 'flex', alignItems: 'center', paddingTop: '30px'}}>
            <Avatar
                component="div"
                alt="User"
                src={avatarIcon}
                sx={{ width: 100, height: 100 }}
            />
            <Typography component="div" fontSize="30px" sx={{marginLeft: '5%', color: '#228BE6'}}>
                {name} {lastName}
            </Typography>
        </Container>
        <div className='profileContacts'>
            <div className='profilePhone'>
                <img src={phoneIcon}/>
                <Typography fontSize="30px" marginLeft="30px">
                    {phone}
                </Typography>
            </div>

            <div className='profileMail'>
                <img src={mailIcon}/>
                <Typography fontSize="30px" marginLeft="30px">
                    {email}
                </Typography>
            </div>
        </div>
        <Container 
            sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                width: '450px',
                margin: '0 auto',
            }}
        >
            <Link to='/'>
                <Button 
                    variant="outlined" 
                    sx={{
                        width: '170px', 
                        height: '55px', 
                        fontSize: '17px',
                        color: '#228BE6',
                        borderColor: '#228BE6'
                        }}
                >Назад</Button>
            </Link>
            
            <Link>
                <Button 
                    variant="contained" 
                    sx={{ 
                        width: '170px', 
                        height: '55px', 
                        fontSize: '17px',
                        backgroundColor: '#228BE6'
                    }}
                >Моя бронь</Button>
            </Link>

        </Container>
    </div>
  )
}

export default ProfilePage