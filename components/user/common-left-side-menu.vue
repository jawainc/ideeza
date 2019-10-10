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
          <font-awesome-icon class="mr-5 h-4" :icon="['far', 'newspaper']"/> News Feed
        </div>
        <div class="menu-item">
          <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'comments']"/> Messages
        </div>
      </div>
    </div>


    <div class="flex-shrink border-t border-solid border-gray-300">
      <div class="flex content-center items-center mt-5 font-semibold text-gray-500 text-lg hover:text-gray-700 cursor-pointer">
        <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'info-circle']"/> Help?
      </div>
      <div class="flex content-center items-center mt-2 font-semibold text-gray-500 text-lg hover:text-gray-700 cursor-pointer">
        <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'cog']"/> Settings
      </div>
      <div class="flex content-center items-center mt-2 font-semibold text-gray-500 text-lg hover:text-gray-700 cursor-pointer">
        <font-awesome-icon class="mr-5 h-4" :icon="['fas', 'user-tie']"/> Contact Support
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "common-left-side-menu"
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
</style>
