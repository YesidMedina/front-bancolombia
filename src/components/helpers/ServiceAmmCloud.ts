import axios from "axios";
import { Amm_cloud, Email } from "../../interfaces/amm_cloud";

const API = "http://localhost:8000/api/v1";

export const getAmmCloud = async () => {
    return await axios.get(`${API}/amm_cloud`);
};

export const createAmmCloud = async (amm: Amm_cloud) => {
    return await axios.post(`${API}/amm_cloud`, amm);
};

export const getAmmCloudId = async (id: any) => {
    return await axios.get(`${API}/amm_cloud/${id}`);
};

export const updateAmmCloudId = async (id: any, amm: Amm_cloud) => {
    return await axios.put(`${API}/amm_cloud/${id}`, amm);
};

export const deleteAmmCloudId = async (id: any) => {
    return await axios.delete(`${API}/amm_cloud/${id}`);
};

// Email

export const getEmailAmmCloud = async () => {
    return await axios.get(`${API}/email_cloud`);
};

export const getEmailAmmCloudId = async (id: any) => {
    return await axios.get(`${API}/email_cloud/${id}`);
};

export const createEmailAmmCloud = async (email: Email) => {
    return await axios.post(`${API}/email_cloud`, email);
};

export const updateEmailAmmCloudId = async (id: any, email: Email) => {
    return await axios.put(`${API}/email_cloud/${id}`, email);
};

export const deleteEmailAmmCloud = async (id: any) => {
    return await axios.delete(`${API}/email_cloud/${id}`);
};

