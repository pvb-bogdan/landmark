<template>
  <div>
    <!-- <h1>login</h1>
    <b-btn variant="primary" @click="login">Login</b-btn>-->
    <b-container>
      <b-row class="pt-5">
        <b-col md="6" class="mx-auto">
          <b-card class="shadow">
            <div class="ld-card-header text-center">
              <img src="@/assets/images/logo-ld.png" alt="">
              <span class="ld-landmark">LANDMARK</span>
              <span class="ld-holidays">HOLIDAYS</span>
            </div>
            <hr>
            <b-form-group horizontal label="Agency code">
              <b-form-input class="form-control form-control-sm" placeholder="agency code"></b-form-input>
            </b-form-group>
            <b-form-group horizontal label="User name">
              <b-form-input class="form-control form-control-sm" placeholder="user name"></b-form-input>
            </b-form-group>
            <b-form-group horizontal label="Password">
              <b-form-input class="form-control form-control-sm" placeholder="password"></b-form-input>
            </b-form-group>
            <hr>
            <b-btn variant="dark float-right" size="sm" @click="login">
              <i class="fa fa-sign-in mr-2"></i> Login
            </b-btn>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.card {
  background: #f8f8f8;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
}
</style>

<script>
export default {
  name: 'Login',
  methods: {
    login () {
      this.$router.push({ name: 'bookings' })
    }
  }
}
</script>
