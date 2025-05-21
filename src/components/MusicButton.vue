<template>
  <div class="music-float-btn d-flex align-items-center">
    <button
      class="btn custom-music-btn rounded-circle shadow-lg d-flex align-items-center justify-content-center position-relative"
      @click="toggleMusic"
      aria-label="Toggle Music"
    >
      <img src="@/assets/fcbarcelona.png" alt="Logo" class="logo-inside-btn" />
      
      <i
        :class="isPlaying ? 'bi bi-volume-up-fill' : 'bi bi-volume-mute-fill'"
        class="position-absolute"
        style="color: white; font-size: 22px;"
      ></i>
    </button>

    <span class="play-music-text ms-3 text-warning" @click="toggleMusic" style="cursor: pointer;">
      {{ isPlaying ? 'Playing...' : 'Music In Barcelona' }}
    </span>

    <audio ref="audio" loop :src="musicSrc" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      musicSrc: require('@/assets/football.mp3')
    };
  },
    methods: {
        toggleMusic() {
            const audio = this.$refs.audio;
            this.isPlaying = !this.isPlaying;
            if (this.isPlaying) {
            audio.play();
            } else {
            audio.pause();
            }
        },
        handleVisibilityChange() {
            if (document.visibilityState === 'visible' && this.isPlaying) {
            this.$refs.audio.play();
            }
        }
        },
        mounted() {
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        },
        beforeUnmount() {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        }
    };
</script>

<style scoped>
.music-float-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1050;
}

.custom-music-btn {
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
  padding: 0;
  animation: floatButton 2s infinite ease-in-out;
  position: relative;
  overflow: hidden;
}

.logo-inside-btn {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  filter: brightness(1.2);
  pointer-events: none;
}

.play-music-text {
  font-weight: 600;
  font-size: 18px;
  user-select: none;
  transition: color 0.3s ease;
}

.play-music-text:hover {
  color: #880000; 
  text-decoration: none;
}

@keyframes floatButton {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}
</style>
