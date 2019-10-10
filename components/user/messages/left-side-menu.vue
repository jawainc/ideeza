<template>
  <div class="flex-shrink flex flex-col  p-10 bg-white h-full shadow left-side-bar">
    <div class="flex-shrink">
      <!--Search-->
      <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
        <div class="flex-shrink flex contents-center p-2 bg-gary-400">
          <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
        </div>
        <div class="flex-grow">
          <input class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
        </div>
      </div>

      <!--Left Menu-->
      <div class="mt-10 left-main-menu ">

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
