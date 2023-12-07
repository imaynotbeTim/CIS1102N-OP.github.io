import React from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';

import { useNavigate } from "react-router-dom";
const Home = () => {
  const goto = useNavigate();

    const toLink = () => {
        goto('/blogs');
    }
  return (
    <div>
      <Card sx={{
        borderRadius: '10px', 
        m:'10px'
      }}>
        <CardContent sx={{
          fontSize: 20, 
          backgroundColor: '#d9d9d9' 
        }}>
          <Typography>
            <p>
              Hi I'm Tim,
            </p>
          </Typography>
          <CardActions>
            <Button 
              variant="contained" 
              disableElevation
              sx={{ 
                color: 'black', 
                bgcolor: '#f2f2f2', 
              }}
              onClick={toLink}
            >
              Check out the blogs page
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
    
  )
}

export default Home