import axios from 'axios'

const API = "http://localhost:8000/api/v1";

export const getChatGpt = async () => {
    
    return await axios.get(`${API}/cuestions`);
};
