(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{467:function(t,a,e){"use strict";e.r(a);var s=e(20),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"基础配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[t._v("#")]),t._v(" 基础配置")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("me.ahoo.cosid.spring.boot.starter.CosIdProperties")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("数据类型")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("enabled")]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("是否启用 CosId")]),t._v(" "),e("td",[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[t._v("namespace")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("命名空间，用于隔离不同应用间的分布式ID")]),t._v(" "),e("td",[e("code",[t._v("{cosid}")])])])])]),t._v(" "),e("p",[e("strong",[t._v("YAML 配置样例")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cosid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"idconverterdefinition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idconverterdefinition"}},[t._v("#")]),t._v(" IdConverterDefinition")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("me.ahoo.cosid.spring.boot.starter.IdConverterDefinition")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("数据类型")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[e("code",[t._v("IdConverterDefinition.Type")])]),t._v(" "),e("td",[t._v("转换器类型："),e("code",[t._v("TO_STRING")]),t._v("、"),e("code",[t._v("SNOWFLAKE_FRIENDLY")]),t._v("、"),e("code",[t._v("RADIX")])]),t._v(" "),e("td",[e("code",[t._v("Type.TO_STRING")])])]),t._v(" "),e("tr",[e("td",[t._v("prefix")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("前缀")]),t._v(" "),e("td",[e("code",[t._v('""')])])]),t._v(" "),e("tr",[e("td",[t._v("radix")]),t._v(" "),e("td",[e("code",[t._v("IdConverterDefinition.Radix")])]),t._v(" "),e("td",[e("code",[t._v("Radix62IdConverter")]),t._v(" 转换器配置")]),t._v(" "),e("td",[e("code",[t._v("TimestampUnit.MILLISECOND")])])])])]),t._v(" "),e("h3",{attrs:{id:"radix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#radix"}},[t._v("#")]),t._v(" Radix")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("数据类型")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("char-size")]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("字符串ID长度")]),t._v(" "),e("td",[e("code",[t._v("11")])])]),t._v(" "),e("tr",[e("td",[t._v("pad-start")]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("当字符串不满足 "),e("code",[t._v("charSize")]),t._v(" 时，是否填充字符("),e("code",[t._v("'0'")]),t._v(")。如果需要保证字符串有序，需开启该功能")]),t._v(" "),e("td",[e("code",[t._v("false")])])])])]),t._v(" "),e("p",[e("strong",[t._v("YAML 配置样例")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cosid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("snowflake")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("share")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("converter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cosid_\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("radix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pad-start")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("char-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("segment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("share")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("converter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cosid_\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("radix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pad-start")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("char-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);