import axios from "axios";

class NewsService{

    async getNews(){
        return axios.get();
    }


}

export default new NewsService;