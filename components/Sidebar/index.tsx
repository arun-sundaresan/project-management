import AppsIcon from "@mui/icons-material/Apps";
import ArticleIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function Sidebar({ drawerWidth }: any) {
  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      <List
        component="nav"
        sx={{ width: "100%", maxWidth: 240, paddingTop: 20, paddingLeft: 2 }}
      >
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Home" color="white" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ArticleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Projects" color="white" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AppsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" color="white" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <MessageIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Messages" color="white" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Documents" color="white" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BusinessIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Organization" color="white" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" color="white" />
        </ListItemButton>
        <ListItemButton sx={{ paddingTop: 20 }}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" color="white" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
