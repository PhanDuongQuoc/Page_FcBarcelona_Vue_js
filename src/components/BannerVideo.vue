<template>
  <div class="banner-video-container" style="height: 400px;">
    <video
      class="video-background"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="videobanner.videoSrc" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
     </video>

    <div class="video-overlay">
      <h1 class="video-title text-warning">{{ videobanner.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerVideo",
  props: {
    videobanner:String
  },
};
</script>

<style scoped>
.banner-video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.video-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}
</style>
