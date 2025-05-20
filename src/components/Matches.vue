<template>
  <div class="container-fluid matches-section" style="width: 500px;">
    <div class="row g-4">
      <div class="">
        <div class="card match-card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="team d-flex align-items-center">
                <img :src="Matches.imagehometeam" alt="Real Madrid" class="team-logo me-2" />
                <span>{{ Matches.hometeam }}</span>
              </div>
              <div class="score">4 - 3</div>
              <div class="team d-flex align-items-center">
                <img :src="Matches.imageawayteam" alt="FC Barcelona" class="team-logo me-2" />
                <span>>{{ Matches.awayteam }}</span>
              </div>
            </div>
            <p class="text-muted mb-0">{{Matches.timematch}}</p>
            <p class="text-muted">>{{ Matches.tournament }}</p>
            <button class="btn btn-outline-primary btn-sm w-100">{{ Matches.stadium }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchSchedule",
  props:{
    Matches:Object
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.matches-section {
  padding: 20px;
  background-color: #f8f9fa;

}

.matches-section:hover{
    transform: scale(1.1);
  box-shadow: 0 8px 16px #e9e9e9 !important;
}



.match-card {
  border: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.match-card:hover {
  transform: translateY(-5px);
}

.next-match .card-header {
  font-size: 0.9rem;
  font-weight: bold;
}

.sponsor {
  background-color: #fff;
  color: #e63946;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.8rem;
}

.team-logo {
  width: 40px;
  height: 40px;
}

.score {
  font-size: 1.2rem;
  font-weight: bold;
}

.btn-outline-primary {
  border-color: #1d3557;
  color: #1d3557;
}

.btn-outline-primary:hover {
  background-color: #1d3557;
  color: white;
}

.btn-warning {
  background-color: #f4a261;
  border: none;
  color: white;
}

.btn-warning:hover {
  background-color: #e76f51;
}
</style>