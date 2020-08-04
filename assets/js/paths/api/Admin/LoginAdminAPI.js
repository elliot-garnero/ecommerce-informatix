import axios from "axios";

export default function LoginAdminAPI(requestOptions) {
    return axios.post('/api/admin/login', requestOptions)
}