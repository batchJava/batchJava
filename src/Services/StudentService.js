import axios from "axios";

const baseURL = "http://localhost:8080/student";


export const CreateStudDetails=(studDetails)=>axios.post(baseURL+"/insertProcess",studDetails);


export const getStudDetailsById=(studId)=>axios.get(baseURL+"/select/"+studId);


export const deleteStudDetailsById=(studId)=>axios.delete(baseURL+"/delete/"+studId);

export const updateStudDetailsById=(studId,studDetails)=>axios.put(baseURL+"/update/"+studId,studDetails);