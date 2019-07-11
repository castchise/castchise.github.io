(function(t){function e(e){for(var a,i,o=e[0],c=e[1],d=e[2],u=0,p=[];u<o.length;u++)i=o[u],s[i]&&p.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container pb-8 max-w-5xl mx-auto text-center text-2xl overflow-hidden lg:rounded-t-lg shadow-md lg:mt-16 lg:max-w-4xl xl:max-w-5xl bg-white min-h-screen lg:min-h-0"},[r("h1",{staticClass:"font-bold uppercase bg-gray-300 text-sm py-3 tracking-wide text-gray-600 shadow-md"},[t._v("Мои инструменты")]),r("payment-cards")],1)])},n=[],i=(r("845f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-4 flex items-center flex-col md:flex-wrap md:py-5 md:justify-center xl:justify-start md:flex-row md:ml-3",attrs:{id:"card-container"}},[t._l(t.cards.slice(0,t.maxCards),function(e){return r("card",t._b({key:e.id,attrs:{"update-card":t.editCard,"cards-logo":t.cardsLogo},on:{remove:t.removeCard}},"card",e,!1))}),t.cards.length<=t.maxCards-1?r("div",{staticClass:"mt-5 w-11/12 h-32 bg-white border border-dashed border-gray-300 rounded-lg group hover:border-solid hover:border-gray-500 cursor-pointer max-w-xxs md:mr-3 md:ml-3",on:{click:t.addCard}},[t._m(0),r("p",{staticClass:"text-sm text-gray-500 opacity-25 group-hover:opacity-100 add-wallet-txt"},[t._v("Добавить кошелек")])]):t._e()],2)}),o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex relative h-3/4"},[r("div",{staticClass:"h-8 w-1 bg-gray-300 absolute top-1/2 left-1/2 transform-50 group-hover:bg-gray-500 add-wallet-bar"}),r("div",{staticClass:"h-1 w-8 bg-gray-300 absolute top-1/2 left-1/2 transform-50 group-hover:bg-gray-500 add-wallet-bar"})])}],c=(r("20d6"),r("c5f6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"cardTemplate",staticClass:"mt-5 w-11/12 h-32 bg-white border-transparent rounded-lg cursor-pointer max-w-xxs md:mr-3 md:ml-3 shadow-md bg-gray-300 hover:bg-gray-400 hover:border-gray-400 credit-card",on:{click:function(e){t.cardToggle=!t.cardToggle}}},[r("div",{staticClass:"flex justify-between p-3"},[r("div",{staticClass:"w-1/2 text-lg text-left flex flex-col"},[r("input",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],ref:"titleInput",staticClass:"bg-1/2black w-175 sm:w-190 px-2 text-white text-base uppercase font-bold outline-none rounded credit-card-title",attrs:{type:"text",name:"title"},on:{click:function(t){t.stopPropagation()}}}),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"uppercase font-bold credit-card-title text-white text-base"},[t._v(t._s(t.title))]),r("span",{staticClass:"w-12/12 text-xs mt-3 group-hover:opacity-100 uppercase font-bold",class:t.active?"text-green-400":"text-red-400"},[t._v(t._s(t.status))])]),r("div",{staticClass:"w-1/4 flex justify-end flex-wrap items-start"},[r("transition",{attrs:{name:"fadeIn"}},[r("a",{directives:[{name:"show",rawName:"v-show",value:t.cardToggle,expression:"cardToggle"}],staticClass:"text-gray-700 opacity-50 hover:opacity-100 credit-card-edit",attrs:{href:"#!"},on:{click:function(e){e.stopPropagation(),t.editMode=!t.editMode}}},[r("svg",{staticClass:"h-5 w-5 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"}})])])]),r("transition",{attrs:{name:"fadeIn"}},[r("a",{directives:[{name:"show",rawName:"v-show",value:t.cardToggle,expression:"cardToggle"}],staticClass:"ml-3 text-gray-700 opacity-50 hover:opacity-100 credit-card-edit",attrs:{href:"#!"},on:{click:function(e){return e.stopPropagation(),t.removeCard(e)}}},[r("svg",{staticClass:"h-5 w-5 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"}})])])])],1)]),r("div",{staticClass:"w-full flex items-center justify-between pl-3 pr-3"},[r("input",{directives:[{name:"show",rawName:"v-show",value:t.editMode&&!t.first4,expression:"editMode && !first4"},{name:"model",rawName:"v-model",value:t.cardNumber,expression:"cardNumber"}],ref:"numberInput",staticClass:"bg-1/2black w-175 sm:w-190 px-2 text-white text-base uppercase outline-none rounded text-sm tracking-wide text-white credit-card-number",attrs:{type:"text",placeholder:"номер карты"},domProps:{value:t.cardNumber},on:{input:[function(e){e.target.composing||(t.cardNumber=e.target.value)},t.numberInput],click:function(t){t.stopPropagation()}}}),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.editMode||t.editMode&&t.first4,expression:"!editMode || editMode && first4"}],staticClass:"text-lg tracking-wide text-white credit-card-number"},[t._v(t._s(t.first4)+" **** **** "+t._s(t.last4))]),r("div",{staticClass:"flex justify-center align-center items-center"},[r("div",{staticClass:"bank-type h-12 w-12"},[r("svg",{staticClass:"icon inline-block bankLogo"})]),r("div",{staticClass:"card-type"},["MASTERCARD"==t.paymentSystem?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15 10"}},[r("use",{attrs:{"xlink:href":"#mastercard"}})]):t._e(),"VISA"==t.paymentSystem?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 6"}},[r("use",{attrs:{"xlink:href":"#visa"}})]):t._e()])])])])}),d=[],l=(r("a481"),r("28a5"),r("6762"),r("2fdb"),r("96cf"),r("3b8d")),u={data:function(){return{cardToggle:!1,cardNumber:"",editMode:!1,cardType:"",logo:"",paymentSystem:""}},props:{id:{type:Number},title:{type:String,required:!0},active:{type:Boolean,required:!0},first4:{type:[Number,Boolean],default:!1},last4:{type:[Number,Boolean],default:!1},updateCard:{type:Function,required:!0},cardsLogo:{type:Array,required:!0}},methods:{removeCard:function(){this.$emit("remove",this.id)},numberInput:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var r,a,s,n,i,o,c,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.target.value,6!==r.length){t.next=11;break}return t.next=4,fetch("https://api.tinkoff.ru/v1/brand_by_bin?bin=".concat(r.slice(0,6)));case 4:return a=t.sent,t.next=7,a.json();case 7:s=t.sent,s.resultCode.includes("ERROR")||(n=s.payload,i=n.baseColor,o=n.logoFile,c=n.paymentSystem,i&&(this.$refs.cardTemplate.style.backgroundColor="#"+i),o&&(d=o.split(".")[0],this.cardsLogo.includes(d)&&(this.$refs.cardTemplate.querySelector(".bankLogo").innerHTML='\n                <use xlink:href="#'.concat(d,'"></use>\n              '))),c&&(this.paymentSystem=c)),t.next=12;break;case 11:r.length<6&&(this.$refs.cardTemplate.style.removeProperty("background-color"),this.$refs.cardTemplate.querySelector(".bankLogo").innerHTML="",this.paymentSystem="");case 12:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},computed:{status:function(){return this.active?"Подтверждена":"Заблокирована"}},created:function(){this.first4||(this.editMode=!0,this.cardToggle=!0)},mounted:function(){this.$refs.titleInput.value=this.title},watch:{editMode:function(){if(!this.editMode){var t={title:this.$refs.titleInput.value,id:this.id};this.$nextTick(function(){if(!this.first4){var e=this.$refs.numberInput.value.replace(/\D/g,"");t.first4=+e.slice(0,4),t.last4=+e.slice(-4)}this.updateCard(t)})}}}},p=u,f=r("2877"),m=Object(f["a"])(p,c,d,!1,null,null,null),h=m.exports,g={props:{maxCards:{type:Number,default:6}},components:{card:h},data:function(){return{cards:[],cardsLength:0,cardsLogo:["akb","alfabank","bankofmoscow","gazprom","kredit-evropa-bank","mdm","mir","mts-bank","otkrytie1","otp-bank","pochta-bank","promsvyazbank","rnko_platezhniy_centr","rosbank","tinkoff","sberbank"]}},methods:{removeCard:function(t){this.cards=this.cards.filter(function(e){return e.id!==t})},editCard:function(t){var e=this.cards.findIndex(function(e){return e.id===t.id});this.cards.splice(e,1,Object.assign(this.cards[e],t))},addCard:function(){this.cards.push({id:this.cards.length+1,title:"Моя карта ".concat(this.cards.length+1),active:!0})}},created:function(){this.cardsLength=this.cards.length}},v=g,b=Object(f["a"])(v,i,o,!1,null,null,null),w=b.exports,x={name:"app",components:{PaymentCards:w}},y=x,k=Object(f["a"])(y,s,n,!1,null,null,null),C=k.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"845f":function(t,e,r){}});
//# sourceMappingURL=app.11ee4c5b.js.map