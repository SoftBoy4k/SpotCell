import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Form from './Form';
import { setUser } from '../store/slices/userSlice';
import { getDataFromDB } from '../firestore';

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          getDataFromDB(user.email)
            .then(data => {
              dispatch(setUser({
                id: data.id,
                name: data.name,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email,
              }));
              navigate("/")
            })
            .catch(console.error())
      })
      .catch((info) => console.error(info))
    }
  
    return (
      <Form
        title="login"
        handleClick={handleLogin}
        fields={["email", "password"]}
      />
    );
  }