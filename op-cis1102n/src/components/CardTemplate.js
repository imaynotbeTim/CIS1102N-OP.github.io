import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Outlet, useNavigate } from "react-router-dom";
const CardTemplate = (props) => {
    let gotoLink = props.link;
    const goto = useNavigate();

    const toLink = () => {
        goto(gotoLink);
      }
    return (
        <>
            <Box sx={{
                p: 1,
                m: 1,
                textAlign: 'left',
            }}>
                <Card style={{ borderRadius: '20px', }}>
                    <CardContent sx={{ fontSize: 20, backgroundColor: '#d9d9d9' }}>
                        <Typography variant='h5'>
                            {props.title}
                        </Typography>
                        <Typography>
                            {props.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ backgroundColor: '#f2f2f2' }}>
                        {props.desc}
                        <Button variant="contained" disableElevation sx={{ color: 'black', bgcolor: '#f2f2f2', }} onClick={toLink}>{props.button}</Button>
                    </CardActions>
                </Card>
            </Box>
            <Outlet />
        </>
    )
}

export default CardTemplate