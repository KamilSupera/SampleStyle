import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';

import Vue from 'vue'

import App from './App'
import router from './router'

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');