webpackJsonp([5],{LS3D:function(t,e){},cBVB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mtWM"),r=n.n(a),o={name:"news",data:function(){return{arr:[],mon:""}},methods:{getNews:function(){var t=this;r.a.get("/api/news/get").then(function(e){t.arr=e.data.data,console.log(e.data.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getNews()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("mt-header",{attrs:{title:"新闻公告",id:"header"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{attrs:{icon:"back"}})],1)],1),t._v(" "),n("div",{attrs:{id:"wrap"}},t._l(t.arr,function(e){return n("div",{staticClass:"wrap"},[n("h2",{domProps:{textContent:t._s(e.title)}},[t._v("习近平访美")]),t._v(" "),n("div",{attrs:{id:"wrp1"}},[n("p",{attrs:{id:"neirong"},domProps:{textContent:t._s(e.contentText+"......")}},[t._v("在中国，国家主席访美前夕")])]),t._v(" "),n("span",{domProps:{textContent:t._s(new Date(e.createTime).getFullYear()+"年"+(new Date(e.createTime).getMonth()+1)+"月"+new Date(e.createTime).getDate()+"日")}},[t._v("2015年09月11日 15：50")]),t._v(" "),n("router-link",{attrs:{to:"/detailnews?id="+e._id,id:"detail"}},[t._v("查看详情")])],1)}))],1)},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(t){n("d9gP"),n("LS3D")},"data-v-4c15c100",null);e.default=s.exports},d9gP:function(t,e){}});
//# sourceMappingURL=5.bf79da2e633370384f61.js.map