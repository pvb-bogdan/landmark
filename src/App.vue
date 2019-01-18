<template>
  <div id="app">
    <router-view/>
    <global-modal></global-modal>
    <notifications :max="5" :position="'bottom right'"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
