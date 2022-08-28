import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CharacterCard(props) {
 console.log(props)
  return (
    <Card sx={{maxWidth: 300, minWidth: 150, mb:5, boxShadow: 5, }}>
      <CardMedia
        component= "img"
        height= "300"
        image = {props.character.image}
        
      />
      <CardContent>
        <Typography 
          variant="body1" 
          color="text.primary" 
          fontWeight="semibold"
        >
          {props.character.name}
          </Typography>
      </CardContent>
    </Card>
  )
}

export default CharacterCard