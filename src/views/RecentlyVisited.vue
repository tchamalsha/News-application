<template>
    <div class="conatiner p-3">
      <h1>Recently Visited News</h1>
      <div class="row mt-3">
          <ListCard 
            v-for="item in list" 
                :key="item.id"
                :title="item.title" />
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
  methods: {
    loadList() {
      // Load the list from the local storage
      const list = localStorage.getItem('list');
      if (list) {
        this.list = JSON.parse(list);
      }
      console.log(this.list);
    }
  }

}
</script>

<style>

</style>