<template>
  <div id="app">
    <vue-html5-editor :content="content" :height="500"  @change="updateData"></vue-html5-editor>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      content: '寫作由此開始'
    }
  },
  methods:{
    updateData: function(data) {
      this.content = data;
    },
    getData: function(){
      const content = this.content;
      return content;
    }
  }
}
</script>
