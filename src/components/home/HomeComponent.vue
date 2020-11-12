<!-- Vista HTML -->
<template>
  <div>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-home" :md-label="modenaEur.description"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
    </md-tabs>
  </div>
</template>

<!-- Funcionalidad JS -->
<script>
// Peticiones Http
import axios from 'axios';
// EndPoint
import dataEur from '../../api/eur.js';

export default {
    name: 'HomeComponent',
    mounted(){

        // Llamamos al metodo
        this.getEurCurerency();
    },
    data(){
        return {
            api: dataEur.endpoint,
            modenaEur: [],
        }
    },  
    methods: {
        //-------------------------------------------------------//
        // Metodo para obtener datos en Euros                    //
        //-------------------------------------------------------//
        getEurCurerency(){
            // Log de seguimiento
            console.log('HomeComponent.vue - Metodo getEurCurerency');

            axios.get(this.api)
                .then( res => {
                    if(res.data){
                    this.modenaEur = res.data['bpi'].EUR;
                    console.log(this.modenaEur)
                    }
                });
            },
    }        
}

</script>