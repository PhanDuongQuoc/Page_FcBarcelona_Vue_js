<template>
  <div id="app">
     <PetalFall />
    <Navbar />
    <router-view />
    <Footer />
    <MusicButton/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
import PetalFall from "@/components/PetalFall.vue";
import MusicButton from './components/MusicButton.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    PetalFall,
    MusicButton
  }
}
</script>

<style>
body {
  overflow-x: hidden;
  margin: 0;
  font-family: Arial, sans-serif !important;
}
#app{
  overflow: hidden;
}

</style>

