import React  from 'react'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMfeStore from '../../../utils/zustand';




/**
 * Impliments LoginPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns LoginPage
 */


const theme = createTheme();

export const LoginPage = (props) => {
  
  const login = useMfeStore(state => state.loginUser)

  const handleSubmit = (event) => {
    event.preventDefault();
    const userFormData = new FormData(event.currentTarget);
    const userInput = {
      email: userFormData.get('email'),
      password: userFormData.get('password'),
    };
    const userData = JSON.parse(localStorage.getItem('userDetails') || '[]')
    const finalData = userData.filter((x) => x.email === userInput.email && x.password === userInput.password)
    if (finalData.length > 0) {
      login(finalData[0])
      alert('Logged in successfully')
      window.location.href = '/'

    } else {
      alert('Invalid credentials')
      return
    }

  };
  return (
    <div style={{marginBottom:'7rem'}}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"

              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              
              
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
    
  )
}

/**
 * Property type definations  onChange={(e)=>setPassword(e.target.value)} onChange={(e)=>setEmail(e.target.value)}
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string
};

/**
 * Default values for LoginPage
 * 
 * @type {object}
 * @property {string} example='LoginPage 
 */

export const defaultProps = {
  example: 'LoginPage'
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default LoginPage;