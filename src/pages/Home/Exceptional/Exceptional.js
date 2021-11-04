import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'
const Exceptional = () => {
    return (

        <Container>
            <Grid sx={{ my: 5, py: 5 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '80%', marginTop: '' }}
                        src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'flex-start',
                    alignItems: '',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant='h4' sx={{ mb: 5, pt: 3, fontWeight: 500 }} >
                            Exceptional Dental <br />
                            Care, On Your Terms
                        </Typography>
                        <Typography variant='h6' sx={{ my: 4 }} style={{ color: 'gray', fontSize: '9', fontWeight: '300' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatem labore provident quas nisi nihil earum, modi soluta? Cum, quaerat.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatem labore provident quas nisi nihil earum, modi soluta? Cum, quaerat.Asperiores voluptatem labore provident quas nisi nihil earum, modi soluta? Cum, quaerat.
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Exceptional;