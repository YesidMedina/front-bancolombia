import axios from "axios";
import { Amm_im, Email } from "../../interfaces/amm_im";

const API = "http://localhost:8000/api/v1";

export const getAmmImTrue = async (page:any, searchTxt:any) => {
    
    return await axios.get(`${API}/amm_im?page=${page}&search=${searchTxt}`);
};

export const getAmmImFalse = async (page:any, searchTxt:any) => {
    
    return await axios.get(`${API}/retired?page=${page}&search=${searchTxt}`);
};

export const createAmmIm = async (amm: Amm_im) => {
    return await axios.post(`${API}/amm_im`, amm);
};

export const getAmmImId = async (id: any) => {
    return await axios.get(`${API}/amm_im/${id}`);
};

export const updateAmmImId = async (id: any, amm: Amm_im) => {
    return await axios.put(`${API}/amm_im/${id}`, amm);
};

export const updateSeveralAmmIm = async (arrayToUpdate:Array<{}>, oc_order:any) => {
    return await axios.put(`${API}/several`, {arrayInfo:arrayToUpdate, oc_order});
};

export const deleteAmmImId = async (id: any) => {
    return await axios.delete(`${API}/amm_im/${id}`);
};

// Email

export const getEmailAmmIm = async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/email?page=${page}&search=${searchTxt}`);
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

// Dashboard 

export const getDashboardAmmIm = async () => {
    return await axios.get(`${API}/dashboard`);
};

export const getDashboardAmmImFull = async () => {
    return await axios.get(`${API}/dashboardfull`);
};
export const getDashboardFilial = async () => {
    return await axios.get(`${API}/dashboard_filial`);
};


// BaseLIne

export const getBaseLine = async () => {
    return await axios.get(`${API}/baseline`);
};



// export const getExcelAmm = async () => {
//     return await axios.get(`${API}/excel`);
// };

// Filters

// export const FilterAmmIm = async (page:any, searchTxt: any) => {
//     return await axios.get(`${API}/filter?page=${page}&search=${searchTxt}`);
// };

// export const FilterEmailAmmIm = async (searchTxt: any) => {
//     return await axios.get(`${API}/filter_email?search=${searchTxt}`);
// };






