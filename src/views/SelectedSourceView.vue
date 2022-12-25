<template>
    <div class="conatiner p-3">
      <h1>Headlines From {{ selectedSource.name }} </h1>
      <hr>
      <div class="row mt-3">
        <div v-if="!allNewsObjects.length">
            <!-- Element to be rendered if data is null -->
            <div >
                <img src="../assets/undraw_page_not_found_re_e9o6.svg" alt="Paris" class="center" >
                <p>No data available</p>
            </div>
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

  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
p{
    text-align: center;
    font-size: 1.5rem;
    color: darkgrey;
}
</style>