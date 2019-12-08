<template>
  <div class="w-full">
    <div class="w-full shadow-md bg-white relative">

      <div class="p-5 lg:flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center mr-5">
            <check-box :checked="true" @onChange="toggleGrid">Grid</check-box>
          </div>
          <div class="flex items-center">
            <span class="mr-1">Category</span>
            <select class="w-32 bg-white p-1 border border-solid border-gray-400">
              <option></option>
            </select>
          </div>
        </div>
        <div class="flex items-center">
          <button class="btn pill-button py-0 px-5 mr-5" >Upload 3D</button>
          <button class="btn pill-button py-0 px-5" >Upload image</button>
        </div>
      </div>

      <div class="content-container relative">
        <client-only placeholder="Loading...">

          <engine class="border border-light-gray engine-container"
                  :init-data="initDataForEngine"
                  :router="router"
                  :visibleGrid="visibleGrid"
                  :transform="transform"
                  :transformData="transformData"
                  :objectData="objectData"
                  :objectColor="objectColor"
                  :uploadData="uploadData"
                  :background="background"
                  :apiPlatform="apiPlatform"
                  :searchFor="searchFor"
                  @selectObject="selectedObject"
          />
        </client-only>
      </div>

      <div class="flex justify-between p-5 w-full">
        <div class="flex items-center font-semibold text-gray-800">
          <span class="mr-2">Axis</span>
          <span class="mr-2 text-lg">X</span>
          <input type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
          <span class="mr-2 text-lg">Y</span>
          <input type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
          <span class="mr-2 text-lg">Z</span>
          <input type="text" class="w-20 bg-white p-1 border border-solid border-gray-400 mr-2">
        </div>
        <div class="flex items-center font-semibold text-gray-800">
          <div class="relative">
            <span class="block">Color</span>
            <div class="rounded-full w-10 h-10 cursor-pointer" :style="objectDisplayStyle"></div>
          </div>

          <div class="relative">
            <span class="block">BG Color</span>
            <div class="rounded-full w-10 h-10 bg-blue-700 cursor-pointer" :style="backgroundDisplayStyle"></div>
          </div>

        </div>
        <div class="flex">
          <button @click="transform='translate'" class="btn pill-button py-0 px-5 " :class="{'pill-button--ideeza': transform === 'translate'}" >Translate</button>
          <button @click="transform='scale'" class="btn pill-button py-0 px-5 mx-5" :class="{'pill-button--ideeza': transform === 'scale'}" >Scale</button>
          <button @click="transform='rotate'" class="btn pill-button py-0 px-5" :class="{'pill-button--ideeza': transform === 'rotate'}" >Rotate</button>
        </div>

      </div>

      <div v-if="!description" @click="description=true" class="p-5 bg-gray-200 text-center cursor-pointer">
        + Add description
      </div>

      <div v-if="description" class="w-full flex p-5 border-t border-solid border-gray-300">
        <span class="font-semibold mr-5 flex-shrink">Description</span>
        <div class="flex-grow">
          <textarea rows="2" class="bg-white p-1 border border-solid border-gray-400 w-full"></textarea>
        </div>
      </div>

    </div>

    <div class="w-full mt-10 lg:flex justify-end">
      <button class="btn pill-button py-0 px-20 mr-5" >+ Add new part</button>
      <button class="btn pill-button pill-button--ideeza py-0 px-12" >Save</button>
    </div>
  </div>

</template>

<script>
  import Engine from '@ideeza/vue3dengine'
  import CheckBox from '~/components/form/checkbox.vue'
    export default {
        name: "cover",
      data: () => {
          return {
            description: false,
            visibleGrid: true,        // show the grid
            initDataForEngine: {},    // the entire object need to init the engine, at the begining is empty
            router: 0,                // type of scene - part -0, component -1, cover -2
            background: "#ffffff",    // backround color - hex string
            transform: "translate",   // type of transform in scene - translate, rotate, scale
            objectData: {},           // the object used to import a 3d object
            uploadData: null,         // the event from upload
            transformData: [0, 'X'],  // first is the value of input, second is axis - X,Y,Z(string)
            objectColor: "#ffffff",   // color of object
            apiPlatform: "polygoogle",// site where we search polygoogle/remix3d
            searchFor: "",            // text after we search
          }
      },
      components: {
        'engine': Engine.ct,
        'check-box': CheckBox,
      },
      computed: {
          backgroundDisplayStyle() {
            return `background-color: ${this.background}`;
          },
          objectDisplayStyle() {
            return `background-color: ${this.objectColor}`;
          }
      },
      methods: {
        toggleGrid(){
          this.visibleGrid = !this.visibleGrid;
        },
        selectedObject(val) {

        }
      }
    }
</script>

<style scoped>
  select{
    min-width: 130px;
  }
  .content-container{
    /*height: 300px;*/
  }
  .engine-container{
    height: 450px;
  }
</style>
