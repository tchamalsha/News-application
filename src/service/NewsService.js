import axios from "axios";

class NewsService{

    async getNews(){
        return axios.get('/top-headlines?country=us&apiKey=44f5311380fd478ab71c72fcb5b7b717')
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getNewsSources(){
        return axios.get('/sources?apiKey=44f5311380fd478ab71c72fcb5b7b717')
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getSearchedNews(searchedText){
        return axios.get(`/top-headlines?q=${searchedText}&apiKey=44f5311380fd478ab71c72fcb5b7b717`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }


}

export default new NewsService;