import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();

    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    }
    return (
        <Container>
            {!isLoading && <Grid sx={{ my: 5, py: 5 }} container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography sx={{ fontSize: 20 }} variant='body1' gutterBottom>Register</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label='Your Name'
                            name='name'
                            onBlur={handleOnBlur}
                            variant='standard'></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type='email'
                            label='Your Email'
                            name='email'
                            onBlur={handleOnBlur}
                            variant='standard'></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label='Your Password'
                            type='password'
                            name='password'
                            onBlur={handleOnBlur}
                            variant='standard'></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label='Retype Your Password'
                            type='password'
                            name='password2'
                            onBlur={handleOnBlur}
                            variant='standard'></TextField>

                        <Button sx={{ width: '75%', m: 1 }}
                            type='submit' style={{ backgroundColor: '#5CE7ED' }}>Register</Button>
                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant='text'>Already Registered ? Please Login </Button>
                        </NavLink>
                    </form>
                    {user?.email && <Alert severity='success'>User Created Successfully</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', height: '' }} src={login} alt="" />
                </Grid>

            </Grid>}
            {isLoading && <CircularProgress />}

        </Container>
    );
};

export default Register;