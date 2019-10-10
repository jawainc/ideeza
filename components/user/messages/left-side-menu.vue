<template>
  <div class="flex-shrink flex flex-col  bg-white h-full shadow left-side-bar">
    <div class="flex-shrink">
      <!--Search-->
      <div class="p-10">
        <div class="flex bg-gray-200 border border-solid border-gray-500 rounded-sm">
          <div class="flex-shrink flex contents-center p-2 bg-gary-400">
            <img  src="https://img.icons8.com/ios-glyphs/22/a0aec0/search.png" >
          </div>
          <div class="flex-grow">
            <input class="w-full h-full border-0 outline-none bg-gray-200" placeholder="search">
          </div>
        </div>
      </div>


      <!--Left Menu-->
      <div class="left-main-menu border-t border-solid border-gray-300 ">
        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/women/20.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">Jasmine Mueller</span>
                <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 leading-none" >.</span> 5min ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/men/12.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">Jon Doe</span>
                <span class="text-xs text-ideeza"><span class="text-6xl text-gray-500 leading-none" >.</span> 50min ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/women/8.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">Jane Doe</span>
                <span class="text-xs text-gray-500"><span class="text-6xl text-gray-500 leading-none" >.</span> 1day ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5 px-3 pb-5 border-b border-solid border-gray-300 ">
          <div class="grow">
            <div class="flex items-center">
              <div class="mr-1">
                <img class="h-10 w-10 rounded-full"
                     src="https://randomuser.me/api/portraits/men/3.jpg">
              </div>
              <div>
                <span class="text-base font-semibold text-gray-800">John Snow</span>
                <span class="text-xs text-gray-500"><span class="text-6xl text-gray-500 leading-none" >.</span> 2day ago</span>
                <div class="text-sm text-gray-500">
                  great product, love the func ....
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink">
            <font-awesome-icon class="mr-1 h-4 text-gray-500 hover:text-gray-600 cursor-pointer " :icon="['fas', 'ellipsis-h']"/>
          </div>
        </div>
      </div>
    </div>


    <div class="flex-shrink p-5 ">
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
