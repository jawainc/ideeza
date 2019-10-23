<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="support-container flex-grow lg:pt-10 lg:pl-10">

      <h1 class="mb-20 text-gray-800 text-2xl lg:text-4xl lg:mt-10 font-semibold">Order Tracking</h1>
      <Stepper  />

      <div class="track-container mx-auto p-10 mt-10 border border-solid border-ideeza">
        <nuxt-child></nuxt-child>
      </div>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import Stepper from '~/components/user/order-tracking/stepper.vue'
  import { mapMutations } from 'vuex'

  export default {
    layout: 'user',
    name: "tracking-index",
    components: {
      LeftMenu,
      Stepper
    },
    data: function () {
      return {
        routeTo: [
          '/user/order-tracking/making-product',
          '/user/order-tracking/delivery',
          '/user/order-tracking/pick-up',
          '/user/order-tracking/finish'
        ]
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      },
      trackStep () {
        return this.$store.state.trackstepper.trackStep;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .track-container{
    width: 100%;
    max-width: 1350px;
  }

</style>
