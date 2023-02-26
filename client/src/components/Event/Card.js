import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const BasicCard=({event}) => {
  return (
    <Box  style={{width:400, display:'flex'}}>
    <Card  style={{marginTop:20, width:300, height:250 ,backgroundColor:'#F0FFF0'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {new Date(event.eventDate).toDateString()}
        </Typography>
        <Typography variant="h5" component="div">
          {event.title}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {event.description}
        </Typography>

      </CardContent>
      <CardActions>
        <Box style={{display:'flex'}}>
        <Button size="small">Learn More</Button>
        <Button style={{marginLeft:'auto'}}> <LocationOnIcon color='warning'/></Button>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >{event.location}</Typography>
        </Box>
      </CardActions>
    </Card>
    
    </Box>
  );
}

export default BasicCard;