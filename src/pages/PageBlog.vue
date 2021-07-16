<template>
  <q-page class="flex-center constrain">
    <q-card
      bordered
      class="my-card bg-teal-2 q-mb-md"
      v-for="post in blogPosts" :key="post.id"
    >
      <q-card-section>
        <div class="text-h4" style="opacity:.5">{{ post.title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-body1" style="opacity:.5">
        <p>{{ post.content1 }}</p>
        <p>{{ post.content2 }}</p>
      </q-card-section>


      <q-card-section class="q-pt-none">
          <img :src="post.image" class="pic">
          <div>
            {{ post.caption }}
          </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="text-caption" style="opacity:.5">
        {{ post.date }}
      </q-card-section>
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
          title: 'A Tribute',
          date: 'July 17, 2021',
          topic: 'memories',
          content1: 'This first post on my personal website is dedicated to my dad, Miroslaw Jaszczuk on what would have been his 73rd birthday. Even though he\'s no longer with us, there are still many memories and quirks that remind me of him every day. Through him, I learned that everyone has their faults, but that life is beautiful.',
          caption: 'A special thanks to my cousin Marek H. for finding this pic.',
          image: require('../assets/grandCanyonPops.jpg')
        },
        // {
        //   id: 2,
        //   title: 'Facebook: The 21st Century\'s Human Tragedy',
        //   date: 'May 19, 2021',
        //   topic: 'coding',
        //   content1: 'The most intelligent people in the world are scrambling to write the most complicated programs and algorithms humanity has ever seen. For what? Ads... They\'re trying to figure out how best to trick you into clicking on something...',
        //   content2: 'This is a sad reality in today\'s world. It seems as though we\'re being manipulated into forefeiting our most valuable asset, time, to this void...',
        //   image: '../assets/grandCanyonPops.png'
        // },
        // {
        //   id: 3,
        //   title: 'Third Post',
        //   date: 'May 20, 2021',
        //   topic: 'food',
        //   content1: 'lorem ipsum dolor sit amet consectetur adipisicing elit. testing this to try out how to long length make thes e the over there now how many o f the words are going to fit in the lines of this column and the thing right here right now over there now or later maybe it wil lgo go go to ther bottome of the of over there in here ans where am i nowS?'
        // },
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


<style lang="sass" scoped>
  .constrain
    padding-block-start: 10px
  .pic
    object-fit: scale-down
    align-content: center
    justify-content: center
</style>
