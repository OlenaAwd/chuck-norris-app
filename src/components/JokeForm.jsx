import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from '@mui/styles';
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke } from "../redux/joke";
import { setSearchText, searchTextSelector } from "../redux/searchText";
import { setCategory, categorySelector } from "../redux/category";
import { fetchQuerriedRandomJoke } from "../API/NorrisAPI";


const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(2),
            width: theme.spacing(50),
            height: theme.spacing(6),
        },
    },
}))

const JokeForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { searchText, textTooShort } = useSelector(searchTextSelector)
    const { category } = useSelector(categorySelector)

    const handleOnChange = (e) => {
        dispatch(setSearchText(e.target.value))
        if (e.target.value.length > 0) {
            dispatch(setCategory(null))
        }
    }

    const prevSearchTextRef = useRef()
    useEffect(() => {
        prevSearchTextRef.current = searchText
    })
    const prevSearchText = prevSearchTextRef.current

    const getSearch = () => {
        setLoading(true);
        if (
            searchText.length !== 0 &&
            prevSearchText.length !== 0 &&
            category !== null
        ) {
            dispatch(setSearchText(""))
        } else if (!textTooShort && searchText.length !== 0) {
            dispatch(
                getRandomJoke(fetchQuerriedRandomJoke, { searchText: searchText })
            )
        }
        setLoading(false)
    }

    useEffect(() => {
        getSearch();
    })

    return (
        <div className={classes.root}>
            <TextField
                sx={{ input: { color: '#000', border: '1px solid #fff', borderRadius: '5px', background: '#fefefe', height: '15px' } }}
                value={searchText}
                error={textTooShort}
                helperText={textTooShort ? "Phrase is too short." : ""}
                id="standard-basic"
                onChange={handleOnChange}
                label="Search by phrase"
            />
        </div>
    )
}

export default JokeForm;