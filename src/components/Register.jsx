import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Form from './Form';
import { setUser } from '../store/slices/userSlice';
import { addToDB } from '../firestore';

export default function Register() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRegister = (email, password, name, lastName, phone) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.dir(user)
            dispatch(setUser({
                id: user.uid,
                email: user.email,
                token: user.accessToken,
                name,
                lastName,
                phone
            }));
            addToDB(user.uid, name, lastName, phone, email);
            navigate("/");
        })
        .catch((info) => console.error(info))
    }
  
    return (
      <Form
        title="register"
        handleClick={handleRegister}
        fields={["name", "lastName", "phone", "email", "password"]}
      />
    );
}