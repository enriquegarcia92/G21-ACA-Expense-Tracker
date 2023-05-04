import axios from "../../api/Axios";

const REGISTER_URL = '/auth/register';

export async function Register (nombrecompleto, email, password){

    const response = await axios.post(REGISTER_URL, 
        JSON.stringify({nombrecompleto, email, password}),
        {
            headers: {'content-type': 'application/json'}
        });

    return response.data;
}