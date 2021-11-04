import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 500, marginTop: '-120px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex', justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant='h6' sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant='h6' sx={{ my: 4 }} style={{ color: 'white', fontSize: '14', fontWeight: '300' }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatem labore provident quas nisi nihil earum, modi soluta? Cum, quaerat.
                            </Typography>
                            <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>

    );
};

export default AppointmentBanner;