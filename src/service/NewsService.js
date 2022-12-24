import axios from "axios";

class NewsService{

    async getNews(){
        return axios.get()
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }



}

export default new NewsService;