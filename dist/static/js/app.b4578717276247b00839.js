webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("Meid"),l=a("1mcD"),n=a.n(l),c=a("Sazm"),o=a.n(c);o.a.initializeApp({apiKey:"AIzaSyDOecFCtZYnbSvZFkzD0R6ESFCw7ks2YRE",authDomain:"cropchat-c3019.firebaseapp.com",databaseURL:"https://cropchat-c3019.firebaseio.com",projectId:"cropchat-c3019",storageBucket:"cropchat-c3019.appspot.com",messagingSenderId:"15507557319"});var r={database:o.a.database()},d=(a("uMhA"),a("Wiqq"),{name:"App",methods:{hideMenu:function(){this.$refs.mdlLayoutDrawer.classList.remove("is-visible"),document.getElementsByClassName("mdl-layout__obfuscator")[0].classList.remove("is-visible")}}}),m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},[t._m(0),t._v(" "),a("div",{ref:"mdlLayoutDrawer",staticClass:"mdl-layout__drawer"},[a("span",{staticClass:"mdl-layout-title"},[t._v("CropChat")]),t._v(" "),a("nav",{staticClass:"mdl-navigation"},[a("router-link",{staticClass:"mdl-navigation__link",attrs:{to:{name:"HomeView"}},nativeOn:{click:function(e){return t.hideMenu(e)}}},[t._v("Home")]),t._v(" "),a("router-link",{staticClass:"mdl-navigation__link",attrs:{to:{name:"PostView"}},nativeOn:{click:function(e){return t.hideMenu(e)}}},[t._v("Post a picture")])],1)]),t._v(" "),a("main",{staticClass:"mdl-layout__content"},[a("div",{staticClass:"page-content"},[a("router-view")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mdl-layout__header"},[e("div",{staticClass:"mdl-layout__header-row"},[e("span",{staticClass:"mdl-layout-title"},[this._v("CropChat")])])])}]};var u=a("VU/8")(d,m,!1,function(t){a("qgGL")},null,null).exports,p=a("/ocq"),v=a("M4fF"),_={data:function(){return{cat:""}},mounted:function(){var t=this;this.cat=Object(v.find)(this.$root.cat,function(e){return e[".key"]===t.$route.params.id})}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mdl-grid"},[a("div",{staticClass:"mdl-cell mdl-cell--8-col"},[a("div",{staticClass:"picture"},[a("img",{attrs:{src:t.cat.url}})]),t._v(" "),a("div",{staticClass:"info"},[a("span",[t._v(t._s(t.cat.info))])])]),t._v(" "),a("div",{staticClass:"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"},[a("div",{staticClass:"comment"},[a("span",[t._v(t._s(t.cat.comment))])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"actions"},[e("a",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",attrs:{href:"/#/post"}},[this._v("\n        ANSWER\n      ")])])}]};var f=a("VU/8")(_,h,!1,function(t){a("f/km")},"data-v-5ee9ce07",null).exports,b={pictures:[{id:0,url:"http://25.media.tumblr.com/tumblr_m40h4ksiUa1qbyxr0o1_400.gif",comment:"A cat game",info:"Posted by Kevin on Friday"},{id:1,url:"http://25.media.tumblr.com/tumblr_lhd7n9Qec01qgnva2o1_500.jpg",comment:"Tatoo & cat",info:"Posted by Charles on Tuesday"},{id:2,url:"http://24.media.tumblr.com/tumblr_m4j2atctRm1qejbiro1_1280.jpg",comment:"Santa cat",info:"Posted by Richard on Monday"},{id:3,url:"http://25.media.tumblr.com/tumblr_m3rmbwhVB51qhwmnpo1_1280.jpg",comment:"Mexico cat",info:"Posted by Richard on Monday"},{id:4,url:"http://24.media.tumblr.com/tumblr_mceknxs4Lo1qd477zo1_500.jpg",comment:"Curious cat",info:"Posted by Richard on Monday"}]},C={data:function(){return{pictures:b.pictures}},methods:{displayDetails:function(t){this.$router.push({name:"DetailView",params:{id:t}})}},mounted:function(){}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mdl-grid"},[a("div",{staticClass:"mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"}),t._v(" "),a("div",{staticClass:"mdl-cell mdl-cell--6-col mdl-cell--4-col-phone"},t._l(this.$root.cat,function(e,i){return a("div",{key:i,staticClass:"image-card",on:{click:function(a){t.displayDetails(e[".key"])}}},[a("pre",[t._v(t._s(e))]),t._v(" "),a("div",{staticClass:"image-card__picture"},[a("img",{attrs:{src:e.url}})]),t._v(" "),a("div",{staticClass:"image-card__comment mdl-card__actions"},[a("span",[t._v(t._s(e.comment))])])])}))]),t._v(" "),a("router-link",{staticClass:"add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored",attrs:{to:{name:"PostView"}}},[a("i",{staticClass:"material-icons"},[t._v("add")])])],1)},staticRenderFns:[]};var y=a("VU/8")(C,g,!1,function(t){a("ajz6")},"data-v-7e5b7607",null).exports,w=a("emis"),k=a.n(w),j={data:function(){return{catUrl:null,title:""}},methods:{postCat:function(){this.$root.$firebaseRefs.cat.push({url:this.catUrl,comment:this.title,info:"Posted by horse on today",created_at:-1*(new Date).getTime()}).then(this.$router.push("/"))}},mounted:function(){var t=this,e=new XMLHttpRequest;e?(e.onreadystatechange=function(){e.readyState===XMLHttpRequest.DONE&&(200===e.status?t.catUrl=k()(e.responseText).root.children[0].children[0].children[0].children[0].content:console.log("There was a problem with the request."))},e.open("GET","https://thecatapi.com/api/images/get?format=xml&results_per_page=1"),e.send()):alert("Giving up :( Cannot create an XMLHTTP instance")}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"mdl-grid"},[a("div",{staticClass:"mdl-cell mdl-cell--8-col"},[a("div",{staticClass:"card-image__pictrure"},[a("img",{attrs:{src:this.catUrl}})])]),t._v(" "),a("div",{staticClass:"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"},[a("div",{staticClass:"mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"mdl-textfield__input",attrs:{id:"username",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),a("label",{staticClass:"mdl-textfield__label",attrs:{for:"username"}},[t._v("Describe me")])]),t._v(" "),a("div",{staticClass:"actions"},[a("a",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",on:{click:function(e){return e.preventDefault(),t.postCat(e)}}},[t._v("\n          POST A CAT\n        ")])])])])])},staticRenderFns:[]};var M=a("VU/8")(j,x,!1,function(t){a("X479")},"data-v-729f475c",null).exports;i.a.use(p.a);var R=new p.a({routes:[{path:"/",name:"HomeView",component:y},{path:"/detail/:id",name:"DetailView",component:f},{path:"/post",name:"PostView",component:M}]});Object(s.loadScript)({url:"https://js.arcgis.com/3.23"}),i.a.use(n.a),i.a.config.productionTip=!1,new i.a({el:"#app",firebase:{cat:r.database.ref("cat").orderByChild("created_at")},router:R,components:{App:u},template:"<App/>"})},X479:function(t,e){},ajz6:function(t,e){},"f/km":function(t,e){},qgGL:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b4578717276247b00839.js.map