import AddIcon from '@mui/icons-material/Add'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'

export default function Header() {
  return (
    <Grid display="flex" justifyContent="space-between" padding={2}>
      <Grid item>
        <Typography variant="h6">Good Morning, Arun</Typography>
        <Typography variant="subtitle2" color="GrayText">
          April 28, 2022
        </Typography>
      </Grid>
      <Grid item display="flex" gap={1} alignItems="center">
        <Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ backgroundColor: 'red', color: 'white' }}
            size="small"
          >
            Add Project
          </Button>
        </Grid>
        <Grid item display="flex" alignItems="center" gap={1}>
          <Grid item>
            <Avatar variant="square" sx={{ borderRadius: '0.5rem' }}>
              A
            </Avatar>
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Box minWidth="100px">
              <Typography fontSize="1rem">Arun</Typography>
              <Typography fontSize="0.75rem" color="GrayText">
                April 28, 2022
              </Typography>
            </Box>
            <ArrowDropDownIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
