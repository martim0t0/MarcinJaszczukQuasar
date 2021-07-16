<template>

  <q-page class="flex-center flex-center constrain">
    <q-card
      bordered
      class="my-card bg-teal-2 q-mb-md"
    >
      <q-card-section>
        <div class="text-body1" style="opacity:.5">
          <p class="text-h4">
            Figuring Stuff Out
          </p>
          <p>
            Hey, welcome to my home page! It’s kind of a digital journal that contains things I like to figure out. Life is about figuring things out and you're allowed to have fun doing it.
          </p>
          <p>
            Everything on this website is created by me from scratch. Every image here, every line of code, and every thought. I put a lot of work into learning how to do all of this stuff, so I hope you enjoy it!
          </p>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="flex-center flex-center constrain bg-teal-2 q-mb-md text-body1">
      <q-parallax
        src="../assets/p51.png"
        :height="160"
        >

        <div class="absolute-bottom text-h5" style="opacity:.5">
          Aviation Photography
        </div>
      </q-parallax>

      <q-card-section class="flex-center flex-center constrain" style="opacity:.5">
        <p>One of my favorite events is an airshow and I always have my Sony mirrorless camera!</p>
        <p>When I'm not figuring out how to take pictures, I'm figuring out how to draw things digitally or create programs.</p>
        <p>Some of my favorite technologies are Linux, Vue.js, Python, and SQL. Lately, I've been quite interested in how networks operate and trying to figure out TCP/IP.</p>
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
      <q-carousel-slide :name="1" img-src="../assets/BlueJay.png" />
      <q-carousel-slide :name="2" img-src="../assets/PompousPig.png" />
      <q-carousel-slide :name="3" img-src="../assets/orzel_drawing.png" />
      <q-carousel-slide :name="4" img-src="../assets/RedWingedBlackbird.png" />
      <q-carousel-slide :name="5" img-src="../assets/WhollyMackrel.png" />
    </q-carousel>
  </div>


    <q-card bordered
      class="my-card bg-teal-2 q-mb-md">
        <q-card-section>
        <div class="text-body1" style="opacity:.5">
          <p class="text-h4">
            Direction of this site
          </p>
          <p>
            Currently, this site is just a static blog. I'm using it as a testing ground for what I can get away with at zero monetary cost to me. So far, this site has only cost the purchase of the www.marcinjaszczuk.win domain name at $11.99 for five years.
          </p>
          <p>
            The next things that will be added to this site will be an administrator page for blog posts and a user authentication system so that people can leave comments.
          </p>
        </div>
      </q-card-section>
    </q-card>

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


<style lang="sass">
  .q-carousel
    object-fit: scale-down !important
  .q-carousel-slide
    object-fit: scale-down !important
  .shrinkImg
    object-fit: scale-down !important
</style>
