<template>

<div class="article ">
    <div class="row justify-content-center">
        <ArticleCard :title="title"/>
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
            articleSet:[]
        };
    },
    async mounted() {
        // fetch the image URL from an API
        
        console.log(this.$route.params.object);
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
  position: fixed;
}



</style>