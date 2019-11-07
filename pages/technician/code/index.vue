<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">

      <div class="code-contents w-full mx-auto">
        <h1 class="text-3xl my-10">Code Editor</h1>

        <div class="w-full shadow-md">
          <div class="bg-white p-5 flex items-center" >
            <div class="flex items-center mr-5">
              <span class="mr-2">File name </span>
              <input placeholder="e.g filename.js" class="w-40 bg-white border border-solid border-gray-300 text-sm p-1 ">
            </div>
            <div class="flex items-center mr-5">
              <span class="mr-2">Language </span>
              <DropDownField styleHeight="tiny" class="w-32"  />
            </div>
            <button class="btn pill-button px-5 mr-5">Upload Code</button>
            <button class="btn pill-button px-5 mr-5">Upload Image</button>
            <button class="btn pill-button px-5">Run</button>
          </div>
        </div>

        <div>
          <no-ssr placeholder="Codemirror Loading...">
            <codemirror v-model="code"
                        :options="cmOption"
                        @cursorActivity="onCmCursorActivity"
                        @ready="onCmReady"
                        @focus="onCmFocus"
                        @blur="onCmBlur">
            </codemirror>
          </no-ssr>
        </div>

        <div class="flex justify-between mt-10">
          <button class="btn pill-button px-12 ">Back</button>
          <button class="btn pill-button px-12 ">+ Add New File</button>
          <button class="btn pill-button pill-button--ideeza px-12">Next</button>
        </div>

      </div>

    </div>

  </div>


</template>

<script>
  import  DropDownField from '~/components/form/dropdown-field.vue'
    import LeftMenu from '~/components/technician/common-left-side-menu.vue'

    export default {
        layout: 'technician',
        name: "code-index",
        components: {
            LeftMenu,
            DropDownField,
        },
        data: function () {
            return {
                code: 'int main(){}',
                cmOption: {
                    tabSize: 4,
                    foldGutter: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    keyMap: "sublime",
                    mode: 'text/x-csrc',
                    theme: 'base16-dark',
                    extraKeys: {
                        'F11'(cm) {
                            cm.setOption("fullScreen", !cm.getOption("fullScreen"))
                        },
                        'Esc'(cm) {
                            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false)
                        }
                    }
                }
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
            onCmCursorActivity(codemirror) {
                console.log('onCmCursorActivity', codemirror)
            },
            onCmReady(codemirror) {
                console.log('onCmReady', codemirror)
            },
            onCmFocus(codemirror) {
                console.log('onCmFocus', codemirror)
            },
            onCmBlur(codemirror) {
                console.log('onCmBlur', codemirror)
            }
        }
    }
</script>

<style scoped>
  .code-contents{
    max-width: 1200px;
  }
</style>
