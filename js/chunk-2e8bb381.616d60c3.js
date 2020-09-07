(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e8bb381"],{"0701":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{rounded:"lg",outlined:""}},["False"===t.movie.Response?n("h1",{staticClass:"display-1",domProps:{textContent:t._s(t.movie.Error)}}):t._e(),n("v-row",{attrs:{"no-gutters":""}},["N/A"!==t.movie.Poster?n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-img",{attrs:{src:t.movie.Poster}})],1):t._e(),n("v-col",[n("v-card-title",{staticClass:"display-1",domProps:{textContent:t._s(t.movie.Title)}}),n("v-card-subtitle",{staticClass:"text-subtitle-1"},[n("span",{domProps:{textContent:t._s(t.movie.Year+", ("+t.movie.Released+")")}}),n("v-rating",{attrs:{length:"10",size:"14",dense:"",readonly:"",id:"imdb",value:parseFloat(t.movie.imdbRating)}}),t._v(" "+t._s(t.movie.imdbRating)+" "),n("br"),n("span",{staticClass:"text-overline",domProps:{textContent:t._s(t.movie.Genre)}})],1),n("v-card-text",[n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Runtime: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Runtime)}}),n("br"),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Rated: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Rated)}}),n("br"),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Director: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Director)}}),n("br"),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Writer: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Writer)}}),n("br"),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Actors: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Actors)}}),n("br"),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Country: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Country)}}),n("br"),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Awards: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Awards)}}),n("br"),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Metascore: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Metascore)}}),n("br"),"series"==t.movie.Type?[n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Total Seasons: ")}}),n("span",{domProps:{textContent:t._s(t.movie.totalSeasons)}}),n("br")]:t._e(),n("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s("Plot: ")}}),n("span",{domProps:{textContent:t._s(t.movie.Plot)}}),n("br")],2),n("v-card-actions",[n("v-btn",{attrs:{title:"IMDb Link",color:"primary",large:"",text:"",href:"https://www.imdb.com/title/"+t.movie.imdbID+"/"},domProps:{textContent:t._s("IMDb Link")}})],1)],1)],1)],1)},i=[],s=(n("99af"),n("d3b7"),{data:function(){return{movie:null}},created:function(){var t=this;fetch("https://www.omdbapi.com/?apikey=".concat(Object({NODE_ENV:"production",BASE_URL:"/Movies/"}).VUE_APP_APIKEY,"&plot=full&i=").concat(this.$route.params.id)).then((function(t){return t.json()})).then((function(e){return t.movie=e})).catch((function(t){return console.log(t)}))}}),r=s,a=n("2877"),l=n("6544"),c=n.n(l),d=n("8336"),u=n("b0af"),p=n("99d9"),m=n("62ad"),h=n("adda"),v=(n("d81d"),n("a9e3"),n("c96a"),n("696f"),n("9d26")),f=n("a9ad"),g=n("2b0e"),b=g["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}}),C=n("af2b"),x=n("5607"),_=g["a"].extend({name:"rippleable",directives:{ripple:x["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),y=n("7560"),P=n("80d2"),I=n("58df"),w=Object(I["a"])(f["a"],b,_,C["a"],y["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,o=t.light,i=t.medium,s=t.small,r=t.size,a=t.xLarge,l=t.xSmall;return{dark:e,large:n,light:o,medium:i,size:r,small:s,xLarge:a,xSmall:l}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(t){var e=this;return function(n){if(!e.readonly){var o=e.genHoverIndex(n,t);e.clearable&&e.internalValue===o?e.internalValue=0:e.internalValue=o}}},createProps:function(t){var e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex:function(t,e){var n=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(n=!n),e+(n?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter:function(t,e){var n=this;this.runDelay("open",(function(){n.hoverIndex=n.genHoverIndex(t,e)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(t){var e=this,n=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(n);var o={click:n.click};return this.hover&&(o.mouseenter=function(n){return e.onMouseEnter(n,t)},o.mouseleave=this.onMouseLeave,this.halfIncrements&&(o.mousemove=function(n){return e.onMouseEnter(n,t)})),this.$createElement(v["a"],this.setTextColor(this.getColor(n),{attrs:{tabindex:-1},directives:this.directives,props:this.iconProps,on:o}),[this.getIconName(n)])}},render:function(t){var e=this,n=Object(P["e"])(Number(this.length)).map((function(t){return e.genItem(t)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),H=n("0fd9"),V=Object(a["a"])(r,o,i,!1,null,null,null);e["default"]=V.exports;c()(V,{VBtn:d["a"],VCard:u["a"],VCardActions:p["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VCol:m["a"],VImg:h["a"],VRating:w,VRow:H["a"]})},"696f":function(t,e,n){}}]);
//# sourceMappingURL=chunk-2e8bb381.616d60c3.js.map