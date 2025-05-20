<template>
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded " style="width:470px; margin-left: auto;margin-right: auto;margin-bottom: 20px;">
          <img :src="newsItem.image"
            class="w-100" style="height: 300px; width: 100%;" />
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
.bg-image:hover{
    transform: scale(1.03);
    box-shadow: 0 8px 16px #880000 !important;
}
.mb-1{
    text-decoration: none !important;
    color: white;
    margin-left: 20px;
}
</style>