<template>
  <div class="login ">

    <div class=" d-flex align-content-center flex-wrap bg-dark">
        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                    <a href="index.html">
                        <h2><small>swedigo</small> Admin</h2>
                    </a>
                </div>
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password">
                        </div>
                                <div class="checkbox">
                                    <label>
                                <input type="checkbox"> Remember Me
                            </label>
                                    <label class="pull-right">
                                <a href="#">Forgotten Password?</a>
                            </label>

                                </div>
                                <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                <div class="social-login-content">
                                    <div class="social-button">
                                        <button type="button" class="btn social google btn-flat btn-addon mb-3"><i class="ti-google"></i>Sign in with google</button>
                                    </div>
                                </div>
                                <div class="register-link m-t-15 text-center">
                                    <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
       </div>
   </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{
    color:#878787;
}
.login-logo {
  text-align: center;
  margin-bottom: 15px; }
  .login-logo span {
    color: #ffffff;
    font-size: 24px; }

.login-content {
  max-width: 540px;
  margin: 8vh auto; }

.login-form {
  background: #ffffff;
  padding: 30px 30px 20px;
  border-radius: 2px; }

.login-form h4 {
  color: #878787;
  text-align: center;
  margin-bottom: 50px; }

.login-form .checkbox {
  color: #878787; }

.login-form .checkbox label {
  text-transform: none; }

.login-form .btn {
  width: 100%;
  text-transform: uppercase;
  font-size: 14px;
  padding: 15px;
  border: 0; }

.login-form label {
  color: #878787;
  text-transform: uppercase; }

.login-form label a {
  color: #ff2e44; }
</style>
