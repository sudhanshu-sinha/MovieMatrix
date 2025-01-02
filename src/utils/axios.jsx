import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzA5ZDFhODMwMDBmZGY4MjczZGQyYmYyNmI1ODAyYiIsIm5iZiI6MTczNTU4NTAyNS41NDMsInN1YiI6IjY3NzJlZDAxM2ZjNzZlYTU4ODkyOGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vCx8lvtcDrCloF7Hc9TISo53Ux3RD7wP45IwzPP9uwU",
  },
});

export default instance;
