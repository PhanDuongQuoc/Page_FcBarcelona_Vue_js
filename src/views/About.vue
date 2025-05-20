<template>
  <div>
    <SharedHonours :sharedcontent="content"/>
    <div class="banner-1" style="margin-top: 20px;margin-bottom: 20px;">
      <Banner :banner="banner_about" />
    </div>

    <div>
      <section >
        <div class="container py-5">
          <AwardsCard v-for="ad in adwards" :key="ad" :awardItem="ad" />
        </div>
      </section>
    </div>

    <div>
        <div class="video" style="margin-top: 50px;">
          <div class="d-flex justify-content-between align-items-center mb-3" style="margin-left: 20px;">
                  <h4 class="text-uppercase fw-bold" style="color: #031b4a;">Barça Videos History</h4>
          </div>
          <div>
                <div style="text-align: center;">
                    <img class="logo" src="../assets/fcbarcelona.png" style="width: 100px;" alt="">
                </div>
                <SharedHonours :sharedcontent="content_next"/>
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
    </div>
    
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue';
import SharedHonours from '@/components/SharedHonours.vue';
import AwardsCard from '@/components/AwardsCard.vue';
import AppVideoCard from '@/components/VideoCard.vue';
import BannerVideo from '@/components/BannerVideo.vue';
export default{
    name:'AppAbout',
    components:{Banner,SharedHonours,AwardsCard,AppVideoCard,BannerVideo},
    data(){
      return{
        banner_about:{
          imagebg:"https://www.fcbarcelona.com/photo-resources/2023/05/20/fd8f3ab0-de0a-46f3-b458-889c4678adcf/2022-05-20_FCBvsREIALSOCIETAT_139.JPG?width=3200&height=1400",
          imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
          title:"Champion 2025 - FC Barcelona",
          content:"Quickly and accurately update player information, performance, and achievements."
        },

        content: {
          id: "1",
          title: "Honours",
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

          content_next:{title:"History FC Barcelona", content:"The history of Futbol Club Barcelona begins from the football club's founding in 1899 up until the present day. FC Barcelona, also known simply as Barcelona and familiarly as Barça, is based in Barcelona, Catalonia, Spain. The club was founded in 1899 by a group of Swiss, Catalan, German, and English footballers led by Joan Gamper. The club played amateur football until 1910 in various regional competitions. In 1910, the club participated in their first of many European competitions, and has since amassed fourteen UEFA trophies and a sextuple. In 1928, Barcelona co-founded La Liga, the top-tier in Spanish football, along with a string of other clubs. As of 2024, Barcelona has never been relegated from La Liga, a record they share with Athletic Bilbao and arch-rival Real Madrid.The history of Barcelona has often been political. Though it was a club created and run by foreigners, Barcelona gradually became a club associated with Catalan values. In Spain's transition to autocracy in 1925, Catalonia became increasingly hostile towards the central government in Madrid. The hostility enhanced Barcelona's image as a focal point for Catalonism, and when Francisco Franco banned the use of the Catalan language, the stadium of Barcelona became one of the few places the people could express their dissatisfaction. The Spanish transition to democracy in 1978 has not dampened the club's image of Catalan pride. In the 2000s and 2010s – a period of sporting success in the club and an increased focus on Catalan players – club officials have been openly faithful to historic club commitment to the defense of the country, democracy, freedom of expression and the right to decide, and have condemns any action that may impede the full exercise of these rights.[1]"},

          adwards:[{id:"1", title:"Champions League - 5",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/a83b23d8-4371-47b3-9a79-87f9a010a457/Champions-League.png",content:"1991-92, 2005-06, 2008-09, 2010-11, 2014-15"},
            {id:"2", title:"FIFA Club World Cup - 3",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/b8072232-9101-4bd2-9cba-ab81081388d3/Fifa-Club-World-Cup.png",content:"2009-10, 2011-12, 2015-16"},
            {id:"3", title:"uropean Cup Winners' Cup - 4",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/897d1291-776a-42d6-8094-cc5c99954277/Recopa-d-Europa.jpg",content:"1978-79, 1981-82, 1988-89, 1996-97"},
            {id:"4", title:"Fairs Cup - 3",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/0f0be548-b4a9-44c2-826f-1ca21e2b90d1/Copa-de-Fires.jpg",content:"1957-58, 1959-60, 1965-66"},
            {id:"5", title:"Fairs Super Cup - 1",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/0f0be548-b4a9-44c2-826f-1ca21e2b90d1/Copa-de-Fires.jpg",content:"1971-72"},
            {id:"6", title:"European Super Cup - 5",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/15ddbc3d-bd80-4e57-a797-d09fa6e0f328/European-Super-Cup.png",content:"1992-93, 1997-98, 2009-10, 2011-12, 2015-16"},
            {id:"7", title:"Latin Cup - 2",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/09bc1e49-8e02-4d60-beb4-5eae0344a6ee/Copa-Llatina.jpg",content:"1948-49, 1951-52"},
            {id:"8", title:"Pyrenees Cup - 4",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/198f825e-07fc-463e-9e3b-2040737564a3/Trophy-Silhouette.png",content:"1909-10, 1910-11, 1911-12, 1912-13"},
            {id:"9", title:"Spanish League Championship - 28",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/4cd456ef-13b5-4fbe-8918-55ac53f0b77c/la-liga.png",content:"1928-29, 1944-45, 1947-48, 1948-49, 1951-52, 1952-53, 1958-59, 1959-60, 1973-74, 1984-85, 1990-91, 1991-92, 1992-93, 1993-94, 1997-98, 1998-99, 2004-05, 2005-06, 2008-09, 2009-10, 2010-11, 2012-13, 2014-15, 2015-16, 2017-18, 2018-19, 2022-23, 2024-25"},
            {id:"10", title:"Copa del Rey - 32",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/20/09183d2c-6cf3-4861-a1d7-714312d74090/Spanish-Cup.png",content:"1909-10, 1911-12, 1912-13, 1919-20, 1921-22, 1924-25, 1925-26, 1927-28, 1941-42, 1950-51, 1951-52, 1952-53, 1956-57, 1958-59, 1962-63, 1967-68, 1970-71, 1977-78, 1980-81, 1982-83, 1987-88, 1989-90, 1996-97, 1997-98, 2008-09, 2011-12, 2014-15, 2015-16, 2016-17, 2017-18, 2020-21, 2024-25"},
            {id:"11", title:"Spanish Super Cup - 15",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/4b7579b0-4ad2-4426-971a-caff94e39b3e/Supercopa-Espanya.jpg",content:"1983-84, 1991-92, 1992-93, 1994-95, 1996-97, 2005-06, 2006-07, 2009-10, 2010-11, 2011-12, 2013-14, 2016-17, 2018-19, 2022-23, 2024-25"},
            {id:"12", title:"Spanish League Cup - 2",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/da1efe12-5c2d-4410-a26b-e72609ba4fb3/Copa-de-la-Lliga.jpg",content:"1982-83, 1985-86"},
            {id:"13", title:"Catalan League Championship - 23",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/fb9a8cb3-95ee-4426-afbd-86f55df25533/Campionat-de-Catalunya.jpg",content:"1901-1902, 1902-03, 1904-05, 1908-09, 1909-10, 1910-11, 1912-13, 1915-16, 1918-19, 1919-20, 1920-21, 1921-22, 1923-24, 1924-25, 1925-26, 1926-27, 1927-28, 1929-30, 1930-31, 1931-32, 1934-35, 1935-36, 1937-38 (includes Copa Macaya (1901-02) and Copa Barcelona (1902-03)"},
            {id:"14", title:"Catalan Cup - 8",image:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/f94d2c4d-2cbe-4990-b817-13d168c6cbff/Copa-Catalunya.jpg",content:"1990-91, 1992-93, 1999-00, 2003-04, 2004-05, 2006-07, 2012-13, 2013-14 (until 1993-94, Copa Generalitat)"}

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
        video:{id:1, videoSrc:require("@/assets/History.mp4"), title:"History of Barcelona FC"},

      

      }
    }
}
</script>

<style>
</style>