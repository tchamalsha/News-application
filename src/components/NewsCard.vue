<template>
  <div class="col-md-3">
    <div class="card news-card mb-3" :id="'news-'+id">
      <div class="card-body d-grid align-items-between">
        <div>
          <p ><small class="text-muted" id="date">{{date}}</small></p>
          <h5 class="card-title" :id="'news-title-'+id">{{title}} </h5>
          <p class="card-text">{{description}}</p>
        </div>
        <div class="container d-flex align-items-center justify-content-between">
             <div @click="editTitle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
                    <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
            </div>
            <div>
                <router-link :to="{ name: 'article', query: {  title:title, content:content, author:author, imageUrl:imageUrl,url:url} }" @click="saveItem(this.title)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </router-link>
             </div>
        </div>
    </div>
    </div>
  </div>

</template>

<script>
export default {
    name:'NewsCard',
    props: {
        id:Number,
        date: String,
        title: String,
        description: String,
        imageUrl:String,
        content:String,
        author:String,
        url:String
    },
    computed: {
        formattedDescription(){
            return this.description.substring(0, 20) + "...";
        }
    },
    methods: {
    saveItem(item) {
      // Save the item to the local storage
      const items = JSON.parse(localStorage.getItem('items'))??[]
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    },

    editTitle(){
      var inputTitle = prompt("Enter new title:")
      document.getElementById('news-title-'+this.id).innerHTML = inputTitle
    }
  }
}

</script>

<style scoped>

.card.news-card{
    box-shadow: 0 0 20px 8px #d0d0d0;
    min-height: 18rem;
    
}
.card.news-card .card-text{
    font-size: 0.8rem;
    display: -webkit-inline-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card.news-card .card-title{
    color: #4e3c36;
    display: -webkit-inline-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
#date{
  color: #C9A15A;
}
</style>