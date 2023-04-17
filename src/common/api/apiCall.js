import axios from "axios";

const BASE_URL = "https://5fc9346b2af77700165ae514.mockapi.io";

const apiCall = async (method, endpoint, headers, data, params) => {

    try {
        const url = BASE_URL + endpoint;
        const config = {
            method: method,
            url: url,
            headers: headers ? headers : {},
        };
        if (data) {
            config.data = data;
        }
        if (params) {
            config.params = params;
        }

        const response = await axios(config);

        return response;

    } catch (error) {
        throw error;
    }
}


export default apiCall;
