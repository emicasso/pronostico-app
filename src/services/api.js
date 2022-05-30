import axios from "axios";

const API = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/forecast?&lang=sp",
  timeout: 5000,
});

const API_KEY = axios.create({
  baseURL:
    "&appid=8a5e9515a6583a0a93a8e614d848ffb5",
  timeout: 5000,
});

const CITY_URL = axios.create({
  baseURL: "&q=",
  timeout: 5000,
});

const ICON_URL = axios.create({
  baseURL: "http://openweathermap.org/img/wn/",
  timeout: 5000,
});

export { API, API_KEY, CITY_URL, ICON_URL };
