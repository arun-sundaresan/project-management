import AppsIcon from '@mui/icons-material/Apps'
import ArticleIcon from '@mui/icons-material/Article'
import BusinessIcon from '@mui/icons-material/Business'
import FolderIcon from '@mui/icons-material/Folder'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import MessageIcon from '@mui/icons-material/Message'
import SettingsIcon from '@mui/icons-material/Settings'
import { Badge, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Logo from '../Logo'

interface SidebarProps {
  drawerWidth: number
}

export default function Sidebar({ drawerWidth }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          backgroundColor: '#e4e4e4',
          border: 'none',
        },
      }}
    >
      <Logo></Logo>
      <List component="nav" sx={{ width: '100%', maxWidth: 240, paddingTop: 4, paddingLeft: 2 }}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText
            primary="Messages"
            secondary={<Badge badgeContent={6} color="error" />}
            primaryTypographyProps={{ component: 'span', display: 'inline' }}
            secondaryTypographyProps={{ component: 'span', display: 'inline', paddingLeft: '2rem' }}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Documents" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Organization" color="white" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton sx={{ marginTop: 20 }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Drawer>
  )
}
