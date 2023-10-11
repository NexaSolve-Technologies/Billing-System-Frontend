import axios from "axios";
import { BASE_URL } from "../utils/url";

// Function to fetch the products with Authentication Token :-
export const FetchedProducts = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/product/listAllProducts`, {
            headers : {
                Authorization : token,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err)
        throw err
    }
}