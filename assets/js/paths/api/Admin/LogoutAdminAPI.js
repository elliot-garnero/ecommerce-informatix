import axios from "axios";

export default function LogoutAdminAPI() {
    axios.get('/api/admin/logout');
}