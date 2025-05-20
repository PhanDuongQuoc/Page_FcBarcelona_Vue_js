<template>
  <div class="flower-fall-container">
    <img
      v-for="(petal, index) in petals"
      :key="index"
      :src="petal.img"
      class="petal"
      :style="{
        left: petal.x + 'px',
        animationDuration: '5s', 
        animationDelay: petal.delay + 's',
        transform: 'rotate(' + petal.rotation + 'deg)',
        filter: 'contrast(1.5) brightness(1.2)' 
      }"
      alt="petal"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      petals: [],
      petalImgs: [
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
        "https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fc-barcelona-football-ball-football-png-image_10274366.png",
        "https://png.pngtree.com/png-clipart/20220727/ourmid/pngtree-flag-of-barcelona-footbalp-club-mockup-png-image_6075765.png",
        "https://pngfre.com/wp-content/uploads/nike-logo-29-1024x1024.png"
      ]
    };
  },
  mounted() {
    this.generatePetals();
  },
  methods: {
    generatePetals() {
      const count = 40;
      const width = window.innerWidth;
      this.petals = [];

      for (let i = 0; i < count; i++) {
        const randomImgIndex = Math.floor(Math.random() * this.petalImgs.length);
        this.petals.push({
          x: Math.random() * width,
          delay: Math.random() * 5,
          rotation: Math.random() * 360,
          img: this.petalImgs[randomImgIndex]
        });
      }
    }
  }
};
</script>

<style scoped>
.flower-fall-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
}

.petal {
  position: absolute;
  top: -50px;
  width: 50px;
  height: 50px;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>
