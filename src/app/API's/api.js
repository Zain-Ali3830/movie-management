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


export const getAllMovies = async () => {
  try {
    const movies = await axios.get(`${BASE_URL}/getmovies`);
    return movies.data;
  } catch (error) {
    throw error;
  }
};


export const getMovieById = async (id) => {
  try {
    const movie = await axios.get(`${BASE_URL}/movieById/${id}`);
    console.log("id", id);
    return movie.data;
  } catch (error) {
    throw error;
  }
};


export const bookTicketAPI = async (ticketData) => {
  try {
    const ticket = await axios.post(`${BASE_URL}/bookticket`, ticketData);
    return ticket.data;
  } catch (error) {
    throw error;
  }
};


export const contactMessage= async(messageData)=>{
  try {
    const message = await axios.post(`${BASE_URL}/contact`, messageData);
    return message.data;
  } catch (error) {
    throw error;
  }
};

export const updateMovie = async (id, movieData) => {
  try {
    const movie = await axios.put(`${BASE_URL}/movies/${id}`, movieData);
    return movie.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/movies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};