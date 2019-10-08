<template>
  <div class="flex flex-col h-full">
    <navigation class="flex-shrink"></navigation>
    <nuxt class="flex-grow" />
  </div>
</template>

<script>
  import navigation from '~/components/partials/header-bar.vue'
  export default {
    components: {navigation}
  }
</script>

<style>

</style>
