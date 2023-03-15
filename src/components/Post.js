import { 
  CardActions,
  Typography,
   CardContent,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia, 
    Checkbox,
    Box
  } from '@mui/material';
import React from 'react'

import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import step1 from './images/profile.jpg';
import step2 from './images/Kingo.png';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';
import step7 from './images/7.jpg';
import step8 from './images/8.jpg';
import step9 from './images/9.jpg';
import step10 from './images/10.jpg';
import step11 from './images/11.jpg';
const images =[step1, step2, step3, step4, step5, step6, step7, step8, step9, step10 , step11]
function Post() {
  return (
    <Box>
    {images.map((image) => {
      return(
<Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red", fontWeight:'300' }} aria-label="recipe">
          HW
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Haileamlak Waleligne (Kingo)"
      subheader="March 15, 2023"
    />
    <CardMedia
      component="img"
      height="10%"
      image={image}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
   
  </Card>

    );
  }
    )
    }
    </Box>
  );
}

export default Post;
