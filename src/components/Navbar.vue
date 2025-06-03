<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div class="container">
        <div class="logo-fc">
          <a href="">
            <img src="../assets/fcbarcelona.png" style="width: 50px; margin-right: 20px;" alt="">
          </a>
        </div>
        <a class="navbar-brand fw-bold fs-4 text-warning" href="#">
          Fan Club FC Barcelona In Viet Nam
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="/player">Players</a></li>
            <li class="nav-item"><a class="nav-link" href="/team">Teams</a></li>
            <li class="nav-item"><a class="nav-link" href="/store">Store</a></li>
            <li class="nav-item"><a class="nav-link" href="/new">News</a></li>
            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
          </ul>

          <form class="d-flex me-3 " role="search">
            <input
              class="form-control form-control-sm me-2"
              type="search"
              placeholder="Search players..."
              aria-label="Search"
            />
            <button class="btn btn-outline-light btn-sm text-warning border-0" type="submit">
              <i class="fas fa-search"></i> 
            </button>
          </form>

          <div class="d-flex align-items-center gap-2 ">
            <a href="#" class="btn btn-outline-light btn-sm text-warning border-0" title="Login">
              <i class="fas fa-sign-in-alt"></i> 
            </a>
            <a href="#" class="btn btn-outline-light btn-sm text-warning border-0" title="Register">
              <i class="fas fa-user-plus"></i> 
            </a>
            <a href="#" class="btn btn-outline-light btn-sm text-warning border-0" title="Cart">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>

        </div>
      </div>
    </nav>
    <AppBanner :banner="banners" style="margin-top: 66px; height: 600px;"/>


  </div>
</template>

<script>
import AppBanner from '../components/Banner/Banner.vue'
export default {
  name: 'AppNavbar',
  components:{
    AppBanner
  },
  data(){
    return{
      banners:{
       imagebg:"https://www.fcbarcelona.com/photo-resources/2025/05/16/8c5d4a16-c8c2-4053-9676-a7c0d517e55b/JUCG1665.jpg?width=3200&height=1400",
       imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png", title:"Fan Club FC Barcelona In Viet Nam - FC Barcelona", content:"Quickly and accurately update player information, performance, and achievements."}
    }
  }
};
</script>

<style scoped>
.bg-dark{
  background-color: #031b4a !important;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}




</style>
