<template>
    <div class="conatiner p-3">
      <h1>Headlines From {{ selectedSource.name }} </h1>
      <hr>
      <div class="row mt-3">
        <div v-if="!allNewsObjects.length">
            <!-- Element to be rendered if data is null -->
            <p>Data is not available.</p>
        </div>
          <NewsCard

              v-for="news in allNewsObjects" 
                  :key="news.id"
                  :id="news.id"
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
              allNewsObjects :[]
          }
      }
     ,computed:{
        selectedSource() { 
        console.log(this.$route.query.name) 
        console.table(this.$route.query)    
        return this.$route.query;
      
        }
     },
     
      async mounted(){
          NewsService.getNews()
          .then(res => {
              console.log(res.articles)
              this.allNewsObjects = res.articles.filter(item => item.source.name === this.selectedSource.name);
              console.log(this.allNewsObjects);
          }).catch(err => {
              console.log(err);
          })
      }
   }
  </script>

  <style>
  @import '../assets/main.css';

</style>