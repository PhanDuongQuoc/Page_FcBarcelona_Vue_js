<template>

  <div class="col-md-4 mb-4" style="width: 300px; margin-left: 50px; margin-right: 20px;   box-shadow: 0 8px 16px #031b4a !important;border-radius: 8px;margin-top: 20px; " >
    <div
      class="card shadow-sm player-card border-0"
      @click="$router.push(`/player/${player.id}`)"
      style="cursor: pointer; transition: transform 0.2s"
    >
      <div class="position-relative">
        <img
          :src="player.image"
          :alt="player.name"
          class="card-img img-fluid w-100"
          style="height: 250px; object-fit: contain;"
        />

        <div
          class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1"
          style="font-size: 0.8rem; opacity: 0.85"
        >
          {{ player.position }}
        </div>

        <div
          class="position-absolute bottom-0 w-100 text-center text-white p-2"
          style="background: rgba(0, 0, 0, 0.5)"
        >
          <h5 class="mb-1">{{ player.name }}</h5>
          <small>Position: {{ player.position }}</small>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'PlayerCard',
  props: {
    player: Object
  }
}
</script>

<style scoped>
  
  .position-absolute {
    background-color: #031b4a !important;
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

