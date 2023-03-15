import React from 'react';
import{ Box ,ImageList, Typography,AvatarGroup, Avatar, ImageListItem, Divider, ListItem, ListItemAvatar, ListItemText, List } from '@mui/material';

import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';
import step7 from './images/7.jpg';
import step8 from './images/8.jpg';
import step9 from './images/9.jpg';
import step10 from './images/10.jpg';
import step11 from './images/11.jpg';

function Rightbar() {
  return (
    <Box  flex={2} p={2} sx={{
      display:{xs: "none", sm:"block"}
    }}>
        <Box position="fixed" width={300} >
        <Box>
       <Typography variant="h6" fontWeight="100">Online Friends</Typography>
  <AvatarGroup max={7}>
  <Avatar alt="John Sharp" src={step1}/>
  <Avatar alt="Travis Howard" src={step2}/>
  <Avatar alt="Cindy Baker" src={step3} />
  <Avatar alt="Agnes Walker" src={step4} />
  <Avatar alt="Trevor Henderson" src={step5}/>
  <Avatar alt="Trevor Henderson" src={step6}/>
  <Avatar alt="Trevor Henderson" src={step7}/>
  <Avatar alt="Trevor Henderson" src={step8}/>
  <Avatar alt="Trevor Henderson" src={step9}/>
  <Avatar alt="Trevor Henderson" src={step10}/>
  <Avatar alt="Trevor Henderson" src={step11}/>
</AvatarGroup>
       <Typography variant="h6" fontWeight="100">Latest Posts </Typography>
<ImageList cols={3} rowHeight={100} gap={5} mt={2} mb={2}>
  <ImageListItem>
  <img 
  src={step1}
  alt="step one" />
  </ImageListItem>
  <ImageListItem>
  <img 
  src={step2}
  alt="step Two" />
  </ImageListItem>
  <ImageListItem>
  <img 
  src={step3}
  alt="step Three" />
  </ImageListItem>
</ImageList>
       <Typography variant="h6" fontWeight="100">Latest Conversation </Typography>

       <List cols={3} rowHeight={200} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="John Sharp" src={step6} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={step7} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={step8} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

        </Box>
        </Box>
    </Box>
  )
}

export default Rightbar;
