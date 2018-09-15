<template>
  <div>
    <h2>Comment List</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  data() {
    return {
      comments: this.$store.state.comments
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
