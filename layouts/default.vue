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
  },
  head () {
    return {
      script: [
        { src: 'assets/js/jquery-min.js' },
        { src: 'assets/js/popper.min.js' },
        { src: 'assets/js/bootstrap.min.js' },
        { src: 'assets/js/jquery.mixitup.js' },
        { src: 'assets/js/jquery.counterup.min.js' },
        { src: 'assets/js/ion.rangeSlider.js' },
        { src: 'assets/js/jquery.parallax.js' },
        { src: 'assets/js/waypoints.min.js' },
        { src: 'assets/js/wow.js' },
        { src: 'assets/js/owl.carousel.min.js' },
        { src: 'assets/js/jquery.slicknav.js' },
        { src: 'assets/js/nivo-lightbox.js' },
        { src: 'assets/js/jquery.slicknav.js' },
        { src: 'assets/js/main.js' },
        { src: 'assets/js/form-validator.min.js' },
        { src: 'assets/js/contact-form-script.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'assets/css/slicknav.css' },
        { rel: 'stylesheet', href: 'assets/css/ion.rangeSlider.css' },
        { rel: 'stylesheet', href: 'assets/css/ion.rangeSlider.skinFlat.css' },
        { rel: 'stylesheet', href: 'assets/css/nivo-lightbox.css' },
        { rel: 'stylesheet', href: 'assets/css/animate.css' },
        { rel: 'stylesheet', href: 'assets/css/owl.carousel.css' },
        { rel: 'stylesheet', href: 'assets/css/main.css' },
        { rel: 'stylesheet', href: 'assets/css/responsive.css' }

      ]
    }
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
