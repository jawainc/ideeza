<template>
  <div class="engine-container">
    <client-only placeholder="Loading...">
      <div class="engine-actions bg-white p-5">
        <div class="flex items-center mb-5">
          <check-box :checked="true" @onChange="toggleGrid">Grid</check-box>
          <div class="resolution-container ml-10">
            <h1 class="font-semibold text-xs">Resolution</h1>
            <vue-slider :min="1" :max="100" v-model="resolutionValue" @drag-end="setResolution"></vue-slider>
          </div>
        </div>
        <div class="flex items-end">
          <button class="btn btn-normal btn-small px-3" @click="import3dModel">Sample data</button>
          <div class="ml-10 w-32">
            <h1 class="font-semibold text-xs">Actions</h1>
            <drop-down @input="setAction" :data="actionsData" selected="move" styleHeight="normal" />
          </div>
        </div>

      </div>
      <engine class="border border-light-gray"
        :init-data="initDataForEngine"
        :pins-data="initDataForPins"
        :visibleGrid="visibleGrid"
        :group-button="doAction"
        :part-data="partDataForImport"
        :resolution="parseInt(resolution)"
        @selectObject="selectedObject"
      />
    </client-only>
  </div>

</template>

<script>
  import Engine from '@ideeza/vue3dengine'
  import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
  import 'vue-slider-component/dist-css/vue-slider-component.css'
  import 'vue-slider-component/theme/default.css'

  import CheckBox from '~/components/form/checkbox.vue'
  import DropDown from '~/components/form/dropdown-field.vue'
  export default {
        name: "schematics",
    data() {
      return {
        actionsData: ['move', 'rotate', 'copy', 'delete', 'label', 'route', 'highlight'],
        resolutionValue: 10,
        visibleGrid: true,        // show the grid
        initDataForEngine: {},    // the entire object need to init the engine, at the begining is empty
        initDataForPins: {
          need: {},
          pass: {}
        },                        // the entire object need on adding pins
        doAction: "move",         // move, rotate, copy, delete, label, route, highlight
        resolution: 10,           // min: 1, max: 100.
        partDataForImport: {},     // the entire object need to import a part,

        sampleData: {'transform':{'best_p':[0, 0, 0, 0],'best_sc':[0, 0, 0],'position':[0,0,0],'rotation':[0,0,0],'pivot':[-4.67,-4.67]},'name':'ATmega328','name2d':'AT','url':'user-e71413056a4049e399aad42118410e87.babylon','design':'user-0e1383d25be244a08f024106d03ac8ae.babylon','schematic':'user-6cb573279715425db9fec438d44c73b8.babylon'}
      }
    },
    components: {
      'engine': Engine.etcs,
      'check-box': CheckBox,
      'drop-down': DropDown,
      'vue-slider': VueSlider
    },
    methods: {
      setAction(val) {
        this.doAction = val;
      } ,
      setResolution() {
        this.resolution = this.resolutionValue;
      },
      toggleGrid(active, value) {
        this.visibleGrid = active;
      },
      import3dModel() {
        this.partDataForImport = this.sampleData;
      },
      changeAction(action) {
        this.doAction = action
      },
      selectedObject(param) {
        switch (param) {
          case '0':
            // console.log('clicked on board')
            break;
          case '1':
            // console.log('clicked on part')
            break
          case '2':
            // console.log('clicked on wire')
            break;
          default:
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .engine-container{
    @apply w-full relative;
  }
  .resolution-container{
    width: 200px;
  }
  /deep/ .vue-slider-process{
    @apply bg-ideeza;
  }
  /deep/ .vue-slider-dot-tooltip-inner{
    @apply bg-ideeza border-ideeza-dark;
  }
</style>
