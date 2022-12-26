<template>
  <div class="container justify-content-center d-flex">
    <img src="../assets/img/bug.svg" alt="">
    <p v-if="error">{{ message }}</p>
  </div>
</template>

<script>
import NewsService from '../service/NewsService'
export default {
    name:'ErrorView',
    data(){
        message:''
        
    },
    created(){
        this.message = NewsService.getApiResponse()
        
    }
}
</script>

<style scoped>


img{
    width: 50%;
    min-height: 80vh;
    display: flex;
    align-items: center;
}

</style>