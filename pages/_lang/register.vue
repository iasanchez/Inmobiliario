<template>
	<div>
		<!-- Content section Start -->
		<section id="content" class="section-padding">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-5 col-md-6 col-xs-12">
						<div class="page-login-form box">
							<h3>Registrate</h3>
							<form class="login-form">
								<div class="form-group">
									<div class="input-icon">
										<i class="lni-user"></i>
										<input type="text" class="form-control" name="name">
									</div>
								</div>
								<div class="form-group">
									<div class="input-icon">
										<i class="lni-envelope"></i>
										<input type="text" class="form-control" name="email">
									</div>
								</div>
								<div class="form-group">
									<div class="input-icon">
										<i class="lni-lock"></i>
										<input type="password" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<div class="input-icon">
										<i class="lni-unlock"></i>
										<input type="password" class="form-control">
									</div>
								</div>
								<button class="btn btn-common log-btn mt-3">{{ $t('links.register') }}</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Content section End -->
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>