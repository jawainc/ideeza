<template>
  <div class="shadow-md">
    <div class="w-full ">
      <div class="bg-white p-5 flex items-center" >
        <div class="flex items-center mr-5">
          <span class="mr-2">File name </span>
          <input placeholder="e.g filename.js" class="w-40 bg-white border border-solid border-gray-300 text-sm p-1 ">
        </div>
        <div class="flex items-center mr-5">
          <span class="mr-2">Language </span>
          <select v-model="selectedLanguage" @change="languageChange"  class="language-select">
            <option  value="text/x-bashsrc" >
            Bash
          </option><option selected  value="text/x-csrc" >
            C
          </option><option  value="text/x-c++src" >
            C++
          </option><option  value="text/x-python" >
            Python
          </option><option  value="text/x-clojure" >
            Clojure
          </option><option  value="text/x-cobol" >
            Cobol
          </option><option  value="text/x-coffeescript" >
            CoffeeScript
          </option><option  value="text/x-d" >
            D
          </option><option  value="text/x-elixir" >
            Elixir
          </option><option  value="text/x-erlang" >
            Erlang
          </option><option  value="text/x-f" >
            F#
          </option><option  value="text/X-Go" >
            Go
          </option><option  value="text/x-hs" >
            Haskell
          </option><option  value="text/x-java" >
            Java
          </option><option  value="Text/Javascript" >
            Javascript
          </option><option  value="text/x-kotlin" >
            Kotlin
          </option><option  value="text/x-mysql" >
            MySQL
          </option><option  value="text/x-perl" >
            Perl
          </option><option  value="text/x-php" >
            PHP
          </option><option  value="text/x-r" >
            R
          </option><option  value="text/x-ruby" >
            Ruby
          </option><option  value="text/x-rust" >
            Rust
          </option><option  value="text/x-scala" >
            Scala
          </option><option  value="text/x-scheme" >
            Scheme
          </option><option  value="text/x-swift" >
            Swift
          </option><option  value="text/x-vb" >
            VB
          </option>
          </select>
        </div>
        <button class="btn pill-button px-5 mr-5">Upload Code</button>
        <button class="btn pill-button px-5 mr-5">Upload Image</button>
        <button class="btn pill-button px-5">Run</button>
      </div>
    </div>
    <div>

        <codemirror v-model="code"
                    :options="cmOption">
        </codemirror>

    </div>


  </div>
</template>

<script>
    import 'codemirror/theme/base16-dark.css'
    import  DropDownField from '~/components/form/dropdown-field.vue'
    import Languages from '~/static/data/languages.js'
    export default {
        name: "add-code",
        components: {
            DropDownField
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
                },
              selectedLanguage: 'text/x-csrc'
            }
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
            },
          languageChange() {
              this.cmOption.mode = this.selectedLanguage;
          }
        }
    }
</script>

<style>


  /*Code mirror*/
  /* BASICS */

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-family: monospace;
    height: 300px;
    color: black;
    direction: ltr;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: 4px 0; /* Vertical padding around content */
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    padding: 0 4px; /* Horizontal padding of content */
  }

  .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
    background-color: white; /* The little square between H and V scrollbars */
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {}
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker { color: black; }
  .CodeMirror-guttermarker-subtle { color: #999; }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }
  @-moz-keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }
  @-webkit-keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }
  @keyframes blink {
    0% {}
    50% { background-color: transparent; }
    100% {}
  }

  /* Can style cursor different in overwrite (non-insert) value */
  .CodeMirror-overwrite .CodeMirror-cursor {}

  .cm-tab { display: inline-block; text-decoration: inherit; }

  .CodeMirror-rulers {
    position: absolute;
    left: 0; right: 0; top: -50px; bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0; bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-s-default .cm-header {color: blue;}
  .cm-s-default .cm-quote {color: #090;}
  .cm-negative {color: #d44;}
  .cm-positive {color: #292;}
  .cm-header, .cm-strong {font-weight: bold;}
  .cm-em {font-style: italic;}
  .cm-link {text-decoration: underline;}
  .cm-strikethrough {text-decoration: line-through;}

  .cm-s-default .cm-keyword {color: #708;}
  .cm-s-default .cm-atom {color: #219;}
  .cm-s-default .cm-number {color: #164;}
  .cm-s-default .cm-def {color: #00f;}
  .cm-s-default .cm-variable,
  .cm-s-default .cm-punctuation,
  .cm-s-default .cm-property,
  .cm-s-default .cm-operator {}
  .cm-s-default .cm-variable-2 {color: #05a;}
  .cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
  .cm-s-default .cm-comment {color: #a50;}
  .cm-s-default .cm-string {color: #a11;}
  .cm-s-default .cm-string-2 {color: #f50;}
  .cm-s-default .cm-meta {color: #555;}
  .cm-s-default .cm-qualifier {color: #555;}
  .cm-s-default .cm-builtin {color: #30a;}
  .cm-s-default .cm-bracket {color: #997;}
  .cm-s-default .cm-tag {color: #170;}
  .cm-s-default .cm-attribute {color: #00c;}
  .cm-s-default .cm-hr {color: #999;}
  .cm-s-default .cm-link {color: #00c;}

  .cm-s-default .cm-error {color: #f00;}
  .cm-invalidchar {color: #f00;}

  .CodeMirror-composing { border-bottom: 2px solid; }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
  div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
  .CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
  .CodeMirror-activeline-background {background: #e8f2ff;}

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
     the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: white;
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 30px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -30px; margin-right: -30px;
    padding-bottom: 30px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
     before actual scrolling happens, thus preventing shaking and
     flickering artifacts. */
  .CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0; top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0; left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0; bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0; bottom: 0;
  }

  .CodeMirror-gutters {
    position: absolute; left: 0; top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -30px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0; bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper ::selection { background-color: transparent }
  .CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    /* Reset some styles that the rest of the page might have set */
    -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {}

  .CodeMirror-rtl pre { direction: rtl; }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre { position: static; }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected { background: #d9d9d9; }
  .CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
  .CodeMirror-crosshair { cursor: crosshair; }
  .CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
  .CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

  .cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, .4);
  }

  /* Used to force a border model for a node */
  .cm-force-border { padding-right: .1px; }

  @media print {
    /* Hide the cursor when printing */
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after { content: ''; }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext { background: none; }


  .CodeMirror-merge {
    position: relative;
    border: 1px solid #ddd;
    white-space: pre;
  }

  .CodeMirror-merge, .CodeMirror-merge .CodeMirror {
    height: 350px;
  }

  .CodeMirror-merge-2pane .CodeMirror-merge-pane { width: 47%; }
  .CodeMirror-merge-2pane .CodeMirror-merge-gap { width: 6%; }
  .CodeMirror-merge-3pane .CodeMirror-merge-pane { width: 31%; }
  .CodeMirror-merge-3pane .CodeMirror-merge-gap { width: 3.5%; }

  .CodeMirror-merge-pane {
    display: inline-block;
    white-space: normal;
    vertical-align: top;
  }
  .CodeMirror-merge-pane-rightmost {
    position: absolute;
    right: 0px;
    z-index: 1;
  }

  .CodeMirror-merge-gap {
    z-index: 2;
    display: inline-block;
    height: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    position: relative;
    background: #f8f8f8;
  }

  .CodeMirror-merge-scrolllock-wrap {
    position: absolute;
    bottom: 0; left: 50%;
  }
  .CodeMirror-merge-scrolllock {
    position: relative;
    left: -50%;
    cursor: pointer;
    color: #555;
    line-height: 1;
  }
  .CodeMirror-merge-scrolllock:after {
    content: "\21db\00a0\00a0\21da";
  }
  .CodeMirror-merge-scrolllock.CodeMirror-merge-scrolllock-enabled:after {
    content: "\21db\21da";
  }

  .CodeMirror-merge-copybuttons-left, .CodeMirror-merge-copybuttons-right {
    position: absolute;
    left: 0; top: 0;
    right: 0; bottom: 0;
    line-height: 1;
  }

  .CodeMirror-merge-copy {
    position: absolute;
    cursor: pointer;
    color: #44c;
    z-index: 3;
  }

  .CodeMirror-merge-copy-reverse {
    position: absolute;
    cursor: pointer;
    color: #44c;
  }

  .CodeMirror-merge-copybuttons-left .CodeMirror-merge-copy { left: 2px; }
  .CodeMirror-merge-copybuttons-right .CodeMirror-merge-copy { right: 2px; }

  .CodeMirror-merge-r-inserted, .CodeMirror-merge-l-inserted {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAGUlEQVQI12MwuCXy3+CWyH8GBgYGJgYkAABZbAQ9ELXurwAAAABJRU5ErkJggg==);
    background-position: bottom left;
    background-repeat: repeat-x;
  }

  .CodeMirror-merge-r-deleted, .CodeMirror-merge-l-deleted {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAGUlEQVQI12M4Kyb2/6yY2H8GBgYGJgYkAABURgPz6Ks7wQAAAABJRU5ErkJggg==);
    background-position: bottom left;
    background-repeat: repeat-x;
  }

  .CodeMirror-merge-r-chunk { background: #ffffe0; }
  .CodeMirror-merge-r-chunk-start { border-top: 1px solid #ee8; }
  .CodeMirror-merge-r-chunk-end { border-bottom: 1px solid #ee8; }
  .CodeMirror-merge-r-connect { fill: #ffffe0; stroke: #ee8; stroke-width: 1px; }

  .CodeMirror-merge-l-chunk { background: #eef; }
  .CodeMirror-merge-l-chunk-start { border-top: 1px solid #88e; }
  .CodeMirror-merge-l-chunk-end { border-bottom: 1px solid #88e; }
  .CodeMirror-merge-l-connect { fill: #eef; stroke: #88e; stroke-width: 1px; }

  .CodeMirror-merge-l-chunk.CodeMirror-merge-r-chunk { background: #dfd; }
  .CodeMirror-merge-l-chunk-start.CodeMirror-merge-r-chunk-start { border-top: 1px solid #4e4; }
  .CodeMirror-merge-l-chunk-end.CodeMirror-merge-r-chunk-end { border-bottom: 1px solid #4e4; }

  .CodeMirror-merge-collapsed-widget:before {
    content: "(...)";
  }
  .CodeMirror-merge-collapsed-widget {
    cursor: pointer;
    color: #88b;
    background: #eef;
    border: 1px solid #ddf;
    font-size: 90%;
    padding: 0 3px;
    border-radius: 4px;
  }
  .CodeMirror-merge-collapsed-line .CodeMirror-gutter-elt { display: none; }


  /*

      Name:       Base16 Default Dark
      Author:     Chris Kempson (http://chriskempson.com)

      CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
      Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

  */

  .cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }
  .cm-s-base16-dark div.CodeMirror-selected { background: #303030; }
  .cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }
  .cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }
  .cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }
  .cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }
  .cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }
  .cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }
  .cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }

  .cm-s-base16-dark span.cm-comment { color: #8f5536; }
  .cm-s-base16-dark span.cm-atom { color: #aa759f; }
  .cm-s-base16-dark span.cm-number { color: #aa759f; }

  .cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }
  .cm-s-base16-dark span.cm-keyword { color: #ac4142; }
  .cm-s-base16-dark span.cm-string { color: #f4bf75; }

  .cm-s-base16-dark span.cm-variable { color: #90a959; }
  .cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }
  .cm-s-base16-dark span.cm-def { color: #d28445; }
  .cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }
  .cm-s-base16-dark span.cm-tag { color: #ac4142; }
  .cm-s-base16-dark span.cm-link { color: #aa759f; }
  .cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }

  .cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }
  .cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }


  .CodeMirror-foldmarker {
    color: blue;
    text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
    font-family: arial;
    line-height: .3;
    cursor: pointer;
  }
  .CodeMirror-foldgutter {
    width: .7em;
  }
  .CodeMirror-foldgutter-open,
  .CodeMirror-foldgutter-folded {
    cursor: pointer;
  }
  .CodeMirror-foldgutter-open:after {
    content: "\25BE";
  }
  .CodeMirror-foldgutter-folded:after {
    content: "\25B8";
  }

  .CodeMirror-dialog {
    position: absolute;
    left: 0; right: 0;
    background: inherit;
    z-index: 15;
    padding: .1em .8em;
    overflow: hidden;
    color: inherit;
  }

  .CodeMirror-dialog-top {
    border-bottom: 1px solid #eee;
    top: 0;
  }

  .CodeMirror-dialog-bottom {
    border-top: 1px solid #eee;
    bottom: 0;
  }

  .CodeMirror-dialog input {
    border: none;
    outline: none;
    background: transparent;
    width: 20em;
    color: inherit;
    font-family: monospace;
  }

  .CodeMirror-dialog button {
    font-size: 70%;
  }
</style>
