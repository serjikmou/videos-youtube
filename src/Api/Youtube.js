import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyCp6aNJv0jOheymMP3Wb0c59eD0OSQQAhc",
  },
});
