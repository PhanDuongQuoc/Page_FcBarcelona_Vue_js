<template>
  <div class="col-md-4 col-sm-6 mb-4 team-card" style="width: 400px;">
    <div class="card h-100 shadow-sm border-0">
      <img :src="photoItem.image" class="card-img-top" :alt="photoItem.title">
      <div class="card-body">
        <h5 class="card-title text-uppercase" style="color:#031b4a;">
          <i class="bi bi-camera-fill me-2 text-primary"></i>{{ photoItem.title }}
        </h5>
        <div class="d-flex justify-content-between mt-3 align-items-center">
          <span class="badge bg-primary" style="background-color: #880000 !important;">
            <i class="bi bi-people-fill me-1"></i>{{ photoItem.category }}
          </span>
          <small class="text-muted">
            <i class="bi bi-calendar3 me-1"></i>{{ photoItem.date }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPhotocard',
  props: {
    photoItem:  Object,
    
  }
}
</script>

<style scoped>
.card-title {
  font-weight: bold;
}
.card-img-top {
  object-fit: cover;
  height: 200px;
}

.team-card:hover{
    transform: scale(1.03);
    box-shadow: 0 8px 16px #031b4a !important;
}
</style>
