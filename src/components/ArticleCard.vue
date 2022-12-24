<template>
  <main>
  <article>
    <div class="article-header">
      <div class="headline">
        
        <h1>{{title}}</h1>
        <div class="byline">{{author}}</div>
      </div>
      <div class="image" v-bind:style="{ 'background-image': 'url(' + {{imageUrl}} + ')' }"></div>
    </div>
    <div class="article-text">
      <p class="first">{{content}}</p>
    </div>
  </article>
</main>
</template>

<script>
export default {
    name:'ArticleCard',
    props:{
        id:Number,
        date: String,
        title: String,
        description: String,
        imageUrl:String,
        content:String,
        author:String
    },
}
</script>

<style>
/* Scroll down for CSS Grid rules */

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  position: relative;
  min-height: 100%;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 8rem;
  margin: -10px -10px 0 -10px;
  background-color: snow;
}

article {
  height: 100%;
}

.image {
  background-size: cover;
}

.headline {
  background-color: #000000;
  color: #c7c7c7;
  padding: 0.75rem;
  text-align: center;
  box-shadow: 0 1.2em 0 0.75em;
}

.headline p {
  font-size: 1.25em;
}
.headline h1 {
  margin-top: -0.25em;
  margin-bottom: 0.5em;
  font-size: 3em;
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 3px 3px 0px #3e2723;
}

.byline {
  margin: 0 1rem 1rem 1rem;
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  letter-spacing: -0.2px;
}

.article-text {
  margin: -1em auto;
  padding: 0.5em 1em;
  max-width: 620px;
  font-size: 1em;
  line-height: 1.25;
  color: #3e2723;
}

.first::first-letter {
  float: left;
  margin: 0 0.2em 0 0;
  color: saddlebrown;
  font-size: 4em;
  font-family: "Libre Baskerville", serif;
  font-weight: 600;
  text-shadow: 2px 2px 0px #3e2723;
}

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

/* CSS Grid starts here! */

.article-header {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 2fr 1fr 1fr 1fr;
}

.image {
  grid-column: 1 / -1;
  grid-row: 1 / 3;
}
.headline {
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  z-index: 100;
}

</style>