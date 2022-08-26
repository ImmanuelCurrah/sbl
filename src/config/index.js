import axios from "axios";

const baseURL =
  "https://frozen-shelf-00477.herokuapp.com/https://api.scorebooklive.com/v2";

export const api = axios.create({
  baseURL,
});
