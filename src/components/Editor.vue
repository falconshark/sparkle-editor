<template>
    <vue-html5-editor :content="content" :height="500"  @change="updateOutput"></vue-html5-editor>
</template>

<script>
export default {
  computed: {
    content: function(){
      return this.$store.state.content;
    }
  },
  methods:{
    updateOutput: function(content) {
      this.$store.commit('updateOutput', content);
    },
  }
}
</script>
