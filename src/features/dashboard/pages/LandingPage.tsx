import React from 'react'
import { IconUserSquareRounded } from '@tabler/icons-react';
import { auth } from "../../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';

const LandingPage = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error", error)
        });
    }
    return (
        <div>
            <IconUserSquareRounded />
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    )
}

export default LandingPage