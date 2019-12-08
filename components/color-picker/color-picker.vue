<template>
    <div class="picker-popup">
      <client-only>
        <chrome-picker :value="color" @input="$emit('updateColor', val)" />
      </client-only>
    </div>
</template>

<script>
    export default {
      name: "color-picker",
      props: ['color'],
    }
</script>

<style scoped>
  .picker-popup{
    @apply absolute bottom-0 bg-white border border-solid border-light-gray z-50 shadow;
  }
</style>
