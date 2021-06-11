<template>

  <q-page class="flex-center flex-center constrain">
    <q-card
      bordered
      class="my-card bg-teal-2 q-mb-md"
    >
      <q-card-section>
        <div class="text-body1" style="opacity:.5">
          <p class="text-h4">
            - Time for some creative fun! -
          </p>
          <p>
            Hey, welcome to my home page! This is where I come to play. It’s kind of a digital journal that contains things I’m into. Have a look around, stop by the blog where I go through some topics that interest me… or take a look at my art work.
          </p>
          <p>
            Everything on this website is created by me from scratch. That means every image here, every line of code, and every thought. I put a lot of work into learning how to do all of this stuff, so I hope you enjoy it!
          </p>
        </div>
      </q-card-section>
    </q-card>

      <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" :ratio="1" img-src="../assets/BlueJay.png" />
      <q-carousel-slide :name="2" :ratio="1" img-src="../assets/PompousPig.png" />
      <q-carousel-slide :name="3" :ratio="1" img-src="../assets/orzel_drawing.png" />
      <q-carousel-slide :name="4" :ratio="1" img-src="../assets/RedWingedBlackbird.png" />
      <q-carousel-slide :name="5" :ratio="1" img-src="../assets/WhollyMackrel.png" />
    </q-carousel>
  </div>

  </q-page>
</template>


<script>
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>
