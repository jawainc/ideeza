<template>
  <div class="bg-gray-200 flex">
    <!--  Left Side Bar  -->
    <div class="flex-shrink p-10 bg-white h-full shadow left-side-bar">
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
      <div class="mt-10">
        <LeftMenu :menu-items="currentMenu"/>
      </div>
    </div>

    <!-- Main Contents -->
    <div class="flex-grow p-10">
      <div class="flex justify-between border-b border-gray-400 pb-3">
        <div class="text-xl font-bold">Circuit Board</div>
        <div class="flex items-center">
          <span class="panel-menu" @click="currentMenu = menuData.electronic">Electronics</span>
          <span class="ml-5 panel-menu" @click="currentMenu = menuData.code">Code</span>
          <span class="ml-5 panel-menu" @click="currentMenu = menuData.cover"><img class="mr-1 panel-menu-icon" src="~/static/images/mask-gray.png" >Cover</span>
          <span class="ml-5 panel-menu" @click="currentMenu = menuData.general">General</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftMenu from '~/components/user/pro/left-menu.vue'
    export default {
      layout: 'user',
      name: "index",
      components: {
        LeftMenu
      },
      data: function () {
        return {
          menuData: {
            electronic: {
              name: 'Electronics',
              children: [
                {
                  name: 'Core',
                  children: [
                    {
                      name: 'CPU',
                      children: [
                        {
                          name: 'Atmega',
                        },
                        {
                          name: 'Pic',
                        },
                        {
                          name: 'St',
                        },
                        {
                          name: 'Raspberry Pi',
                        },
                        {
                          name: 'Intel',
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'Sensors',
                },
                {
                  name: 'Networks',
                }

              ]
            },
            code: {
              name: 'Code',
              children: [
                {
                  name: 'Core Code',
                  children: [
                    {
                      name: 'CPU',
                      children: [
                        {
                          name: 'Atmega',
                        },
                        {
                          name: 'Pic',
                        },
                        {
                          name: 'St',
                        },
                        {
                          name: 'Raspberry Pi',
                        },
                        {
                          name: 'Intel',
                        }
                      ]
                    },
                    {
                      name: 'Sensors',
                    },
                    {
                      name: 'Networks',
                    }
                  ]
                },
                {
                  name: 'Built In',
                  children: [
                    { name: 'Logic'},
                    { name: 'Math'},
                    { name: 'Lists'},
                    { name: 'Colors'},
                    { name: 'Variables'},
                    { name: 'Procedures'},
                  ]
                }
              ]
            },
            cover: {
              name: 'Cover',
              children: [
                {name: 'Plastic Cover'},
                {name: 'Metal Net'},
                {name: 'Sheet Metal'},
                {name: 'Buttons'},
                {name: 'Display'},
                {name: 'Transparence Sheet'},
                {name: 'Indicator'}
              ]
            },
            general: {
              name: 'General',
              children: []
            },

          },
          currentMenu: {}
        }
      },
      mounted() {
        this.currentMenu = this.menuData.electronic;
      }
    }
</script>

<style scoped>
  .left-side-bar{
    width: 300px;
  }
  .panel-menu{
    @apply inline-block font-semibold text-gray-700 cursor-pointer;
  }
  .panel-menu:hover{
    @apply text-ideeza;
  }
  .panel-menu-icon{
    width: 13px;
    display: inline-block;
  }
</style>
