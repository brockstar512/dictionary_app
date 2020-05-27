import axios from "axios"

//this is the first have of the link and below in the functions is the last half + the retreived data
const api = axios.create({
    baseURL: "https://dict-app-brock-array.herokuapp.com/routes"
  });
  
  //
// mongodb://localhost/favorite_words
//https://dictionary-marshall.herokuapp.com/routes
  export const getAll = async () => {
    const resp = await api.get("/");
    return resp.data;
  };
//this cause me a hge problem. gifure out what body means and how to properly pass things in
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

//   router.post('/adddef/:WordId', controller.AddByDef)
  export const AddByDef = async (WordId, body) => {
    console.log("this is the word id from api helper", WordId)
    const resp = await api.post(`/adddef/${WordId}`, body);
    return resp.data;
  };//this is atomatically adding the add def we have to send in whats in the 
  //template literals in the async whereever I call the function. i am sending in the wordID as an argument

//   AddByDef
//   getByName
//   removeDef
//   removeWord
//   update
//   create
//   getAll