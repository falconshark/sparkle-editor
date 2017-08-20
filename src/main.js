import Vue from 'vue';
import Vuex from 'vuex';
import VueHtml5Editor from 'vue-html5-editor';
import Editor from './components/Editor.vue';
import Export from'./components/Export.vue';

Vue.use(Vuex);
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

const store = new Vuex.Store({
  state: {
    content: '寫作由此開始',
  },
  mutations: {
    updateContent (state, content) {
      state.content = content;
    }
  }
})

new Vue({
    el: '#sparkle-editor',
    store,
    components: {
        Editor
    }
});
