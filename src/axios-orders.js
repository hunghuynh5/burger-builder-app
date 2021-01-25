import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-app-1ee48-default-rtdb.firebaseio.com/"
})

export default instance;