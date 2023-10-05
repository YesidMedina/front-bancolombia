import axios from "axios";
import { Users } from "../../interfaces/users";

const API = "http://localhost:8000/api/v1";

export const getUsers = async () => {
  return await axios.get(`${API}/users`);
};


export const createLogin = (user: Users) => {
  return  axios.post(`${API}/login`, user)
};

export const Logout = async () => {
  return await axios.post(`${API}/logout`);
};

export const getUserId = async (id: any) => {
  return await axios.get(`${API}/users/${id}`);
};

export const getUserAuthorized = async () => {
  return await axios.get(`${API}/authorized`);
};

export const getUserToken = async (id: any) => {
  return await axios.get(`${API}/token/${id}`);
};
