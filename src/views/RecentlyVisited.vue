<template>
    <div class="conatiner p-3">
      <h1>Recently Visited News</h1>
      <hr>
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
</style>