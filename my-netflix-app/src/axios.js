import axios from "axios";

//Base url to make url request to movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
