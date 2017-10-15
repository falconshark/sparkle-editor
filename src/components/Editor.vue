<template>
    <vue-html5-editor :content="content" :height="500"  @change="updateOutput"></vue-html5-editor>
</template>

<script>
export default {
  computed: {
    content: function(){
      if(localStorage.savedContent){
        const content = localStorage.savedContent;
        this.$store.commit('updateOutput', content);
        return content;
      }
      return this.$store.state.content;
    }
  },
  methods:{
    updateOutput: function(content) {
      localStorage.setItem('savedContent', content);
      this.$store.commit('updateOutput', content);
    },
  }
}
</script>
