<template>
    <div class="container mt-5">
    <div class="row">
    <div class="col-md-3" v-for="(item,index) in articulos" :key="index">
       <h2>
       <nuxt-link :to="`/busqueda/${item.barrio}`">{{item.articulo}} </nuxt-link>
       </h2>
    </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                articulos: [
                {  barrio: 'Belgrano' , articulo:'Belgrano Norte'},
                {  barrio: 'Recoleta', articulo:'Recoleta Sur'},
                {  barrio: 'Palermo' , articulo:'Palermo Prueba'}
            ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>