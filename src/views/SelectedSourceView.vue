<template>
    <div class="conatiner p-3">
      <h1>Headlines From {{ selectedSource.name }} </h1>
      <div class="row mt-3">
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
              this.allNewsObjects = res.articles.filter(item => item.source.name === "The Guardian");
              console.log(this.allNewsObjects);
          }).catch(err => {
              console.log(err);
          })
      }
   }
  </script>