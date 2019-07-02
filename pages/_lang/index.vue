<template>
	<div>
		<!-- Intro Section Start -->
		<section id="intro" class="section-intro">
			<div class="search-container">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h2>{{ $t('home.introduction') }}</h2>
							<div class="content">
								<form>
									<div class="row d-flex align-items-center justify-content-center">
										<div class="col-lg-2 col-md-6 col-xs-12">
											<button type="button" class="btn btn-secondary">
												<i href="#"></i>
												{{ $t('home.buy') }}
											</button>
										</div>
										<div class="col-lg-2 col-md-6 col-xs-12">
											<button type="button" class="btn btn-secondary">
												<i href="#"></i>
												{{ $t('home.rent') }}
											</button>
										</div>
										<div class="col-lg-3 col-md-6 col-xs-12">
											<button type="button" class="btn btn-secondary">
												<i href="#"></i>
												{{ $t('home.entrepreneurship') }}
											</button>
										</div>
										<div class="col-lg-2 col-md-6 col-xs-12">
											<button type="button" class="btn btn-secondary">
												<i href="#"></i>
												{{ $t('home.commercial') }}
											</button>
										</div>
										<div class="col-lg-2 col-md-6 col-xs-12">
											<button type="button" class="btn btn-secondary">
												<i href="#"></i>
												{{ $t('home.temporary') }}
											</button>
										</div>
									</div>
									<div class="row mt-4">
										<div class="col-lg-3 col-md-6 col-xs-12">
											<div class="search-category-container">
												<label class="styled-select">
													<select class="classic">
														<option>{{ $t('home.department') }}</option>
														<option>{{ $t('home.house') }}</option>
														<option>{{ $t('home.other') }}</option>
													</select>
												</label>
											</div>
										</div>
										<div class="col-lg-9 col-md-9 col-xs-12">
											<div class="form-group">
												<input
													class="form-control"
													type="text"
													placeholder="Buscá por ubicación o palabra clave"
												>
											</div>
										</div>
									</div>
								</form>
								<div class="row range-slider">
									<div class="col-lg-3 col-md-12 col-xs-12"></div>
									<div class="col-lg-6 col-md-12 col-xs-12"></div>
									<div class="col-lg-3 col-md-12 col-xs-12">
										<div class="text-right btn-section">
											<nuxt-link :to="$i18n.path('search')" class="btn btn-common">
												<i class="lni-search"></i>
												{{ $t('home.search') }}
											</nuxt-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Intro Section End -->

		<!-- Property Section Start -->
		<section class="property section-padding">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="section-title-header text-center">
							<h2 class="section-title">{{ $t('home.searchPopular') }}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 col-xs-12">
						<div class="property-main">
							<div class="property-wrap">
								<div class="property-item">
									<div class="item-thumb">
										<a class="hover-effect" href="property.html">
											<img class="img-fluid" src="~/assets/mockupFotos/apart1/1.jpg" alt>
										</a>
										<div class="label-inner">
											<span class="label-status label bg-red">For Sale</span>
										</div>
									</div>
									<div class="item-body">
										<h3 class="property-title">
											<a href="property.html">Amazing oceanfront apartment</a>
										</h3>
										<div class="adderess">
											<i class="lni-map-marker"></i> Drive Street, Los Angeles, US
										</div>
										<div class="pricin-list">
											<div class="property-price">
												<span>$1,500</span>
											</div>
											<p>
												<span>4 bds</span> .
												<span>4 ba</span> .
												<span>2500 Sqft</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-xs-12">
						<div class="property-main">
							<div class="property-wrap">
								<div class="property-item">
									<div class="item-thumb">
										<a class="hover-effect" href="property.html">
											<img class="img-fluid" src="~/assets/mockupFotos/casa1/1.jpg" alt>
										</a>
										<div class="label-inner">
											<span class="label-status label">For Rent</span>
										</div>
									</div>
									<div class="item-body">
										<h3 class="property-title">
											<a href="property.html">Family Condo</a>
										</h3>
										<div class="adderess">
											<i class="lni-map-marker"></i> Louis, Missouri, US
										</div>
										<div class="pricin-list">
											<div class="property-price">
												<span>$27,00</span>
											</div>
											<p>
												<span>6 bds</span> .
												<span>8 ba</span> .
												<span>2600 Sqft</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-xs-12">
						<div class="property-main">
							<div class="property-wrap">
								<div class="property-item">
									<div class="item-thumb">
										<a class="hover-effect" href="property.html">
											<img class="img-fluid" src="~/assets/mockupFotos/edificio/1.jpg" alt>
										</a>
										<div class="label-inner">
											<span class="label-status label bg-yellow">New</span>
										</div>
									</div>
									<div class="item-body">
										<h3 class="property-title">
											<a href="property.html">Guaranteed modern home</a>
										</h3>
										<div class="adderess">
											<i class="lni-map-marker"></i> Avenue C, New York, US
										</div>
										<div class="pricin-list">
											<div class="property-price">
												<span>$1,750</span>
											</div>
											<p>
												<span>8 bds</span> .
												<span>8 ba</span> .
												<span>3000 Sqft</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12">
						<div class="text-center">
							<a href="listing.html" class="btn btn-common">{{ $t('home.browseALL') }}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Property Section End -->

		<!-- Go to Top Link -->
		<a href="#" class="back-to-top">
			<i class="lni-chevron-up"></i>
		</a>
	</div>
</template>

<script>
export default {
	methods: {
		changeLang(lang) {
			//mutate 'locale' in store
			this.$store.commit("SET_LANG", lang);
			//re-route to the current page but with the selected language in a query string
			this.$router.push({
				path: `${this.$router.currentRoute.path}?lang=${lang}`
			});
		}
	}
};
</script>
