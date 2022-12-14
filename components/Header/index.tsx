import AddIcon from '@mui/icons-material/Add'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import { useUSerContext } from '../../contexts/user'

export default function Header() {
  const user = useUSerContext()

  return (
    <Grid container display="flex" justifyContent="space-between" padding={2} rowGap={{ md: 0, xs: 2 }}>
      <Grid item>
        <Typography variant="h6">{`Good Morning, ${user.profile.firstName || 'User'}`}</Typography>
        <Typography variant="subtitle2" color="GrayText">
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date())}
        </Typography>
      </Grid>
      <Grid item display="flex" gap={1} alignItems="center">
        <Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ backgroundColor: '#d32f2f', color: 'white' }}
            size="small"
          >
            Add Project
          </Button>
        </Grid>
        <Grid item display="flex" alignItems="center" gap={1}>
          <Grid item>
            <Avatar variant="square" sx={{ borderRadius: '0.5rem' }} src="/profile_image.jpg">
              A
            </Avatar>
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Box minWidth="100px">
              <Typography fontSize="1rem">{user.profile.firstName || 'User'}</Typography>
              <Typography fontSize="0.75rem" color="GrayText">
                Project Manager
              </Typography>
            </Box>
            <ArrowDropDownIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
