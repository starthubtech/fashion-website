<template>
  <nav>
     <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
        <router-link to="/" class="navbar-brand"> Swidego</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class= "ml-auto">
        <b-nav-item to="/" >Dashboard</b-nav-item>
        <b-nav-item to="/login"  >Login</b-nav-item>
        <b-nav-item to="/register" >Register</b-nav-item>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      
    </b-collapse>
  </b-navbar>
</div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
