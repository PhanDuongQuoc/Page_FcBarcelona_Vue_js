<template>
    <div class="body-player" style="margin-top: 20px;margin-bottom: 20px;">
        <div class="container container-banner text-warning py-4">
            <div class="row align-items-center justify-content-center text-center">
                <div class="col-auto">
                    <img class="logo" src="../assets/fcbarcelona.png" alt="FCB Logo" style="width: 50px;">
                </div>
                <div class="col-auto">
                    <h1 class="fw-bold text-uppercase mb-0 text-warning" style="font-size: clamp(24px, 5vw, 40px);">
                        FC Barcelona - First Team
                    </h1>
                </div>
            </div>
        </div>
        <div class="container-player" style="margin-top: 100px;" >
            <div class="title" style="margin-top: 20px;" >
                <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
                        <h1 class="text-uppercase fw-bold">FC Barcelona First Team</h1>
                </div>
            </div>
            <div class="section-sub-navigation" style="margin-top: 100px;">
                <a class="section-sub-navigation__item">Goalkeepers</a>
                <a class="section-sub-navigation__item">Defenders</a>
                <a class="section-sub-navigation__item">Midfielders</a>
                <a class="section-sub-navigation__item">Forwards</a>
                <a class="section-sub-navigation__item">Coaching Staff</a>
            </div>


            <div style="width: 80%;  margin-left: auto;margin-right: auto;">
                           <div class="team-list js-team-list" style="margin-top: 30px;">
                <div class="team-list__section">
                    <div class=" mb-3" style="text-align: center;">
                            <h1 class="text-uppercase fw-bold">Goalkeepers</h1>
                    </div>
                    <div class="team-list__list" style="display: flex; flex-wrap: wrap;">
                        <PlayerCard v-for="player in Goalkeepers" :key="player" :player="player"
                        />
                    </div>
                </div>
            </div>


              <div class="team-list js-team-list" style="margin-top: 30px;">
                <div class="team-list__section">
                    <div class=" mb-3" style="text-align: center;">
                            <h1 class="text-uppercase fw-bold">Defenders</h1>
                    </div>
                    <div class="team-list__list" style="display: flex; flex-wrap: wrap;">
                        <PlayerCard v-for="player in Defenders" :key="player" :player="player"
                         />
                    </div>
                </div>
            </div>


              <div class="team-list js-team-list" style="margin-top: 30px;">
                <div class="team-list__section">
                    <div class=" mb-3" style="text-align: center;">
                            <h1 class="text-uppercase fw-bold">Midfielders</h1>
                    </div>
                    <div class="team-list__list" style="display: flex; flex-wrap: wrap;">
                        <PlayerCard v-for="player in Midfielders" :key="player" :player="player"
                         />
                    </div>
                </div>
            </div>


              <div class="team-list js-team-list" style="margin-top: 30px;">
                <div class="team-list__section">
                    <div class=" mb-3" style="text-align: center;">
                            <h1 class="text-uppercase fw-bold">Forwards</h1>
                    </div>
                    <div class="team-list__list" style="display: flex; flex-wrap: wrap;">
                        <PlayerCard v-for="player in Forwards" :key="player" :player="player"
                         />
                    </div>
                </div>
            </div>

              <div class="team-list js-team-list" style="margin-top: 30px;">
                <div class="team-list__section">
                    <div class=" mb-3" style="text-align: center;">
                            <h1 class="text-uppercase fw-bold">Coaching Staff</h1>
                    </div>
                    <div class="team-list__list" style="display: flex; flex-wrap: wrap;">
                        <PlayerCard v-for="player in Coachings" :key="player" :player="player"
                        />
                    </div>
                </div>
            </div>
            </div>
 

        </div>
    </div>
</template> 
<script>
import PlayerCard from "@/components/PlayerCard.vue"
export default{
    name:'AppPlayer',
    components:{
        PlayerCard
    },
    data(){
        return{
            Goalkeepers: [
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/f6d023f4-d247-414a-9bc0-3feed0d8c148/01-Ter_Stegen-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 2, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/c94496a3-0d58-48a5-b61d-7412d99f0a7a/13-Inaki_Pena-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 3,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/14/dd630dfe-4d4d-4e09-a6f6-4e176382f5aa/25-Szczesny-M.jpg?width=940&height=940', position: 'Striker' },
    
            ],

            Defenders: [
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/77bc3c02-a6ac-43ea-b5aa-3ec8a9a26289/02-Cubarsi-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 2, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/dee2330a-0f74-45a4-8757-fc12dd7eec03/03-Balde-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 3,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/095e289a-3615-4689-84b4-5b84c3011347/04-Araujo-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 4,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/090c9e0c-4446-44c0-ba4b-995dd818cb24/05-Martinez-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 5,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/a7d1b4c0-45f0-496d-89e9-576a49f5cdb0/15-Christensen-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 6,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/34c0073f-7235-4776-a508-8fccc377f57b/23-Kounde-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 7,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/50bc6121-4afa-4b62-bd10-d4dcb9bfcfb4/24-Eric_Garcia-M.jpg?width=940&height=940', position: 'Striker' },

    
            ],

              Midfielders: [
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/f6d023f4-d247-414a-9bc0-3feed0d8c148/01-Ter_Stegen-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 2, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/c94496a3-0d58-48a5-b61d-7412d99f0a7a/13-Inaki_Pena-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 3,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/14/dd630dfe-4d4d-4e09-a6f6-4e176382f5aa/25-Szczesny-M.jpg?width=940&height=940', position: 'Striker' },
    
            ],

            Forwards: [
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/f6d023f4-d247-414a-9bc0-3feed0d8c148/01-Ter_Stegen-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 2, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/c94496a3-0d58-48a5-b61d-7412d99f0a7a/13-Inaki_Pena-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 3,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/14/dd630dfe-4d4d-4e09-a6f6-4e176382f5aa/25-Szczesny-M.jpg?width=940&height=940', position: 'Striker' },
    
            ],

             Coachings: [
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/f6d023f4-d247-414a-9bc0-3feed0d8c148/01-Ter_Stegen-M.jpg?width=940&height=940', position: 'Striker' },
              
            ],
        }
    }
}
</script>
<style scoped>
  h1 {
        font-size: 1.5rem;
        color: #1d3557;
        text-transform: uppercase;
    }
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
    transform: scale(1.03);
    box-shadow: 0 8px 16px #434141 !important;
}

.section-sub-navigation{
    
    text-align: center;
}
.section-sub-navigation__item{
    width: 200px;
    padding: 8px;
    border: 1px solid #cdcaca;
    border-radius: 5px;
    background-color: #031b4a;
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin-left: 15px;
    color: white;
    

}

.section-sub-navigation__item:hover{
    background-color: #eee;
    color: #031b4a;
}
</style>