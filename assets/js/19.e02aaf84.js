(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{475:function(t,n,e){"use strict";e.r(n);var a=e(20),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"idconverter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idconverter"}},[t._v("#")]),t._v(" IdConverter")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("ID转换器")]),t._v("，用于将 "),e("code",[t._v("long")]),t._v(" 类型ID转换为 "),e("code",[t._v("String")]),t._v("，反之亦然。")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ThreadSafe")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IdConverter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * convert {@link long} type ID to {@link String}\n     *\n     * @param id {@link long} type ID\n     * @return {@link String} type ID\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("asString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * convert {@link String} type ID to {@link long}\n     *\n     * @param idString {@link String} type ID\n     * @return {@link long} type ID\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("asLong")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" idString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"idconverter-implementation-class-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idconverter-implementation-class-diagram"}},[t._v("#")]),t._v(" IdConverter implementation class diagram")]),t._v(" "),e("p",{attrs:{align:"center"}},[e("img",{attrs:{src:t.$withBase("/assets/design/IdConverter-impl-class.png"),alt:"IdGenerator implementation class diagram"}})]),t._v(" "),e("h2",{attrs:{id:"tostringidconverter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tostringidconverter"}},[t._v("#")]),t._v(" ToStringIdConverter")]),t._v(" "),e("blockquote",[e("p",[t._v("String 转换器，用于将 "),e("code",[t._v("long")]),t._v(" 转换成String 或者将 String 转换成 long 类型")])]),t._v(" "),e("ul",[e("li",[t._v("规则\n"),e("ul",[e("li",[t._v("long 转 String：String.valueOf")]),t._v(" "),e("li",[t._v("String 转 long： Long.parseLong")])])])]),t._v(" "),e("h2",{attrs:{id:"radix62idconverter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#radix62idconverter"}},[t._v("#")]),t._v(" Radix62IdConverter")]),t._v(" "),e("blockquote",[e("p",[t._v("62进制转换器，用于将 "),e("code",[t._v("long")]),t._v(" 类型转换成 "),e("code",[t._v("62进制字符串")]),t._v("，或者将 "),e("code",[t._v("62进制字符串")]),t._v(" 转换成"),e("code",[t._v("long")]),t._v(" 类型")])]),t._v(" "),e("ul",[e("li",[t._v("规则：[0-9][A-Z][a-z]{11}")])]),t._v(" "),e("h2",{attrs:{id:"snowflakefriendlyidconverter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snowflakefriendlyidconverter"}},[t._v("#")]),t._v(" SnowflakeFriendlyIdConverter")]),t._v(" "),e("blockquote",[e("p",[t._v("雪花Id转换器，将符合雪花规则的字符串，转换成 long ，或者long 转换成雪花规则字符串")])]),t._v(" "),e("h2",{attrs:{id:"prefixidconverter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prefixidconverter"}},[t._v("#")]),t._v(" PrefixIdConverter")]),t._v(" "),e("blockquote",[e("p",[t._v("将带有前缀的字符串转换成long，或者将long转换成带前缀字符串")])]),t._v(" "),e("ul",[e("li",[t._v("规则\n"),e("ul",[e("li",[t._v("例如：前缀为："),e("code",[t._v("no_")]),t._v(", 转换器选用"),e("code",[t._v("ToStringIdConverter")]),t._v("，数字"),e("code",[t._v("1")]),t._v(" 经过转换得到"),e("code",[t._v("no_1")]),t._v(",反之亦然。")])])])])])}),[],!1,null,null,null);n.default=r.exports}}]);