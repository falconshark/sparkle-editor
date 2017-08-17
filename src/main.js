import Vue from 'vue';
import VueHtml5Editor from 'vue-html5-editor';
import editor from './components/editor.vue';

Vue.use(VueHtml5Editor, {
  visibleModules: [
      'text',
      'font',
      'align',
      'list',
      'link',
      'unlink',
      'tabulation',
      'image',
      'hr',
      'eraser',
      'undo',
      'info',
  ],
});
new Vue({
  el: '#sparkle-editor',
   components: {
      editor
   }
})

$('.toolbar-trigger').hover(showToolbar);
$('.content').on('click', hiddenToolbar);

function showToolbar(){
    $('.toolbar').removeClass('animated slideOutUp');
    $('.toolbar').addClass('animated slideInDown');
	$('.toolbar').css('opacity', '1');
}

function hiddenToolbar(){
    $('.toolbar').removeClass('animated slideInDown');
    $('.toolbar').addClass('animated slideOutUp');
}
