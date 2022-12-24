<template>
  

<div class="container col-md-8 box">
  <h3 class="title">{{title}}</h3>
  <p class="author">by <B>Tharushi Chamalsha</B></p>
  <img src="../assets/grafiti-urban-pavement-background-texture-grunge.jpg" alt="">
  <p class="content mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p class="content mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

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
        imageUrl:String
    },
    
}
</script>

<style>
/* Scroll down for CSS Grid rules */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Roboto+Slab:wght@500&family=Sevillana&display=swap');

.box img{
    border-radius: 5px;
    width: 80%;
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