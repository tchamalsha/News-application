import axios from "axios";

class NewsService{
    #API_KEY=""
    constructor(){
        this.#API_KEY = import.meta.env.VITE_API_KEY
    }

    async getNews(){
        return axios.get(`/top-headlines?country=us&apiKey=${this.#API_KEY}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getNewsSources(){
        return axios.get(`/sources?apiKey=${this.#API_KEY}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getSearchedNews(searchedText){
        return axios.get(`/top-headlines?q=${searchedText}&apiKey=${this.#API_KEY}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            throw err
        })
    }

    async getApiResponse(){
        return axios.get(`/sources?${this.#API_KEY}}`)
        .then((res) => {
            return res
        }).catch((err) => {
            throw err
        })
    }


}

export default new NewsService;