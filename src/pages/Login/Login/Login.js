import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }
    return (
        <Container>
            {!isLoading && <Grid sx={{ my: 5, py: 5 }} container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography sx={{ fontSize: 20 }} variant='body1' gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label='Your Email'
                            name='email'
                            onChange={handleOnChange}
                            variant='standard'></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label='Your Password'
                            type='password'
                            name='password'
                            onChange={handleOnChange}
                            variant='standard'></TextField>


                        <Button sx={{ width: '75%', m: 1 }}
                            type='submit'
                            style={{ backgroundColor: '#5CE7ED' }}>Login</Button>

                        <NavLink to="/register" style={{ textDecoration: 'none' }} >
                            <Button variant='text'>New User ? Please Register </Button>
                        </NavLink>
                    </form>
                    {user?.email && <Alert severity='success'>Login Successful</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>}
            {isLoading && <CircularProgress />}
        </Container>
    );
};

export default Login;