<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">

      <div class="main-contents">

          <div class="bg-white shadow-md border-solid border-gray-400 overflow-y-auto p-10">
            <div class="flex items-center justify-between pb-3 border-b-2 border-solid border-ideeza-dark">
              <div class="flex items-center">
                <span class="font-semibold text-xl inline-block">Services</span>

              </div>

              <Search placeholder="search services..." />
            </div>

            <div class="my-3 lg:flex justify-between text-sm">
              <div class="flex">
                <div class="flex items-center p-1 border border-solid border-ideeza-gray-700 mr-5">
                  <span class="mr-3">Type: </span>
                  <select class="border-0">
                    <option>Patents</option>
                    <option>Clouds</option>
                    <option>Freelancers</option>
                  </select>
                </div>
                <div class="flex items-center p-1 border border-solid border-ideeza-gray-700">
                  <span class="mr-3">Sort By: </span>
                  <select class="border-0">
                    <option>Cost</option>
                    <option>Rating</option>
                    <option>Work time</option>
                    <option>Address</option>
                  </select>
                </div>
              </div>
              <button @click="$router.back()" class="ml-5 btn btn-normal btn--ideeza-dark px-8 py-2">< Go Back</button>
            </div>

            <!--Results-->
            <h1 class="my-3 font-semibold">Results (58)</h1>

            <div class="services-container mx-auto mt-10">
              <div class="mb-32 lg:mb-20 lg:flex">
                <div class="lg:flex lg:mr-20">
                  <div class="mb-5 lg:mb-0 lg:mr-5">
                    <img class="avatar rounded-full mx-auto"
                         src="https://randomuser.me/api/portraits/men/18.jpg">
                  </div>
                  <div>
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <h1 class="text-lg font-semibold inline-block mr-5">He Someone</h1>
                        <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
                      </div>

                      <div class="flex items-center">
                        <div class="py-1 px-2 border border-solid border-light-gray mr-3">6 Days</div>
                        <div class="py-1 px-2 border border-solid border-light-gray mr-3">$220</div>
                      </div>

                    </div>
                    <div class="my-5 flex items-center">
                      <h2 class="inline-block mr-5 font-semibold text-lg">Code</h2>
                      <span>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
            </span>
                      <span class="ml-3">(5.0)</span>
                    </div>
                    <div class="text-ideeza-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.
                    </div>

                    <div class="flex mt-5">
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">PHP</button>
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Java</button>
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Python</button>
                    </div>

                  </div>
                </div>
              </div>
              <div class="mb-32 lg:mb-20 lg:flex">
                <div class="lg:flex lg:mr-20">
                  <div class="mb-5 lg:mb-0 lg:mr-5">
                    <img class="avatar rounded-full mx-auto"
                         src="https://randomuser.me/api/portraits/men/18.jpg">
                  </div>
                  <div>
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <h1 class="text-lg font-semibold inline-block mr-5">He Someone</h1>
                        <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
                      </div>

                      <div class="flex items-center">
                        <button class="btn btn-normal px-3 py-2">Request Quote</button>
                      </div>

                    </div>
                    <div class="my-5 flex items-center">
                      <h2 class="inline-block mr-5 font-semibold text-lg">Code</h2>
                      <span>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
            </span>
                      <span class="ml-3">(5.0)</span>
                    </div>
                    <div class="text-ideeza-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.
                    </div>

                    <div class="flex mt-5">
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">PHP</button>
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Java</button>
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Python</button>
                    </div>

                  </div>
                </div>
              </div>
              <div class="mb-32 lg:mb-20 lg:flex">
                <div class="lg:flex lg:mr-20">
                  <div class="mb-5 lg:mb-0 lg:mr-5">
                    <img class="avatar rounded-full mx-auto"
                         src="https://randomuser.me/api/portraits/men/18.jpg">
                  </div>
                  <div>
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <h1 class="text-lg font-semibold inline-block mr-5">He Someone</h1>
                        <button class="btn btn-normal btn--ideeza px-5 py-2">Available</button>
                      </div>

                      <div class="flex items-center">
                        <div class="py-1 px-2 border border-solid border-light-gray mr-3">6 Days</div>
                        <div class="py-1 px-2 border border-solid border-light-gray mr-3">$220</div>
                      </div>

                    </div>
                    <div class="my-5 flex items-center">
                      <h2 class="inline-block mr-5 font-semibold text-lg">Code</h2>
                      <span>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
              <font-awesome-icon class="h-3  text-ideeza-gold" :icon="['fas', 'star']"/>
            </span>
                      <span class="ml-3">(5.0)</span>
                    </div>
                    <div class="text-ideeza-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat orci magna, vel mollis purus consequat et. Proin consectetur odio nec varius placerat.
                    </div>

                    <div class="flex mt-5">
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">PHP</button>
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Java</button>
                      <button class="btn btn--ideeza-dark px-3 py-1 mr-3">Python</button>
                    </div>

                  </div>
                </div>
              </div>

            </div>



          </div>

      </div>

    </div>

  </div>
</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import Search from '~/components/form/search.vue'
  export default {
    layout: 'user',
    name: "manufacturers-index",
    components: {
      LeftMenu,
      Search
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
  }
</script>

<style scoped>
  select{
    @apply text-ideeza;
  }
  option{
    @apply text-ideeza-black;
  }
  .services-container{
    width: 100%;
    max-width: 750px;
  }
</style>
