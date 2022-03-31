import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Paper, CircularProgress, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke, jokesSelector } from '../redux/joke';
import { categorySelector } from "../redux/category";
import { searchTextSelector } from "../redux/searchText";
import {
    fetchRandomJoke,
    fetchQuerriedRandomJoke,
    fetchJokeFromCategory,
} from "../API/NorrisAPI.js";

const useStyles = makeStyles({
    root: {
        width: '1050px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
        "&:hover": {
            cursor: "pointer",
        },
    },
    card: {
        backgroundColor: (props) => !props.joke ? "tomato" : null
    }
});

const JokeCard = () => {
    const [elevation, setElevation] = useState(0)
    const dispatch = useDispatch()
    const { joke, loading, error } = useSelector(jokesSelector)
    const { category } = useSelector(categorySelector)
    const { searchText } = useSelector(searchTextSelector)
    const classes = useStyles({ joke })

    useEffect(() => {
        dispatch(getRandomJoke(fetchRandomJoke))
    }, [dispatch])

    const handleOnMouseMove = () => {
        setElevation(5)
    }

    const handleOnMouseOut = () => {
        setElevation(0)
    }

    const handleOnClick = () => {
        if (searchText.length !== 0) {
            dispatch(
                getRandomJoke(fetchQuerriedRandomJoke, {
                    category: category,
                    searchText: searchText,
                })
            )
        } else if (category !== null) {
            dispatch(getRandomJoke(fetchJokeFromCategory, { category: category }))
        } else {
            dispatch(getRandomJoke(fetchRandomJoke))
        }
    }

    return (
        <Paper
            elevation={elevation}
            onMouseMove={handleOnMouseMove}
            onMouseOut={handleOnMouseOut}
            className={classes.root}
            onClick={handleOnClick}
        >
            <Card>
                <CardContent className={classes.card}>
                    {loading && <CircularProgress />}
                    {!loading && !error && joke && (
                        <Typography variant="body1" align="center">
                            {joke}
                        </Typography>
                    )}
                    {(error || !joke) && (
                        <Typography variant="body1" align="center">
                            No joke with phrase "<i>{searchText}</i>" found.
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Paper>
    )
}

export default JokeCard