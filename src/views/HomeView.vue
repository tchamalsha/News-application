<template>
  <div class="conatiner p-3">
    <form class="d-flex justify-content-end">
	    <input v-model="searchTerm" type="search" placeholder="search">
       
        <ul class="wrapper" @click="search">
            <li class="icon facebook" onclick="search">
                <span class="tooltip">{{searchTerm}}</span>
                <span>Go</span>
            </li>
        </ul> 
    </form>
    <h1>Headlines</h1>
    <hr>
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
            allNewsObjects :[],
            searchTerm: ''
        }
    }
   ,
    async mounted(){
        
        NewsService.getNews().then(res => {
            this.allNewsObjects = res.articles
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    methods:{
        search(){
            NewsService.getSearchedNews(this.searchTerm).then(res => {
              this.allNewsObjects = res.articles
            }).catch(err => {
                console.log(err);
            })
        }
    }
 }
</script>

<style scoped>
@import '../assets/main.css';

form {
	margin: 50px;
}
input {
	outline: none;
}

input[type=search] {
	-webkit-appearance: textfield;
	-webkit-box-sizing: content-box;
	font-family: inherit;
	font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
	display: none; 
}
input[type=search] {
	padding: 9px 10px 9px 32px;
	width: 55px;
	background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
	border: solid 1px #ccc;
	
	-webkit-border-radius: 10em;
	   -moz-border-radius: 10em;
	        border-radius: 10em;
	
	-webkit-transition: all .5s;
	   -moz-transition: all .5s;
	        transition: all .5s;
}
input[type=search]:focus {
	width: 130px;
	background-color: #fff;
	border-color: #66CC75;
	
	-webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
	   -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
	        box-shadow: 0 0 5px rgba(109,207,246,.5);
}


@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  display: grid;
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  place-items: center;
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.wrapper {
  display: inline-flex;
  list-style: none;
}

.wrapper .icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #c9a15a;
  color: #ffffff;
  
}

</style>