import { Menu, MenuItem, AppBar, Box, styled, Toolbar, Typography,InputBase, Badge, Avatar } from '@mui/material'
import React,{useState} from 'react'
import StarsIcon from '@mui/icons-material/Stars';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}));
const Icons = styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));
function Navbar() {
  const [open, setOpen]=useState(false);
  return (
    <AppBar position='sticky'>
    <StyledToolBar> 
    <Menu
    id="demo-position-menu"
    aria-labelledby="demo-positioned-button"
    open={open}
    onClose={e=>setOpen(false)}
    anchorOrigin={{
      vertical:'top',
      horizontal:'right'
    }}
    transformOrigin={{
      vertical:'top',
      horizontal:'right'
    }}>
      <MenuItem >Profile</MenuItem>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
    <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Kingo</Typography>
    <StarsIcon width="50" height="50" sx={{display:{xs:"block", sm:"none"}}}/>
    <Search><InputBase  placeholder="Search ..."/></Search>
    <Icons>
      <Badge badgeContent={4} color="error">
        <Mail />
      </Badge>
      <Badge badgeContent={2} color="error">
        <Notifications />
      </Badge>
      <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile Image" 
        onClick={e=>setOpen(true)}
      /> 
    </Icons>
    <UserBox  onClick={e=>setOpen(true)}>
    <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile Image" />
    <Typography  variant="span">Haila</Typography>
    </UserBox>
    </StyledToolBar>
    </AppBar>
  )
}

export default Navbar
