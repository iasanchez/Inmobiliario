<template>
<div>
    <header id="header-wrap">

            <!-- Start Top Bar -->
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-9 col-xs-12">
            </div>
            <div class="col-lg-5 col-md-3 col-xs-12">
              <div class="header-top-right float-right">
                  <nuxt-link to="/login"  class="header-top-button" >Ingresar</nuxt-link>
                  <nuxt-link to="/register"  class="header-top-button" >Registrarme</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Top Bar -->

      <!-- Navbar Start -->
      <nav class="navbar navbar-expand-lg navbar-light bg-white"  data-toggle="sticky-onscroll">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              <span class="lin-menu"></span>
            </button>
            <a class="navbar-brand" href="/"><img src="~/assets/img/background/logo.jpg" alt=""></a>
          </div>

          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto w-100 justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
                 Publicar un inmueble
                </a>
              </li>
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Directorio <i class="fa fa-angle-down"></i>
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="listing.html">Inmobiliarias</a>
                  <a class="dropdown-item" href="grid-listing.html">Corredores</a>
                  <a class="dropdown-item" href="listing-map.html">Constructoras</a>
                </div>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="/noticias">
                 Noticias
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Mobile Menu Start -->
        <ul class="mobile-menu">
          <li>
            <a class="active" href="index.html">
            Home
            </a>
            <ul class="dropdown">
              <li>
                <a href="index.html">
                  Home V1
                </a>
              </li>  
              <li>
                <a class="active" href="index-2.html">
                  Home V2
                </a>
              </li>   
              <li>
                <a href="index-3.html">
                  Home V3
                </a>
              </li> 
            </ul>
          </li>
          <li>
            <a href="#">
              Listing
            </a>
            <ul class="dropdown">
              <li><a href="listing.html">Simple Listing</a></li>
              <li><a href="grid-listing.html">Grid Listing</a></li>
              <li><a href="listing-map.html">List with Google Map</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Property</a>
             <ul class="dropdown">
              <li><a href="property.html">Default- Variation</a></li>
              <li><a href="single-property.html">Single Property</a></li>
              <li><a href="full-gallery.html">Full Width Gallery</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              Gallery
            </a>
            <ul class="dropdown">
              <li><a href="portfolio-2.html">2 Columns Gallery</a></li>
              <li><a href="portfolio-3.html">3 Columns Gallery</a></li>
              <li><a href="portfolio-4.html">4 Columns Gallery</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul class="dropdown">
              <li><a href="about.html">About Us</a></li>
              <li><a href="agents.html">Agents</a></li>
              <li><a href="rent.html">For Rent</a></li>
              <li><a href="sale.html">For Sale</a></li>
              <li><a href="pricing.html">Pricing Tables</a></li>
              <li><a href="dashboard.html">Dashboard</a></li>
              <li><a href="submit-property.html">Submission Form</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="typography.html">Typography</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
            <ul class="dropdown">
              <li><a href="blog.html">Blog Page</a></li>
              <li><a href="blog-details.html">Blog Single Page</a></li>
            </ul>
          </li>
          <li>
            <a href="contact.html">
            Contact Us
            </a>
          </li>
        </ul>
        <!-- Mobile Menu End -->
      </nav>
      <!-- Navbar End -->
    </header>
    <!-- Header Area wrapper End -->

</div>
</template>

<script>
export default {
  
}
</script>

