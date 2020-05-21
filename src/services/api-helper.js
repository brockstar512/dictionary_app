import axios from "axios"


const api = axios.create({
    baseURL: "https://dictionary-marshall.herokuapp.com/routes"
  });

// mongodb://localhost/favorite_words

  export const getAll = async () => {
    const resp = await api.get("/");
    return resp.data;
  };

  export const create = async () => {
    const resp = await api.post("/");
    return resp.data;
  };

export const update = async () => {
    const resp = await api.put("/${id}");
    return resp.data;
  };

  export const removeWord = async () => {
    const resp = await api.delete("/${id}");
    return resp.data;
  };

export const removeDef = async () => {
    const resp = await api.delete("/def/${DefId}");
    return resp.data;
  };

export const getByName = async () => {
    const resp = await api.get("/${name}");
    return resp.data;
  };

//   router.post('/adddef/:WordId', controller.AddByDef)
  export const AddByDef = async () => {
    const resp = await api.post("/adddef/${WordId}");
    return resp.data;
  };

//   AddByDef
//   getByName
//   removeDef
//   removeWord
//   update
//   create
//   getAll