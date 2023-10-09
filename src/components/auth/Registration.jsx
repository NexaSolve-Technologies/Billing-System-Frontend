import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Container, Typography, Box} from "@mui/material"

function Registration() {
    const [formDate, setFormData] = useState({
        name : '',
        email : '',
        password : ''
        
    })
    return (
        <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">Register</Typography>
        <Box
            component="form"
            // onSubmit={onSubmit}
            sx={{
                mt: 3,
            }}
        >
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
            >
                Register
            </Button>
        </Box>
    </Container>
    )
}

export default Registration;