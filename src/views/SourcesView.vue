<template>
  <div class="conatiner p-3">
    <h1>Top Sources</h1>
    <div class="row mt-3">
        <SourceCard
            v-for="news in allNewsObjects" 
                :key="news.id"
                :name="news.name"
                :description="news.description"
                :url="news.url"
        />
    </div>
  </div>
</template>

<script>
import SourceCard from "../components/SourceCard.vue";
import NewsService from '../service/NewsService';
export default {
    name:'SourceView',
    components:{
       SourceCard
    },

    data(){
        return{
            allNewsObjects :[]
        }
    }
   ,
    async mounted(){
        // let result = await NewsService.getNews()
        // console.log(result.data)
        // this.allNewsObjects = result.data.articles
        NewsService.getNewsSources()
        .then(res => {
            this.allNewsObjects = res.sources
            console.log(res.sources);
        }).catch(err => {
            console.log(err);
        })
    }
    

}
</script>

<style>

</style>