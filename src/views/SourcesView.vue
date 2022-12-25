<template>
  <div class="conatiner p-3">
    <h1>Top Sources</h1>
    <hr>

    <div v-if="loading" class="d-flex justify-content-center">
      <!-- Loading animation -->
      <div class="spinner-border " role="status">
      </div>
    </div>

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
            allNewsObjects :[],
            loading:false
        }
    }
   ,
    async mounted(){
        
        this.loading=true
        NewsService.getNewsSources()
        .then(res => {
            this.allNewsObjects = res.sources
            console.log(res.sources);
        }).catch(err => {
            console.log(err);
        })
        this.loading=false
    }
    

}
</script>

<style>
@import '../assets/main.css';
</style>