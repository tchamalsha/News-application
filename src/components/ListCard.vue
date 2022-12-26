<template>
  <div class="container d-flex justify-content-center">
    <div class="row box col-md-8 align-items-center d-flex m-2">
        <div class="col-auto number d-flex">
            <p class="m-0">{{id}}</p>
        </div>
        <div class="col-10">
            <p>{{title}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ListCard',
    props:{
        id:Number,
        title:String
    }
}
</script>

<style>
.box{
    padding: 1rem  0.5rem;
    border: none;
    border-radius: 7px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 20px 8px #d0d0d0;
}

</style>