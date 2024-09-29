import axios from "axios";

const api = axios.create({
    baseURL: "https://api-cadastro-de-usuarios-nine.vercel.app/" //http://localhost:3000

})

export default api