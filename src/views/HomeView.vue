<template>
  <div class="conatiner p-3">
    <h1>Headlines</h1>
    <div class="row mt-3">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </div>
  </div>
  
</template>

<script>
 import NewsCard from "../components/NewsCard.vue";

 export default{
    name:'HomeView',
    components:{
        NewsCard
    }
 }
</script>