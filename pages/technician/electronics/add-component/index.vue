<template>
    <div class="email-support-container mx-auto mt-32">
      <div class="hidden lg:block stepper-bar bg-gray-200 relative mx-auto mb-20">
        <div class="stepper-bar-overlay bg-ideeza-dark" :style="`width: ${overlayWidth}%` "></div>
        <div class="absolute top-0 left-0 h-full w-full z-50 flex justify-between">

          <!--1-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 0}">
            <span class="absolute-center-h-v" >1</span>
            <div class="stepper-text stepper-text--ask" :class="{'active': step >=0 }">Schematic</div>
          </div>
          <!--2-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 1}">
            <span  class="absolute-center-h-v" >2</span>
            <div class="stepper-text stepper-text--review" :class="{'active': step >= 1}">Design</div>
          </div>
          <!--3-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 2 }">
            <span  class="absolute-center-h-v" >3</span>
            <div class="stepper-text stepper-text--complete" :class="{'active': step >= 2 }">Code</div>
          </div>
          <!--4-->
          <div class="stepper-icon-wrapper relative" :class="{'active': step >= 3 }">
            <span  class="absolute-center-h-v" >4</span>
            <div class="stepper-text stepper-text--complete" :class="{'active': step >= 3 }">General</div>
          </div>


        </div>
      </div>

      <div class="search-container flex w-fit-content bg-white items-center content-center border border-solid border-gray-300">
        <div class="h-12 relative w-10">
          <font-awesome-icon class="ml-1 h-4 text-gray-400 absolute-center-h-v" :icon="['fas', 'search']"/>
        </div>
        <input placeholder="Add more components" class="bg-white flex-grow outline-none h-8 text-gray-800 pr-3">
      </div>

      <div class="w-full bg-gray-400 mt-10 components-container"></div>



    </div>
</template>

<script>
    export default {
        name: "index",
      data: function () {
        return {
          step: 0
        }
      },

      computed: {
        overlayWidth () {
          if(this.step === 0)
            return 0;
          else if(this.step === 1)
            return 50;
          else if(this.step === 2)
            return 99;
          else if(this.step === 3)
            return 99;
        }
      }
    }
</script>

<style scoped>
  .components-container{
    height: 400px;
  }
  .email-support-container{
    width: 100%;
    max-width: 950px;
  }
  .stepper-bar{
    width: 600px;
    height: 15px;
  }
  .stepper-bar-overlay{
    @apply rounded-r-lg;
    transition: all 0.3s ease-in;
    height: 100%;
    width: 97%;
    margin-left: 2px;
  }
  .stepper-icon-wrapper{
    @apply rounded-full bg-gray-200 font-semibold;
    width: 50px;
    height: 50px;
    margin-top: -20px;
    transition: all 0.3s ease-in;
  }

  .stepper-icon-wrapper.active{
    @apply bg-ideeza-dark;
  }
  .stepper-icon-wrapper.active {
    @apply text-white;
  }
  .stepper-text{
    @apply absolute font-semibold text-gray-600;
    margin-top: 60px;
  }
  .stepper-text--ask{
    margin-left: 10px;
  }
  .stepper-text--review{
    margin-left: -2px;
  }
  .stepper-text--complete{
    margin-left: -12px;
  }

  @screen lg{
    .thankyou-email{
      height: 500px;
    }
  }
</style>
