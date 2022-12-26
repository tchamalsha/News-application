<template>
  <div class="conatiner p-3">

    <h1 class="wow slideInLeft">Headlines</h1>
    <hr>

    <form class="d-flex justify-content-center justify-content-md-end">
	    <input v-model="searchTerm" type="search" placeholder="search">
       
        <ul class="wrapper" @click="search">
            <li class="icon facebook" onclick="search">
                <span class="tooltip">{{searchTerm}}</span>
                <span>Go</span>
            </li>
        </ul> 
    </form>

    <div v-if="loading" class="d-flex justify-content-center">
      <!-- Loading animation -->
      <div class="spinner-border " role="status">
      </div>
    </div>

    <div v-else class="row mt-3">
        <NewsCard
            v-for="news,index in allNewsObjects" 
                :key="news.id"
                :id="index"
                :date="news.publishedAt"
                :title="news.title" 
                :author="news.author"
                :description="news.description"
                :content="news.content"
                :imageUrl="news.urlToImage"
                :url="news.url"
        />
    </div>
  </div>
  
</template>

<script>
import NewsCard from "../components/NewsCard.vue";
import NewsService from "../service/NewsService"
 export default{
    name:'HomeView',
    components:{
        NewsCard
    },

    data(){
        return{
            allNewsObjects :[],
            searchTerm: '',
            loading: true,
        }
    }
   ,
    async mounted(){
        NewsService.getNews().then(res => {
            this.loading = false;
            this.allNewsObjects = res.articles
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    },
    methods:{
        search(){
            NewsService.getSearchedNews(this.searchTerm).then(res => {
              this.allNewsObjects = res.articles
            }).catch(err => {
                console.log(err);
            })
        }
    }
 }

</script>

<style scoped>
@import '../assets/main.css';
@import '../assets/home.css';
</style>