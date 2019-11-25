<template>
  <div class="hello">
    <comp1
      :init-data="initDataForEngine"
      :pins-data="initDataForPins"
      :visibleGrid="visibleGrid"
      :group-button="doAction"
      :part-data="partDataForImport"
      :resolution="parseInt(resolution)"
      @selectObject="selectedObject"
    ></comp1>



    <button @click="toggleGrid()" >Toggle Grid</button>
    <button @click="changeAction('route')" >Do Action</button>
    <!--button @click="toDefaultCameraSetting()" >reset Camera</button - need to be called from engine-->
    <input v-model="resolution" />
    <button @click="import3dModel({'transform':{'best_p':[0, 0, 0, 0],'best_sc':[0, 0, 0],'position':[0,0,0],'rotation':[0,0,0],'pivot':[-4.67,-4.67]},'name':'ATmega328','name2d':'AT','url':'user-e71413056a4049e399aad42118410e87.babylon','design':'user-0e1383d25be244a08f024106d03ac8ae.babylon','schematic':'user-6cb573279715425db9fec438d44c73b8.babylon'})">ATmega328</button>
  </div>
</template>

<script>
  import Comp from '@ideeza/vue3dengine'

  const comp1 = Comp.etcs
  const comp2 = Comp.etcd
    export default {
        name: "pro-electronics",
      components: {
        comp1, comp2
      },
      data() {
        return {
          visibleGrid: true,        // show the grid
          initDataForEngine: {},    // the entire object need to init the engine, at the begining is empty
          initDataForPins: {
            need: {},
            pass: {}
          },                        // the entire object need on adding pins
          doAction: "move",         // move, rotate, copy, delete, label, route, highlight
          resolution: 100,           // min: 1, max: 100.
          partDataForImport: {}     // the entire object need to import a part
        }
      },
      methods: {
        toggleGrid() {
          this.visibleGrid = !this.visibleGrid
        },
        import3dModel(param){
          this.partDataForImport = param;
        },
        changeAction(action) {
          this.doAction = action
        },
        selectedObject (param) {
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

</style>
