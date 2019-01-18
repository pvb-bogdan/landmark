<template>
  <div>
    <TheHeader />
    <h1 class="text-center">{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Landmark',
  data () {
    return {
      msg: 'Welcome to Your Landmark site'
    }
  }
}

</script>

