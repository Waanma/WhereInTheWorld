import axios from "axios";

const BASE_URL= "https://restcountries.com/v3.1/";

const countryApi = axios.create({
    baseURL: BASE_URL,
})

export default countryApi;