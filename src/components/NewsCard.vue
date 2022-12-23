<template>
  <div class="col-md-3">
    <div class="card mb-3" >
    <a class="container d-flex p-4 justify-content-end" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
      </a>
  
      <div class="card-body">
        <p ><small class="text-muted">{{date}}</small></p>
        <h5 class="card-title">{{title}} </h5>
        <p class="card-text">{{description}}</p>
        
        <a class="d-flex justify-content-end" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </a>
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
        imageUrl:String
    },
    computed: {
        formattedDescription(){
            return this.description.substring(0, 20) + "...";
        }
    }
}
</script>

<style>

.card{
    box-shadow: 0 0 20px 8px #d0d0d0;
   
}
.card .card-text{
    font-size: 0.8rem;
}

.card .card-title{
    color: blueviolet;
}
</style>