<template>
      <div class="container-fluid matches-section" style="margin-top: 20px;">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h1 class="text-uppercase fw-bold">Barça First Team Matches</h1>
          <button class="btn btn-outline-primary btn-sm d-flex align-items-center">
            <i class="bi bi-calendar me-2"></i> Sync schedules to calendar
          </button>
        </div>

        <div class="countdown mb-4">
          <h5 class="text-uppercase">Next Match</h5>
          <div class="d-flex justify-content-center">
            <div class="time-box mx-2">
              <span class="time">{{ countdown.days }}</span>
              <small>Days</small>
            </div>
            <div class="time-box mx-2">
              <span class="time">{{ countdown.hours }}</span>
              <small>Hours</small>
            </div>
            <div class="time-box mx-2">
              <span class="time">{{ countdown.minutes }}</span>
              <small>Mins</small>
            </div>
            <div class="time-box mx-2">
              <span class="time">{{ countdown.seconds }}</span>
              <small>Secs</small>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 20px;"></div>
</template>
<script>
export default{
    name:"AppTimeMaches",
    props:{
        countdown:Number
    }    
}
</script>
<style scoped>
    .btn-outline-primary{
        background-color: #1d3557 !important;
        color: white !important;
        border: 1px solid #1d3557 !important;    
    }

    .btn-outline-primary:hover{
        background-color: white !important;
        color:  #1d3557 !important;
        border: 1px solid #1d3557;    
    }

    .countdown {
    text-align: center;
    background-color: #880000;
    color: white;
    padding: 10px;
    border-radius: 5px;
    }

    .time-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .time {
    font-size: 1.5rem;
    font-weight: bold;
    }
    h1 {
    font-size: 1.5rem;
    color: #1d3557;
    }

    .time-box small {
    font-size: 0.8rem;
    }

</style>