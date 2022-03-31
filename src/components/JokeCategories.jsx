import { React, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Chip, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke } from "../redux/joke";
import { getCategories, categoriesSelector } from "../redux/categories";
import { setCategory, categorySelector } from "../redux/category";
import {
    fetchRandomJoke,
    fetchJokeFromCategory,
    fetchCategories
} from "../API/NorrisAPI.js";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '55px',
        display: "flex",
        justifyContent: "safe center",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.8),
        },
        listStyle: "none",
    },
    chip: {
        margin: theme.spacing(0.4),
        marginTop: '40px',
        marginBottom: '30px',
    },
}));

const JokeCategories = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(categoriesSelector);
    const { category } = useSelector(categorySelector);


    useEffect(() => {
        dispatch(getCategories(fetchCategories));
    }, [dispatch])

    const handleClick = (e) => {
        if (category === e.target.textContent) {
            dispatch(setCategory(null))
            dispatch(getRandomJoke(fetchRandomJoke))
        } else {
            dispatch(setCategory(e.target.textContent))
            dispatch(getRandomJoke(fetchJokeFromCategory, { category: e.target.textContent }))
        }
    }

    return (
        <div className={classes.root}>
            {loading && <CircularProgress />}
            {!loading &&
                !error &&
                categories.map((data) => {
                    return (
                        <Chip
                            key={data}
                            label={data}
                            onClick={handleClick}
                            color={data === category ? "primary" : "secondary"}
                            className={classes.chip}
                        />
                    )
                })}
            {error && (
                <Typography variant="body1" align="left">
                    No categories found.
                </Typography>
            )}
        </div>
    )
}

export default JokeCategories
