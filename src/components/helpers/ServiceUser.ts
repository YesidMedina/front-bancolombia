import axios from "axios";
import { Users } from '../../interfaces/users'

const API = "http://localhost:8000/api/v1";

export const getUsers = async () => {
    
    return await axios.get(`${API}/users`);
};

export const getUserId = async (id:any) => {
    
    return await axios.get(`${API}/users/${id}`);
};