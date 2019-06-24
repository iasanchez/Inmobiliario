<template>
  <div>
    <cabecera />
    <nuxt />
    <fin />
  </div>
</template>


<script>
import Cabecera from '~/components/cabecera.vue';
import Fin from '~/components/fin.vue';

export default {
  components: {
    Cabecera,
    Fin
  }
 
}
</script>
