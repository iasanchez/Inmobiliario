<template>
    <div class="container mt-5">
    <div class="row">
    <div class="col-md-4">
       <h2>FILTROS
       </h2>
    </div>
    <div class="col-md-4" v-for="(item,index) in articulos" :key="index">
       <h2>
       <nuxt-link :to="`/busqueda/${item.category}`">{{item.category}} </nuxt-link>
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
                {  category: 'Belgrano' , subcategory:'Belgrano Norte'},
                {  barrio: 'Recoleta', articulo:'Recoleta Sur'},
                {  barrio: 'Palermo' , articulo:'Palermo Prueba'}
            ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>