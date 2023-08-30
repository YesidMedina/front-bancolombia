import axios from "axios";
import { Amm_apm, Email } from "../../interfaces/amm_apm";

const API = "http://localhost:8000/api/v1";

export const getAmmApm= async () => {
    return await axios.get(`${API}/amm_apm`);
};

export const createAmmApm= async (amm: Amm_apm) => {
    return await axios.post(`${API}/amm_apm`, amm);
};

export const getAmmApmId = async (id: any) => {
    return await axios.get(`${API}/amm_apm/${id}`);
};

export const updateAmmApmId = async (id: any, amm: Amm_apm) => {
    return await axios.put(`${API}/amm_apm/${id}`, amm);
};

export const deleteAmmApmId = async (id: any) => {
    return await axios.delete(`${API}/amm_apm/${id}`);
};

// Email

export const getEmailAmmApm= async () => {
    return await axios.get(`${API}/email_apm`);
};

export const getEmailAmmApmId = async (id: any) => {
    return await axios.get(`${API}/email_apm/${id}`);
};

export const createEmailAmmApm= async (email: Email) => {
    return await axios.post(`${API}/email_apm`, email);
};

export const updateEmailAmmApmId = async (id: any, email: Email) => {
    return await axios.put(`${API}/email_apm/${id}`, email);
};

export const deleteEmailAmmApm= async (id: any) => {
    return await axios.delete(`${API}/email_apm/${id}`);
};

