<template>
    <div >
        <SharedHonours :sharedcontent="content"/>
        <div class="banner-1" style="margin-top: 20px;margin-bottom: 20px; ">
            <Banner :banner="banner_about" />
        </div>
        <div class="row" style="width: 100%; margin-left: auto;margin-right: auto;margin-top: 70px;">
          <NewCard v-for="ne in newlist" :key="ne.id" :newsItem="ne" style="width: 450px;"/>
        </div>
    </div>
</template>
<script>
// import NewCard from '@/components/NewCard.vue'
import SharedHonours from '@/components/SharedHonours.vue';
import Banner from '@/components/Banner/Banner.vue';
import NewCard from '@/components/NewCard.vue';
export default{
    name:'AppNew',
    components:{
        SharedHonours,
        Banner,
        NewCard
    },
    data(){
        return{
            
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
            content: {
                id: "1",
                title: "Barcelona News - Fc Barcelona",
                content: `FC Barcelona continues to make waves in both domestic and international football. 
                The club has added to its illustrious history with a collection of five European Cup titles, 
                achieved in iconic locations such as Wembley (1992, 2011), Paris (2006), Rome (2009), 
                and Berlin (2015), not to mention multiple FIFA Club World Cup victories in 2009, 2011, and 2015.

                Barcelona’s relentless pursuit of excellence extends beyond the international stage. Domestically, 
                the club has claimed an impressive array of league titles, national cups, and super cups, showcasing 
                their unwavering dominance in Spain’s top-tier football competitions. 

                This sustained success can be attributed to Barcelona’s world-class academy system, their commitment 
                to attractive, attacking football, and a deep-rooted philosophy that continues to shape their future. 

                These milestones not only underline the club's remarkable achievements but also reinforce the legacy 
                that inspires millions of fans around the world, ensuring that FC Barcelona remains a pillar of footballing greatness.`
            },
            
        banner_about:{
            imagebg:"https://www.fcbarcelona.com/photo-resources/2025/05/18/2aa9f178-eea0-4635-adbd-73385d244cb8/_GP25158.jpg?width=1280&height=800",
            imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
            title:"Champion 2025 News - FC Barcelona",
            content:"Quickly and accurately update player information, performance, and achievements."
            },

        }
    }
}
</script>

<style scoped>
</style>