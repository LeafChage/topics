// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__34026__delegate = function (x__34010__auto__){
if(cljs.core.truth_(topics.core.mount_root)){
return cljs.core.apply.call(null,topics.core.mount_root,x__34010__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","topics.core/mount-root","' is missing"].join(''));
}
};
var G__34026 = function (var_args){
var x__34010__auto__ = null;
if (arguments.length > 0) {
var G__34027__i = 0, G__34027__a = new Array(arguments.length -  0);
while (G__34027__i < G__34027__a.length) {G__34027__a[G__34027__i] = arguments[G__34027__i + 0]; ++G__34027__i;}
  x__34010__auto__ = new cljs.core.IndexedSeq(G__34027__a,0,null);
} 
return G__34026__delegate.call(this,x__34010__auto__);};
G__34026.cljs$lang$maxFixedArity = 0;
G__34026.cljs$lang$applyTo = (function (arglist__34028){
var x__34010__auto__ = cljs.core.seq(arglist__34028);
return G__34026__delegate(x__34010__auto__);
});
G__34026.cljs$core$IFn$_invoke$arity$variadic = G__34026__delegate;
return G__34026;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1555764114491
