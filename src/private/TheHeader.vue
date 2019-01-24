<template>
  <b-navbar toggleable="md" type="light" variant="light" class="ld-navbar fixed-top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img src="@/assets/images/logo-ld.png" alt="">
      <span class="ld-landmark">LANDMARK</span><span class="ld-holidays">HOLIDAYS</span>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">TOURS</b-nav-item>
        <b-nav-item href="#">HOTEL</b-nav-item>
        <b-nav-item href="#">FLIGHT</b-nav-item>
        <b-nav-item :to="{name: 'bookings'}">BOOKINGS</b-nav-item>
        <b-nav-item href="#">CONTACT</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
          <span class="fa fa-user mr2"></span> Landmark User
          </template>
          <b-dropdown-item href="#">Mr. User User</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">Log out</b-dropdown-item>
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
