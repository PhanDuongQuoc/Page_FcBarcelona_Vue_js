<template>
        <div class="product-store" style="background-color: #1d3557;">
            <div class="product-all">
                <div class="mb-3" style="text-align: center;padding-top: 50px;">
                    <h1 class="text-uppercase fw-bold text-warning">Barça Store</h1>
                </div>
                <div class="banner-1" style="margin-top: 20px;margin-bottom: 20px; ">
                    <Banner :banner="banner_about" />
                </div>
                <div class="row" style="margin-top: 50px;">
                    <ProductCard v-for="pro in products" :key="pro.id" :product="pro" style="width: 250px;"/>
                </div>
            </div>

            <div class="product-women">
                <div class="banner-1" style="margin-top: 20px;margin-bottom: 20px; ">
                    <Banner :banner="banner_about_2" style="height: 800px;"/>
                </div>
                <div class="row" style="margin-top: 50px;">
                    <ProductCard v-for="pro in  products_women" :key="pro.id" :product="pro" style="width: 250px;"/>
                </div>
            </div>

            <div class="product-men">
                <div class="banner-1" style="margin-top: 20px;margin-bottom: 20px; ">
                    <Banner :banner="banner_about_3" style="height: 800px;"/>
                </div>
                <div class="row" style="margin-top: 50px;">
                    <ProductCard v-for="pro in  products_men" :key="pro.id" :product="pro" style="width: 250px;"/>
                </div>
            </div>

            <div class="product-kid">
                <div class="banner-1" style="margin-top: 20px;margin-bottom: 20px; ">
                    <Banner :banner="banner_about_4" style="height: 800px;"/>
                </div>
                <div class="row" style="margin-top: 50px;">
                    <ProductCard v-for="pro in  products_kid" :key="pro.id" :product="pro" style="width: 250px;"/>
                </div>
            </div>



        </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';
import Banner from '@/components/Banner/Banner.vue';
export default{
    name:'AppStore',
    components:{
        ProductCard,Banner
    },
    data(){
        return{
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

            products_women:[
                {id:1, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/FETDSIVAL3.06342.jpg?v=1747054399&width=823",
                price:"$200"},
                {id:2, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/FETDSIVAL3.06665.jpg?v=1747054439&width=823",
                price:"$200"},
                {id:3, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/FETDSIVAL3.06050.jpg?v=1747054315&width=823",
                price:"$200"},
                {id:4, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/FETDSIVAL3.06686.jpg?v=1747054498&width=823",
                price:"$200"},
                {id:5, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/BLMP884073_1.gif?v=1746431958&width=823",
                price:"$200"},
                {id:6, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/BLMP884061.gif?v=1747053332&width=823",
                price:"$200"}
            ],
              products_men:[
                {id:1, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/CORE-II4082_391dac34-f71d-4453-acdc-51b48962fdaf.jpg?v=1740042048&width=823",
                price:"$200"},
                {id:2, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/IMG_1049_da5b7b43-a0ae-4505-b9c3-86f7336d67e1.jpg?v=1746542459&width=823",
                price:"$200"},
                {id:3, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/FCBESSENTIALSMASC2062.jpg?v=1720609432&width=823",
                price:"$200"},
                {id:4, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/IMG_6325.jpg?v=1737554661&width=823",
                price:"$200"},
                {id:5, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/BLMP884069_ADULT_OK.jpg?v=1747214337&width=823",
                price:"$200"},
                {id:6, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/BLMP884028_6.jpg?v=1737121435&width=823",
                price:"$200"}
            ],

            products_kid:[
                {id:1, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/BLMP884048_5.jpg?v=1745309313&width=823",
                price:"$200"},
                {id:2, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/BLMP884078_5.jpg?v=1745309074&width=823",
                price:"$200"},
                {id:3, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/2025-04-04BARCA61309.jpg?v=1745312442&width=823",
                price:"$200"},
                {id:4, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/BLMP884075_6.jpg?v=1745309469&width=823 ",
                price:"$200"},
                {id:5, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/2025-04-04_BARCA61861.jpg?v=1745308900&width=823",
                price:"$200"},
                {id:6, name:"",
                image:"https://store.fcbarcelona.com/cdn/shop/files/2025-04-04_BARCA61146.jpg?v=1745308899&width=823",
                price:"$200"}
            ],
           banner_about:{
                imagebg:"https://store.fcbarcelona.com/cdn/shop/files/VO250519A98605_med.jpg?v=1747658648&width=3000",
                imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
                title:"Welcome To Store - FC Barcelona",
                content:"Quickly and accurately update player information, performance, and achievements."
            },

             banner_about_2:{
                imagebg:"https://store.fcbarcelona.com/cdn/shop/files/Main-Banner-Festival-Mayo-2025-d.jpg?v=1747045626&width=3000",
                imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
                title:"Product Women - FC Barcelona",
                content:"Quickly and accurately update player information, performance, and achievements."
            },

             banner_about_3:{
                imagebg:"https://store.fcbarcelona.com/cdn/shop/files/CORE_II3722.jpg?v=1747647889&width=3000",
                imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
                title:"Product Men - FC Barcelona",
                content:"Quickly and accurately update player information, performance, and achievements."
            },

              banner_about_4:{
                imagebg:"https://store.fcbarcelona.com/cdn/shop/files/Cabecera-Landing-Barcity-Kids-v2-2500x880px-d_4be58752-d858-4306-819b-a725df3ada28.jpg?v=1745934853&width=3000",
                imagelogo:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
                title:"Product Kids - FC Barcelona",
                content:"Quickly and accurately update player information, performance, and achievements."
            },
        }
    }
}
</script>
<style scoped>
  h1 {
    font-size: 1.5rem;
    color: #1d3557;
    }
</style>