import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function StandardCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Phrase for your day
        </Typography>
        <Typography variant="body2">
            “Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo”.
          <br />
          {'"---Benjamin Franklin"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
