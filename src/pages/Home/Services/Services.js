import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';
const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis architecto ab nesciunt eveniet, repellendus impedit. Ipsum repellendus quo temporibus vero?',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis architecto ab nesciunt eveniet, repellendus impedit. Ipsum repellendus quo temporibus vero?',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis architecto ab nesciunt eveniet, repellendus impedit. Ipsum repellendus quo temporibus vero?',
        img: whitening
    }
]


const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 600, color: 'success.main', m: 2 }} variant='h5' component='div'>
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ fontWeight: 600, m: 4 }} variant='h4' component='div'>
                        SERVICES WE PROVIDE
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;