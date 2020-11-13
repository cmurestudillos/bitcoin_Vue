<!-- Vista HTML -->
<template>
  <div>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-home" :md-label="modenaEur.description">
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <img src="../../assets/img/euro.png" width="150" height="150" :alt="modenaEur.description" :title="modenaEur.description">
                </md-card-header>
                <md-card-content>
                    <md-chip class="md-success">Valor: </md-chip>{{modenaEur.rate}}
                </md-card-content>
            </md-ripple>
        </md-card>          
      </md-tab>
      <md-tab id="tab-pages" :md-label="modenaUsd.description"></md-tab>
      <md-tab id="tab-posts" :md-label="modenaGbp.description"></md-tab>
    </md-tabs>
  </div>
</template>

<!-- Funcionalidad JS -->
<script>
// Peticiones Http
import axios from 'axios';
// EndPoint
import dataEur from '../../api/eur.js';
import dataUsd from '../../api/usd.js';
import dataGbp from '../../api/gbp.js';

export default {
    name: 'HomeComponent',
    mounted(){

        // Llamamos al metodo Euro
        this.getEurCurerency();

        // Llamamos al metodo Dolares
        this.getUsdCurerency();

        // Llamamos al metodo Libras
        this.getGbpCurerency();
    },
    data(){
        return {
            apiEur: dataEur.endpoint,
            apiUsd: dataUsd.endpoint,
            apiGbp: dataGbp.endpoint,
            modenaEur: [],
            modenaUsd: [],
            modenaGbp: [],
        }
    },  
    methods: {
        //-------------------------------------------------------//
        // Metodo para obtener datos en Euros                    //
        //-------------------------------------------------------//
        getEurCurerency(){
            // Log de seguimiento
            console.log('HomeComponent.vue - Metodo getEurCurerency');

            axios.get(this.apiEur)
                .then( res => {
                    if(res.data){
                    this.modenaEur = res.data['bpi'].EUR;
                    console.log(this.modenaEur)
                }
            });
        },
        //-------------------------------------------------------//
        // Metodo para obtener datos en Dolares                  //
        //-------------------------------------------------------//
        getUsdCurerency(){
            // Log de seguimiento
            console.log('HomeComponent.vue - Metodo getUsdCurerency');

            axios.get(this.apiUsd)
                .then( res => {
                    if(res.data){
                    this.modenaUsd = res.data['bpi'].USD;
                }
            });
        },
        //-------------------------------------------------------//
        // Metodo para obtener datos en Libras                   //
        //-------------------------------------------------------//
        getGbpCurerency(){
            // Log de seguimiento
            console.log('HomeComponent.vue - Metodo getGbpCurerency');

            axios.get(this.apiGbp)
                .then( res => {
                    if(res.data){
                    this.modenaGbp = res.data['bpi'].GBP;
                }
            });
        },                       
    }        
}

</script>