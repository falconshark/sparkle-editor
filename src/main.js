import Vue from 'vue';
import VueHtml5Editor from 'vue-html5-editor';
import Editor from './components/Editor.vue';
import Export from'./components/Export.vue';

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
        'export',
    ],
    modules: [
        {
            name: "export",
            icon: "fa fa-share",
            i18n: "export",
            show: true,
            dashboard: Export
        },
    ]
});

new Vue({
    el: '#sparkle-editor',
    components: {
        Editor
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
