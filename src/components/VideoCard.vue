<template>
  <div class="col-lg-4 col-md-12 mb-4 new-card" style="width: 500px; margin-left: 5px;border-radius: 8px;">
    <div class="bg-video hover-zoom ripple shadow-1-strong rounded">
      <div class="video-wrapper">
        <iframe
          class="w-100"
          height="300"
          :src="embedUrl"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <a href="#!" style="text-decoration: none;">
        <div class="mask" style="background-color: rgba(3, 27, 74, 0.4);">
          <div class="d-flex justify-content-start align-items-start h-100" style="background-color: #880000 !important;">
            <h5  class="mb-1 text-white video-title">{{ videoItem.title }}</h5>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppVideo",
  props: {
    videoItem: Object,
  },
  computed: {
    embedUrl() {
      const videoId = this.videoItem.videoSrc?.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
    },
  },
};
</script>

<style scoped>
.new-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 16px #880000 !important;
}

.video-title {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 10px;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.video-wrapper iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
