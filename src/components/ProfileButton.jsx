import React from 'react'
import { Link } from 'react-router-dom'
import profileIcon from '../icons/profile.png'
import './ProfileButton.css'

const ProfileButton = () => {
  return (
    <Link to="profile/" className='profileButton'>
        <img src={profileIcon}/>
    </Link>
  )
}

export default ProfileButton