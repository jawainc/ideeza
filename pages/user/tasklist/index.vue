<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow lg:pt-16 lg:px-10">

      <div class="flex justify-between items-center pb-3 mb-5 border-b border-solid border-gray-400 p-5 lg:p-0">
        <h1 class="text-gray-800 text-xl lg:text-3xl font-semibold">Task List</h1>
        <div class="flex items-center">
          <span class="text-lg font-semibold cursor-pointer mr-5 text-ideeza-black hover:text-ideeza" :class="{'text-ideeza': tab === 'daily'}" @click="tab='daily'">Daily</span>
          <span class="text-lg font-semibold cursor-pointer text-ideeza-black hover:text-ideeza" :class="{'text-ideeza': tab === 'weekly'}" @click="tab='weekly'">Weekly</span>
        </div>
      </div>



      <div class="w-full scroll-container mx-auto">


          <div v-if="tab==='daily'" class="task-wrapper flex mb-10">

            <!--Task Col-->
            <div class="task-col">
              <div class="mx-auto  lg:mx-0 lg:mr-8 pb-5 shadow-md bg-white">
                <div class="py-6 px-5 text-xl font-semibold text-gray-800 border-b border-solid border-gray-400">
                  02nd Thursday
                </div>

                <!--Task content-->
                <div class="my-16 mx-3 p-3">
                  <div class="task-time">09:00 AM - 10:30 AM</div>
                  <div class="task-name">Finish electronics part</div>

                  <div class="mt-8 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="h-10 w-10 mr-2 rounded-full"
                           src="https://randomuser.me/api/portraits/women/17.jpg">
                      <img class="h-10 w-10 mr-2 rounded-full"
                           src="https://randomuser.me/api/portraits/men/16.jpg">
                      <div @click="addNewMember = !addNewMember" class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative " :class="{'active': addNewMember}" >
                        <font-awesome-icon class="absolute-center-h-v mr-1 h-4 " :icon="['fas', 'plus']"/>
                        <InvitePopup v-if="addNewMember" />
                      </div>
                    </div>

                    <!--Attachments-->
                    <div class="flex items-center">
                      <div class="mr-2">
                        <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                      </div>
                      <div class="mr-2">
                        <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="my-16 mx-3 p-3 important">
                  <div class="task-time flex justify-between">
                    <div>09:00 AM - 10:30 AM</div>
                    <div class="opacity-25 text-sm">
                      *IMPORTANT
                    </div>
                  </div>
                  <div class="task-name">Cover sketching</div>

                  <div class="mt-8 flex justify-between items-center">
                    <div class="flex items-center">

                      <img class="h-10 w-10 mr-2 rounded-full"
                           src="https://randomuser.me/api/portraits/men/13.jpg">
                      <div class="add-member">
                        <font-awesome-icon class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800  cursor-pointer " :icon="['fas', 'plus']"/>
                      </div>
                    </div>

                    <!--Attachments-->
                    <div class="flex items-center">
                      <div class="mr-2">
                        <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                      </div>
                      <div class="mr-2">
                        <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="my-16 mx-3 p-3">
                  <div class="task-time">09:00 AM - 10:30 AM</div>
                  <div class="task-name">Small tasks to finish</div>

                  <div class="mt-5">
                    <div>
                      <CheckBox :checked="false" value="" >Do a research on design</CheckBox>
                    </div>
                    <div>
                      <CheckBox :checked="false" value="" >Check if all deliveries are made</CheckBox>
                    </div>
                  </div>

                  <div class="mt-8 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="h-10 w-10 mr-2 rounded-full"
                           src="https://randomuser.me/api/portraits/women/17.jpg">
                      <img class="h-10 w-10 mr-2 rounded-full"
                           src="https://randomuser.me/api/portraits/men/16.jpg">
                      <div class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative">
                        <font-awesome-icon class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800  cursor-pointer " :icon="['fas', 'plus']"/>
                      </div>
                    </div>

                    <!--Attachments-->
                    <div class="flex items-center">
                      <div class="mr-2">
                        <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                      </div>
                      <div class="mr-2">
                        <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="mb-5 text-center">
                  <button @click="showAddTask = true" class="btn pill-button px-5">+Add new task</button>
                </div>
              </div>
            </div>



          </div>

          <div v-if="tab==='weekly'" class=" mb-10">
            <smooth-scrollbar :options="{alwaysShowTracks: true}">
              <div class="task-wrapper flex">
                <!--Task Col-->
                <div class="task-col">
                  <div class="mx-auto  lg:mx-0 lg:mr-8 pb-5 shadow-md bg-white">
                    <div class="py-6 px-5 text-xl font-semibold text-gray-800 border-b border-solid border-gray-400">
                      02nd Thursday
                    </div>

                    <!--Task content-->
                    <div class="my-16 mx-3 p-3">
                      <div class="task-time">09:00 AM - 10:30 AM</div>
                      <div class="task-name">Finish electronics part</div>

                      <div class="mt-8 flex justify-between items-center">
                        <div class="flex items-center">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/women/17.jpg">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/men/16.jpg">
                          <div @click="addNewMember = !addNewMember" class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative " :class="{'active': addNewMember}" >
                            <font-awesome-icon class="absolute-center-h-v mr-1 h-4 " :icon="['fas', 'plus']"/>
                            <InvitePopup v-if="addNewMember" />
                          </div>
                        </div>

                        <!--Attachments-->
                        <div class="flex items-center">
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                          </div>
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="my-16 mx-3 p-3 important">
                      <div class="task-time flex justify-between">
                        <div>09:00 AM - 10:30 AM</div>
                        <div class="opacity-25 text-sm">
                          *IMPORTANT
                        </div>
                      </div>
                      <div class="task-name">Cover sketching</div>

                      <div class="mt-8 flex justify-between items-center">
                        <div class="flex items-center">

                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/men/13.jpg">
                          <div class="add-member">
                            <font-awesome-icon class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800  cursor-pointer " :icon="['fas', 'plus']"/>
                          </div>
                        </div>

                        <!--Attachments-->
                        <div class="flex items-center">
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                          </div>
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="my-16 mx-3 p-3">
                      <div class="task-time">09:00 AM - 10:30 AM</div>
                      <div class="task-name">Small tasks to finish</div>

                      <div class="mt-5">
                        <div>
                          <CheckBox :checked="false" value="" >Do a research on design</CheckBox>
                        </div>
                        <div>
                          <CheckBox :checked="false" value="" >Check if all deliveries are made</CheckBox>
                        </div>
                      </div>

                      <div class="mt-8 flex justify-between items-center">
                        <div class="flex items-center">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/women/17.jpg">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/men/16.jpg">
                          <div class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative">
                            <font-awesome-icon class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800  cursor-pointer " :icon="['fas', 'plus']"/>
                          </div>
                        </div>

                        <!--Attachments-->
                        <div class="flex items-center">
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                          </div>
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="mb-5 text-center">
                      <button @click="showAddTask = true" class="btn pill-button px-5">+Add new task</button>
                    </div>
                  </div>


                </div>

                <!--Task Col-->
                <div v-for="task in tasksWeekly" :key="task.id" class="task-col ">
                  <div class="mr-8 pb-5 shadow-md bg-white">
                    <div class="py-6 px-5 text-xl font-semibold text-gray-800 border-b border-solid border-gray-400">
                      03rd Friday
                    </div>

                    <!--Task content-->
                    <div class="my-16 mx-3 p-3">
                      <div class="task-time">09:00 AM - 10:30 AM</div>
                      <div class="task-name">Finish electronics part</div>

                      <div class="mt-8 flex justify-between items-center">
                        <div class="flex items-center">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/women/17.jpg">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/men/16.jpg">
                          <div class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative " >
                            <font-awesome-icon class="absolute-center-h-v mr-1 h-4" :icon="['fas', 'plus']"/>
                          </div>
                        </div>

                        <!--Attachments-->
                        <div class="flex items-center">
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                          </div>
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="my-16 mx-3 p-3">
                      <div class="task-time">09:00 AM - 10:30 AM</div>
                      <div class="task-name">Need to finish this and that,
                        lorem ipsum dolores sit man...</div>


                      <div class="mt-8 flex justify-between items-center">
                        <div class="flex items-center">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/women/17.jpg">
                          <img class="h-10 w-10 mr-2 rounded-full"
                               src="https://randomuser.me/api/portraits/men/16.jpg">
                          <div class="add-member h-10 w-10 mr-2 bg-gray-300 rounded-full relative">
                            <font-awesome-icon class="absolute-center-h-v mr-1 h-4 text-gray-600 hover:text-gray-800  cursor-pointer " :icon="['fas', 'plus']"/>
                          </div>
                        </div>

                        <!--Attachments-->
                        <div class="flex items-center">
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['far', 'comment']"/> <span class="attachment-no">5</span>
                          </div>
                          <div class="mr-2">
                            <font-awesome-icon class="h-4 text-ideeza  cursor-pointer " :icon="['fas', 'paperclip']"/> <span class="attachment-no">2</span>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="mb-5 text-center">
                      <button @click="showAddTask = true" class="btn pill-button px-5">+Add new task</button>
                    </div>
                  </div>


                </div>
              </div>

            </smooth-scrollbar>
          </div>




      </div>

    </div>

    <!--RightBar-->
    <div class="hidden lg:block task-right-bar bg-white shadow-md py-16">
      <div class="text-gray-800 text-2xl font-semibold text-center">
        Calendar
      </div>
      <!--Calendar-->
      <vc-calendar @dayclick="addTasks" class="mx-auto mt-5" color="pink" is-expanded :theme="theme" />

      <div class="mt-5 py-5 px-5 border-t border-solid border-gray-300">
        <div class="text-xl text-gray-500 font-semibold">
          Latest Activity
        </div>

        <div class="my-5">
          <div class="flex">
            <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                 src="https://randomuser.me/api/portraits/men/10.jpg">
            <div class="text-left mr-3">
              <div class=" text-gray-600 text-sm">
                <span class="font-semibold text-gray-800">John D.</span> added comment
                <br>
                <span class="underline font-semibold">to usability testing</span>
              </div>
              <div class="mt-2 text-gray-500 text-xs">Apr 21, 2018 at 8:20</div>
            </div>
          </div>

        </div>
        <div class="my-5">
          <div class="flex">
            <img class="h-10 w-10 md:h-14 md:w-14 rounded-full mr-3"
                 src="https://randomuser.me/api/portraits/men/4.jpg">
            <div class="text-left mr-3">
              <div class=" text-gray-600 text-sm">
                <span class="font-semibold text-gray-800">John D.</span> attached image
                <br>
                <span class="underline font-semibold">o Cover Sketching</span>
              </div>
              <div class="mt-2 text-gray-500 text-xs">Apr 21, 2018 at 8:20</div>
            </div>
          </div>
          <img class="mt-2" src="~/static/images/attach_image.png">

        </div>
      </div>

    </div>
    <AddTask @onClose="closeAddTask" v-if="showAddTask" />
  </div>


</template>
<script>
  import AddTask from '~/components/user/tasklist/add-task'
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import CheckBox from '~/components/form/checkbox.vue'
  import InvitePopup from '~/components/user/add-member/add-member-popup.vue'
  export default {
    layout: 'user',
    name: "task-index",
    components: {
      LeftMenu,
      CheckBox,
      InvitePopup,
      AddTask
    },
    data: function () {
      return {
        tab: 'daily',
        showAddTask: false,
        addNewMember: false,
        theme: {
          container: {
            light: 'ideeza-date-picker',
          },
          arrows: {
            light:
              'ideeza-arrow',
          },
        },
        tasksDaily: [],
        tasksWeekly: [],
        id: 0
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
      closeAddTask(){
        this.showAddTask = false;
      },
      addTasks(){
        if(this.tab === 'weekly'){
          this.tasksWeekly.push({
            id: this.id
          })
          this.id ++;
        }
      }
    }
  }
</script>

<style scoped>
  .my-scrollbar{
    width: 100%;
    min-width: 300px;
  }
  .task-col{
    @apply mt-5;
    width: 100%;
    max-width: 370px;
    min-width: 360px;
  }
  .task-wrapper{
    max-width: 1200px;
  }
  .task-time{
    @apply text-gray-500;
  }
  .task-name{
    @apply text-gray-800 text-xl font-semibold mt-5;
  }
  .attachment-no{
    @apply text-gray-500 text-sm
  }
  .add-member{
    @apply h-10 w-10 mr-2 bg-gray-300 rounded-full relative cursor-pointer text-gray-600;
  }
  .add-member:hover{
    @apply text-gray-800;
  }
  .add-member.active{
    @apply bg-ideeza-dark text-white;
  }
  .add-member.active:hover{
    @apply text-white;
  }
  .important{
    @apply bg-ideeza-dark
  }
  .important .task-time,
  .important .task-name,
  .important .attachment-no{
    @apply text-white;
  }
  .important .add-member{
    @apply bg-white;
  }
  /*Right Bar*/
  .task-right-bar{
    width: 300px;
    min-width: 300px;
  }

  .accordion-container{
    @apply border-t border-b border-solid border border-gray-300;
  }
  .accordion-container--title{
    @apply flex py-2 px-1;
  }

</style>
