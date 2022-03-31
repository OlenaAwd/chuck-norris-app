import React from "react";
import { makeStyles } from '@mui/styles';
import { AppBar, CardActionArea, Toolbar, Typography } from "@mui/material";
import JokeCard from "../components/JokeCard";
import JokeCategories from "../components/JokeCategories";
import JokeForm from "../components/JokeForm";
import { Container } from "@mui/material";
import { Card, CardMedia } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        height: '90px',
    },
}))

const Jokes = () => {
    const classes = useStyles()
    return (
        <>
            <Container >
                <AppBar>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6">
                            Chuck Norris jokes app
                        </Typography>
                        <JokeForm />
                    </Toolbar>
                </AppBar>
            </Container>
            <JokeCategories />
            <JokeCard />
            <Card sx={{ maxWidth: 345, marginRight: 'auto', marginLeft: 'auto', marginTop: '35px' }}>
                <CardMedia
                    component="img"
                    image="https://i.guim.co.uk/img/media/a054b27f71103433c0dc99bf1b2a33eca56e644c/0_596_2662_1598/master/2662.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=45eaf82630f34b27c0b67b177bd46717"
                    alt="Chuck Norris"
                />
            </Card>
        </>
    )
}

export default Jokes;