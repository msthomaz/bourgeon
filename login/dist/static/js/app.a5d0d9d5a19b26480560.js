webpackJsonp([1],{"+IAJ":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"welcome"}},[a("h1",[t._v("Time to learn something new!")]),t._v(" "),a("p",[t._v("You found the best place to learn - and now you're just one sign in (or sign up) away from it!")]),t._v(" "),a("div",{staticClass:"cta"},[a("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")]),t._v(" "),a("router-link",{attrs:{to:"/signin"}},[t._v("Sign In")])],1)])},n=[],i={render:s,staticRenderFns:n};e.a=i},"0uBk":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("h1",[t._v("That's the dashboard!")]),t._v(" "),a("p",[t._v("You should only get here if you're authenticated!")]),t._v(" "),t.email?a("p",[t._v("Your email address: "+t._s(t.email))]):t._e()])},n=[],i={render:s,staticRenderFns:n};e.a=i},"1QUN":function(t,e,a){"use strict";function s(t){a("lDt3")}var n=a("eIrf"),i=a("0uBk"),o=a("VU/8"),u=s,r=o(n.a,i.a,!1,u,"data-v-7d78965b",null);e.a=r.exports},"7cTf":function(t,e){},"9/zq":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"signin"}},[a("div",{staticClass:"signin-form"},[a("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"input"},[a("label",{attrs:{for:"email"}},[t._v("Mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t._m(0)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit"},[a("button",{attrs:{type:"submit"}},[t._v("Submit")])])}],i={render:s,staticRenderFns:n};e.a=i},Aany:function(t,e,a){"use strict";function s(t){a("KW8N")}var n=a("hUGX"),i=a("9/zq"),o=a("VU/8"),u=s,r=o(n.a,i.a,!1,u,"data-v-27f6fbd0",null);e.a=r.exports},EfBi:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQ2cHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjEyNiA3NSAyNDYgMzUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImxvZ28iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNi4wMDAwMDAsIDc1LjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODIuNCw2OC42IEMxNjguOCw3NS4zIDE1MC42LDg3LjkgMTM0LjEsMTExLjMgQzEyNy4zLDEwNi42IDEyMi42LDEwNC4zIDEyMS45LDEwMy45IEMxMTkuMywxMDIuNiAxMTYuMywxMDIuNSAxMTMuNiwxMDMuNiBDMTEyLjksMTAzLjkgMTA4LjQsMTA1LjcgMTAxLjgsMTA5LjYgQzg4LjcsODcuOCA3NS4zLDc0LjQgNTkuOSw2Mi45IEM3Ni4yLDI4LjcgMTA3LjMsNy4yIDExOS4xLDAgQzEzMiw3LjYgMTY4LjEsMzEuNCAxODIuNCw2OC42IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzM1OTE2OCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjI5LjEsMTU4LjEgQzIyNy42LDE1OC43IDIyNi4xLDE1OS4zIDIyNC42LDE1OS45IEMyMTIuMSwxNjUuMiAxOTcuMSwxNzMuNiAxODIuNiwxODcuMiBDMTczLjQsMTQ4LjcgMTUxLjYsMTIzLjYgMTMzLjMsMTA4LjUgQzE1Miw3OC4yIDE3NCw2Ny41IDE4Mi45LDY0LjMgQzE5NCw3Mi45IDIyNi40LDEwMi42IDIyOS4xLDE1OC4xIEwyMjkuMSwxNTguMSBaIiBpZD0iU2hhcGUiIGZpbGw9IiMzQUE1NzIiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTYxLjEsNTUuNyBDNjMuOSw1Ni41IDY3LjIsNTYuNyA3NC4xLDYwLjUgQzgxLDY0LjMgMTAwLjYsODIuNyAxMTIuOCwxMDIuOCBDOTUuMywxMTcuMyA3NC43LDE0MS40IDY1LjksMTc4LjcgQzUxLjUsMTY2LjEgMzYuOSwxNTguMiAyNC43LDE1My4zIEMyMS44LDE1Mi4xIDE5LDE1MS4xIDE2LjMsMTUwLjIgQzE4LjEsOTQuMyA1MC40LDY0LjIgNjEuMSw1NS43IEw2MS4xLDU1LjcgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjM0FBNTcyIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04NS4yLDIxNC4yIEM3OC4xLDIwMSA3MC40LDE5MC4xIDYyLjIsMTgwLjkgQzYyLjMsMTgwLjIgNjIuMywxNzkuNiA2Mi4zLDE3OSBDNjguMiwxMjEuNCAxMDYuOCw5NC41IDExOS43LDg3LjEgQzEzMy4zLDk0LjMgMTg0LjIsMTI2LjEgMTg0LjIsMTc3LjggQzE4NC4zLDE4MSAxODQuMywxODMuMyAxODQuMywxODMuMyBDMTc2LjksMTkyLjggMTcxLjMsMjAyLjMgMTY1LjMsMjE1LjUgQzE2MC4xLDIyNi43IDE1Ni4zLDIzOC4yIDE1My43LDI0OS43IEMxNDAuNSwyNDEuNiAxMzAuNSwyMzcuMyAxMjkuNSwyMzYuOSBDMTI2LjgsMjM1LjcgMTIzLjYsMjM1LjggMTIxLDIzNy4yIEMxMjAsMjM3LjYgMTExLjEsMjQyIDk5LjMsMjUwLjEgQzk2LjQsMjM3LjggOTIuMiwyMjcuMyA4NS4yLDIxNC4yIFoiIGlkPSJTaGFwZSIgZmlsbD0iIzMzOTk2QyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjEsMzAzLjEgQzExNy42LDMwMC40IDEyMiwyOTcuNiAxMjYuMywyOTQuNyBDMTMxLjEsMjk3LjggMTM1LjksMzAwLjcgMTQwLjksMzAzLjQgQzEzOC43LDMwMy41IDEzNi42LDMwMy43IDEzNC40LDMwMy44IEMxMzQuOCwzMTQuOSAxMzMuNiwzMjkgMTI4LjIsMzQ0LjcgQzEyNy4xLDM0Ny44IDEyNC4zLDM0OS43IDEyMS4yLDM0OS43IEMxMjAuNCwzNDkuNyAxMTkuNiwzNDkuNiAxMTguOCwzNDkuMyBDMTE0LjksMzQ4IDExMi45LDM0My44IDExNC4yLDMzOS45IEMxMTksMzI1LjggMTIwLDMxMy4zIDExOS42LDMwMy42IEMxMTcuNCwzMDMuNSAxMTUuMywzMDMuMyAxMTMuMSwzMDMuMSBMMTEzLjEsMzAzLjEgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMzYuOSwyMjcuNCBDMjIwLjgsMjI5LjEgMTk0LjgsMjMzLjcgMTY4LjYsMjQ1LjcgQzE2MS41LDIzNS43IDE1Mi41LDIyNy4zIDE0My45LDIyMC43IEMxNDUuNCwyMTEuMSAxNDguMywyMDEuOCAxNTIuNiwxOTIuMyBDMTYzLjcsMTY4LjEgMTgwLjUsMTUxIDIwMi40LDE0MS42IEMyMTQsMTM2LjYgMjI0LjEsMTM1LjIgMjI5LjIsMTM0LjcgQzIzNi4zLDE0NC41IDI1Ny40LDE3OS41IDIzNi45LDIyNy40IEwyMzYuOSwyMjcuNCBaIiBpZD0iU2hhcGUiIGZpbGw9IiM0MUI4ODMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMuMSwxNjEuMyBDNi4xLDE0OSAxMS4xLDE0MC4xIDEzLjgsMTM1LjggQzE4LjksMTM1LjkgMjksMTM2LjggNDAuOSwxNDEgQzYzLjQsMTQ5LjEgODEuMiwxNjUuMSA5My43LDE4OC42IEMxMDAuMywyMDAuOSAxMDIuNSwyMDguOCAxMDQuMSwyMTguMyBDOTUuNiwyMjUuNiA4Ni43LDIzNC43IDc5LjksMjQ1LjYgQzU0LjQsMjM1LjggMjkuNCwyMzIuNiAxMy4yLDIzMS43IEwxMy4yLDIzMS43IEMwLjgsMjA4LjIgLTIuNywxODQuNSAzLjEsMTYxLjMgTDMuMSwxNjEuMyBaIiBpZD0iU2hhcGUiIGZpbGw9IiM0MUI4ODMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTExOS4zLDMxOS42IEM3OC4yLDMxOC43IDQ3LjUsMzAyLjQgMjguMSwyNzEgQzE3LjgsMjU0LjMgMTMuNCwyMzcuMyAxMS43LDIyOC4xIEMyMy45LDIyOC4zIDUwLjQsMjMwLjEgNzYuNCwyNDEuMyBDNzkuNSwyNDIuNiA4MywyNDEuNCA4NC42LDIzOC40IEM5NSwyMTguNCAxMTYuOCwyMDQuOCAxMjQuMywyMDAuNSBDMTMyLjEsMjA0LjMgMTU0LjYsMjE2LjUgMTY2LjIsMjM1LjkgQzE2Ny45LDIzOC44IDE3MS42LDIzOS44IDE3NC41LDIzOC4zIEMxOTkuNywyMjUuNyAyMjYsMjIyLjIgMjM4LjMsMjIxLjIgQzIzNy4xLDIzMC42IDIzMy42LDI0OC41IDIyMy45LDI2Ni4yIEMyMDUuOCwyOTkuMSAxNzIuNSwzMTcuOCAxMjkuOSwzMjAuMiIgaWQ9IlNoYXBlIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},GTte:function(t,e,a){"use strict";function s(t){a("hp4H")}var n=a("ceuM"),i=a("H6Jo"),o=a("VU/8"),u=s,r=o(n.a,i.a,!1,u,"data-v-76f0698a",null);e.a=r.exports},H6Jo:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"signup"}},[a("div",{staticClass:"signup-form"},[a("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"input"},[a("label",{attrs:{for:"email"}},[t._v("Mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"age"}},[t._v("Your Age")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.age,expression:"age",modifiers:{number:!0}}],attrs:{type:"number",id:"age"},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"confirm-password"}},[t._v("Confirm Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",id:"confirm-password"},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("label",{attrs:{for:"country"}},[t._v("Country")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{id:"country"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"usa"}},[t._v("USA")]),t._v(" "),a("option",{attrs:{value:"india"}},[t._v("India")]),t._v(" "),a("option",{attrs:{value:"uk"}},[t._v("UK")]),t._v(" "),a("option",{attrs:{value:"germany"}},[t._v("Germany")])])]),t._v(" "),a("div",{staticClass:"hobbies"},[a("h3",[t._v("Add some Hobbies")]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.onAddHobby}},[t._v("Add Hobby")]),t._v(" "),a("div",{staticClass:"hobby-list"},t._l(t.hobbyInputs,function(e,s){return a("div",{key:e.id,staticClass:"input"},[a("label",{attrs:{for:e.id}},[t._v("Hobby #"+t._s(s))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"hobbyInput.value"}],attrs:{type:"text",id:e.id},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}),t._v(" "),a("button",{attrs:{type:"button"},on:{click:function(a){t.onDeleteHobby(e.id)}}},[t._v("X")])])}))]),t._v(" "),a("div",{staticClass:"input inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],attrs:{type:"checkbox",id:"terms"},domProps:{checked:Array.isArray(t.terms)?t._i(t.terms,null)>-1:t.terms},on:{change:function(e){var a=t.terms,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.terms=a.concat([null])):i>-1&&(t.terms=a.slice(0,i).concat(a.slice(i+1)))}else t.terms=n}}}),t._v(" "),a("label",{attrs:{for:"terms"}},[t._v("Accept Terms of Use")])]),t._v(" "),t._m(0)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit"},[a("button",{attrs:{type:"submit"}},[t._v("Submit")])])}],i={render:s,staticRenderFns:n};e.a=i},KW8N:function(t,e){},KvaI:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("icon",{staticClass:"logo",attrs:{name:"logo"}}),t._v(" "),s("img",{attrs:{src:a("dLd/"),alt:""}}),t._v(" "),s("app-header"),t._v(" "),s("router-view")],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},LvI1:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"ico",class:"ico-"+t.name},[a("use",{attrs:{"xlink:href":t.xlink}})])},n=[],i={render:s,staticRenderFns:n};e.a=i},M93x:function(t,e,a){"use strict";function s(t){a("zcap")}var n=a("xJD8"),i=a("KvaI"),o=a("VU/8"),u=s,r=o(n.a,i.a,!1,u,null,null);e.a=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("M93x"),i=a("mtWM"),o=a.n(i),u=a("Yjhn"),r=a("cHtD"),c=a("olkN");s.a.component("icon",u.a),o.a.defaults.baseURL="https://msthomaz-145501.firebaseio.com",o.a.defaults.headers.get.Accepts="application/json";var M=o.a.interceptors.request.use(function(t){return console.log("Request Interceptor",t),t}),g=o.a.interceptors.response.use(function(t){return console.log("Response Interceptor",t),t});o.a.interceptors.request.eject(M),o.a.interceptors.response.eject(g),new s.a({el:"#app",router:r.a,store:c.a,render:function(t){return t(n.a)}})},NwdG:function(t,e,a){"use strict";var s=a("mtWM"),n=a.n(s),i=n.a.create({baseURL:"https://www.googleapis.com/identitytoolkit/v3/relyingparty"});e.a=i},Yjhn:function(t,e,a){"use strict";var s=a("qFPD"),n=a("LvI1"),i=a("VU/8"),o=i(s.a,n.a,!1,null,null,null);e.a=o.exports},bOZg:function(t,e,a){function s(t){return a(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./logo.svg":"EfBi"};s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="bOZg"},cHtD:function(t,e,a){"use strict";var s=a("7+uW"),n=a("/ocq"),i=a("olkN"),o=a("zMLW"),u=a("GTte"),r=a("Aany"),c=a("1QUN");s.a.use(n.a);var M=[{path:"/",component:o.a},{path:"/signup",component:u.a},{path:"/signin",component:r.a},{path:"/dashboard",component:c.a,beforeEnter:function(t,e,a){i.a.state.idToken?a():a("/signin")}}];e.a=new n.a({mode:"history",routes:M})},ceuM:function(t,e,a){"use strict";e.a={data:function(){return{email:"",age:null,password:"",confirmPassword:"",country:"usa",hobbyInputs:[],terms:!1}},methods:{onAddHobby:function(){var t={id:Math.random()*Math.random()*1e3,value:""};this.hobbyInputs.push(t)},onDeleteHobby:function(t){this.hobbyInputs=this.hobbyInputs.filter(function(e){return e.id!==t})},onSubmit:function(){var t={email:this.email,age:this.age,password:this.password,confirmPassword:this.confirmPassword,country:this.country,hobbies:this.hobbyInputs.map(function(t){return t.value}),terms:this.terms};console.log(t),this.$store.dispatch("signup",t)}}}},"dLd/":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABkCAYAAAA7Ska5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTgyQ0YzMjQ4NEY0MTFFNkJFOTI4RTNGRTY5OTM1OTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTgyQ0YzMjU4NEY0MTFFNkJFOTI4RTNGRTY5OTM1OTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODJDRjMyMjg0RjQxMUU2QkU5MjhFM0ZFNjk5MzU5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxODJDRjMyMzg0RjQxMUU2QkU5MjhFM0ZFNjk5MzU5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmCNEFgAABJASURBVHja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"},eIrf:function(t,e,a){"use strict";var s=a("mtWM");a.n(s);e.a={computed:{email:function(){return!!this.$store.getters.user&&this.$store.getters.user.email}},created:function(){this.$store.dispatch("fetchUser")}}},"h/N8":function(t,e,a){"use strict";e.a={computed:{auth:function(){return this.$store.getters.isAuthenticated}},methods:{onLogout:function(){this.$store.dispatch("logout")}}}},hUGX:function(t,e,a){"use strict";e.a={data:function(){return{email:"",password:""}},methods:{onSubmit:function(){var t={email:this.email,password:this.password};console.log(t),this.$store.dispatch("login",{email:t.email,password:t.password})}}}},hp4H:function(t,e){},hxP8:function(t,e,a){"use strict";function s(t){a("z/V9")}var n=a("h/N8"),i=a("nha1"),o=a("VU/8"),u=s,r=o(n.a,i.a,!1,u,"data-v-2e8ea17b",null);e.a=r.exports},lDt3:function(t,e){},nha1:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{attrs:{id:"header"}},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[t._v("Vue - Complete Guide")])],1),t._v(" "),a("nav",[a("ul",[t.auth?t._e():a("li",[a("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")])],1),t._v(" "),t.auth?t._e():a("li",[a("router-link",{attrs:{to:"/signin"}},[t._v("Sign In")])],1),t._v(" "),t.auth?a("li",[a("router-link",{attrs:{to:"/dashboard"}},[t._v("Dashboard")])],1):t._e(),t._v(" "),t.auth?a("li",[a("button",{staticClass:"logout",on:{click:t.onLogout}},[t._v("Logout")])]):t._e()])])])},n=[],i={render:s,staticRenderFns:n};e.a=i},olkN:function(t,e,a){"use strict";var s=a("7+uW"),n=a("NYxO"),i=a("NwdG"),o=a("mtWM"),u=a.n(o),r=a("cHtD");s.a.use(n.a),e.a=new n.a.Store({state:{idToken:null,userId:null,user:null},mutations:{authUser:function(t,e){t.idToken=e.token,t.userId=e.userId},storeUser:function(t,e){t.user=e},clearAuthData:function(t){t.idToken=null,t.userId=null}},actions:{setLogoutTimer:function(t,e){var a=t.commit;setTimeout(function(){a("clearAuthData")},1e3*e)},signup:function(t,e){var a=t.commit,s=t.dispatch;i.a.post("/signupNewUser?key=AIzaSyALJZquk-8NuzQshEzrRM5nsTNdoaMlpVg",{email:e.email,password:e.password,returnSecureToken:!0}).then(function(t){console.log(t),a("authUser",{token:t.data.idToken,userId:t.data.localId});var n=new Date,i=new Date(n.getTime()+1e3*t.data.expiresIn);localStorage.setItem("token",t.data.idToken),localStorage.setItem("userId",t.data.localId),localStorage.setItem("expirationDate",i),s("storeUser",e),s("setLogoutTimer",t.data.expiresIn)}).catch(function(t){return console.log(t)})},login:function(t,e){var a=t.commit,s=t.dispatch;i.a.post("/verifyPassword?key=AIzaSyALJZquk-8NuzQshEzrRM5nsTNdoaMlpVg",{email:e.email,password:e.password,returnSecureToken:!0}).then(function(t){console.log(t);var e=new Date,n=new Date(e.getTime()+1e3*t.data.expiresIn);localStorage.setItem("token",t.data.idToken),localStorage.setItem("userId",t.data.localId),localStorage.setItem("expirationDate",n),a("authUser",{token:t.data.idToken,userId:t.data.localId}),s("setLogoutTimer",t.data.expiresIn)}).catch(function(t){return console.log(t)})},tryAutoLogin:function(t){var e=t.commit,a=localStorage.getItem("token");if(a){var s=localStorage.getItem("expirationDate");if(!(new Date>=s)){e("authUser",{token:a,userId:localStorage.getItem("userId")})}}},logout:function(t){(0,t.commit)("clearAuthData"),localStorage.removeItem("expirationDate"),localStorage.removeItem("token"),localStorage.removeItem("userId"),r.a.replace("/signin")},storeUser:function(t,e){var a=(t.commit,t.state);a.idToken&&u.a.post("/users.json?auth="+a.idToken,e).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})},fetchUser:function(t){var e=t.commit,a=t.state;a.idToken&&u.a.get("/users.json?auth="+a.idToken).then(function(t){console.log(t);var a=t.data,s=[];for(var n in a){var i=a[n];i.id=n,s.push(i)}console.log(s),e("storeUser",s[0])}).catch(function(t){return console.log(t)})}},getters:{user:function(t){return t.user},isAuthenticated:function(t){return null!==t.idToken}}})},qFPD:function(t,e,a){"use strict";e.a={props:["name"],computed:{xlink:function(){return a("bOZg")("./"+this.name+".svg")}}}},xJD8:function(t,e,a){"use strict";var s=a("hxP8");e.a={name:"app",components:{"app-header":s.a},created:function(){this.$store.dispatch("tryAutoLogin")}}},"z/V9":function(t,e){},zMLW:function(t,e,a){"use strict";function s(t){a("7cTf")}var n=a("+IAJ"),i=a("VU/8"),o=s,u=i(null,n.a,!1,o,"data-v-645ad340",null);e.a=u.exports},zcap:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a5d0d9d5a19b26480560.js.map