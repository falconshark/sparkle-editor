<template>
    <vue-html5-editor :content="content" :height="500"  @change="updateOutput"></vue-html5-editor>
</template>

<script>
import Themes from '../json/themes.json';

export default {
  mounted: function(){
    if(localStorage.selectedTheme){
      const themes = Themes['themes'];
      const selectedTheme = localStorage.selectedTheme;
      const themesIndex = themes.findIndex((theme => theme.id === selectedTheme));
      const bgLink = themes[themesIndex].background;
      const textColor = themes[themesIndex].fontColor;
      const bgRepeat = themes[themesIndex].bgRepeat;
      $('.content').css('background-image', 'url("' + bgLink + '")');
      $('.content').css('color', textColor);
    }
  },
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
