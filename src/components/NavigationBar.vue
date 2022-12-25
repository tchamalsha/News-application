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
          <router-link to="/" :style="{ textDecoration: 'none' }"><a class="nav-link" >Home</a></router-link>
        </li>
        <li class="nav-item home">
          <router-link to="/recently-visited" :style="{ textDecoration: 'none' }"><a class="nav-link" >Recently Visited</a></router-link>
        </li>
        
          <li class="nav-item" >
            <router-link to="/sources" :style="{ textDecoration: 'none' }"><a class="nav-link" >Sources</a></router-link>
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

.home{
  border-right: 2px rgb(109, 108, 108) solid;
}
a{
  border: none;
}
.nav-link {
  text-decoration: none !important;
}
.navbar a .nav-brand{
  color: #A555EC;
}

</style>