<template>
    <vue-html5-editor :content="content" :height="500"  @change="updateContent"></vue-html5-editor>
</template>

<script>
export default {
  computed: {
    content: function(){
      return this.$store.state.content;
    }
  },
  methods:{
    updateContent: function(content) {
      this.$store.commit('updateContent', content);
    },
    getData: function(){
      const content = this.content;
      return content;
    }
  }
}
</script>
