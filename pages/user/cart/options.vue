<template>
  <div class="py-10 lg:px-20   flex flex-col lg:flex-row lg:justify-center justify-center items-center">
     <div class="options-container flex flex-col items-center mb-10 lg:mr-64">
       <BluePrintIcon class="fill-current" />
       <span>Download the blueprint</span>
     </div>

    <div class="options-container flex flex-col items-center">
      <ShoppingBasketIcon class="fill-current" />
      <span>Go to checkout</span>
    </div>
  </div>
</template>

<script>
  import BluePrintIcon from '~/components/partials/icons/blueprint-icon.vue'
  import ShoppingBasketIcon from '~/components/partials/icons/shopping-basket-icon.vue'
    export default {
        name: "cart-options",
      mounted() {
        this.$store.commit('cartstepper/set', {position: 1})
      },
      components: {
        BluePrintIcon,
        ShoppingBasketIcon
      }
    }
</script>

<style scoped>
  .options-container{
    @apply text-2xl text-gray-300 cursor-pointer font-semibold;
  }
  .options-container:hover{
    @apply text-ideeza-dark;
  }

  @screen lg{
    .options-container{
      @apply text-4xl;
    }
  }
</style>
