<template>
  <div class="container d-flex justify-content-center">
    <div class="row box col-md-10 align-items-center d-flex m-2">
        <div class="col-2 number justify-content-center d-flex">
            <p>{{id}}</p>
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
    box-shadow: 0 0 20px 8px #d0d0d0;
}

</style>