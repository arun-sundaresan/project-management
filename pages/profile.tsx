import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import PortraitIcon from '@mui/icons-material/Portrait'
import { Button, FormControl, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import { useUSerContext } from '../contexts/user'
import { UserProfile } from '../models/profile'

export default function Profile() {
  const user = useUSerContext()
  const [profile, setProfile] = useState<UserProfile>(user.profile)

  useEffect(() => {
    setProfile(user.profile)
  }, [user.profile])

  const handleInputChange = (e: ChangeEvent) => {
    let target = e.target as HTMLInputElement
    let value = target.value
    let name = target.name

    setProfile({
      ...profile,
      [name]: value,
    })
  }

  const saveChanges = () => {
    axios.post('/api/profile/write', profile).then(() => {
      user.updateProfile(profile)
    })
  }

  const resetChanges = () => {
    axios.get('/api/profile/read').then((response) => {
      user.updateProfile(response.data)
    })
  }

  return (
    <Grid container>
      <Grid item container padding={{ md: 4, xs: 1 }} md={8}>
        <Grid item md={12}>
          <Typography variant="h6">My Profile</Typography>
        </Grid>
        <Grid
          item
          container
          padding={{ md: 4, xs: 1 }}
          display="flex"
          justifyContent="space-between"
          wrap="wrap"
          rowGap={4}
        >
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="First Name"
                name="firstName"
                value={profile?.firstName || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={handleInputChange}
                sx={{ width: '20rem' }}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Last Name"
                name="lastName"
                value={profile?.lastName || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Display Name"
                name="displayName"
                value={profile?.displayName || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PortraitIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Email"
                name="email"
                value={profile?.email || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Phone No (Work)"
                name="workPhoneNumber"
                value={profile?.workPhoneNumber || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Phone No (Home)"
                name="homePhoneNumber"
                value={profile?.homePhoneNumber || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl variant="standard">
              <TextField
                id="input-with-icon-adornment"
                label="Location"
                name="location"
                value={profile?.location || ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '20rem' }}
                onChange={handleInputChange}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container display="flex" justifyContent="center" gap={1} md={12} padding={{ md: 8, xs: 2 }}>
          <Button variant="outlined" sx={{ borderColor: '#ed6c02', color: '#ed6c02' }} onClick={resetChanges}>
            Reset Changes
          </Button>
          <Button variant="contained" color="error" onClick={saveChanges}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
      <Grid item md={4} padding={16} sx={{ backgroundColor: '#dfdfdf' }}>
        <Grid>
          <Image src="/profile_image.jpg" width={150} height={150} alt="Profile" style={{ borderRadius: 8 }}></Image>
        </Grid>
        <Grid textAlign="center">
          <Typography variant="h6">{`${user.profile.firstName || 'User'} ${user.profile.lastName || ''}`}</Typography>
          <Typography variant="subtitle2" color="GrayText">
            {user.profile.email || 'mail@address.com'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
