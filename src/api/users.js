import axios from "axios";

const BASE_URL = 'http://localhost:3001';

// Function to register a NewUser;

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData);
        const token = response.data.token;
        
        // Store the token in localStorage :-
        localStorage.setItem('token', token);
        return response.data;
    } catch (err) {
        console.log(err);
        throw err
    }
}

