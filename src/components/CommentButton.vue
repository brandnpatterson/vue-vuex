<template>
  <form v-on:submit.prevent="onSubmit">
    <h1>Add a Comment</h1>
    <textarea v-model="comment" />
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CommentButton',
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.comment !== '') {
        this.$store.state.comments.push({
          value: this.comment
        });
      }
      
      this.comment = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
