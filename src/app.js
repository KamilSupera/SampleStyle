/* import codemirror css and core */
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';

import 'bootstrap';
import 'codemirror';
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'codemirror';

import navigation from './components/layout/navigation.vue'

import './assets/styles.scss'

/**
 * To add new CodeMirror snippet by default use:
 * `this.$CodeMirror.fromTextArea(<textarea element>, this.$CodeMirrorDefault);`
 */
Vue.prototype.$CodeMirror = CodeMirror;

// Maybe make function to extend some of those arguments if needed.
Vue.prototype.$CodeMirrorDefault = {
  lineNumbers: true,
  autofocus: false,
  readOnly: true,
  mode: 'css',
  theme: 'solarized',
}

Vue.component('navigation', navigation)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');