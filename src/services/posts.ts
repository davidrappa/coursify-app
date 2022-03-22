import api from "./api";

const getPosts = async () => {
  try {
    const resp = await api.get("/posts");
    return resp.data
  } catch (error) {
    return false
  }
};

export default getPosts
