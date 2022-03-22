import api from "./api";

const getCategories = async () => {
  try {
    const resp = await api.get("/categories");
    return resp.data
  } catch (error) {
    return false
  }
};

export default getCategories
