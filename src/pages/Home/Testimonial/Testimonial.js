import { Avatar, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'


const Testimonial = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{
                my: 5,
                display: 'flex', justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'left'
            }}>
                <Box>
                    <Typography variant='h6' sx={{ mb: 2 }} style={{ color: '#5CE7ED' }}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant='h4' style={{ color: '' }}>
                        What's Our Patients <br />
                        Says
                    </Typography>
                </Box>

            </Box>

            <Box sx={{}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ my: 2 }} color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, officia excepturi sed, totam qui earum cum ipsa ratione architecto sequi non autem quia porro saepe.
                                </Typography>
                                <Box sx={{
                                    my: 5,
                                    display: 'flex', justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    textAlign: 'left'
                                }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{}} aria-label="recipe">
                                                <img style={{ width: '100%' }} src={person1} alt="" />
                                            </Avatar>
                                        }
                                    />
                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: 17 }} style={{ color: '#5CE7ED' }}>
                                            TESTIMONIAL
                                        </Typography>
                                        <Typography variant='p' sx={{ mb: 2, fontSize: 15 }} >
                                            california
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ my: 2 }} color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, officia excepturi sed, totam qui earum cum ipsa ratione architecto sequi non autem quia porro saepe.
                                </Typography>
                                <Box sx={{
                                    my: 5,
                                    display: 'flex', justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    textAlign: 'left'
                                }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{}} aria-label="recipe">
                                                <img style={{ width: '100%' }} src={person2} alt="" />
                                            </Avatar>
                                        }
                                    />
                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: 17 }} style={{ color: '#5CE7ED' }}>
                                            TESTIMONIAL
                                        </Typography>
                                        <Typography variant='p' sx={{ mb: 2, fontSize: 15 }} >
                                            california
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} >
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ my: 2 }} color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, officia excepturi sed, totam qui earum cum ipsa ratione architecto sequi non autem quia porro saepe.
                                </Typography>
                                <Box sx={{
                                    my: 5,
                                    display: 'flex', justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    textAlign: 'left'
                                }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{}} aria-label="recipe">
                                                <img style={{ width: '100%' }} src={person3} alt="" />
                                            </Avatar>
                                        }
                                    />
                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: 17 }} style={{ color: '#5CE7ED' }}>
                                            TESTIMONIAL
                                        </Typography>
                                        <Typography variant='p' sx={{ mb: 2, fontSize: 15 }} >
                                            california
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    );
};

export default Testimonial;