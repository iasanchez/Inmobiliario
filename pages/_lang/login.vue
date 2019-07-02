<template>
	<div>
		<section id="content" class="section-padding">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-5 col-md-6 col-xs-12">
						<div class="page-login-form box">
							<h3>{{ $t('links.login') }}</h3>
							<form class="login-form">
								<div class="form-group">
									<div class="input-icon">
										<i class="lni-user"></i>
										<input type="text" id="sender-email" class="form-control" name="email">
									</div>
								</div>
								<div class="form-group">
									<div class="input-icon">
										<i class="lni-lock"></i>
										<input type="password" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<input type="checkbox" name="rememberme" value="forever">
									{{ $t('links.sessionClose') }}
								</div>
								<button class="btn btn-common log-btn">{{ $t('links.signIn') }}</button>
							</form>
							<ul class="form-links">
								<li class="text-center">
									<a href="signup.html">{{ $t('links.forgotPassword') }}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>