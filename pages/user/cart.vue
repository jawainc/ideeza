<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">
      <div class="cart-container">
        <div class="shadow-md">
          <CartStepper />
          <nuxt-child></nuxt-child>
          <div class="py-10 lg:px-20 flex flex-col lg:flex-row justify-between">
            <button class="order-2 lg:order-1 my-4 lg:my-0 btn pill-button px-8 py-1">Continue shopping</button>
            <div class="order-1 lg:order-2 px-5 rounded-full bg-gray-200 items-center flex mx-1">
              <img src="~/static/images/percentage.png" alt="">
              <span class="text-lg mx-2 font-semibold">Promo Code</span>
              <input class="mx-2 bg-transparent border-b border-solid border-ideeza ">
              <font-awesome-icon class="ml-2 h-4 cursor-pointer text-gray-500" :icon="['fas', 'long-arrow-alt-right']"/>
            </div>
            <button @click="moveNext" class="order-3 btn pill-button pill-button--ideeza px-8 py-1">Next Step <font-awesome-icon class="ml-2 h-4 cursor-pointer" :icon="['fas', 'long-arrow-alt-right']"/></button>
          </div>
        </div>
      </div>



    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import CartStepper from '~/components/user/cart/stepper.vue'
  import { mapMutations } from 'vuex'

  export default {
    layout: 'user',
    name: "cart-index",
    components: {
      LeftMenu,
      CartStepper
    },
    data: function () {
      return {
        routeTo: [
          '/user/cart/overview',
          '/user/cart/options',
          '/user/cart/cart',
          '/user/cart/services'
        ]
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {
      moveNext() {
        this.next();
        this.$router.push({
          path: this.routeTo[this.$store.state.cartstepper.cartStep]
        });
      },
      ...mapMutations({
        next: 'cartstepper/incrementStep',
        back: 'cartstepper/decrementStep'
      })
    }
  }
</script>

<style scoped>
  .cart-container{
    width: 100%;
    max-width: 1530px;
    padding: 20px 5px;
  }
  @screen lg {
    .cart-container {
      padding: 60px 50px;
    }
  }


</style>
