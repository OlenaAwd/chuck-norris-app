import axios from "axios";

const BASE_API = "https://api.chucknorris.io/jokes"
const RANDOM_JOKE = "/random"
const CATEGORY_JOKE = "/random?category="
const QUERY = "/search?query="
const CATEGORIES = "/categories"

export const fetchRandomJoke = async () => {
    const response = await axios.get(BASE_API + RANDOM_JOKE)
    return response.data.value
}

export const fetchQuerriedRandomJoke = async (params) => {
    const response = await axios.get(
        BASE_API + QUERY + params["searchText"]
    )

    if (response.data.total === 0) {
        return false
    }

    const randInt = Math.floor(Math.random() * response.data.total)
    return response.data.result[randInt].value
}

export const fetchJokeFromCategory = async (params) => {
    const response = await axios.get(
        BASE_API + CATEGORY_JOKE + params["category"]
    )

    return response.data.value
}

export const fetchCategories = async () => {
    const response = await axios.get(BASE_API + CATEGORIES)

    return response.data
}