import axios from "axios";
import { setToken } from "../utils/auth";
import { BASE_URL } from "../utils/url";
// Function to register a NewUser;

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData);
        const token = response.data.tokenn;
        
        // Store the token in localStorage :-
        setToken(token);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const signinUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, userData)
        const token = response.data.token;
        
        // Store the token in localStorage :-
        setToken(token);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err)
        throw err;
    }
}

