<template>
  <div class="config-themes">
    <div class="theme" v-for="theme in themes">
      <div :id="theme.id" class="theme-wrapper" v-on:click="changeThemes">
        <div class="theme-preview">
          <img class="theme-preview-pic" :src="theme.preview">
        </div>
        <div class="theme-label">
          {{theme.name}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Themes from '../json/themes.json';

export default {
  data: function(){
    return {
      themes: Themes['themes']
    }
  },
  methods: {
    changeThemes: function(e){
      const selectedTheme = e.currentTarget.id;
      const themes = Themes['themes'];
      const themesIndex = themes.findIndex((theme => theme.id === selectedTheme));
      const bgLink = themes[themesIndex].background;
      const textColor = themes[themesIndex].color;
      $('.content').css('background-image', 'url("' + bgLink + '")');
      $('.content').css('color', textColor);
    }
  }
}
</script>
