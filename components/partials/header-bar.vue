<template>
    <div class="header-bar">
      <div class="flex items-center">
        <img class="side-bar-toggler mr-2" src="https://img.icons8.com/ios-glyphs/17/ffffff/menu.png">
        <nuxt-link to="/"><img class="logo" src="~/static/images/logo-1.png"></nuxt-link>
      </div>
      <div class="search-form-container">
        <div class="bg-white h-full relative pl-5 pr-5"><img class="search-logo" src="~/static/images/search-purple.png"></div>
        <input placeholder="search" class="search-input">
        <div class="bg-white h-full relative pl-5 pr-5"><img class="search-logo" src="https://png.icons8.com/android/17/cccccc/microphone.png"></div>
      </div>
      <div class="flex justify-end">
        <button class="cart-button">
          <img class="cart-icon" src="https://img.icons8.com/ios-glyphs/50/ffffff/shopping-cart.png">
        </button>
        <div class="flex justify-center items-center content-center w-m-c">
          <img class="h-10 w-10 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/17.jpg">
          <span class="text-white inline-block">John Doe</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "header-bar",
      data: function () {
        return {

        }
      }
    }
</script>

<style scoped>
  .w-m-c{
    width: max-content;
  }
  .header-bar{
    @apply flex justify-between pl-5 pr-5 pt-2 pb-2;
    background-image: linear-gradient(54deg,#ff00c7,#441184);
  }
  .logo{
    width: 70px;
    height: 35px;
  }
  .search-form-container{
    @apply w-full flex ml-20 mr-20;
    max-width: 912px;
  }
  .search-input{
    @apply w-full bg-white border-0 outline-none;
  }
  .search-logo{
    @apply absolute m-0;
    width: 13px;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cart-button{
    @apply bg-transparent rounded-full h-10 w-10 flex items-center justify-center mr-5;
    transition: .12s ease-in;
  }
  .cart-button:hover{
    background-color: rgba(255,255,255,0.1);
  }
  .cart-icon{
    width: 25px;
    height: 24px;
  }
  .side-bar-toggler{
    width: 17px;
    height: 17px;
  }
</style>
