<template>
<section class="py-5">
  <div class="container text-center">
    <h2 class="fw-bold text-primary mb-4" style="font-size: 2.5rem;color: #031b4a !important;">{{sharedcontent.title}}</h2>
    <p class="lead text-secondary">
      {{ sharedcontent.content }}
    </p>
  </div>
</section>

</template>
<script>
export default{
    name:'AppSharedHonours',
    props:{
        sharedcontent:String
    }
}
</script>

<style>
</style>