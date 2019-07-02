<template>
  <div>

  <!-- Main container Start -->
    <div class="main-container section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-xs-12">
            <!-- Product Filter Start -->
            <div class="product-filter">
              <!-- Sort by -->
              <div class="sort-by">
                <span>Sort by:</span>
                <div class="sort-by-select">
                  <select class="classic">
                    <option>Default Order</option>  
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                    <option>Newest Properties</option>
                    <option>Oldest Properties</option>
                  </select>
                </div>
              </div>
              <!-- Layout Switcher -->
              <div class="layout-switcher">
                <a href="#" class="list">
                  <i class="lni-menu"></i>
                </a>
                <a href="#" class="grid active">
                  <i class="lni-grid"></i>
                </a>
              </div>
              <p class="text-left">42 homes found</p>
            </div>
            <!-- Product Filter End -->

            <!-- Listings Star -->
                          <nuxt-link class="hover-effect" :to="`search/property/`"> 

            <div class="listing-container grid-layout p">
              <div class="property-main">
                <div class="property-wrap">
                  <div class="property-item">
                    <div class="item-thumb">
                      <a href="#">
                        <img class="img-fluid" src="~/assets/mockupFotos/casa1/1.jpg"  alt="">
                      </a>
                      <div class="label-inner">
                        <span class="label-status label bg-red">For Sale</span>
                      </div>
                    </div>
                    <div class="item-body">
                      <h3 class="property-title"><a href="property.html">Amazing oceanfront apartment</a></h3>
                      <div class="adderess"><i class="lni-map-marker"></i> Drive Street, Los Angeles, US</div>
                      <div class="pricin-list">
                        <div class="property-price">
                          <span>$1,500</span>
                        </div>
                       <p><span>4 bds</span> . <span>4 ba</span> . <span>2500 Sqft</span></p>
                      </div>
                    </div>               
                  </div>              
                </div>
              </div>

              <div class="property-main">
                <div class="property-wrap">
                  <div class="property-item">
                    <div class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img class="img-fluid" src="~/assets/mockupFotos/casa1/2.jpg"  alt="">
                      </a>
                      <div class="label-inner">
                        <span class="label-status label">For Rent</span>
                      </div>
                    </div>
                    <div class="item-body">
                      <h3 class="property-title"><a href="property.html">Amazing oceanfront apartment</a></h3>
                      <div class="adderess"><i class="lni-map-marker"></i> Drive Street, Los Angeles, US</div>
                      <div class="pricin-list">
                        <div class="property-price">
                          <span>$1,500</span>
                        </div>
                       <p><span>4 bds</span> . <span>4 ba</span> . <span>2500 Sqft</span></p>
                      </div>
                    </div>               
                  </div>              
                </div>
              </div>

              <div class="property-main">
                <div class="property-wrap">
                  <div class="property-item">
                    <div class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img class="img-fluid" src="~/assets/mockupFotos/apart1/2.jpg"  alt="">
                      </a>
                      <div class="label-inner">
                        <span class="label-status label bg-yellow">New</span>
                      </div>
                    </div>
                    <div class="item-body">
                      <h3 class="property-title"><a href="property.html">Guaranteed modern home</a></h3>
                      <div class="adderess"><i class="lni-map-marker"></i> Avenue C, New York, US</div>
                      <div class="pricin-list">
                        <div class="property-price">
                          <span>$1,750</span>
                        </div>
                       <p><span>8 bds</span> . <span>8 ba</span> . <span>3000 Sqft</span></p>
                      </div>
                    </div>               
                  </div>              
                </div>
              </div>

              <div class="property-main">
                <div class="property-wrap">
                  <div class="property-item">
                    <div class="item-thumb">
                      <a class="hover-effect" href="property.html">
                        <img class="img-fluid" src="~/assets/mockupFotos/apart2/2.jpg"  alt="">
                      </a>
                      <div class="label-inner">
                        <span class="label-status label bg-red">For Sale</span>
                      </div>
                    </div>
                    <div class="item-body">
                      <h3 class="property-title"><a href="property.html">Family home for sale</a></h3>
                      <div class="adderess"><i class="lni-map-marker"></i> Sacramento, Chicago, US</div>
                      <div class="pricin-list">
                        <div class="property-price">
                          <span>$1,400</span>
                        </div>
                       <p><span>2 bds</span> . <span>2 ba</span> . <span>2200 Sqft</span></p>
                      </div>
                    </div>               
                  </div>              
                </div>
              </div>
            </div>
                          </nuxt-link>

            <!-- Listings End -->
            <div class="pagination-container">
              <nav>
                <ul class="pagination">
                  <li class="page-item"><a class="btn btn-common" href="#"><i class="lni-chevron-left"></i> Previous </a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="btn btn-common" href="#">Next <i class="lni-chevron-right"></i></a></li>
                </ul>
              </nav>
            </div>
            
          </div>

          <div class="col-lg-4 col-md-12 col-xs-12">
            <!-- Sidebar Start -->
            <div class="sidebar sticky right">
              <!-- Widget -->
              <div class="widget">
              
                <h3 class="sidebar-title">Find New Home</h3>
                <div class="row with-forms">
                  <div class="col-md-12">
                    <select class="classic">
                      <option>Any Status</option> 
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </select>
                  </div>
                </div>
                <div class="row with-forms">
                  <div class="col-md-12">
                    <select class="classic">
                      <option>All Types</option>
                      <option>Apartments (3)</option>
                      <option>Houses (2)</option>
                      <option>Condos (1)</option>
                      <option>Industrial (2)</option>
                      <option>Land (3)</option>
                      <option>Offices (1)</option>
                      <option>Retail (2)</option>                              
                      <option>Villas (1)</option>
                    </select>
                  </div>
                </div>
                <div class="row with-forms">
                  <div class="col-md-12">
                    <select class="classic">
                      <option>All States</option> 
                      <option>Alabama</option>
                      <option>Arkansas</option>
                      <option>California</option>
                      <option>Colorado</option>
                      <option>Connecticut</option>
                      <option>Florida</option>
                      <option>Indiana</option>
                      <option>New York</option>
                      <option>Washington</option>
                      <option>West Virginia</option>
                      <option>Wisconsin</option>
                      <option>Wyoming</option>
                    </select>
                  </div>
                </div>
                <div class="row with-forms">
                  <div class="col-md-12">
                    <select class="classic">
                      <option>All Cities</option>
                      <option>New York</option>
                      <option>California</option>
                      <option>Washington</option>
                      <option>Chicago</option>
                      <option>Phoenix</option>
                      <option>Birmingham</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <select class="classic">
                      <option>Beds</option> 
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <select class="classic">
                      <option>Baths</option>  
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <!-- Area Range -->
                <div class="range-area">
                  <label>Area Range</label>
                  <div id="area-range">
                    <input type="text" class="form-control">
                    <span>sq ft  to</span>
                    <input type="text" class="form-control">
                    <span>sq ft</span>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <!-- Price Range -->
                <div class="price-range">
                  <label>Price Range</label>
                  <div id="area-price">
                    <input type="text" class="form-control">
                    <span>sq ft  to</span>
                    <input type="text" class="form-control">
                    <span>sq ft</span>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <!-- More Search Options -->
                <div class="more-search-options">
                  <h3 class="sidebar-title">Additional Features</h3>
                  <!-- Checkboxes -->
                  <div class="checkboxes one-in-row">
                    <input id="check-2" type="checkbox" name="check">
                    <label for="check-2">Air Conditioning</label>
                    <input id="check-3" type="checkbox" name="check">
                    <label for="check-3">Swimming Pool</label>
                    <input id="check-4" type="checkbox" name="check">
                    <label for="check-4">Central Heating</label>
                    <input id="check-5" type="checkbox" name="check">
                    <label for="check-5">Laundry Room</label> 
                    <input id="check-6" type="checkbox" name="check">
                    <label for="check-6">Gym</label>
                    <input id="check-7" type="checkbox" name="check">
                    <label for="check-7">Alarm</label>
                    <input id="check-8" type="checkbox" name="check">
                    <label for="check-8">Window Covering</label>
                  </div>
                </div>
                <!-- More Search Options  End -->
                <button class="fullwidth btn btn-common">Search</button>
              </div>
              <!-- Widget End -->
            </div>
            <!-- Sidebar End -->
          </div>
        </div>
      </div>
    </div>
    <!-- Main container End -->
      
  </div>
</template>

<script>
    export default {
        layout:'default',
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