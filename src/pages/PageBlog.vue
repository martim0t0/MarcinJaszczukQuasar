<template>
  <q-page class="flex-center flex-center constrain">
    <q-card
      bordered
      class="my-card bg-teal-2 q-mb-md"
      v-for="post in blogPosts" :key="post.id"
    >
      <q-card-section>
        <div class="text-h4" style="opacity:.5">{{ post.title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ post.content }}
      </q-card-section>


      <q-card-section class="q-pt-none">
        :src="post.imageUrl"
      </q-card-section>

      <q-separator inset />

      <q-card-section class="text-caption">
        {{ post.date }}
      </q-card-section>
    </q-card>

    <q-card>
      <q-parallax
      src="../assets/Canyon.jpg"
      :height="300" :speed="0.9"
    >
      <h1 class="text-white">Red Rock</h1>
    </q-parallax>
    </q-card>



  </q-page>
</template>

<script>
export default {
  name: 'PageBlog',
  data () {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'First Post',
          date: 'May 18, 2021',
          topic: 'food',
          content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. testing this to try out how to long length make thes e the over there now how many o f the words are going to fit in the lines of this column and the thing right here right now over there now or later maybe it wil lgo go go to ther bottome of the of over there in here ans where am i nowS?'
        },
        {
          id: 2,
          title: 'Second Post',
          date: 'May 19, 2021',
          topic: 'coding',
          content: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
          imageUrl: '../assets/Canyon.jpg'
        },
        {
          id: 3,
          title: 'Third Post',
          date: 'May 20, 2021',
          topic: 'food',
          content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. testing this to try out how to long length make thes e the over there now how many o f the words are going to fit in the lines of this column and the thing right here right now over there now or later maybe it wil lgo go go to ther bottome of the of over there in here ans where am i nowS?'
        },
      ]
    }
  },
  filters: {
    blogFilter(value) {
      return
    }
  }
}
</script>
