<template>

<div class="article">
    <div class="row justify-content-center">
        <ArticleCard :title="selectedArticle.title"
                    :author="selectedArticle.author"
                    :content="selectedArticle.content"
                    :url="selectedArticle.url"
        />
    </div>
    
</div>
  

</template>

<script>
import NewsService from "../service/NewsService"
import ArticleCard from "../components/ArticleCard.vue"

export default {
    name: "ArticleView",
    data() {
        return {
            imageUrl: null,
        };
    },
    computed: {
    selectedArticle() { 
        console.log("work") 
        console.table(this.$route.query)    
        return this.$route.query;
      
    }
  },
    components: { ArticleCard },
    
}
</script>

<style>
/* Scroll down for CSS Grid rules */

.body {
  width: 100vw;
  height: 100vh;
  background: #ecf0f3;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  margin-top: 5px;
}



</style>