import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    height: '70vh',
    width: '100%',
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    return (
        <Container>
            <Box style={appointmentBanner} sx={{ flexGrow: 1, py: 5 }}>
                <Typography variant='h5' sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                    Contact Us
                </Typography>
                <Typography variant='h4' style={{ color: 'white' }}>
                    Always Connect With Us
                </Typography>
                <form >
                    <Box >
                        <TextField label="Email" variant="outlined" sx={{ background: 'white', width: '60%', mt: 5 }} />
                        <TextField label="Subject" variant="outlined" sx={{ background: 'white', width: '60%', mt: 5 }} />
                        <TextField id="outlined-multiline-static"
                            multiline
                            rows={4} label="Your message" sx={{ background: 'white', width: '60%', mt: 5 }} />



                        <br />
                        <Button variant='contained' sx={{ my: 4 }} style={{ backgroundColor: '#5CE7ED' }}>Submit</Button>
                    </Box>

                </form>
            </Box>
        </Container>
    );
};

export default Contact;