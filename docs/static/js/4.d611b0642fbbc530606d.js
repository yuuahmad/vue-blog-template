webpackJsonp([4],{QlWu:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"login",data:function(){return{form:{username:"uncleLian",password:"123456"},pwdWatch:!1}},methods:{verify:function(){this.form.username?this.form.password?this.login():this.$message.error("请输入密码"):this.$message.error("请输入账号")},login:function(){var e=this;this.$store.dispatch("get_login_data",this.form).then(function(t){e.$message.success("登录成功"),e.$route.query.redirect?e.$router.push(e.$route.query.redirect):e.$router.push("/")}).catch(function(t){console.log(t),e.$message.error("账号密码错误")})}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"login-wrapper"},[s("div",{staticClass:"title"},[e._v("vue-bolg-template")]),e._v(" "),s("el-form",{staticClass:"login-form",attrs:{model:e.form},nativeOn:{submit:function(t){return t.preventDefault(),e.verify(t)}}},[s("el-form-item",[s("el-input",{attrs:{placeholder:"用户名","auto-complete":"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e._v(" "),s("span",{staticClass:"input-icon prepend-icon"},[s("i",{staticClass:"el-icon-my-user"})])],1),e._v(" "),s("el-form-item",[s("el-input",{attrs:{placeholder:"密码","auto-complete":"off",type:e.pwdWatch?"text":"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),s("span",{staticClass:"input-icon prepend-icon"},[s("i",{staticClass:"el-icon-my-lock"})]),e._v(" "),s("span",{staticClass:"input-icon append-icon",on:{click:function(t){e.pwdWatch=!e.pwdWatch}}},[s("i",{class:e.pwdWatch?"el-icon-my-openEye":"el-icon-my-closeEye"})])],1),e._v(" "),s("el-input",{staticClass:"login_btn",attrs:{type:"submit",value:"登录"}})],1)],1)])},staticRenderFns:[]};var r=s("VU/8")(o,n,!1,function(e){s("yFqY")},null,null);t.default=r.exports},yFqY:function(e,t){}});