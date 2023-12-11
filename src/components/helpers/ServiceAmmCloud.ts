import axios from "axios";
import { Amm_cloud, Email, Synthetic } from "../../interfaces/amm_cloud";

const API = "http://localhost:8000/api/v1";

export const getAmmCloudTrue= async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/amm_cloud?page=${page}&search=${searchTxt}`);
};

export const getAmmCloudFalse= async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/retired_cloud?page=${page}&search=${searchTxt}`);
};

export const createAmmCloud = async (amm: Amm_cloud) => {
    return await axios.post(`${API}/amm_cloud`, amm);
};

export const getAmmCloudId = async (id: any) => {
    return await axios.get(`${API}/amm_cloud/${id}`); //####
};

export const updateAmmCloudId = async (id: any, amm: Amm_cloud) => {
    return await axios.put(`${API}/amm_cloud/${id}`, amm);
};

export const updateSeveralAmmCloud = async (arrayToUpdate:Array<{}>, oc_order:any) => {
    return await axios.put(`${API}/several_cloud`, {arrayInfo:arrayToUpdate, oc_order});
};

export const deleteAmmCloudId = async (id: any) => {
    return await axios.delete(`${API}/amm_im_cloud/${id}`);
};

// Email

export const getEmailAmmCloud = async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/email_cloud?page=${page}&search=${searchTxt}`);
};

export const getEmailAmmCloudId = async (id: any) => {
    return await axios.get(`${API}/email_cloud/${id}`);
};

export const createEmailAmmCloud = async (email: Email) => {
    return await axios.post(`${API}/email_create_cloud`, email);
};

export const updateEmailAmmCloudId = async (id: any, email: Email) => {
    return await axios.put(`${API}/email_cloud/${id}`, email);
};

export const deleteEmailAmmCloud = async (id: any) => {
    return await axios.delete(`${API}/email_cloud/${id}`);
};

// Dashboard 

export const getDashboardAmmCloud = async () => {
    return await axios.get(`${API}/dashboard_cloud`);
};

export const getDashboardAmmCloudFull = async () => {
    return await axios.get(`${API}/dashboardfull_cloud`);
};
export const getDashboardFilialCloud = async () => {
    return await axios.get(`${API}/dashboard_filial_cloud`);
};
export const getDashboardSyntheticApm = async () => {
    return await axios.get(`${API}/total_synthetic`);
};


// Synthetic

export const getSyntheticTrue = async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/synthetic?page=${page}&search=${searchTxt}`);
};

export const getSyntheticFalse = async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/retired_synthetic?page=${page}&search=${searchTxt}`);
};

export const createSyntheticAmm = async (synthetic: Synthetic) => {
    return await axios.post(`${API}/synthetic_create`, synthetic);
};

export const getSyntheticAmmId = async (id: any) => {
    return await axios.get(`${API}/synthetic/${id}`); 
};

export const updateSyntheticAmmId = async (id: any, synthetic: Synthetic) => {
    return await axios.put(`${API}/synthetic/${id}`, synthetic);
};
