// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('topics.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ajax.core');
topics.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$topics,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$fetch_QMARK_,false,cljs.core.cst$kw$index,(-1)], null));
topics.core.random_range = (function topics$core$random_range(min,max){
var G__23698 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((max - min));
var G__23699 = (min - (1));
return Math.floor(G__23698,G__23699);
});
topics.core.random_index = (function topics$core$random_index(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(topics.core.state,cljs.core.assoc,cljs.core.cst$kw$index,topics.core.random_range((0),cljs.core.count(cljs.core.cst$kw$topics.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(topics.core.state)))));
});
topics.core.success_handler = (function topics$core$success_handler(p__23700){
var vec__23701 = p__23700;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(1),null);
if(cljs.core.truth_(ok)){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
console.log(data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(topics.core.state,cljs.core.assoc,cljs.core.cst$kw$topics,cljs.core.cst$kw$topics.cljs$core$IFn$_invoke$arity$1(data));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(topics.core.state,cljs.core.assoc,cljs.core.cst$kw$fetch_QMARK_,true);

return topics.core.random_index();
} else {
return console.log(["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
}
});
topics.core.request_json = (function topics$core$request_json(){
var G__23704 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,"./topics.json",cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$handler,topics.core.success_handler,cljs.core.cst$kw$format,(ajax.core.url_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.url_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.url_request_format.call(null)),cljs.core.cst$kw$response_DASH_format,(function (){var G__23705 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__23705) : ajax.core.json_response_format.call(null,G__23705));
})()], null);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__23704) : ajax.core.ajax_request.call(null,G__23704));
});
topics.core.home_page = (function topics$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$title,"\u3042\u306A\u305F\u306B\u6700\u9AD8\u306E\u8CEA\u554F\u3092\u5DEE\u3057\u4E0A\u3052\u307E\u3057\u3087\u3046... "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$topics,(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$fetch_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(topics.core.state));
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(topics.core.state)))));
} else {
return and__4120__auto__;
}
})())?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$topics.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(topics.core.state)),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(topics.core.state))):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$next_DASH_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Next!",cljs.core.cst$kw$on_DASH_click,topics.core.random_index], null)], null)], null);
});
topics.core.mount_root = (function topics$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topics.core.home_page], null),document.getElementById("app"));
});
topics.core.init_BANG_ = (function topics$core$init_BANG_(){
topics.core.mount_root();

return topics.core.request_json();
});
