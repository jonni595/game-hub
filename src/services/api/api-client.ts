import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2485957435d447ca9623fd9fc0f943a6",
  },
});
