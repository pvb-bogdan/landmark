<template>
  <b-navbar toggleable="md" type="light" variant="light" class="ld-navbar fixed-top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img src="@/assets/images/logo-ld.png" alt="">
      <span class="ld-landmark">LANDMARK</span><span class="ld-holidays">HOLIDAYS</span>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{name: 'bookings'}">Packages</b-nav-item>
        <b-nav-item href="#">Flight Only</b-nav-item>
        <b-nav-item href="#">My Bookings</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
          <span class="fa fa-user mr2"></span> Landmark User
          </template>
          <b-dropdown-item href="#"><i class="fa fa-user mr2"></i>  User User</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout"><i class="fa fa-sign-out mr2"> </i>  Sign out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: 'TheHeader',
  methods: {
    logout () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
