// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('topics.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('garden.core');
garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$sym$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$sym$column,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$sym$center,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$sym$center], null),cljs.core.cst$kw$title,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$topics,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$next_DASH_button,cljs.core.PersistentArrayMap.EMPTY], null)], 0));
topics.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$topics,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$fetch_QMARK_,false,cljs.core.cst$kw$index,(-1)], null));
topics.core.random_range = (function topics$core$random_range(min,max){
var G__25616 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((max - min));
var G__25617 = (min - (1));
return Math.ceil(G__25616,G__25617);
});
topics.core.random_index = (function topics$core$random_index(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(topics.core.state,cljs.core.assoc,cljs.core.cst$kw$index,topics.core.random_range((0),cljs.core.count(cljs.core.cst$kw$topics.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(topics.core.state)))));
});
topics.core.success_handler = (function topics$core$success_handler(response){
var data = cljs.core.clj__GT_js(response);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(topics.core.state,cljs.core.assoc,cljs.core.cst$kw$topics,data.topics);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(topics.core.state,cljs.core.assoc,cljs.core.cst$kw$fetch_QMARK_,true);

return topics.core.random_index();
});
topics.core.error_handler = (function topics$core$error_handler(response){
return console.log(["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
topics.core.request_json = (function topics$core$request_json(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("./topics.json",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,topics.core.success_handler,cljs.core.cst$kw$error_DASH_handler,topics.core.error_handler], null)], 0));
});
topics.core.home_page = (function topics$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title,"\u3042\u306A\u305F\u306B\u6700\u9AD8\u306E\u8CEA\u554F\u3092\u5DEE\u3057\u4E0A\u3052\u307E\u3057\u3087\u3046... "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$topics,(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$fetch_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(topics.core.state));
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
