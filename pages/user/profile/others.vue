<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex builder-panel main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>
    <!-- Main Contents -->
    <div class="flex-grow lg:p-10">
      <div class="lg:flex p-2 lg:p-5 xl:p-20 bg-white shadow-md">
        <div class="left-panel">
          <img class="w-full" src="https://i.pravatar.cc/400?img=68" alt="">

          <div class="mt-10 mb-5 semi-border  relative">
            <span class="font-semibold text-gray-500 pr-3 bg-white">SOCIAL MEDIA</span>
          </div>
          <div class="">
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'facebook-square']"/>
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'linkedin']"/>
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'behance-square']"/>
            <font-awesome-icon class="mr-2 h-6 text-gray-500 text-4xl hover:text-gray-800 cursor-pointer" :icon="['fab', 'dribbble-square']"/>
          </div>

          <div class="mt-10 mb-5 semi-border  relative">
            <span class="font-semibold text-gray-500 pr-3 bg-white">SKILLS</span>
          </div>
          <div class="mt-10">
            <span class="font-semibold text-ideeza-dark block text-lg">
              Product Design
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              Electronics
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              3D Modeling
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              Prototyping
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              3D Max
            </span>
            <span class="font-semibold text-ideeza-dark block text-lg">
              AutoCad
            </span>
          </div>
        </div>
        <div class="lg:ml-16 flex-grow">
          <div class="w-full flex justify-between items-top">
            <div class="lg:flex items-top">
              <div class="text-3xl font-semibold leading-none">
                John Doe
                <span class="block font-normal text-base text-ideeza-dark mt-3">Product Designer</span>
              </div>
              <div class="lg:ml-10 text-gray-500">
                <font-awesome-icon class="mr-1 h-6 align-middle" :icon="['fas', 'map-marker-alt']"/>
                New york, NY
              </div>
            </div>

          </div>
          <div class="lg:mt-10">
            <span class="text-gray-500 block">RATINGS</span>
            <div class="flex items-center">
              <span class="text-gray-800 font-semibold text-xl">4,0</span>
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star.png" alt="">
              <img class="rating-star" src="~/static/images/star-gray.png" alt="">
            </div>
          </div>
          <div class="lg:mt-10 lg:flex items-center">
            <button class="btn btn-normal px-10 py-3" :class="{'btn-green': isConnected}" @click="isConnected = !isConnected">{{connected}}</button>
            <button class="btn btn-normal mx-5 px-10 py-3">Send Message</button>
            <div class="relative " v-click-outside="onClickOutside">
              <button class="btn btn-normal px-10 py-3" :class="{'bg-ideeza-gray-100': focusMore}" @click="focusMore = !focusMore">More</button>
              <div class="z-50 absolute bg-white shadow-md py-2 pl-1 text-xs more-popup" v-show="focusMore" >
                <div class="px-2 py-3 text-ideeza-black hover:text-ideeza block cursor-pointer">Follow</div>
                <div class="px-2 py-3 text-ideeza-black hover:text-ideeza block cursor-pointer">Report User</div>
                <div class="px-2 py-3 text-ideeza-black hover:text-ideeza block cursor-pointer">Block User</div>
                <div class="px-2 py-3 text-ideeza-black hover:text-ideeza block cursor-pointer">Send Agency Invitation</div>

              </div>
            </div>
          </div>

          <!--Tabs-->
          <div class="tabs-container z-10 relative flex lg:mt-20">
            <div @click="tabItem='timeline'" class="tab-item" :class="{active: tabItem === 'timeline', 'border-bot': tabItem !== 'timeline'}"><font-awesome-icon class="mr-3 h-5" :icon="['fas', 'eye']"/> Shared Projects</div>
            <div @click="tabItem='reviews'" class="tab-item" :class="{active: tabItem === 'reviews', 'border-bot': tabItem !== 'reviews'}"><font-awesome-icon class="mr-3 h-5" :icon="['fas', 'star']"/> Reviews</div>
          </div>
          <!--Time line-->
          <div v-if="tabItem === 'timeline'" class="mt-5">
            <!--New Feed-->

            <div class="flex mb-10 ">

              <div class="flex-grow bg-white p-5 shadow">
                <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
                  <div>Sarah Doe <span class="font-normal">add a new project</span> <span class="text-gray-800">Retro Headphones</span> • <span class="font-normal text-xs">3 weeks ago</span></div>
                  <div>
                    <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                  </div>
                </div>
                <div class="bg-gray-200">
                  <img class="w-full object-fit object-center" src="~/static/images/car-big.png" alt="">
                </div>
                <div class="mt-10 flex justify-between items-center">
                  <div class="flex items-center">
                    <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                      <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'thumbs-up']"/> LIKE
                    </div>
                    <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                      <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'share-alt']"/> SHARE
                    </div>
                    <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                      <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'comment-dots']"/> COMMENT
                    </div>
                  </div>

                  <div class="flex items-center font-semibold">
                    <div class="mr-6 text-ideeza">26 comments</div>
                    <div class="mr-6">3 share</div>
                  </div>


                </div>
              </div>
            </div>

            <div class="flex mb-10">

              <div class="flex-grow bg-white py-5 shadow">
                <div class="text-gray-600 font-semibold text-lg mb-5 flex justify-between mx-5">
                  <div>Sarah Doe <span class="font-normal">add a new project</span> <span class="text-gray-800">Retro Headphones</span> • <span class="font-normal text-xs">3 weeks ago</span></div>
                  <div>
                    <font-awesome-icon class="mr-1 h-6 text-lg inline-block text-gray-500 hover:text-gray-600 cursor-pointer" :icon="['fas', 'ellipsis-h']"/>
                  </div>
                </div>
                <div class="bg-gray-200 mx-5">
                  <img class="w-full object-fit object-center" src="~/static/images/headphone-big.png" alt="">
                </div>

                <div class="p-10 flex justify-between items-center">
                  <div class="flex items-center">
                    <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                      <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'thumbs-up']"/> LIKE
                    </div>
                    <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                      <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'share-alt']"/> SHARE
                    </div>
                    <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                      <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-3" :icon="['fas', 'comment-dots']"/> COMMENT
                    </div>
                  </div>

                  <div class="flex items-center font-semibold">
                    <div class="mr-6 text-ideeza">26 comments</div>
                    <div class="mr-6">3 share</div>
                  </div>


                </div>

                <div class="text-gray-600 text-lg border-t border-b border-solid border-gray-300 py-5 px-5">
                  <span class="font-semibold">You</span> and <span class="font-semibold">35 others</span> like this
                </div>

                <!--Comments-->
                <div class="border-b border-solid border-gray-300 py-5 px-5">
                  <div class="flex w-full mb-10">
                    <div class="w-16">
                      <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                    </div>
                    <div class="flex-grow bg-gray-200 rounded p-5" >
                      <div class="flex justify-between">
                        <div>
                          <h2 class="mr-10 font-semibold">William Doe</h2>
                          <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                        </div>
                        <div>3 min ago.</div>
                      </div>
                      <p class="text-xs my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                      </p>
                      <div class="flex items-center">
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                        </div>
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full pl-16 mb-10">
                    <div class="w-16">
                      <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                    </div>
                    <div class="flex-grow bg-gray-200 rounded p-5" >
                      <div class="flex justify-between">
                        <div>
                          <h2 class="mr-10 font-semibold">William Doe</h2>
                          <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                        </div>
                        <div>3 min ago.</div>
                      </div>
                      <p class="text-xs my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                      </p>
                      <div class="flex items-center">
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                        </div>
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full mb-10">
                    <div class="w-16">
                      <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                    </div>
                    <div class="flex-grow bg-gray-200 rounded p-5" >
                      <div class="flex justify-between">
                        <div>
                          <h2 class="mr-10 font-semibold">William Doe</h2>
                          <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                        </div>
                        <div>3 min ago.</div>
                      </div>
                      <p class="text-xs my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                      </p>
                      <div class="flex items-center">
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                        </div>
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full mb-10">
                    <div class="w-16">
                      <img class="feed-comment-avatar rounded-full" src="https://randomuser.me/api/portraits/men/15.jpg" alt="">
                    </div>
                    <div class="flex-grow bg-gray-200 rounded p-5" >
                      <div class="flex justify-between">
                        <div>
                          <h2 class="mr-10 font-semibold">William Doe</h2>
                          <span class="text-xs font-hairline">Consultant at Google Inc.</span>
                        </div>
                        <div>3 min ago.</div>
                      </div>
                      <p class="text-xs my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus libero at odio vestibulum, at blandit justo sagittis. Vestibulum eget dui massa.
                      </p>
                      <div class="flex items-center">
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'thumbs-up']"/> 90
                        </div>
                        <div class="flex items-center cursor-pointer text-xs text-ideeza-black mr-5">
                          <font-awesome-icon class="mr-1 h-4 text-sm inline-block text-ideeza-dark mr-1" :icon="['fas', 'comment-dots']"/> 90
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <!--Write Comments-->
                <div class="mt-10 mx-5 bg-gray-200 p-10">
                  <input class="bg-gray-200 text-gray-600 text-semibold text-lg outline-none" placeholder="Write your comment...">
                </div>

              </div>
            </div>
          </div>


          <!--Reviews-->
          <div class="mt-5" v-if="tabItem === 'reviews'">
            <div class="mb-10 mt-5">
              <div class="flex justify-between items-center w-full">
                <div class="flex items-center">
                  <img class="feed-avatar w-16 rounded-full mr-5" src="https://randomuser.me/api/portraits/women/31.jpg" alt="">
                  <div class=""><span class="font-semibold text-ideeza-dark inline-block mr-5">Jane Doe</span> <span class="font-sm text-gray-500">Reviewed 30 days ago</span></div>
                </div>
                <div class="flex items-center text-gray-500 text-sm hover:text-gray-800 cursor-pointer">
                  <font-awesome-icon class="mr-2 h-4" :icon="['fas', 'flag']"/>
                  Report
                </div>

              </div>
              <div class="mt-5 border rounded-lg border-solid border-gray-500 p-5 text-sm">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">"Perfect innovative gift of my dreams"</div>
                  <div>
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                  </div>
                </div>
                <p class="font-sm my-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt metus enim, in elementum sem egestas nec. Suspendisse quis diam lectus. In a ipsum risus. Vivamus a nibh et risus iaculis ultricies at a enim. Aenean tristique leo vel posuere fringilla. Duis tempus velit in eros dignissim accumsan. Quisque massa leo, volutpat facilisis pharetra in, porta a lorem.
                </p>
              </div>
            </div>

            <div class="mb-10 mt-5">
              <div class="flex justify-between items-center w-full">
                <div class="flex items-center">
                  <img class="feed-avatar w-16 rounded-full mr-5" src="https://randomuser.me/api/portraits/women/32.jpg" alt="">
                  <div class=""><span class="font-semibold text-ideeza-dark inline-block mr-5">Shane Doe</span> <span class="font-sm text-gray-500">Reviewed 30 days ago</span></div>
                </div>
                <div class="flex items-center text-gray-500 text-sm hover:text-gray-800 cursor-pointer">
                  <font-awesome-icon class="mr-2 h-4" :icon="['fas', 'flag']"/>
                  Report
                </div>

              </div>
              <div class="mt-5 border rounded-lg border-solid border-gray-500 p-5 text-sm">
                <div class="flex justify-between">
                  <div class="text-lg font-semibold">"Perfect innovative gift of my dreams"</div>
                  <div>
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                    <img class="rating-star" src="~/static/images/star.png" alt="">
                  </div>
                </div>
                <p class="font-sm my-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt metus enim, in elementum sem egestas nec. Suspendisse quis diam lectus. In a ipsum risus. Vivamus a nibh et risus iaculis ultricies at a enim. Aenean tristique leo vel posuere fringilla. Duis tempus velit in eros dignissim accumsan. Quisque massa leo, volutpat facilisis pharetra in, porta a lorem.
                </p>
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
    export default {
      layout: 'user',
      name: "profile-index",
      components: {
        LeftMenu,
      },
      data: function() {
        return {
          tabItem: 'timeline',
          focusMore: false,
          isConnected: false
        }
      },
      computed: {
        leftMenu () {
          return this.$store.state.usermenu.openLeftMenu;
        },
        connected () {
          return this.isConnected ? 'Connected' : 'Connect';
        }
      },
      methods: {
        onClickOutside() {
          this.focusMore = false;
        }
      }
    }
</script>

<style scoped>

  .profile-panel{
    width: 100%;
    max-width: 1533px;
  }
  .left-panel{
    width: 100%;
  }
  .semi-border{
    @apply z-10;
  }

  .semi-border:before {
    @apply border-t-4 border-solid border-gray-200;
    content:"";
    margin: 0 auto; /* this centers the line to the full width specified */
    position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
    left: 0; right: 0; bottom: 4px;
    z-index: -1;
  }
  .rating-star{
    @apply inline ml-3;
    width: 20px;
    height: 20px;
  }
  .tab-item{
    @apply cursor-pointer z-50 bg-white px-5 py-5 font-semibold text-xl text-gray-500 flex items-center;
  }
  .tab-item.border-bot{
    border-bottom: 4px solid #edf2f7;
  }
  .tab-item.active{
    @apply border-t-4 border-l-4 border-r-4 border-solid border-gray-200 text-ideeza;
  }
  .tabs-container:before {
    @apply border-t-4 border-solid border-gray-200;
    content:"";
    margin: 0 auto; /* this centers the line to the full width specified */
    position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
    left: 0; right: 0; bottom: 0;
    z-index: -1;
  }
  .heading-contact{
    width: 150px;
  }
  .project-image{
    @apply mr-2 mb-2;
    max-width: 285px;
  }
  .feed-comment-avatar{
    width: 48px;
  }
  .more-popup{
    width: 170px;
  }
  @screen lg{
    .left-panel{
      max-width: 366px;
    }
  }
</style>
