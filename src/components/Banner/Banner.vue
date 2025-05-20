<template>
      <div class="banner text-white text-center">
        <img :src="banner.imagebg" alt="Banner" class="banner-img">
        <div class="container container-banner text-warning">
          <img class="logo" :src="banner.imagelogo"  style="width: 80px;" alt="">
           <h1 class="display-4 fw-bold">{{banner.title}}</h1>
          <p class="lead">{{banner.content}}</p>
        </div>
      </div>

</template>
<script>
    export default{
        name:'AppBanner',
        props:{
            banner:String
            
        }
    }
</script>
<style scoped>
 .banner {
    position: relative;
    height: 450px;
    overflow: hidden;
  }

  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%); 
  }

  .container-banner {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(88, 85, 85, 0.5); 
    padding: 2rem;
    border-radius: 0.5rem;
    color: white;
    max-width: 90%;
    text-align: center;
  }
  .logo:hover{
     transform: scale(1.3);
    box-shadow: 0 8px 16px #474748 !important;
  }
</style>