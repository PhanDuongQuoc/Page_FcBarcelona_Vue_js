<template>
    <div class="body-player" style="margin-top: 20px;margin-bottom: 20px;">
        <div class="container container-banner text-warning py-4">
            <div class="row align-items-center justify-content-center text-center">
                <div class="col-auto">
                    <img class="logo" src="../assets/fcbarcelona.png" alt="FCB Logo" style="width: 50px;">
                </div>
                <div class="col-auto">
                    <h1 class="fw-bold text-uppercase mb-0" style="font-size: clamp(24px, 5vw, 40px);">
                        FC Barcelona - First Team
                    </h1>
                </div>
            </div>
        </div>
        <div class="container-player">

        </div>
    </div>
</template>
<script>
export default{
    name:'AppPlayer',
    components:{

    }
}
</script>
<style scoped>
.container{
     margin-top: 20px;
     background-color: #031b4a;
     border: 1px solid #031b4a;
     border-radius: 50px;
        transform: scale(1.03);
    box-shadow: 0 8px 16px #434141 !important;
}

.container-player{
    margin-top: 50px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 20px ;
    height: 900px;
    transform: scale(1.03);
    box-shadow: 0 8px 16px #434141 !important;
}
</style>