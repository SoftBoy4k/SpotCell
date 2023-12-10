import { useSelector } from "react-redux";

export function useAuth() {
    const {id, email, token, name, lastName, phone} = useSelector(state => state.user);

    return {
        isAuth: !!id,
        id,
        email,
        token,
        name,
        lastName,
        phone
    }
}