<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>

      <div>

        <p>
          <img src="../assets/lowPolyMe.png">
        </p>

        <p class="text-h2" style="opacity:.4">
          Hey, I'm Marcin...
        </p>

        <p class="text-h6" style="opacity:.7">
          a full-stack developer and artist
        </p>

      </div>


      <q-btn
        class="q-mt-xl glossy"
        color="blue-grey-3"
        text-color="blue-grey-8"
        push
        to="/home"
        label="See my page"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
