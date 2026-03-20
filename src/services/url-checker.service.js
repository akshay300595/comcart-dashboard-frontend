import axiosConfig from "../config/axiosConfig";

const urlService = {
    makeGetRequest: async (endpoint) => {
        const res = await axiosConfig.get(endpoint);
        return res.data;
    },

    makePostRequest: async (endpoint, payload) => {
        const res = await axiosConfig.post(endpoint, payload);
        return res.data;
    },

    makePatchRequest : async (endpoint, payload) =>{
        console.log(endpoint, payload)
        const res = await axiosConfig.patch(endpoint, payload);
        return res.data;
    },

    makeDeleteRequest : async (endpoint, payload) =>{
        const res = await axiosConfig.delete(endpoint);
        return res.data;
    }
}


export default urlService; 