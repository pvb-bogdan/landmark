<template>
    <div>
        <TheHeader />
        <router-view class="h-100"/>
    </div>
</template>

<script>
import TheHeader from '@/private/TheHeader'

export default {
  name: 'Layout',
  components: {
    TheHeader: TheHeader
  }
}
</script>
