import axios from "axios";

const Pessoas_REST_API_URL = "http://localhost:8080/pessoa"

class PessoasService {

    getPessoas(){
        return axios.get(Pessoas_REST_API_URL)
    }
}

export default new PessoasService();