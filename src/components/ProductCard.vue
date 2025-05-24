<template>
      <div class="col-lg-4 col-md-12 mb-4 product-card" style="border-radius: 8px; width: 470px;margin-left: auto;margin-right: auto;" >
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded" >
          <img :src="product.image"
            class="w-100" style="height: 220px;object-fit: cover;" />
          <a href="#!">
            <div class="mask" style="background-color: #031b4a">
              <div class="d-flex justify-content-start align-items-start h-100" >
                <h5><span class="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark" 
                    style="background-color: #880000 !important; color: white !important">{{ product.price }}</span></h5>
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
    name:'AppProductCard',
   props:{
     product:Object
   }
}
</script>
<style scoped>
.product-card:hover{
    transform: scale(1.03);
    box-shadow: 0 8px 16px #880000 !important;
}
</style>