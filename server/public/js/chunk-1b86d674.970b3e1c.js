(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b86d674"],{"5ced":function(t,a,s){},6006:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row row justify-content-md-center"},t._l(t.posts,(function(t){return s("div",{staticClass:"col-md-10 text-center"},[s("a",{attrs:{href:"/post/show/"+t.id}},[s("img",{staticClass:"img-thumbnail",attrs:{src:t.imageUrl,id:"images"}})])])})),0)])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-header bg-secondary text-white"},[s("h3",[t._v("Publicaciones")])])}],r={props:["posts"],data:function(){return{following:0,followers:0}}},o=r,c=(s("e97e"),s("2877")),i=Object(c["a"])(o,n,e,!1,null,null,null);a["a"]=i.exports},bb51:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app"},[s("Navbar"),s("div",{staticClass:"container",attrs:{id:"profile-info"}},[s("div",{staticClass:"row row justify-content-md-center"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card"},[s("PostList",{attrs:{posts:t.posts}})],1)])])])],1)},e=[],r=s("d178"),o=s("6006"),c={components:{Navbar:r["a"],PostList:o["a"]},data:function(){return{posts:[]}},created:function(){this.getAllPosts()},methods:{getAllPosts:function(){var t=this;this.axios.get("post/all").then((function(a){t.posts=a.data})).catch((function(t){console.log("error"+t)}))}}},i=c,l=(s("cccb"),s("2877")),u=Object(l["a"])(i,n,e,!1,null,null,null);a["default"]=u.exports},cccb:function(t,a,s){"use strict";var n=s("5ced"),e=s.n(n);e.a},cd69:function(t,a,s){},d178:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[s("b-navbar-brand",{attrs:{href:"/home"}},[t._v("Red Social")]),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-form",[s("b-navbar-brand",{attrs:{href:"/user/list"}},[t._v("Search a profile")]),s("b-navbar-brand",{attrs:{href:"/user/profile"}},[t._v("Profile")]),s("b-navbar-brand",{attrs:{href:"/post/add"}},[t._v("Create a post")]),s("b-navbar-brand",{on:{click:t.logOut}},[t._v("Log out")])],1)],1)],1)],1)},e=[],r=(s("7338"),{data:function(){return{user:""}},methods:{logOut:function(){var t=this;this.axios.post("logout").then((function(a){t.$cookie.delete("token",{domain:"localhost"}),t.$router.push({path:"/"})})).catch((function(t){console.log(t.response.data.error)}))}}}),o=r,c=s("2877"),i=Object(c["a"])(o,n,e,!1,null,null,null);a["a"]=i.exports},e97e:function(t,a,s){"use strict";var n=s("cd69"),e=s.n(n);e.a}}]);
//# sourceMappingURL=chunk-1b86d674.970b3e1c.js.map