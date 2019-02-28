import axios from "axios";
import logger from "./logService";

axios.interceptors.request.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
    }

    return Promise.reject(error);
});

function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    setJwt
};
