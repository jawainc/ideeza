<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <!--Header Bar-->
        <div class="header-bar lg:flex items-center mx-auto">
           <nuxt-link class="header-menu" to="/technician/electronics/add-part">
             Add Part
           </nuxt-link>

          <nuxt-link class="header-menu" to="/technician/electronics/add-component">
            Add Component
          </nuxt-link>

          <nuxt-link class="header-menu" to="/technician/electronics/add-pcb">
            Add PCB
          </nuxt-link>


        </div>
        <nuxt-child></nuxt-child>

        <!--Bot Buttons-->
        <div class="mt-10 w-full mx-auto button-bar flex">
          <div class="w-1/2 text-left">
            <button v-if="step > 0" @click="back" class="btn pill-button px-16 py-1">Back</button>
          </div>
          <div class="w-1/2 text-right">
            <button @click="next" class="btn pill-button pill-button--ideeza px-16 py-1">Next</button>
          </div>
        </div>

      </div>


    </div>

    <!--Right Sliders-->
    <div :class="{'active': activeDrawer === 'cart'}" class="right-drawer right-drawer--cart  fixed-center-v right-0 bg-transparent flex handle-margin z-50">
      <!--handle-->
      <div>
        <div @click="handle('cart')" class="handle">
          <font-awesome-icon class="ml-1 h-6 text-gray-600 text-3xl" :icon="['fas', 'shopping-cart']"/>
        </div>
      </div>
      <div class="handle-contents handle-contents--cart"></div>
    </div>

    <div :class="{'active': activeDrawer === 'link'}" class="right-drawer fixed-center-v right-0 bg-transparent flex z-40">
      <!--handle-->
      <div>
        <div @click="handle('link')" class="handle">
          <font-awesome-icon class="ml-1 h-6 text-gray-600 text-3xl" :icon="['fas', 'link']"/>
        </div>
      </div>
      <div class="handle-contents"></div>
    </div>

    <div :class="{'active': activeDrawer === 'options'}" class="right-drawer fixed-center-v right-0 bg-transparent flex handle-margin-2 z-30">
      <!--handle-->
      <div>
        <div @click="handle('options')" class="handle z-50">
          <font-awesome-icon class="ml-1 h-6 text-gray-600 text-3xl" :icon="['fas', 'cog']"/>
        </div>
      </div>
      <div class="handle-contents"></div>
    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'

  export default {
    layout: 'technician',
    name: "electronics-index",
    components: {
      LeftMenu
    },
    data: function () {
      return {
        activeDrawer: null,
        step: 0
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
      back() {

      },
      next() {

      },
      handle(drawer){
        if(this.activeDrawer === drawer)
          this.activeDrawer = null;
        else
          this.activeDrawer = drawer;
      }
    }
  }
</script>

<style scoped>
  .handle{
    @apply bg-white shadow-md px-6 py-4 rounded-l-lg cursor-pointer;
    height: fit-content;
    margin-left: -86px;
  }
  .handle-margin{
    margin-top: -50px;
  }
  .handle-margin-2{
    margin-top: 50px;
  }
  .right-drawer{
    @apply bg-white;
    width: 450px;
    margin-right: -450px;
  }
  .right-drawer--cart{
    width: 650px;
    margin-right: -650px;
  }
  .right-drawer.active{
    margin-right: 0px;
  }

  .handle-contents{
    @apply bg-white p-4 shadow rounded-bl-lg;
    height: 300px;
    transition: all 0.3s ease-in;
  }
  .handle-contents--cart{

  }
  .header-bar{
    width: fit-content;
  }
  .button-bar{
    width: 100%;
    max-width: 950px;
  }
  .header-menu{
    @apply px-6 py-3 bg-white text-lg text-gray-600 cursor-pointer mr-6 font-semibold;
  }
  .header-menu:hover{
    @apply text-ideeza;
  }
  .header-menu.active-link{
    @apply bg-transparent text-ideeza border border-solid border-gray-300;
  }
</style>
