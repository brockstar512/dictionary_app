import axios from "axios"

const api = axios.create({
    baseURL: "https://dict-app-brock-array.herokuapp.com/routes"
  });
  
  export const getAll = async () => {
    const resp = await api.get("/");
    return resp.data;
  };

  export const create = async (body) => {
    const resp = await api.post(`/`, body);
    return resp.data;
  };

export const update = async (id) => {
    const resp = await api.put(`/${id}`);
    return resp.data;
  };

  export const removeWord = async (id) => {
    const resp = await api.delete(`/${id}`);
    return resp.data;
  };

export const removeDef = async (DefId) => {
    const resp = await api.delete(`/def/${DefId}`);
    return resp.data;
  };

export const getByName = async (name) => {
    const resp = await api.get(`/${name}`);
    return resp.data;
  };

  export const AddByDef = async (WordId, body) => {
    const resp = await api.post(`/adddef/${WordId}`, body);
    return resp.data;
  };

