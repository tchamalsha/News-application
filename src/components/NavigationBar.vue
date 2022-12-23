<template>
  <div class="container-fluid">
    <nav class="navbar navbar-light navbar-expand-md bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">News Application</a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item home">
          <a class="nav-link active" aria-current="page" href="#" id="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Recently Visited</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>

#home{
  border-right: 2px rgb(109, 108, 108) solid;
}

.navbar a .nav-brand{
  color: #A555EC;
}

</style>