<template>
  <div>
    <h1>Thông tin chi tiết cầu thủ</h1>
    <p>Tên: {{ player.name }}</p>
    <p>Vị trí: {{ player.position }}</p>
  </div>
</template>

<script>
export default {
  name: "PlayerDetail",
  data() {
    return {
      player: {}
    }
  },
  mounted() {
    const id = this.$route.params.id
    const fakePlayers = [
      { id: "1", name: 'Cristiano Ronaldo', position: 'Tiền đạo' },
      { id: "2", name: 'Lionel Messi', position: 'Tiền đạo' }
    ]
    this.player = fakePlayers.find(p => p.id === id)
  }
}
</script>
