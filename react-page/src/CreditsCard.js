import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './PersonalCard.js';

export default function CreditsCard() {
  return (
    <Box sx={{ display: 'flex'}}  justifyContent="center">
        <Card id="creditsCard" sx={{ maxWidth: 345 }}>
        <CardMedia
            style = {{ height: 50, paddingTop: '90%'}}
            image= {require ("./ucr.jpg")}
            title="ucr"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Universidad de Costa Rica
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This is a main page for practicing to the course of Web Development.
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Year: 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Creator: KeylexS
            </Typography>
        </CardContent>
        </Card>
    </Box>
  );
}