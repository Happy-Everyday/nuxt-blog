(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{430:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"a",function(){return j});var n=r(106),c=r.n(n),l="https://www.bestlifebestyue.com/admin-api/";function o(t){return c.a.get(l+"api/getArticleList",{params:t})}function j(t){return c.a.get(l+"api/getArticleDetail",{params:t})}},431:function(t,e,r){var map={"./af":303,"./af.js":303,"./ar":304,"./ar-dz":305,"./ar-dz.js":305,"./ar-kw":306,"./ar-kw.js":306,"./ar-ly":307,"./ar-ly.js":307,"./ar-ma":308,"./ar-ma.js":308,"./ar-sa":309,"./ar-sa.js":309,"./ar-tn":310,"./ar-tn.js":310,"./ar.js":304,"./az":311,"./az.js":311,"./be":312,"./be.js":312,"./bg":313,"./bg.js":313,"./bm":314,"./bm.js":314,"./bn":315,"./bn.js":315,"./bo":316,"./bo.js":316,"./br":317,"./br.js":317,"./bs":318,"./bs.js":318,"./ca":319,"./ca.js":319,"./cs":320,"./cs.js":320,"./cv":321,"./cv.js":321,"./cy":322,"./cy.js":322,"./da":323,"./da.js":323,"./de":324,"./de-at":325,"./de-at.js":325,"./de-ch":326,"./de-ch.js":326,"./de.js":324,"./dv":327,"./dv.js":327,"./el":328,"./el.js":328,"./en-SG":329,"./en-SG.js":329,"./en-au":330,"./en-au.js":330,"./en-ca":331,"./en-ca.js":331,"./en-gb":332,"./en-gb.js":332,"./en-ie":333,"./en-ie.js":333,"./en-il":334,"./en-il.js":334,"./en-nz":335,"./en-nz.js":335,"./eo":336,"./eo.js":336,"./es":337,"./es-do":338,"./es-do.js":338,"./es-us":339,"./es-us.js":339,"./es.js":337,"./et":340,"./et.js":340,"./eu":341,"./eu.js":341,"./fa":342,"./fa.js":342,"./fi":343,"./fi.js":343,"./fo":344,"./fo.js":344,"./fr":345,"./fr-ca":346,"./fr-ca.js":346,"./fr-ch":347,"./fr-ch.js":347,"./fr.js":345,"./fy":348,"./fy.js":348,"./ga":349,"./ga.js":349,"./gd":350,"./gd.js":350,"./gl":351,"./gl.js":351,"./gom-latn":352,"./gom-latn.js":352,"./gu":353,"./gu.js":353,"./he":354,"./he.js":354,"./hi":355,"./hi.js":355,"./hr":356,"./hr.js":356,"./hu":357,"./hu.js":357,"./hy-am":358,"./hy-am.js":358,"./id":359,"./id.js":359,"./is":360,"./is.js":360,"./it":361,"./it-ch":362,"./it-ch.js":362,"./it.js":361,"./ja":363,"./ja.js":363,"./jv":364,"./jv.js":364,"./ka":365,"./ka.js":365,"./kk":366,"./kk.js":366,"./km":367,"./km.js":367,"./kn":368,"./kn.js":368,"./ko":369,"./ko.js":369,"./ku":370,"./ku.js":370,"./ky":371,"./ky.js":371,"./lb":372,"./lb.js":372,"./lo":373,"./lo.js":373,"./lt":374,"./lt.js":374,"./lv":375,"./lv.js":375,"./me":376,"./me.js":376,"./mi":377,"./mi.js":377,"./mk":378,"./mk.js":378,"./ml":379,"./ml.js":379,"./mn":380,"./mn.js":380,"./mr":381,"./mr.js":381,"./ms":382,"./ms-my":383,"./ms-my.js":383,"./ms.js":382,"./mt":384,"./mt.js":384,"./my":385,"./my.js":385,"./nb":386,"./nb.js":386,"./ne":387,"./ne.js":387,"./nl":388,"./nl-be":389,"./nl-be.js":389,"./nl.js":388,"./nn":390,"./nn.js":390,"./pa-in":391,"./pa-in.js":391,"./pl":392,"./pl.js":392,"./pt":393,"./pt-br":394,"./pt-br.js":394,"./pt.js":393,"./ro":395,"./ro.js":395,"./ru":396,"./ru.js":396,"./sd":397,"./sd.js":397,"./se":398,"./se.js":398,"./si":399,"./si.js":399,"./sk":400,"./sk.js":400,"./sl":401,"./sl.js":401,"./sq":402,"./sq.js":402,"./sr":403,"./sr-cyrl":404,"./sr-cyrl.js":404,"./sr.js":403,"./ss":405,"./ss.js":405,"./sv":406,"./sv.js":406,"./sw":407,"./sw.js":407,"./ta":408,"./ta.js":408,"./te":409,"./te.js":409,"./tet":410,"./tet.js":410,"./tg":411,"./tg.js":411,"./th":412,"./th.js":412,"./tl-ph":413,"./tl-ph.js":413,"./tlh":414,"./tlh.js":414,"./tr":415,"./tr.js":415,"./tzl":416,"./tzl.js":416,"./tzm":417,"./tzm-latn":418,"./tzm-latn.js":418,"./tzm.js":417,"./ug-cn":419,"./ug-cn.js":419,"./uk":420,"./uk.js":420,"./ur":421,"./ur.js":421,"./uz":422,"./uz-latn":423,"./uz-latn.js":423,"./uz.js":422,"./vi":424,"./vi.js":424,"./x-pseudo":425,"./x-pseudo.js":425,"./yo":426,"./yo.js":426,"./zh-cn":427,"./zh-cn.js":427,"./zh-hk":428,"./zh-hk.js":428,"./zh-tw":429,"./zh-tw.js":429};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=431},432:function(t,e,r){var content=r(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("56540d84",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";var n=r(432);r.n(n).a},439:function(t,e,r){(t.exports=r(15)(!1)).push([t.i,".content{overflow:hidden}.content .tips-wrapper{width:100%;padding:10px;overflow:hidden}.content .tips-wrapper .tips-item{float:left;padding:3.33333px 10px;font-size:12px;color:#999;border:1px solid #999;border-radius:5px 5px;margin:0 10px}.content .tips-wrapper .tips-item.active{color:#fff;border:1px solid #999;background:#999}.content .article-wrapper{overflow:hidden;padding:10px}.content .article-wrapper .no-article{text-align:center}.content .article-wrapper .get-more{margin-top:20px;text-align:center;cursor:pointer}.content .article-wrapper .article{position:relative;width:100%;height:150px;padding-left:150px}.content .article-wrapper .article .article-pic{position:absolute;width:120px;height:120px;top:50%;left:15px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.content .article-wrapper .article .article-pic img{width:100%;height:100%}.content .article-wrapper .article .article-text{width:100%;height:100%;padding:10px 0}.content .article-wrapper .article .article-text .article-text-title{width:100%;height:30px;line-height:30px}.content .article-wrapper .article .article-text .article-text-title span.title{display:inline-block;width:270px;height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:16px;color:#333}.content .article-wrapper .article .article-text .article-text-title span.time{float:right;width:170px;text-align:right;font-size:12px;color:#333}.content .article-wrapper .article .article-text .article-text-desc{width:100%;height:70px;font-size:12px;color:#333;display:-webkit-box;-webkit-line-clamp:4;overflow:hidden;margin-bottom:10px;margin-top:5px}.content .article-wrapper .article .article-text .article-text-focus{width:100%;height:20px;font-size:12px;color:#333}.content .article-wrapper .article .article-text .article-text-focus span{margin-right:10px}",""])},448:function(t,e,r){"use strict";r.r(e);r(25),r(71);var n=r(6),c=r(430),l=r(302),o={head:function(){return{title:"article | XYTang"}},components:{},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)({articleStatus:1,pageSize:10,currentPage:1,articleType:"article"}).then(function(t){var e={tipsList:[],articleList:[]};return"000000"==t.data.code&&(e.articleList=t.data.data.articleList,e.articleList.forEach(function(t){t.articleCreatedTime=l(t.articleCreatedTime).format("YYYY-MM-DD HH:mm:ss")})),e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{currentPage:1,getMoreText:"点击加载更多……"}},mounted:function(){},methods:{goToDetail:function(t){this.$router.push("/detail?id="+t)},getMore:function(){var t=this;Object(c.b)({articleStatus:1,pageSize:10,currentPage:++this.currentPage,articleType:"article"}).then(function(e){var r={tipsList:[],articleList:[]};"000000"==e.data.code&&(r.articleList=e.data.data.articleList,r.articleList.length>0?r.articleList.forEach(function(e){e.articleCreatedTime=l(e.articleCreatedTime).format("YYYY-MM-DD HH:mm:ss"),t.articleList.push(e)}):t.currentPage>1&&t.currentPage--,(0==r.articleList.length||r.articleList.length<10)&&(t.getMoreText="已经到底了……"))})}}},j=(r(438),r(5)),component=Object(j.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"article-page"}},[r("div",{staticClass:"content"},[r("div",{staticClass:"article-wrapper"},[0==t.articleList.length?r("div",{staticClass:"no-article"},[t._v("暂无数据……")]):t._e(),t._v(" "),t._l(t.articleList,function(e){return r("div",{key:e._id,staticClass:"article",on:{click:function(r){return t.goToDetail(e._id)}}},[t._m(0,!0),t._v(" "),r("div",{staticClass:"article-text"},[r("p",{staticClass:"article-text-title"},[r("span",{staticClass:"title"},[t._v(t._s(e.articleTitle))]),t._v(" "),r("span",{staticClass:"time"},[t._v(t._s(e.articleCreatedTime))])]),t._v(" "),r("p",{staticClass:"article-text-desc"},[t._v("\n                            "+t._s(e.articleText)+"\n                        ")]),t._v(" "),r("p",{staticClass:"article-text-focus"},[r("span",[t._v("阅读数"+t._s(e.articleReadNum))])])])])}),t._v(" "),t.articleList.length>0?r("div",{staticClass:"get-more",on:{click:t.getMore}},[t._v(t._s(t.getMoreText))]):t._e()],2)]),t._v(" "),t._m(1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article-pic"},[e("img",{attrs:{src:"/images/right-sidebar.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-sidebar"},[e("div",{staticClass:"right-sidebar-pic"},[e("img",{attrs:{src:"/images/right-sidebar.jpg",alt:""}})])])}],!1,null,null,null);e.default=component.exports}}]);