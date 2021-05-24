<template>

  <q-page class="flex-center flex-center constrain">
    <q-card
      bordered
      class="my-card bg-teal-2 q-mb-md"
    >
      <q-card-section>
        <div class="text-h4" style="opacity:.5">
          Who am I?
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
<!-- {         {post.content }} -->
      </q-card-section>


      <q-card-section class="q-pt-none">
        <!-- :src="post.imageUrl" -->
      </q-card-section>

      <q-separator inset />

      <q-card-section class="text-caption">
        <!-- {{ post.date }} -->
      </q-card-section>
    </q-card>
  </q-page>


  </q-page>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>
