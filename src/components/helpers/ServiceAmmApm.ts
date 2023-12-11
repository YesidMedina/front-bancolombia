import axios from "axios";
import { Amm_apm, Email, Job } from "../../interfaces/amm_apm";

const API = "http://localhost:8000/api/v1";

export const getAmmApmTrue= async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/amm_apm?page=${page}&search=${searchTxt}`);
};

export const getAmmApmFalse= async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/retired_apm?page=${page}&search=${searchTxt}`);
};

export const createAmmApm = async (amm: Amm_apm) => {
    return await axios.post(`${API}/amm_apm`, amm);
};

export const getAmmApmId = async (id: any) => {
    return await axios.get(`${API}/amm_apm/${id}`); //####
};

export const updateAmmApmId = async (id: any, amm: Amm_apm) => {
    return await axios.put(`${API}/amm_apm/${id}`, amm);
};

export const updateSeveralAmmApm = async (arrayToUpdate:Array<{}>, oc_order:any) => {
    return await axios.put(`${API}/several`, {arrayInfo:arrayToUpdate, oc_order});
};

export const deleteAmmApmId = async (id: any) => {
    return await axios.delete(`${API}/amm_im/${id}`);
};

// Email

export const getEmailAmmApm = async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/email_apm?page=${page}&search=${searchTxt}`);
};

export const getEmailAmmApmId = async (id: any) => {
    return await axios.get(`${API}/email_apm/${id}`);
};

export const createEmailAmmApm = async (email: Email) => {
    return await axios.post(`${API}/email_create_apm`, email);
};

export const updateEmailAmmApmId = async (id: any, email: Email) => {
    return await axios.put(`${API}/email_apm/${id}`, email);
};

export const deleteEmailAmmApm = async (id: any) => {
    return await axios.delete(`${API}/email_apm/${id}`);
};

// Dashboard 

export const getDashboardAmmApm = async () => {
    return await axios.get(`${API}/dashboard_apm`);
};

export const getDashboardAmmApmFull = async () => {
    return await axios.get(`${API}/dashboardfull_apm`);
};
export const getDashboardFilialApm = async () => {
    return await axios.get(`${API}/dashboard_filial_apm`);
};
export const getDashboardjobApm = async () => {
    return await axios.get(`${API}/total_jobs`);
};


// Jobs

export const getJobAmmApmTrue = async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/jobs?page=${page}&search=${searchTxt}`);
};

export const getJobAmmApmFalse = async (page:any, searchTxt:any) => {
    return await axios.get(`${API}/retired_jobs?page=${page}&search=${searchTxt}`);
};

export const createJobAmmApm = async (job: Job) => {
    return await axios.post(`${API}/jobs_create`, job);
};

export const getJobAmmApmId = async (id: any) => {
    return await axios.get(`${API}/jobs/${id}`); 
};

export const updateJobAmmApmId = async (id: any, job: Job) => {
    return await axios.put(`${API}/jobs/${id}`, job);
};
