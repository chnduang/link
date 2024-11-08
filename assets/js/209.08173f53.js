(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{502:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"解决nuxt-js项目server入口文件不能使用import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决nuxt-js项目server入口文件不能使用import"}},[s._v("#")]),s._v(" 解决Nuxt.js项目server入口文件不能使用import")]),s._v(" "),t("blockquote",[t("h4",{attrs:{id:"使用nuxtjs官方的脚手架时创建nuxt-js项目时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用nuxtjs官方的脚手架时创建nuxt-js项目时"}},[s._v("#")]),s._v(" 使用nuxtjs官方的脚手架时创建Nuxt.js项目时")])]),s._v(" "),t("h3",{attrs:{id:"在server的入口中使用的是默认使用require引入依赖的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在server的入口中使用的是默认使用require引入依赖的"}},[s._v("#")]),s._v(" 在server的入口中使用的是默认使用require引入依赖的")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Koa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" consola "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'consola'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Nuxt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Builder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nuxt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("ul",[t("li",[t("p",[s._v("对于使用经常使用"),t("code",[s._v("ES6")]),s._v("的，使用起来会感觉很大的不便")])]),s._v(" "),t("li",[t("p",[s._v("但当我们直接使用"),t("code",[s._v("import")]),s._v("导入的时候")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Koa "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" consola "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'consola'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Nuxt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Builder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nuxt'")]),s._v("\n")])])]),t("ul",[t("li",[s._v("项目会直接报错，它并不能识别"),t("code",[s._v("import")])])])])]),s._v(" "),t("h3",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法：")]),s._v(" "),t("blockquote",[t("p",[s._v("Nuxt.js项目在"),t("code",[s._v("npm run dev")]),s._v("时直接使用node编译"),t("code",[s._v("index.js")]),s._v("，我们之前写的项目之所以可以，是因为有用"),t("code",[s._v("babel")]),s._v("去处理，但"),t("code",[s._v("node")]),s._v("本身是不支持这种语法的")])]),s._v(" "),t("ul",[t("li",[s._v("在package.json中的脚本"),t("code",[s._v("scripts")]),s._v("中测试环境和正式环境的命令后加入"),t("code",[s._v("--exec babel-node")])]),s._v(" "),t("li",[s._v("两种环境都需要加入")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nuxt build"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production node server/index.js --exec babel-node"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"generate"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nuxt generate"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint --ext .js,.vue --ignore-path .gitignore ."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("ul",[t("li",[t("p",[s._v("如果项目中没有安装"),t("code",[s._v("babel-cli")]),s._v("，"),t("code",[s._v("babel-preset-env")]),s._v("则需要先安装")]),s._v(" "),t("ul",[t("li",[s._v("这里也可以安装"),t("code",[s._v("babel-preset-es2015")]),s._v("则也需要相应的修改"),t("code",[s._v(".babelrc")])])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" babel-cli babel-preset-env\n//或者使用npm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" babel-cli babel-preset-env\n")])])])]),s._v(" "),t("li",[t("p",[s._v("在项目的根目录下面创建"),t("code",[s._v(".babelrc")]),s._v("文件并加入")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"presets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("其他的babel配置可自行在官网查看")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);