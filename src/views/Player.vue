<template>
    <div class="body-player">
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
        <div class="container-player" style="margin-top: 150px;margin-bottom: 100px;" >
            <div class="title" style="margin-top: 20px;" >
                <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
                        <h1 class="text-uppercase fw-bold">FC Barcelona First Team</h1>
                </div>
            </div>
            <div class="section-sub-navigation  mt-5">
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <a href="#Goalkeepers" class="section-sub-navigation__item">Goalkeepers</a>
                    <a href="#Defenders" class="section-sub-navigation__item">Defenders</a>
                    <a href="#Midfielders" class="section-sub-navigation__item">Midfielders</a>
                    <a href="#Forwards" class="section-sub-navigation__item">Forwards</a>
                    <a href="#Coaching" class="section-sub-navigation__item">Coaching Staff</a>
                </div>
            </div>



            <div style="width: 80%;  margin-left: auto;margin-right: auto;">
                <div class="team-list js-team-list" style="margin-top: 30px;">
                    <div class="team-list__section">
                        <div class=" mb-3" style="text-align: center;">
                                <h1 id="Goalkeepers" class="text-uppercase fw-bold">Goalkeepers</h1>
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
                                <h1 id="Defenders" class="text-uppercase fw-bold">Defenders</h1>
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
                                <h1 id="Midfielders" class="text-uppercase fw-bold">Midfielders</h1>
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
                                <h1 id="Forwards" class="text-uppercase fw-bold">Forwards</h1>
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
                                <h1 id="Coaching" class="text-uppercase fw-bold">Coaching Staff</h1>
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
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/d650999a-797a-4326-b0fe-cc5e1d8a9322/06-Gavi-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 2, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/350837be-717b-4b17-9e66-ef201caac7ae/08-Pedri-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 3,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/18/7ae45187-32b6-42e7-a0b6-708a3bcd7b76/14-Pablo_Torre-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 4,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/caa869d5-91f6-4d7e-9b60-8eba98ac60f4/16-Fermin-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 5,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/1c3026e0-0aa9-4c20-ae49-714c73f68685/17-Casado-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 6,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/0d46bf0d-5149-4908-9187-35813907233d/20-Olmo-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 7,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/2b17db58-6bb5-40fb-b978-65b2fea50db1/21-De_Jong-M.jpg?width=940&height=940', position: 'Striker' },

            ],

            Forwards: [
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/673eb7cc-5a07-4b94-a6d1-310fc7ca9248/07-Ferran_Torres-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 2, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/b666059e-1d0a-493f-a7e5-dd7a258d8165/09-Lewandowski-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 3,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/6694bfce-d682-4af7-bf06-151d747553a7/10-Ansu_Fati-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 4,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/f90227fc-4cca-4245-8d96-d1c14f5dcc9a/11-Raphinha-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 5,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/6d27c014-fc2f-4f1b-a2da-9ffcdb27def1/18-Pau_Victor-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 6,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/0d46bf0d-5149-4908-9187-35813907233d/20-Olmo-M.jpg?width=940&height=940', position: 'Striker' },
                { id: 7,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/c73a4770-0bf1-452f-9ebd-b0f8c33412a0/19-Lamine-M.jpg?width=940&height=940', position: 'Striker' },

            ],

             Coachings: [
                { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/242919cd-91d1-4ad9-9f7e-3c9d26cdd4d7/00-Hansi_Flick-M.jpg?width=940&height=940', position: 'Striker' },
              
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
.body-player {
    background-color: #880000;
  
    padding-top: 10px;
    padding-bottom: 10px;
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
    width: 150px;
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