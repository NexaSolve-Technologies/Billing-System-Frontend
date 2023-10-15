import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../api/users';
import './SignIn.css'


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [formData, setFormData] = React.useState({
    email : '',
    password : ''
  })
  const Naviagte = useNavigate();
  

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };
  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signinUser(formData)
      Naviagte('/dashboard');
    } catch (err) {
      if(err.response && err.response.status === 401) {
        setErrorMessage('Invalid Credentials. Please Check your email and password'); 
      } else {
        console.log('SignIn failed', err);
        setErrorMessage('An Error occured while signing in. Please try again');
      }
    }

  };

  return (
    <div >
      <div>
        <nav className='navb' >
          <div>Your Logo</div>
        </nav>
      </div>
      <div className='background-image'>
      <div className='sigin-container'>
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop:2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'color',
          }}
        >
          <Avatar sx={{  bgcolor: 'secondary' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField 
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handlePasswordVisibilityToggle}
                      edge="end"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errorMessage && (
              <Typography variant='body2' color="error" align='center'>
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,bgcolor:'#FC8019'}}

            >
              Sign In
            </Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider></div>
      
      </div>
      
    </div>
    
  );
}
