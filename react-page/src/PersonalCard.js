import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './PersonalCard.js';

export default function PersonalCard() {
  return (
    <Box sx={{ display: 'flex'}}  justifyContent="center">
        <Card id="personal_card_b97725" sx={{ maxWidth: 345 }}>
        <CardMedia
            style = {{ height: 50, paddingTop: '90%'}}
            image= {require ("./personal_img.JPG")}
            title="myself"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Keylor Soto Delgado
            </Typography>
            <Typography variant="body2" color="text.secondary">
            My name is Keylor and I'm a Web Development student learning about React.
            </Typography>
        </CardContent>
        </Card>
    </Box>
  );
}


