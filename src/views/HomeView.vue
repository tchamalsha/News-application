<template>
  <div class="conatiner p-3">
    <h1>Headlines</h1>
    <div class="row mt-3">
        
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
   
    async getNews(){
        let result = await NewsService.getNews()
        console.log(result.data.articles)
        //this.allNewsObjects = result.data.articles
    }
 }
</script>