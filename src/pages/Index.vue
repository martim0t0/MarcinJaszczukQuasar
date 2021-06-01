<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div>
        <img src="../assets/lowPolyMe.png">
      </div>

      <div class="text-h2" style="opacity:.4">
        Hey, I'm Marcin...
      </div>

      <div class="text-h6" style="opacity:.4">
        a full-stack developer and artist
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
