import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { MdThumbUp } from "react-icons/md";
import '../css/AvailableParking.css'



export default function AvailableParkingSpot() {
  return (
    <Box   pt={6}>
    <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >
    <Card sx={{width: '75%', minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 42, padding: 5, fontWeight: 'bold' }} color="text.secondary" gutterBottom >
          Parking Availability
        </Typography>
        <Typography  variant="h5" component="div" sx={{fontSize:32, fontWeight: 'bold', color:'#25d321'}}>
        
        <MdThumbUp className="ThumbsUp"/>

        <div>You can park here! </div>
        </Typography>

       
      </CardContent>
      <CardActions>
        <Button size="small">Click to pay using P$</Button>
      </CardActions>
    </Card>
    </Grid>
    </Box>
  );
}