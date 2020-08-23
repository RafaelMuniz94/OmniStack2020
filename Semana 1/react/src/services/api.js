import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3333" }); //Criando uma instancia do axios

export default api