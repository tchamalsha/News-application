<template>
  

<div class="container col-md-8 box">
  <h3 class="title">{{title}}</h3>
  <p class="author">by <B>{{ author }}</B></p>
  <img v-bind:src="imageUrl" alt="Image">
  <p class="content mt-4">{{ content }}</p>
  <a v-bind:href="url" target="_blank">See more</a>
</div>
</template>

<script>
export default {
    name:'ArticleCard',
    props: {
        id:Number,
        date: String,
        title: String,
        content: String,
        imageUrl:String,
        author:String,
        url:String
    },
    
}
</script>

<style>
/* Scroll down for CSS Grid rules */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Roboto+Slab:wght@500&family=Sevillana&display=swap');

.box img{
    border-radius: 5px;
    width: 60%;
}


.container {
  position: relative;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  position: absolute;
    overflow-y: scroll;
}

.box h3{
    font-family: 'Roboto Slab', serif;
}
.box p{
    font-family: 'Sevillana', cursive;
}

.box .content{
    text-align: justify;
    font-family: 'Quicksand', sans-serif;
    
}
</style>