<template>
  <div>
    <div class="row">
    <div class="col-12"><cabecera/></div>
    <div class="col-12"><nuxt /></div>
    <div class="col-12"><fin/></div>
    </div>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
