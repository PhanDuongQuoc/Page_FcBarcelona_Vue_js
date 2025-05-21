<template>
    <div>
        <SharedHonours :sharedcontent="content"/>
        <div class="banner-1" style="margin-top: 20px;margin-bottom: 20px; ">
            <Banner :banner="banner_about" />
        </div>
        <div class="row" style="width: 80%; margin-left: auto;margin-right: auto;margin-top: 70px;">
            <Photocard v-for="samplePhoto in samplePhotos" :key="samplePhoto" :photoItem="samplePhoto" />
        </div>
    </div>
</template>
<script>
import Photocard from '@/components/Photocard.vue';
import SharedHonours from '@/components/SharedHonours.vue';
import Banner from '@/components/Banner/Banner.vue';
export default{
    name:'AppTeam',
    components:{Photocard,SharedHonours,Banner},
    data(){
        return{
        content: {
          id: "1",
          title: "Barcelona Photo Team",
          content: `Very few clubs anywhere in the world have won so many titles. 
          The club's greatest pride and joy remain the five European Cup titles won in 
          Wembley (1992, 2011), Paris (2006), Rome (2009), 
          Berlin (2015) and the FIFA Club World Cup (2009, 2011 and 2015).

          In addition to these global achievements, the club has consistently dominated domestic competitions, 
          claiming numerous league titles, national cups, and super cups over the decades. 
          This enduring success reflects the club’s commitment to excellence, 
          a world-class academy system, and a philosophy grounded in beautiful, attacking football. 

          These honours are not just statistics, but milestones in a legacy that continues to inspire fans across the globe.`
          },
        samplePhotos: [
            {
            id:1,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
                id:2,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
             {
            id:3,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
                id:4,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
             {
            id:6,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
                id:7,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
            id:8,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
                id:9,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
            id:10,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
                id:11,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
            id:12,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            {
                id:13,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
              {
                id:14,
                image: 'https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=1280&height=800',
                title: 'The three trophies at Spotify Camp Nou',
                category: 'First Team',
                date: '21-05-2025'
            },
            
            
    
        ],


        banner_about:{
            imagebg:"https://www.fcbarcelona.com/photo-resources/2025/05/18/f37d5f66-ad0b-4f37-8b6d-13c1f31b5021/101-8C4A0401.JPG?width=2400&height=1500",
            imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
            title:"Champion 2025 Photo - FC Barcelona",
            content:"Quickly and accurately update player information, performance, and achievements."
            },
        }
    }
}
</script>
<style scoped>
</style>