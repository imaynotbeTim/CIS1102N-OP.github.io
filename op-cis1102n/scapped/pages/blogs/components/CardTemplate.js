import React from 'react'

import { styled } from '@mui/material/styles';

import {
    Box,
    Button,
    Card,
    CardActions,
    Collapse,
    CardContent,
    IconButton,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Outlet } from "react-router-dom";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardTemplate = ({ topics }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Box sx={{
                p: 1,
                m: 1,
                textAlign: 'left',
            }}>
                <Card sx={{ borderRadius: '20px', }}>
                    <CardContent sx={{ fontSize: 20, backgroundColor: '#d9d9d9' }}>
                        <Typography variant='h5'>
                            {topics.title}
                        </Typography>
                        <Typography>
                            {topics.desc}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ backgroundColor: '#f2f2f2' }}>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {topics.subtopics.map((data => {
                            return (
                                <Card key={data.id} sx={{
                                    m: '10px 30px 10px 30px',
                                    p: '10px 50px 10px 50px',
                                    bgcolor: '#f2f2f2',
                                    borderRadius: 5
                                }}>
                                    <CardContent>
                                        <Typography>
                                            <h3>{data.title}</h3>
                                            <p>{data.desc}</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" disableElevation>Learn More</Button>
                                    </CardActions>
                                </Card>
                            )
                        }))}
                    </Collapse>
                </Card>
            </Box>
            <Outlet />
        </>
    )
}

export default CardTemplate