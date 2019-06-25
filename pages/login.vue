<template>
    <div>      
    <section id="content" class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6 col-xs-12">
            <div class="page-login-form box">
              <h3>
                Iniciar sesión
              </h3>
              <form class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input type="text" id="sender-email" class="form-control" name="email" placeholder="Usuario">
                  </div>
                </div> 
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input type="password" class="form-control" placeholder="Contraseña">
                  </div>
                </div> 
                <div class="form-group">
                  <input type="checkbox" name="rememberme" value="forever">No cerrar Sesion
                </div> 
                <button class="btn btn-common log-btn">Ingresar</button>
              </form>
              <ul class="form-links">
                <li class="text-center"><a href="signup.html">¿Olvidaste tu contraseña?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
     </div>
</template>

<script>
    export default {
          
    }
</script>

<style lang="scss" scoped>

</style>