<template>
  <div class="conatiner p-3">
    <h1>Headlines</h1>
    <div class="row mt-3">
        <NewsCard
            v-for="news in allNewsObjects" :key="news.id"
                :id="news.id"
                :date="news.publishedAt"
                :title="news.title" 
                :author="news.author"
                :description="news.description"
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
            allNewsObjects :[]
        }
    }
   ,
    async mounted(){
        let result = await NewsService.getNews()
        console.log(result.data.articles)
        this.allNewsObjects = result.data.articles
    }
 }
</script>