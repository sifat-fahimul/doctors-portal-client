import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    const [openBooking, setBooking] = React.useState(false);
    const handleBookingOpen = () => setBooking(true);
    const handleBookingClose = () => setBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: '#5CE7ED', fontWeight: 600 }} variant='h5' gutterBottom component='div'>
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component='div'>
                        {time}
                    </Typography>
                    <Typography variant='caption' display='block' gutterBottom >
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant='contained' style={{ backgroundColor: '#5CE7ED' }}>BOOK APPOINTMENT</Button>

                </Paper>
            </Grid >
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
            ></BookingModal>
        </>
    );
};

export default Booking;