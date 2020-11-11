import Vue from 'vue';
import App from './App.vue';
// Rutas
import router from './routes/index';
// Estilos Aplicacion
import Style from './assets/css/styles.css';
// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// ---------------------------------------------------------------//
// Configuracion para test/produccion                             //
// ---------------------------------------------------------------//
Vue.config.productionTip = false
// ---------------------------------------------------------------//
// Importamos Vue Material                                        //
// ---------------------------------------------------------------//
Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App, Style),
}).$mount('#app')
