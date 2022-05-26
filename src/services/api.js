import axios from "axios";

const API = axios.create({
  baseURL: "api.openweathermap.org/data/2.5/forecast?&appid=8a5e9515a6583a0a93a8e614d848ffb5",
  timeout: 5000,
});



export { API };
