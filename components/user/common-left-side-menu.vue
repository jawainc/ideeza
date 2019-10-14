<template>
  <div class="flex-shrink flex flex-col  p-10 bg-white h-full shadow left-side-bar">
    <div class="flex-shrink">


      <!--Left Menu-->
      <div class="mt-10 left-main-menu ">
        <div class="menu-item">
          <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'tachometer-alt']"/> Dashboard
        </div>
        <div class="menu-item">
          <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'stream']"/> My Projects
        </div>
        <div class="menu-item">
          <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'list']"/> Task List
        </div>
        <div class="menu-item">
          <nuxt-link to="/user/news">
            <font-awesome-icon class="mr-5 h-4" :icon="['far', 'newspaper']"/> News Feed
          </nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/user/messages">
            <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'comments']"/> Messages
          </nuxt-link>

        </div>
      </div>
    </div>

    <LeftBotMenu class="flex-srink" />


  </div>
</template>

<script>
  import LeftBotMenu from '~/components/partials/left-menu-bot-items.vue'
    export default {
        name: "common-left-side-menu",
      components: {
        LeftBotMenu
      }
    }
</script>

<style scoped>
  .left-side-bar{
    width: 300px;
    min-width: 300px;
  }
  .menu-item{
    @apply flex mb-5 content-center items-center mt-2 text-gray-700 text-lg font-semibold cursor-pointer;
  }
  .menu-item:hover{
    @apply text-ideeza;
  }
  .left-main-menu svg{
    @apply text-gray-500;
  }
  .menu-item:hover svg{
    @apply text-ideeza;
  }
  .active-link,
  .active-link svg{
    @apply text-ideeza;
  }
</style>
