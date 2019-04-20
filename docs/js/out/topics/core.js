// Compiled by ClojureScript 1.10.520 {}
goog.provide('topics.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('garden.core');
garden.core.css.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Symbol(null,"flex","flex",215406899,null),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Symbol(null,"center","center",891587159,null),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Symbol(null,"center","center",891587159,null)], null),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"topics","topics",625768208),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"next-button","next-button",663327419),cljs.core.PersistentArrayMap.EMPTY], null));
topics.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topics","topics",625768208),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"fetch?","fetch?",1282754956),false,new cljs.core.Keyword(null,"index","index",-1531685915),(-1)], null));
topics.core.random_range = (function topics$core$random_range(min,max){
return Math.ceil(cljs.core.rand.call(null,(max - min)),(min - (1)));
});
topics.core.random_index = (function topics$core$random_index(){
return cljs.core.swap_BANG_.call(null,topics.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"index","index",-1531685915),topics.core.random_range.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"topics","topics",625768208).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,topics.core.state)))));
});
topics.core.success_handler = (function topics$core$success_handler(response){
var data = cljs.core.clj__GT_js.call(null,response);
cljs.core.swap_BANG_.call(null,topics.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"topics","topics",625768208),data.topics);

cljs.core.swap_BANG_.call(null,topics.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"fetch?","fetch?",1282754956),true);

return topics.core.random_index.call(null);
});
topics.core.error_handler = (function topics$core$error_handler(response){
return console.log(["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
topics.core.request_json = (function topics$core$request_json(){
return ajax.core.GET.call(null,"/topics.json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),topics.core.success_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),topics.core.error_handler], null));
});
topics.core.home_page = (function topics$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title","h2.title",866247517),"\u3042\u306A\u305F\u306B\u6700\u9AD8\u306E\u8CEA\u554F\u3092\u5DEE\u3057\u4E0A\u3052\u307E\u3057\u3087\u3046... "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topics","div.topics",700494129),(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"fetch?","fetch?",1282754956).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,topics.core.state));
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.call(null,(-1),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,topics.core.state)))));
} else {
return and__4120__auto__;
}
})())?cljs.core.nth.call(null,new cljs.core.Keyword(null,"topics","topics",625768208).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,topics.core.state)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,topics.core.state))):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.next-button","input.next-button",-1888796898),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),topics.core.random_index], null)], null)], null);
});
topics.core.mount_root = (function topics$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topics.core.home_page], null),document.getElementById("app"));
});
topics.core.init_BANG_ = (function topics$core$init_BANG_(){
topics.core.mount_root.call(null);

return topics.core.request_json.call(null);
});

//# sourceMappingURL=core.js.map?rel=1555764111228
