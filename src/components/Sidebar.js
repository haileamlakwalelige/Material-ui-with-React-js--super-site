import { Home, ModeNight } from '@mui/icons-material'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import { Box,List, ListItem, ListItemText,  ListItemButton, ListItemIcon, Switch } from '@mui/material'
import React from 'react'

function Sidebar({mode, setMode}) {
  return (
    <Box  flex={1} p={2} sx={{
      display:{xs : "none", sm : "block"}
    }}>
    <Box position="fixed" >
      <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
          <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#about">
          <ListItemIcon>
          <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#service">
          <ListItemIcon>
          <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Service" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#skill">
          <ListItemIcon>
          <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Skill" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#contact">
          <ListItemIcon>
          <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#contact">
          <ListItemIcon>
          <ModeNight />
          </ListItemIcon>
          <Switch onChange={e=> setMode(mode === "light" ? "dark" : "light")}/>
        </ListItemButton>
      </ListItem>
      </List>
    </Box>
    </Box>
  )
}

export default Sidebar
