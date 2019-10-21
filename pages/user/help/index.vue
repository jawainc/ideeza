<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow lg:pt-10 lg:pl-20">

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'

  export default {
    layout: 'user-help',
    name: "help-index",
    components: {
      LeftMenu
    },
    data: function () {
      return {}
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>


</style>
