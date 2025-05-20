<template>
  <div class="col-lg-4 col-md-12 mb-4 new-card" style="border-radius: 8px; margin-left: 5px;width: 500px;" >
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img :src="newsItem.image"
            class="w-100" style="height: 300px;" />
          <a href="#!" style="text-decoration: none;">
            <div class="mask" style="background-color: #031b4a">
                <div class="d-flex justify-content-start align-items-start h-100">
                    <h9  class="mb-1 text-decoration-none">{{ newsItem.title }}</h9>
                </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
            </div>
          </a>
        </div>
      </div>
</template>
<script>
    export default{
        name:'AppNew',
        props:{
            newsItem:Object
        }
    }
</script>
<style scoped>
.new-card:hover{
    transform: scale(1.03);
    box-shadow: 0 8px 16px #880000 !important;
}
.mb-1{
    text-decoration: none !important;
    color: white;
    margin-left: 20px;
}
</style>