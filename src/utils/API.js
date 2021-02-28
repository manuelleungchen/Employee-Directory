import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

// Export an object with a "search" method that searches the randomuser API for the passed limit of results
export default {
    search: function (query) {
        return axios.get(BASEURL + query);
    }
};
