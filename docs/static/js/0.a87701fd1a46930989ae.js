webpackJsonp([0],{"5OWA":function(e,t){},LUNZ:function(e,t){},Qt9A:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),s=n("NYxO"),a={name:"my-header",data:function(){return{breadcrumb:""}},computed:i()({},Object(s.b)(["user","logs"])),watch:{$route:function(){this.getBreadcrumb()}},mounted:function(){var e=this;this.$nextTick(function(){e.$el.querySelector(".header-breadcrumb").style.left=document.getElementById("side").offsetWidth+"px"}),this.getBreadcrumb()},methods:{onUserSelected:function(e){"exit"===e&&(this.$store.commit("loginOut"),this.$router.push("/login"))},getBreadcrumb:function(){this.breadcrumb=this.$route.matched.filter(function(e){return e.name})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",{attrs:{id:"header",height:"80px"}},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"header-logo",attrs:{to:"/"}},[n("span",[e._v("vueBlog-template")])]),e._v(" "),n("div",{staticClass:"header-right"},[n("div",{staticClass:"right-item"},[e.user?n("div",{staticClass:"user"},[n("el-dropdown",{attrs:{placement:"top-end"},on:{command:e.onUserSelected}},[n("div",{staticClass:"user-info"},[n("img",{attrs:{src:e.user.headimgurl}}),e._v(" "),n("span",{staticClass:"el-dropdown-link"},[e._v(e._s(e.user.nickname))])]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{disabled:!0}},[e._v("v1.0.0")]),e._v(" "),n("el-dropdown-item",{attrs:{divided:"",command:"exit"}},[e._v("退出登录")])],1)],1)],1):e._e()])])],1),e._v(" "),n("el-breadcrumb",{staticClass:"header-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.breadcrumb,function(t,r){return n("el-breadcrumb-item",{key:r,attrs:{to:t.path}},[e._v(e._s(t.meta.title||t.name))])}))],1)},staticRenderFns:[]};var o=n("VU/8")(a,d,!1,function(e){n("5OWA")},null,null).exports,l=n("YaEn"),c={name:"my-side",data:function(){return{filterRoutes:[],defaultOpeneds:[]}},created:function(){this.filterRoutes=this.handleRoutes(l.b)},methods:{handleRoutes:function(e){var t=this;return e.filter(function(e){return!!e.name&&(e.meta?!e.meta.hidden&&(e.meta.open&&t.defaultOpeneds.push(e.name),!0):void(e.children&&(e.children=t.handleRoutes(e.children))))})}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("my-sticky",{attrs:{"sticky-class":"sticky-class"}},[t("el-aside",{attrs:{id:"side",width:"240px"}},[t("el-menu",{staticClass:"el-side-container",attrs:{"default-active":this.$route.name,"default-openeds":this.defaultOpeneds}},[t("my-side-item",{attrs:{json:this.filterRoutes}})],1)],1)],1)},staticRenderFns:[]};var m={name:"index",components:{myHeader:o,mySide:n("VU/8")(c,u,!1,function(e){n("LUNZ")},null,null).exports}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"index"}},[t("el-container",{attrs:{id:"verContainer",direction:"vertical"}},[t("my-header"),this._v(" "),t("el-container",{attrs:{id:"horContainer",direction:"horizontal"}},[t("my-side"),this._v(" "),t("el-main",{attrs:{id:"main"}},[t("transition",{attrs:{name:"el-fade-in-linear",mode:"out-in"}},[t("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var f=n("VU/8")(m,h,!1,function(e){n("fXEP")},null,null);t.default=f.exports},fXEP:function(e,t){}});