import { Add as AddIcon, EmojiEmotions,Image,VideoCameraBack,PersonAdd} from '@mui/icons-material'
import { Stack,TextField, Tooltip, Fab, Box,Modal,styled,Typography,Avatar, Button,ButtonGroup } from '@mui/material'
import step1 from './images/profile.jpg';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React,{useState} from 'react'

const StyledModal = styled(Modal)({
  display:'flex',
alignItems:'center',
justifyContent:'center',
});
const UserBox = styled(Modal)({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  marginBottom:'20px'
});
function Add() {
  const [open, setOpen] = useState(false);
  return (
    <Box disabled >
      <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{position:"fixed", bottom:20,marginLeft:4, left:{xs:"calc(50% -25px) ,md:30"}}} >
      <Fab color="primary" aria-label="add" >
      <AddIcon />
      </Fab>
      </Tooltip>
      <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
  <Box  p={3} borderRadius={5} width={400} height={280} bgcolor={"background.default"} color={"text.white"}>
 <Typography variant="h6" color='grey' textAlign="center" >
  Create Post
 </Typography>
 <UserBox>
  <Avatar 
  src={step1}
  sx={{width:30, height:30}}
/>
<Typography fontWeight={500} variant="span">Haileamlak Waleligne</Typography>
 </UserBox>
 <TextField
 sx={{width:'100%'}}
 id="standard-multiline-static"
 multiline
 rows={3}
 placeholder="What's on your mind?"
 variant="standard"
 />
 <Stack direction="row" gap={1} mt={2} mb={3}>
  <EmojiEmotions color="primary"/>
  <Image color= "secondary" />
  <VideoCameraBack color="success" />
  <PersonAdd color="error" />
 </Stack> 
 <ButtonGroup 
 fullWidth
 variant="contained"
 aria-label="outlined primary button group" >
  <Button>Post</Button>
  <Button sx={{width:'100%'}}><DateRangeIcon /></Button>
 </ButtonGroup>
  </Box>
</StyledModal>
    </Box>
  )
}

export default Add
