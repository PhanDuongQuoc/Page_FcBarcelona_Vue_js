<template>
   <div class="row justify-content-center mb-3"  >
      <div class="col-md-12 col-xl-10" >
        <div class="card shadow-0 border rounded-3" style="background-color: #eee;">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img :src="awardItem.image"
                    class="w-100" style="border-radius: 20px;"/>
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h3 style="font-weight: bold;color: #031b4a;">{{awardItem.title}}</h3>
                <p class="mb-4 mb-md-0">
                  {{ awardItem.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default{
        name:'AppAwardsCard',
        props:{
            awardItem:Object
        }
    }
</script>

<style scoped>
.card:hover{
     transform: scale(1.03);
    box-shadow: 0 8px 16px #031b4a !important;
}
</style>