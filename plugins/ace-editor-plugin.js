import Vue from 'vue'
import AceEditor from 'vue2-ace-editor'

require('brace/ext/language_tools') //language extension prerequsite...
require('brace/mode/html')
require('brace/mode/javascript')    //language
require('brace/mode/less')
require('brace/theme/chrome')
require('brace/snippets/javascript') //snippet

Vue.use(AceEditor)
