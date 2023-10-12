import axios from "axios";
import { BASE_URL } from "../utils/url";

// Function to Fetch Packages with Authentication Token :-

export const FetchedPackages = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/package/getAllPackages`, {
            headers : {
                Authorization : token,
            },
        });    
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const addPackage = async (token, data) => {
    try {
        const response = await axios.post(`${BASE_URL}/package/addNewPackage`, data, {
            headers : {
                'Content-Type' : 'multipart/form-data',
                Authorization : token,
            }
        })
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}