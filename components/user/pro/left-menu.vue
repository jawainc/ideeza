<template>
    <div>
      <!--Menu Items-->
      <div v-if="MenuItems">

          <div class="cursor-pointer  mb-3 flex relative content-center ">
            <div class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/ff00c7/chevron-right.png"></div>
            <div class="text-lg font-semibold">{{MenuItems.name}}</div>
          </div>
        <!--Sub Menu Items-->
        <div v-if="MenuItems.children" class="pb-3 pt-3 border-b border-t border-solid border-gray-300">
          <ul v-for="childItem in MenuItems.children" :key="childItem.name" class="sub-menu ml-3 text-gray-600">
            <li class="cursor-pointer pb-3 flex relative content-center">
              <div v-if="childItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
              <div class="text-lg ">{{childItem.name}}</div>
            </li>
            <!--Sub Sub Menu Items-->
            <li v-if="childItem.children">
              <ul v-for="subChildItem in childItem.children" :key="subChildItem.name" class="sub-menu ml-3 text-gray-600">
                <li class="cursor-pointer pb-3 flex relative content-center">
                  <div v-if="subChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                  <div class="text-lg ">{{subChildItem.name}}</div>
                </li>
                <!--Sub Sub Sub Menu Items-->
                <li v-if="subChildItem.children">
                  <ul v-for="subSubChildItem in subChildItem.children" :key="subSubChildItem.name" class="sub-menu ml-3 text-gray-600">
                    <li class="cursor-pointer pb-3 flex relative content-center">
                      <div v-if="subSubChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                      <div class="text-lg ">{{subSubChildItem.name}}</div>
                    </li>
                    <!--Sub Sub Sub Sub Menu Items-->
                    <li v-if="subSubChildItem.children" class="cursor-pointer pb-3 flex relative content-center">
                      <ul v-for="subSubSubChildItem in subSubChildItem.children" :key="subSubSubChildItem.name" class="sub-menu ml-3 text-gray-600">
                        <li class="cursor-pointer pb-3 flex relative content-center">
                          <div v-if="subSubSubChildItem.children" class="relative block w-5" ><img class="absolute-center-v" src="https://img.icons8.com/ios-glyphs/11/718096/chevron-right.png"></div>
                          <div class="text-lg ">{{subSubSubChildItem.name}}</div>
                        </li>


                        <li v-if="subSubSubChildItem.children" class="cursor-pointer pb-3 flex relative content-center">
                          <ul v-for="lastItem in subSubSubChildItem.children" :key="lastItem.name" class="sub-menu ml-3 text-gray-600">
                            <li class="cursor-pointer pb-3 flex relative content-center">
                              <div class="text-lg ">{{lastItem.name}}</div>
                            </li>


                          </ul>


                        </li>

                      </ul>


                    </li>

                  </ul>
                </li>

              </ul>
            </li>
          </ul>
        </div>




      </div>
    </div>
</template>

<script>
    export default {
      name: "left-menu",
      props: ['MenuItems']
    }
</script>

<style scoped>

</style>
