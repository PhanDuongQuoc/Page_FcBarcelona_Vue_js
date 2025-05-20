<template>
  <div class="home-page">
    <div class="play-matches" style="margin-bottom: 50px; margin-top: 50px;">
      <AppTimeMatches :countdown="countdownhome"/>
      <div class="Maches" style="margin-top: 20px;margin-bottom: 20px;">
        <PlayMatches
            v-for="matcheshome in matcheshomes"
              :key="matcheshome.id"
              :Matches="matcheshome"
          />
        </div>
        <div class="text-center my-4">
            <button class="btn btn-warning btn-lg rounded-pill shadow px-5">
              <i class="fas fa-futbol me-2"></i> Watch Next
            </button>
          </div>
    </div>

    <div class="banner-1" style="margin-top: 20px;">
      <Banner :banner="banners" />
    </div>
    
    <div class="story" style="margin-top: 20px; margin-top: 50px;">
      <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
            <h1 class="text-uppercase fw-bold">Barça Story</h1>
      </div>
      <div class="story-card">
        <StoryCard v-for="story in storys" :key="story.id" :story="story" />
      </div>
    </div>


    <div class="ticket" style="margin-top: 20px; margin-top: 50px;">
       <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
            <h1 class="text-uppercase fw-bold">Barça Tickets</h1>
      </div>
      <div class="ticket-card">
        <TicketCard v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
      </div>
    </div>


    <div class="banner-2" style="margin-top: 20px;">
      <Banner :banner="banners_1" />
    </div>


    <div class="player" style="margin-top: 50px; margin-bottom: 20px;">
      <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
            <h1 class="text-uppercase fw-bold">Barça Player</h1>
      </div>
      <div class="player-list" style="margin-top: 20px;">
        <PlayerCard
          v-for="player in players"
          :key="player.id"
          :player="player"
        />
      </div>
    </div>
  </div>



   <div class="product" style="margin-top: 50px;">
    <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
            <h1 class="text-uppercase fw-bold">Barça Store</h1>
    </div>
    <div class="banner-3" style="margin-top: 20px; margin-bottom: 20px;">
          <Banner :banner="banners_2" />
    </div>
    <div class="product-card">
      <div class="row">
          <ProductCard v-for="pro in products" :key="pro.id" :product="pro"/>
          <div class="text-center my-4">
            <button class="btn btn-warning btn-lg rounded-pill shadow px-5">
              <i class="fas fa-box-open  me-2"></i> Watch Next
            </button>
          </div>
      </div>
    </div>
   </div>


    <div class="video" style="margin-top: 50px;">
      <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
              <h1 class="text-uppercase fw-bold">Barça Videos</h1>
      </div>
      <div class="videos" style="margin-top: 20px; margin-bottom: 20px;">
            <BannerVideo :videobanner="video" />
      </div>
      <div class="new-card">
        <div class="row">
          <AppVideoCard v-for="v in videolist" :key="v.id" :videoItem="v"/>
          <div class="text-center my-4">
            <button class="btn btn-warning btn-lg rounded-pill shadow px-5">
              <i class="fas fa-play-circle me-2"></i> Watch Next
            </button>
          </div>

        </div>
      </div>
   </div>


    <div class="new" style="margin-top: 50px;">
      <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
              <h1 class="text-uppercase fw-bold">Barça News</h1>
      </div>
      <div class="banner-3" style="margin-top: 20px; margin-bottom: 20px;">
            <Banner :banner="banners_3" />
      </div>
      <div class="new-card">
        <div class="row">
          <NewCard v-for="ne in newlist" :key="ne.id" :newsItem="ne"/>
          <div class="text-center my-4">
            <button class="btn btn-warning btn-lg rounded-pill shadow px-5">
              <i class="fas fa-newspaper  me-2"></i> Watch Next
            </button>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import PlayerCard from "@/components/PlayerCard.vue"
import PlayMatches  from "@/components/Matches.vue";
import AppTimeMatches from "@/components/TimeMatches.vue";
import StoryCard from "@/components/StoryCard.vue";
import Banner from "@/components/Banner/Banner.vue";
import TicketCard from "@/components/TicketCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import NewCard from "@/components/NewCard.vue";
import BannerVideo from "@/components/BannerVideo.vue";
import AppVideoCard from "@/components/VideoCard.vue";


export default {
  name: 'AppHome',
  components: { PlayerCard,PlayMatches,AppTimeMatches,StoryCard,Banner,TicketCard,ProductCard,NewCard,BannerVideo,AppVideoCard},
  data() {
    return {
      players: [
        { id: 1, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/c73a4770-0bf1-452f-9ebd-b0f8c33412a0/19-Lamine-M.jpg?width=1680&height=1050', position: 'Striker' },
        { id: 2, name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/caa869d5-91f6-4d7e-9b60-8eba98ac60f4/16-Fermin-M.jpg?width=1680&height=1050', position: 'Striker' },
        { id: 3,  name: 'Name player', image: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/2b17db58-6bb5-40fb-b978-65b2fea50db1/21-De_Jong-M.jpg?width=1680&height=1050', position: 'Striker' },
        { id: 4,  name: 'Name player', image:'https://www.fcbarcelona.com/photo-resources/2024/10/13/f90227fc-4cca-4245-8d96-d1c14f5dcc9a/11-Raphinha-M.jpg?width=1680&height=1050', position: 'Striker' },
        { id: 5,  name: 'Name player', image:'https://www.fcbarcelona.com/photo-resources/2024/10/13/34c0073f-7235-4776-a508-8fccc377f57b/23-Kounde-M.jpg?width=1680&height=1050', position: 'Striker' },
        

      ],
      products:[
        {id:1, name:"",
        image:"https://store.fcbarcelona.com/cdn/shop/collections/Cabecera-Banner_2500x880_1_-kit_d_15238cbe-2aa2-48c6-87f4-29628381b4b4.jpg?v=1721280024",
        price:"$200"},
        {id:2, name:"",
        image:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F11%2Fnike-fc-barcelona-20-anniversary-01.jpg?q=75&w=800&cbr=1&fit=max",
        price:"$200"},
        {id:3, name:"",
        image:"https://storage.googleapis.com/pr-newsroom-wp/1/2023/10/SPOTIFY-X-FC-BARCELONA-X-ROLLING-STONES-8-1024x683.jpg",
        price:"$200"},
        {id:4, name:"",
        image:"https://www.fcbarcelona.com/photo-resources/2023/10/19/42db2d6e-f9cc-4ffd-9634-7475c39aa291/Spotify-031.jpg?width=1200&height=750",
        price:"$200"},
        {id:5, name:"",
        image:"https://www.fcbarcelona.com/photo-resources/2024/10/16/674547e7-5d23-4a5b-bf97-4e44b51b2daa/FCB-x-Spotify-x-Coldplay.jpg?width=624&height=368",
        price:"$200"},
        {id:6, name:"",
        image:"https://i0.wp.com/footballfashion.org/wordpress/wp-content/uploads/2023/10/fc-barcelona-2023-2024-rolling-stones-el-clasico-nike-home-jersey-kit-1.jpg",
        price:"$200"}
      ],

      videolist:[{
          id: 1,
          videoSrc: "https://www.youtube.com/watch?v=7e_afFQL8vU",
          title: "",
        },
        {
           id: 2,
          videoSrc: "https://www.youtube.com/watch?v=SF8Tnu1jidk",
          title: ""

        },
       {
           id: 3,
          videoSrc: "https://www.youtube.com/watch?v=R05gQ8Ats3Q",
          title: ""

        }],
      

      video:{id:1, videoSrc:require("@/assets/FcBarcelona.mp4"), title:"Welcome To Barcelona FC"},
      

      newlist: [
        {
          id: 1,
          title: "FC Barcelona Official Kit Collection",
          image: "https://www.fcbarcelona.com/photo-resources/2025/04/29/37a1787d-e647-4417-a6f5-97169cbfabb3/202504_Entradas_Final_UWCL_Web_Hero_3200x2000_02_CAT.jpg?width=640&height=400"
        },
        {
          id: 2,
          title: "Nike FC Barcelona 20th Anniversary Celebration",
          image: "https://www.fcbarcelona.com/photo-resources/2025/03/02/aa244555-a5e6-4c21-b946-ef97a1e02e01/mini_FCBARCELONA-MDvsRealSociedad_horizontal.png?width=1200&height=750"
        },
        {
          id: 3,
          title: "Spotify x FC Barcelona x Rolling Stones Collaboration",
          image: "https://www.fcbarcelona.com/photo-resources/2024/11/10/2b75bc9e-63b4-41b4-9482-9bce68b8302d/mini_3200X2000_MD06_Sociedad_ok.jpg?width=1200&height=750"
        },
        {
          id: 4,
          title: "FC Barcelona Spotify Partnership Event",
          image: "https://i.ytimg.com/vi/njnhMuL1tx0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC2kKU-an1pavKDEJhKeLAOyZTFXA"
        },
        {
          id: 5,
          title: "FC Barcelona x Spotify x Coldplay Special Edition",
          image: "https://bna.1cdn.vn/thumbs/1200x630/2025/04/25/image(2).png"
        },
        {
          id: 6,
          title: "FC Barcelona Rolling Stones El Clásico Kit",
          image: "https://i0.wp.com/footballfashion.org/wordpress/wp-content/uploads/2023/10/fc-barcelona-2023-2024-rolling-stones-el-clasico-nike-home-jersey-kit-1.jpg"
        }
      ],
      banners:{
        imagebg:"https://s.hs-data.com/picmon/3b/6ej9_9c6lYP_l.jpg",
        imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
          title:"Champion 2025 - FC Barcelona",
          content:"Quickly and accurately update player information, performance, and achievements."},

      banners_1:{
        imagebg:"https://barcainnovationhub.fcbarcelona.com/wp-content/uploads/2024/03/VO221021A64396.webp",
        imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
          title:"Welcome To VietNam - FC Barcelona",
          content:"Quickly and accurately update player information, performance, and achievements."},
  
      banners_2:{
        imagebg:"https://www.mapilife.com/wp-content/uploads/2019/07/fcb-store-mapilife_11zon-1024x683.webp",
        imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
          title:"Welcome to Barca Store - FC Barcelona",
          content:"Quickly and accurately update player information, performance, and achievements."},

      banners_3:{
        imagebg:"https://www.fcbarcelona.com/photo-resources/2025/04/26/e8c97963-2d6a-4026-bf4a-805dca713a2c/_GP20794.jpg?width=1200&height=525",
        imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
          title:"News Sport In The World- FC Barcelona",
          content:"Quickly and accurately update player information, performance, and achievements."},
  
  
      matcheshomes: [
            {
              id: 1,
              hometeam: "FC Barcelona",
              imagehometeam:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
              awayteam: "Real Madrid",
              imageawayteam:"https://upload.wikimedia.org/wikipedia/vi/thumb/c/c7/Logo_Real_Madrid.svg/140px-Logo_Real_Madrid.svg.png",
              timematch: "2025-05-17T20:00:00",
              tournament: "La Liga",
              stadium: "Camp Nou"
            },
            {
              id: 2,
              hometeam: "Manchester United",
              imagehometeam:"https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png",
              awayteam: "FC Barcelona",
              imageawayteam:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",             
              timematch: "2025-05-18T18:30:00",
              tournament: "Champion",
              stadium: "Old Trafford"
            },
            {
              id: 3,
              hometeam: "Juventus",
              imagehometeam:"https://www.topicfoot.fr/wp-content/uploads/2024/01/logo-seriea-juventus-fc.png",
              awayteam: "FC Barcelona",
              imageawayteam:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",             
              timematch: "2025-05-19T21:00:00",
              tournament: "Serie A",
              stadium: "Allianz Stadium"
            },
          
          ],

      tickets: [
        {
          id: 1,
          name: "League Champions Celebration",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/a6f118a3-ce00-73e2-c08f-3a19ec81973a/5eb0fbba-f0eb-48b5-87f4-20ad9c190b8b/9a02da24-0e36-dd50-e61d-3a19ec8c9860/thumbnail_small.jpeg"
        },
        {
          id: 2,
          name: "Victory Parade Highlights",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/339b2ed6-63a8-3a02-f42c-3a19eb0d607a/13dd60e0-d4c6-4f28-87a1-ff890bc84ed6/960aa70d-85db-3872-b799-3a19eb0de79f/thumbnail.webp"
        },
        {
          id: 3,
          name: "Training Session Insights",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/87c89609-c874-121e-8c0a-3a19ea9ad689/946191dd-c9e8-45c4-8e2e-445b98274200/164901dc-af26-94dc-1bbf-3a19ea9e6bc1/thumbnail_small.jpeg"
        },
        {
          id: 4,
          name: "Matchday Moments",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/pages/46a80d0b-8740-93fa-9769-3a197a967ba2/b9113397-18c7-9a99-e0e4-3a197a967ba2/image_thumbnail_webp.webp"
        },
        {
          id: 5,
          name: "Behind the Scenes",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/484b2db0-1c78-4ae0-b9d5-3a19e82b587a/2599b08f-6516-4124-b12e-061acfda7141/ad245770-d94a-b60a-f8e7-3a19e866e9df/thumbnail.webp"
        },

      ],
      storys: [
        {
          id: 1,
          name: "League Champions Celebration",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/a6f118a3-ce00-73e2-c08f-3a19ec81973a/5eb0fbba-f0eb-48b5-87f4-20ad9c190b8b/9a02da24-0e36-dd50-e61d-3a19ec8c9860/thumbnail_small.jpeg"
        },
        {
          id: 2,
          name: "Victory Parade Highlights",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/339b2ed6-63a8-3a02-f42c-3a19eb0d607a/13dd60e0-d4c6-4f28-87a1-ff890bc84ed6/960aa70d-85db-3872-b799-3a19eb0de79f/thumbnail.webp"
        },
        {
          id: 3,
          name: "Training Session Insights",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/87c89609-c874-121e-8c0a-3a19ea9ad689/946191dd-c9e8-45c4-8e2e-445b98274200/164901dc-af26-94dc-1bbf-3a19ea9e6bc1/thumbnail_small.jpeg"
        },
        {
          id: 4,
          name: "Matchday Moments",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/pages/46a80d0b-8740-93fa-9769-3a197a967ba2/b9113397-18c7-9a99-e0e4-3a197a967ba2/image_thumbnail_webp.webp"
        },
        {
          id: 5,
          name: "Behind the Scenes",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/484b2db0-1c78-4ae0-b9d5-3a19e82b587a/2599b08f-6516-4124-b12e-061acfda7141/ad245770-d94a-b60a-f8e7-3a19e866e9df/thumbnail.webp"
        },
        {
          id: 6,
          name: "Top Goals Recap",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/7463c03c-d531-ee27-6434-3a19e0d52d92/90ef290d-5d39-44b7-87f6-4df55a070c2d/604df6b5-2b6d-b176-011b-3a19e0df0cda/thumbnail_small.jpeg"
        },
        {
          id: 7,
          name: "Top Goals Recap",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/1328f540-b263-3b22-09b4-3a19e7aaae9e/1e532181-afe0-4d1f-9117-634ed6230818/4388413d-71a2-3c8e-e370-3a19e7aca9e8/thumbnail_small.jpeg"
        },
        {
          id: 8,
          name: "Top Goals Recap",
          status: "new",
          image: "https://fcbarcelona.cdn.usestoryteller.com/assets/studio-templates/5594d293-ba82-7ae0-e524-3a19e7b9e7c5/76737abf-7c98-4fe7-a002-c1a69f4094d0/3e85c8d8-3ae9-0c04-4c63-3a19e7be684b/thumbnail.webp"
        }
      ],


      countdownhome: {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00"
        },
        targetTime: new Date("2025-05-30T00:00:00") 
      
      }
    },
    mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        const now = new Date();
        const distance = this.targetTime - now;

        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          this.countdownhome = {
            days: String(days).padStart(2, '0'),
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0')
          };
        } else {
          this.countdownhome = { days: "00", hours: "00", minutes: "00", seconds: "00" };
        }
      }, 1000);
    }
  }

}
</script>

<style scoped>

.player-list{
  background: url('https://www.fcbarcelona.com/photo-resources/2025/05/17/3bb6dae1-b007-41b2-9f96-0304b30b4a66/_MGA4821.jpg?width=3200&height=1400');
  background-size: 90%;
}
  h1 {
    font-size: 1.5rem;
    color: #1d3557;
    }
  .player-list, .story-card, .Maches ,.ticket-card{
    display: flex;
    flex-wrap: wrap; 
  }




</style>
