import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import PortraitIcon from '@mui/icons-material/Portrait'
import { Button, FormControl, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import Image from 'next/image'

export default function Profile() {
  return (
    <Grid container>
      <Grid item container padding={4} md={8}>
        <Grid item md={12}>
          <Typography variant="h6">My Profile</Typography>
        </Grid>
        <Grid item container padding={4} display="flex" justifyContent="space-between" wrap="wrap" rowGap={4}>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="First Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Last Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Display Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PortraitIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Phone No (Work)"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Phone No (Home)"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Location"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container display="flex" justifyContent="center" gap={1} md={12} padding={8}>
          <Button variant="outlined" sx={{ borderColor: '#ed6c02', color: '#ed6c02' }}>
            Reset Changes
          </Button>
          <Button variant="contained" color="error">
            Save Changes
          </Button>
        </Grid>
      </Grid>
      <Grid item md={4} padding={16} sx={{ backgroundColor: '#dfdfdf' }}>
        <Grid>
          <Image src="/profile_image.jpg" width={150} height={150} alt="Profile" style={{ borderRadius: 8 }}></Image>
        </Grid>
        <Grid textAlign="center">
          <Typography variant="h6">Arun Sundaresan</Typography>
          <Typography variant="subtitle2" color="GrayText">
            asundaresan93@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
