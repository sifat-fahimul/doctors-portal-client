import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://immense-chamber-79953.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h2>add a doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label='Name'
                    required
                    onChange={e => setName(e.target.value)}
                    variant='standard' />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label='Email'
                    type='email'
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant='standard' />
                <br />
                <Input
                    accept="image/*"
                    type='file'
                    onChange={e => setImage(e.target.files[0])}></Input>
                <br />
                <Button variant='contained' type='submit'>
                    Add Doctor
                </Button>
                {success && <p style={{ color: 'green' }}> {success}</p>}

            </form>
        </div>
    );
};

export default AddDoctor;