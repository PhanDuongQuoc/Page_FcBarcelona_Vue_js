<template>

  <div class="col-md-4 mb-4" style="width: 150px;  margin-left: 35px;   box-shadow: 0 8px 16px #031b4a !important;border-radius: 8px;margin-top: 20px; " >
    <div
      class="card shadow-sm player-card border-0"

      style="cursor: pointer; transition: transform 0.2s"
    >
      <div class="position-relative">
        <img
          :src="story.image"
          :alt="story.name"
          class="card-img img-fluid w-100"
          style="height: 250px; object-fit: contain;"
        />

        <div
          class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1"
          style="font-size: 0.8rem; opacity: 0.85; background-color: #880000 !important; color: black;"
        >
          {{ story.status }}
        </div>

        <div
          class="position-absolute bottom-0 w-100 text-center text-white p-2"
          style="background: rgba(0, 0, 0, 0.5)"
        >
          <h9 class="mb-1">{{ story.name }}</h9>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'StoryCard',
  props: {
    story: Object
  }
}
</script>

<style scoped>
  
  .position-absolute {
    background-color: #880000 !important;
  }
  .player-card {
    height: 100%;
    overflow: hidden;
  }

  .player-card:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 16px #031b4a !important;
  }

  .card-img {
    display: block;
    max-height: 100%;
  }
</style>