import Vue from 'vue';
import VueHtml5Editor from 'vue-html5-editor';
import editor from './components/editor.vue';

Vue.use(VueHtml5Editor, {
  visibleModules: [
      "text",
      "color",
      "font",
      "align",
      "list",
      "link",
      "unlink",
      "tabulation",
      "image",
      "hr",
      "eraser",
      "undo",
      "full-screen",
      "info",
  ],
});
new Vue({
  el: '#app',
   components: {
      editor
   }
})
