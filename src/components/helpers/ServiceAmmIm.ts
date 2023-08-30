import axios from "axios";
import { Amm_im, Email } from "../../interfaces/amm_im";

const API = "http://localhost:8000/api/v1";

export const getAmmIm = async (status:boolean) => {
    
    return await axios.get(`${API}/amm_im?status=${status}`);
};

export const createAmmIm = async (amm: Amm_im) => {
    return await axios.post(`${API}/amm_im`, amm);
};

export const getAmmImId = async (id: any) => {
    return await axios.get(`${API}/amm_im/${id}`);
};

export const updateAmmImId = async (id: any, amm: Amm_im) => {
    return await axios.patch(`${API}/amm_im/${id}`, amm);
};

export const updateSeveralAmmIm = async (arrayToUpdate:Array<{}>, oc_order:any) => {
    return await axios.put(`${API}/amm_im_several`, {arrayInfo:arrayToUpdate, oc_order});
};

export const deleteAmmImId = async (id: any) => {
    return await axios.delete(`${API}/amm_im/${id}`);
};

// Email

export const getEmailAmmIm = async () => {
    return await axios.get(`${API}/email`);
};

export const getEmailAmmImId = async (id: any) => {
    return await axios.get(`${API}/email/${id}`);
};

export const createEmailAmmIm = async (email: Email) => {
    return await axios.post(`${API}/email`, email);
};

export const updateEmailAmmImId = async (id: any, email: Email) => {
    return await axios.put(`${API}/email/${id}`, email);
};

export const deleteEmailAmmIm = async (id: any) => {
    return await axios.delete(`${API}/email/${id}`);
};

export const getDashboardAmmIm = async () => {
    return await axios.get(`${API}/dashboard`);
};




