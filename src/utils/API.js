import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const API = {
    search: function (query) {
        return axios.get(BASEURL + query);
    }
}

// Export an object with a "search" method that searches the randomuser API for the passed limit of results
export default API;
