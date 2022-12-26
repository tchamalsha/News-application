<template>
    <div class="conatiner p-3">
      <h1>Recently Visited News</h1>
      <hr>
      <div v-if="!list.length">
            <!-- Element to be rendered if data is null -->
            <div class="image justify-content-center d-flex">
                <img src="../assets/img/empty.svg" alt="Paris" class="center" >
            </div>
            <p>No Data Available</p>
      </div>
      <div class="row mt-3">
          <ListCard 
            v-for="item,index in list" 
                :key="item.id"
                :id=index+1
                :title="item" />
      </div>
    </div>
    
  </template>

<script>
import ListCard from "../components/ListCard.vue"
export default {
    components:{
       ListCard
    },
    data() {
    return {
      list: []
    }
  },
  mounted() {
    
      // Load the list from the local storage
      const jsonList = localStorage.getItem('items');
    
      if (jsonList) {
        this.list = JSON.parse(jsonList);

      }

    }

}
</script>

<style>
@import '../assets/main.css';


img{
  width: 40%;
}
p{
  text-align: center;
  font-size: 2rem;
}
</style>