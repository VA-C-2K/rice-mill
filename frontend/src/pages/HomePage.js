import React, { useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Navbar';

const AuthPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        if (!user) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <Box w="100%">
            <Nav/>
        </Box>
    )
}

export default AuthPage