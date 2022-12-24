<template>
  <main>
  <article>
    <div class="article-header">
      <div class="headline">
        <p>The Sights & Sounds of</p>
        <h1>Our National Parks</h1>
        <div class="byline">by Cortney Drummond</div>
      </div>
      <div class="image" v-bind:style="{ 'background-image': 'url(' + imageUrl + ')' }"></div>
    </div>
    <div class="article-text">
      <p class="first">{{content}}</p>
    </div>
  </article>
</main>
<footer>An exercise in <strong>CSS Grid</strong> (and drop caps)</footer>
</template>

<script>
import NewsService from "../service/NewsService"
export default {
    name:'ArticleView',
    
    data() {
    return {
      imageUrl: null,
      date: "",
      title: "",
      content: "",
      author:""
    }
  },
  computed: {
    styleObject() {
      return {
        'background-image': 'url(' + this.imageUrl + ')'
      }
    }
  },
  async mounted() {
    // fetch the image URL from an API
    let result = await NewsService.getNews()
    console.log(result.articles[0])
    let article = result.article[0]
    this.title=article.title
    this.content=article.content
    this.date=article.publishedAt
    this.author=article.author

  }
}
</script>

<style>
/* Scroll down for CSS Grid rules */




footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #c7c7c7;
  color: #000000;
  text-align: center;
}



</style>