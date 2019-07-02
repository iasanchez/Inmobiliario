<template>
	<div>
		<footer id="footer" class="footer-area section-padding">
			<div class="container">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<h3 class="footer-titel">{{ $t('links.about') }}</h3>
							<ul class="footer-link">
								<li>
									<a href="#">Company</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<h3 class="footer-titel">Links</h3>
							<ul class="footer-link">
								<li>
									<a href="#">Buenos Aires</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<h3 class="footer-titel">{{ $t('links.contactInformation') }}</h3>
							<ul class="address">
								<li>
									<a href="#">
										<i class="lni-map-marker"></i> York Blvd, Los Angeles, US
										<br>View, CA 94041USA
									</a>
								</li>
								<li>
									<a href="#">
										<i class="lni-phone-handset"></i> (518) 2014-040 43
									</a>
								</li>
								<li>
									<a href="#">
										<i class="lni-envelope"></i> inmobiliary@example.com
									</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<h3 class="footer-titel">{{ $t('links.subscribe') }}</h3>
							<form method="post" id="subscribe-form" name="subscribe-form" class="validate">
								<div class="form-group is-empty">
									<input type="email" value name="Email" class="form-control" id="EMAIL" required>
									<button type="submit" name="subscribe" id="subscribes" class="btn btn-common sub-btn">
										<i class="lni-envelope"></i>
									</button>
									<div class="clearfix"></div>
								</div>
							</form>
							<div class="social-icon">
								<a class="facebook" href="#">
									<i class="lni-facebook-filled"></i>
								</a>
								<a class="twitter" href="#">
									<i class="lni-twitter-filled"></i>
								</a>
								<a class="instagram" href="#">
									<i class="lni-instagram-filled"></i>
								</a>
								<a class="linkedin" href="#">
									<i class="lni-linkedin-filled"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<section id="copyright">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<p>Copyright © 2019 All Right Reserved</p>
					</div>
				</div>
			</div>
		</section>
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

