<template>
  <div id="app">
    <CommentButton />
    <CommentList />
  </div>
</template>

<script>
import CommentButton from './components/CommentButton'
import CommentList from './components/CommentList'

export default {
  name: 'app',
  components: {
    CommentButton,
    CommentList
  }
}
</script>

<style>
</style>
