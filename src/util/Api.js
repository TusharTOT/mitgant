import axios from "axios";
export default axios.create({
    // baseURL: "http://voluntech-backend.herokuapp.com/api/", // heroku
    baseURL: "https://app.mitigant.io:8443/", // staging
    // baseURL: 'http://127.0.0.1:3000/api/', // Local
    headers: {
        "Content-Type": "application/json",
    },
});
