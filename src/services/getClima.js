import {API, API_KEY, CITY_URL } from "./api"

export const getWeather = async (loc) => { 

    const response = await API.get(`${CITY_URL}${loc}${API_KEY}`, {
        headers: {
            "Content-type": "Aplication/json"
        }
    });

    return response.results;

}