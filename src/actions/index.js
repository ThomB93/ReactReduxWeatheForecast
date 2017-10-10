import Axios from "axios";
const API_KEY = "8202d8da01debd791375e472ccb88e27";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`; //ES6 template string
export const FETCH_WEATHER = "FETCH_WEATHER"; //export variable, keep action types consistent betweeen action creators and reducers

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`; //final get url
    const request = Axios.get(url); //make get request with url, returns promise

    //console.log("reqest", request);
    return { //returns an action object
        type: FETCH_WEATHER,
        payload: request //send promise with action
    }
};