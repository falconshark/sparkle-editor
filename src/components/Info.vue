<template>
  <div class="editor-info">
    <div class="description">
      <h1>Sparkle Editor</h1>
      作者：Mr.Twister
    </br>
      <a href="https://github.com/dollars0427/sparkle-editor"> Github </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    content: function(){
      return this.$store.state.content;
    }
  },
}
</script>
