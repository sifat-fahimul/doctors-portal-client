import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    height: 300,
    display: 'flex',
    alignItems: 'center',


}

const Banner = () => {
    return (
        <Container>
            <Box style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid sx={{ my: 6 }} container spacing={2}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                        <Box>
                            <Typography variant='h3'>
                                Your New Smile <br />
                                Start Here
                            </Typography>
                            <Typography variant='h6' sx={{ fontSize: 13, my: 5, fontWeight: 300, color: 'gray' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eligendi incidunt provident, alias vel dolorum porro corrupti rem modi eaque.
                            </Typography>
                            <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '450px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default Banner;