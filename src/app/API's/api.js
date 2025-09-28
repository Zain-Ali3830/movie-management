import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

export const signupUser = async (userData) => {
  try {
    const user = await axios.post(`${BASE_URL}/auth/signup`, userData);
    return user.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const user = await axios.post(`${BASE_URL}/auth/login`, userData);
    return user.data;
  } catch (error) {
    throw error;
  }
};
