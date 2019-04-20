// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31878_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31878_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31879 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31880 = null;
var count__31881 = (0);
var i__31882 = (0);
while(true){
if((i__31882 < count__31881)){
var n = cljs.core._nth.call(null,chunk__31880,i__31882);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31883 = seq__31879;
var G__31884 = chunk__31880;
var G__31885 = count__31881;
var G__31886 = (i__31882 + (1));
seq__31879 = G__31883;
chunk__31880 = G__31884;
count__31881 = G__31885;
i__31882 = G__31886;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31879);
if(temp__5720__auto__){
var seq__31879__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31879__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31879__$1);
var G__31887 = cljs.core.chunk_rest.call(null,seq__31879__$1);
var G__31888 = c__4550__auto__;
var G__31889 = cljs.core.count.call(null,c__4550__auto__);
var G__31890 = (0);
seq__31879 = G__31887;
chunk__31880 = G__31888;
count__31881 = G__31889;
i__31882 = G__31890;
continue;
} else {
var n = cljs.core.first.call(null,seq__31879__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31891 = cljs.core.next.call(null,seq__31879__$1);
var G__31892 = null;
var G__31893 = (0);
var G__31894 = (0);
seq__31879 = G__31891;
chunk__31880 = G__31892;
count__31881 = G__31893;
i__31882 = G__31894;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31895){
var vec__31896 = p__31895;
var _ = cljs.core.nth.call(null,vec__31896,(0),null);
var v = cljs.core.nth.call(null,vec__31896,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__31899){
var vec__31900 = p__31899;
var k = cljs.core.nth.call(null,vec__31900,(0),null);
var v = cljs.core.nth.call(null,vec__31900,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31912_31920 = cljs.core.seq.call(null,deps);
var chunk__31913_31921 = null;
var count__31914_31922 = (0);
var i__31915_31923 = (0);
while(true){
if((i__31915_31923 < count__31914_31922)){
var dep_31924 = cljs.core._nth.call(null,chunk__31913_31921,i__31915_31923);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31924;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31924));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31924,(depth + (1)),state);
} else {
}


var G__31925 = seq__31912_31920;
var G__31926 = chunk__31913_31921;
var G__31927 = count__31914_31922;
var G__31928 = (i__31915_31923 + (1));
seq__31912_31920 = G__31925;
chunk__31913_31921 = G__31926;
count__31914_31922 = G__31927;
i__31915_31923 = G__31928;
continue;
} else {
var temp__5720__auto___31929 = cljs.core.seq.call(null,seq__31912_31920);
if(temp__5720__auto___31929){
var seq__31912_31930__$1 = temp__5720__auto___31929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31912_31930__$1)){
var c__4550__auto___31931 = cljs.core.chunk_first.call(null,seq__31912_31930__$1);
var G__31932 = cljs.core.chunk_rest.call(null,seq__31912_31930__$1);
var G__31933 = c__4550__auto___31931;
var G__31934 = cljs.core.count.call(null,c__4550__auto___31931);
var G__31935 = (0);
seq__31912_31920 = G__31932;
chunk__31913_31921 = G__31933;
count__31914_31922 = G__31934;
i__31915_31923 = G__31935;
continue;
} else {
var dep_31936 = cljs.core.first.call(null,seq__31912_31930__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31936;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31936));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31936,(depth + (1)),state);
} else {
}


var G__31937 = cljs.core.next.call(null,seq__31912_31930__$1);
var G__31938 = null;
var G__31939 = (0);
var G__31940 = (0);
seq__31912_31920 = G__31937;
chunk__31913_31921 = G__31938;
count__31914_31922 = G__31939;
i__31915_31923 = G__31940;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31916){
var vec__31917 = p__31916;
var seq__31918 = cljs.core.seq.call(null,vec__31917);
var first__31919 = cljs.core.first.call(null,seq__31918);
var seq__31918__$1 = cljs.core.next.call(null,seq__31918);
var x = first__31919;
var xs = seq__31918__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31917,seq__31918,first__31919,seq__31918__$1,x,xs,get_deps__$1){
return (function (p1__31903_SHARP_){
return clojure.set.difference.call(null,p1__31903_SHARP_,x);
});})(vec__31917,seq__31918,first__31919,seq__31918__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31941 = cljs.core.seq.call(null,provides);
var chunk__31942 = null;
var count__31943 = (0);
var i__31944 = (0);
while(true){
if((i__31944 < count__31943)){
var prov = cljs.core._nth.call(null,chunk__31942,i__31944);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31953_31961 = cljs.core.seq.call(null,requires);
var chunk__31954_31962 = null;
var count__31955_31963 = (0);
var i__31956_31964 = (0);
while(true){
if((i__31956_31964 < count__31955_31963)){
var req_31965 = cljs.core._nth.call(null,chunk__31954_31962,i__31956_31964);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31965,prov);


var G__31966 = seq__31953_31961;
var G__31967 = chunk__31954_31962;
var G__31968 = count__31955_31963;
var G__31969 = (i__31956_31964 + (1));
seq__31953_31961 = G__31966;
chunk__31954_31962 = G__31967;
count__31955_31963 = G__31968;
i__31956_31964 = G__31969;
continue;
} else {
var temp__5720__auto___31970 = cljs.core.seq.call(null,seq__31953_31961);
if(temp__5720__auto___31970){
var seq__31953_31971__$1 = temp__5720__auto___31970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31953_31971__$1)){
var c__4550__auto___31972 = cljs.core.chunk_first.call(null,seq__31953_31971__$1);
var G__31973 = cljs.core.chunk_rest.call(null,seq__31953_31971__$1);
var G__31974 = c__4550__auto___31972;
var G__31975 = cljs.core.count.call(null,c__4550__auto___31972);
var G__31976 = (0);
seq__31953_31961 = G__31973;
chunk__31954_31962 = G__31974;
count__31955_31963 = G__31975;
i__31956_31964 = G__31976;
continue;
} else {
var req_31977 = cljs.core.first.call(null,seq__31953_31971__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31977,prov);


var G__31978 = cljs.core.next.call(null,seq__31953_31971__$1);
var G__31979 = null;
var G__31980 = (0);
var G__31981 = (0);
seq__31953_31961 = G__31978;
chunk__31954_31962 = G__31979;
count__31955_31963 = G__31980;
i__31956_31964 = G__31981;
continue;
}
} else {
}
}
break;
}


var G__31982 = seq__31941;
var G__31983 = chunk__31942;
var G__31984 = count__31943;
var G__31985 = (i__31944 + (1));
seq__31941 = G__31982;
chunk__31942 = G__31983;
count__31943 = G__31984;
i__31944 = G__31985;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31941);
if(temp__5720__auto__){
var seq__31941__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31941__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31941__$1);
var G__31986 = cljs.core.chunk_rest.call(null,seq__31941__$1);
var G__31987 = c__4550__auto__;
var G__31988 = cljs.core.count.call(null,c__4550__auto__);
var G__31989 = (0);
seq__31941 = G__31986;
chunk__31942 = G__31987;
count__31943 = G__31988;
i__31944 = G__31989;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31941__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31957_31990 = cljs.core.seq.call(null,requires);
var chunk__31958_31991 = null;
var count__31959_31992 = (0);
var i__31960_31993 = (0);
while(true){
if((i__31960_31993 < count__31959_31992)){
var req_31994 = cljs.core._nth.call(null,chunk__31958_31991,i__31960_31993);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31994,prov);


var G__31995 = seq__31957_31990;
var G__31996 = chunk__31958_31991;
var G__31997 = count__31959_31992;
var G__31998 = (i__31960_31993 + (1));
seq__31957_31990 = G__31995;
chunk__31958_31991 = G__31996;
count__31959_31992 = G__31997;
i__31960_31993 = G__31998;
continue;
} else {
var temp__5720__auto___31999__$1 = cljs.core.seq.call(null,seq__31957_31990);
if(temp__5720__auto___31999__$1){
var seq__31957_32000__$1 = temp__5720__auto___31999__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31957_32000__$1)){
var c__4550__auto___32001 = cljs.core.chunk_first.call(null,seq__31957_32000__$1);
var G__32002 = cljs.core.chunk_rest.call(null,seq__31957_32000__$1);
var G__32003 = c__4550__auto___32001;
var G__32004 = cljs.core.count.call(null,c__4550__auto___32001);
var G__32005 = (0);
seq__31957_31990 = G__32002;
chunk__31958_31991 = G__32003;
count__31959_31992 = G__32004;
i__31960_31993 = G__32005;
continue;
} else {
var req_32006 = cljs.core.first.call(null,seq__31957_32000__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32006,prov);


var G__32007 = cljs.core.next.call(null,seq__31957_32000__$1);
var G__32008 = null;
var G__32009 = (0);
var G__32010 = (0);
seq__31957_31990 = G__32007;
chunk__31958_31991 = G__32008;
count__31959_31992 = G__32009;
i__31960_31993 = G__32010;
continue;
}
} else {
}
}
break;
}


var G__32011 = cljs.core.next.call(null,seq__31941__$1);
var G__32012 = null;
var G__32013 = (0);
var G__32014 = (0);
seq__31941 = G__32011;
chunk__31942 = G__32012;
count__31943 = G__32013;
i__31944 = G__32014;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32015_32019 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32016_32020 = null;
var count__32017_32021 = (0);
var i__32018_32022 = (0);
while(true){
if((i__32018_32022 < count__32017_32021)){
var ns_32023 = cljs.core._nth.call(null,chunk__32016_32020,i__32018_32022);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32023);


var G__32024 = seq__32015_32019;
var G__32025 = chunk__32016_32020;
var G__32026 = count__32017_32021;
var G__32027 = (i__32018_32022 + (1));
seq__32015_32019 = G__32024;
chunk__32016_32020 = G__32025;
count__32017_32021 = G__32026;
i__32018_32022 = G__32027;
continue;
} else {
var temp__5720__auto___32028 = cljs.core.seq.call(null,seq__32015_32019);
if(temp__5720__auto___32028){
var seq__32015_32029__$1 = temp__5720__auto___32028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32015_32029__$1)){
var c__4550__auto___32030 = cljs.core.chunk_first.call(null,seq__32015_32029__$1);
var G__32031 = cljs.core.chunk_rest.call(null,seq__32015_32029__$1);
var G__32032 = c__4550__auto___32030;
var G__32033 = cljs.core.count.call(null,c__4550__auto___32030);
var G__32034 = (0);
seq__32015_32019 = G__32031;
chunk__32016_32020 = G__32032;
count__32017_32021 = G__32033;
i__32018_32022 = G__32034;
continue;
} else {
var ns_32035 = cljs.core.first.call(null,seq__32015_32029__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32035);


var G__32036 = cljs.core.next.call(null,seq__32015_32029__$1);
var G__32037 = null;
var G__32038 = (0);
var G__32039 = (0);
seq__32015_32019 = G__32036;
chunk__32016_32020 = G__32037;
count__32017_32021 = G__32038;
i__32018_32022 = G__32039;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32040__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32041__i = 0, G__32041__a = new Array(arguments.length -  0);
while (G__32041__i < G__32041__a.length) {G__32041__a[G__32041__i] = arguments[G__32041__i + 0]; ++G__32041__i;}
  args = new cljs.core.IndexedSeq(G__32041__a,0,null);
} 
return G__32040__delegate.call(this,args);};
G__32040.cljs$lang$maxFixedArity = 0;
G__32040.cljs$lang$applyTo = (function (arglist__32042){
var args = cljs.core.seq(arglist__32042);
return G__32040__delegate(args);
});
G__32040.cljs$core$IFn$_invoke$arity$variadic = G__32040__delegate;
return G__32040;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32043_SHARP_,p2__32044_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32043_SHARP_)),p2__32044_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32045_SHARP_,p2__32046_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32045_SHARP_),p2__32046_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32047 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32047.addCallback(((function (G__32047){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32047))
);

G__32047.addErrback(((function (G__32047){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32047))
);

return G__32047;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32048){if((e32048 instanceof Error)){
var e = e32048;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32048;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32049){if((e32049 instanceof Error)){
var e = e32049;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32049;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32050 = cljs.core._EQ_;
var expr__32051 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32050.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32051))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32050.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32051))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32050.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32051))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32050,expr__32051){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32050,expr__32051))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32053,callback){
var map__32054 = p__32053;
var map__32054__$1 = (((((!((map__32054 == null))))?(((((map__32054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32054):map__32054);
var file_msg = map__32054__$1;
var request_url = cljs.core.get.call(null,map__32054__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32054,map__32054__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32054,map__32054__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto__){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto__){
return (function (state_32092){
var state_val_32093 = (state_32092[(1)]);
if((state_val_32093 === (7))){
var inst_32088 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32094_32120 = state_32092__$1;
(statearr_32094_32120[(2)] = inst_32088);

(statearr_32094_32120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (1))){
var state_32092__$1 = state_32092;
var statearr_32095_32121 = state_32092__$1;
(statearr_32095_32121[(2)] = null);

(statearr_32095_32121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (4))){
var inst_32058 = (state_32092[(7)]);
var inst_32058__$1 = (state_32092[(2)]);
var state_32092__$1 = (function (){var statearr_32096 = state_32092;
(statearr_32096[(7)] = inst_32058__$1);

return statearr_32096;
})();
if(cljs.core.truth_(inst_32058__$1)){
var statearr_32097_32122 = state_32092__$1;
(statearr_32097_32122[(1)] = (5));

} else {
var statearr_32098_32123 = state_32092__$1;
(statearr_32098_32123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (15))){
var inst_32071 = (state_32092[(8)]);
var inst_32073 = (state_32092[(9)]);
var inst_32075 = inst_32073.call(null,inst_32071);
var state_32092__$1 = state_32092;
var statearr_32099_32124 = state_32092__$1;
(statearr_32099_32124[(2)] = inst_32075);

(statearr_32099_32124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (13))){
var inst_32082 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32100_32125 = state_32092__$1;
(statearr_32100_32125[(2)] = inst_32082);

(statearr_32100_32125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (6))){
var state_32092__$1 = state_32092;
var statearr_32101_32126 = state_32092__$1;
(statearr_32101_32126[(2)] = null);

(statearr_32101_32126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (17))){
var inst_32079 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32102_32127 = state_32092__$1;
(statearr_32102_32127[(2)] = inst_32079);

(statearr_32102_32127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (3))){
var inst_32090 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32092__$1,inst_32090);
} else {
if((state_val_32093 === (12))){
var state_32092__$1 = state_32092;
var statearr_32103_32128 = state_32092__$1;
(statearr_32103_32128[(2)] = null);

(statearr_32103_32128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (2))){
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32092__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32093 === (11))){
var inst_32063 = (state_32092[(10)]);
var inst_32069 = figwheel.client.file_reloading.blocking_load.call(null,inst_32063);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32092__$1,(14),inst_32069);
} else {
if((state_val_32093 === (9))){
var inst_32063 = (state_32092[(10)]);
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32063)){
var statearr_32104_32129 = state_32092__$1;
(statearr_32104_32129[(1)] = (11));

} else {
var statearr_32105_32130 = state_32092__$1;
(statearr_32105_32130[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (5))){
var inst_32064 = (state_32092[(11)]);
var inst_32058 = (state_32092[(7)]);
var inst_32063 = cljs.core.nth.call(null,inst_32058,(0),null);
var inst_32064__$1 = cljs.core.nth.call(null,inst_32058,(1),null);
var state_32092__$1 = (function (){var statearr_32106 = state_32092;
(statearr_32106[(11)] = inst_32064__$1);

(statearr_32106[(10)] = inst_32063);

return statearr_32106;
})();
if(cljs.core.truth_(inst_32064__$1)){
var statearr_32107_32131 = state_32092__$1;
(statearr_32107_32131[(1)] = (8));

} else {
var statearr_32108_32132 = state_32092__$1;
(statearr_32108_32132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (14))){
var inst_32073 = (state_32092[(9)]);
var inst_32063 = (state_32092[(10)]);
var inst_32071 = (state_32092[(2)]);
var inst_32072 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32073__$1 = cljs.core.get.call(null,inst_32072,inst_32063);
var state_32092__$1 = (function (){var statearr_32109 = state_32092;
(statearr_32109[(8)] = inst_32071);

(statearr_32109[(9)] = inst_32073__$1);

return statearr_32109;
})();
if(cljs.core.truth_(inst_32073__$1)){
var statearr_32110_32133 = state_32092__$1;
(statearr_32110_32133[(1)] = (15));

} else {
var statearr_32111_32134 = state_32092__$1;
(statearr_32111_32134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (16))){
var inst_32071 = (state_32092[(8)]);
var inst_32077 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32071);
var state_32092__$1 = state_32092;
var statearr_32112_32135 = state_32092__$1;
(statearr_32112_32135[(2)] = inst_32077);

(statearr_32112_32135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (10))){
var inst_32084 = (state_32092[(2)]);
var state_32092__$1 = (function (){var statearr_32113 = state_32092;
(statearr_32113[(12)] = inst_32084);

return statearr_32113;
})();
var statearr_32114_32136 = state_32092__$1;
(statearr_32114_32136[(2)] = null);

(statearr_32114_32136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (8))){
var inst_32064 = (state_32092[(11)]);
var inst_32066 = eval(inst_32064);
var state_32092__$1 = state_32092;
var statearr_32115_32137 = state_32092__$1;
(statearr_32115_32137[(2)] = inst_32066);

(statearr_32115_32137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29871__auto__))
;
return ((function (switch__29776__auto__,c__29871__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29777__auto__ = null;
var figwheel$client$file_reloading$state_machine__29777__auto____0 = (function (){
var statearr_32116 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32116[(0)] = figwheel$client$file_reloading$state_machine__29777__auto__);

(statearr_32116[(1)] = (1));

return statearr_32116;
});
var figwheel$client$file_reloading$state_machine__29777__auto____1 = (function (state_32092){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_32092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e32117){if((e32117 instanceof Object)){
var ex__29780__auto__ = e32117;
var statearr_32118_32138 = state_32092;
(statearr_32118_32138[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32139 = state_32092;
state_32092 = G__32139;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29777__auto__ = function(state_32092){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29777__auto____1.call(this,state_32092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29777__auto____0;
figwheel$client$file_reloading$state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29777__auto____1;
return figwheel$client$file_reloading$state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto__))
})();
var state__29873__auto__ = (function (){var statearr_32119 = f__29872__auto__.call(null);
(statearr_32119[(6)] = c__29871__auto__);

return statearr_32119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto__))
);

return c__29871__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32141 = arguments.length;
switch (G__32141) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32143,callback){
var map__32144 = p__32143;
var map__32144__$1 = (((((!((map__32144 == null))))?(((((map__32144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32144):map__32144);
var file_msg = map__32144__$1;
var namespace = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32144,map__32144__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32144,map__32144__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32146){
var map__32147 = p__32146;
var map__32147__$1 = (((((!((map__32147 == null))))?(((((map__32147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);
var file_msg = map__32147__$1;
var namespace = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32149){
var map__32150 = p__32149;
var map__32150__$1 = (((((!((map__32150 == null))))?(((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var file_msg = map__32150__$1;
var namespace = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32152,callback){
var map__32153 = p__32152;
var map__32153__$1 = (((((!((map__32153 == null))))?(((((map__32153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32153):map__32153);
var file_msg = map__32153__$1;
var request_url = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29871__auto___32203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto___32203,out){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto___32203,out){
return (function (state_32188){
var state_val_32189 = (state_32188[(1)]);
if((state_val_32189 === (1))){
var inst_32162 = cljs.core.seq.call(null,files);
var inst_32163 = cljs.core.first.call(null,inst_32162);
var inst_32164 = cljs.core.next.call(null,inst_32162);
var inst_32165 = files;
var state_32188__$1 = (function (){var statearr_32190 = state_32188;
(statearr_32190[(7)] = inst_32164);

(statearr_32190[(8)] = inst_32163);

(statearr_32190[(9)] = inst_32165);

return statearr_32190;
})();
var statearr_32191_32204 = state_32188__$1;
(statearr_32191_32204[(2)] = null);

(statearr_32191_32204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (2))){
var inst_32171 = (state_32188[(10)]);
var inst_32165 = (state_32188[(9)]);
var inst_32170 = cljs.core.seq.call(null,inst_32165);
var inst_32171__$1 = cljs.core.first.call(null,inst_32170);
var inst_32172 = cljs.core.next.call(null,inst_32170);
var inst_32173 = (inst_32171__$1 == null);
var inst_32174 = cljs.core.not.call(null,inst_32173);
var state_32188__$1 = (function (){var statearr_32192 = state_32188;
(statearr_32192[(10)] = inst_32171__$1);

(statearr_32192[(11)] = inst_32172);

return statearr_32192;
})();
if(inst_32174){
var statearr_32193_32205 = state_32188__$1;
(statearr_32193_32205[(1)] = (4));

} else {
var statearr_32194_32206 = state_32188__$1;
(statearr_32194_32206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (3))){
var inst_32186 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32188__$1,inst_32186);
} else {
if((state_val_32189 === (4))){
var inst_32171 = (state_32188[(10)]);
var inst_32176 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32171);
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32188__$1,(7),inst_32176);
} else {
if((state_val_32189 === (5))){
var inst_32182 = cljs.core.async.close_BANG_.call(null,out);
var state_32188__$1 = state_32188;
var statearr_32195_32207 = state_32188__$1;
(statearr_32195_32207[(2)] = inst_32182);

(statearr_32195_32207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (6))){
var inst_32184 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32196_32208 = state_32188__$1;
(statearr_32196_32208[(2)] = inst_32184);

(statearr_32196_32208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (7))){
var inst_32172 = (state_32188[(11)]);
var inst_32178 = (state_32188[(2)]);
var inst_32179 = cljs.core.async.put_BANG_.call(null,out,inst_32178);
var inst_32165 = inst_32172;
var state_32188__$1 = (function (){var statearr_32197 = state_32188;
(statearr_32197[(12)] = inst_32179);

(statearr_32197[(9)] = inst_32165);

return statearr_32197;
})();
var statearr_32198_32209 = state_32188__$1;
(statearr_32198_32209[(2)] = null);

(statearr_32198_32209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29871__auto___32203,out))
;
return ((function (switch__29776__auto__,c__29871__auto___32203,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto____0 = (function (){
var statearr_32199 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32199[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto__);

(statearr_32199[(1)] = (1));

return statearr_32199;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto____1 = (function (state_32188){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_32188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e32200){if((e32200 instanceof Object)){
var ex__29780__auto__ = e32200;
var statearr_32201_32210 = state_32188;
(statearr_32201_32210[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32211 = state_32188;
state_32188 = G__32211;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto__ = function(state_32188){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto____1.call(this,state_32188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto___32203,out))
})();
var state__29873__auto__ = (function (){var statearr_32202 = f__29872__auto__.call(null);
(statearr_32202[(6)] = c__29871__auto___32203);

return statearr_32202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto___32203,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32212,opts){
var map__32213 = p__32212;
var map__32213__$1 = (((((!((map__32213 == null))))?(((((map__32213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32213):map__32213);
var eval_body = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32215){var e = e32215;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32216_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32216_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32217){
var vec__32218 = p__32217;
var k = cljs.core.nth.call(null,vec__32218,(0),null);
var v = cljs.core.nth.call(null,vec__32218,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32221){
var vec__32222 = p__32221;
var k = cljs.core.nth.call(null,vec__32222,(0),null);
var v = cljs.core.nth.call(null,vec__32222,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32228,p__32229){
var map__32230 = p__32228;
var map__32230__$1 = (((((!((map__32230 == null))))?(((((map__32230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32230):map__32230);
var opts = map__32230__$1;
var before_jsload = cljs.core.get.call(null,map__32230__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32230__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32230__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32231 = p__32229;
var map__32231__$1 = (((((!((map__32231 == null))))?(((((map__32231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32231):map__32231);
var msg = map__32231__$1;
var files = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32231__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32385){
var state_val_32386 = (state_32385[(1)]);
if((state_val_32386 === (7))){
var inst_32248 = (state_32385[(7)]);
var inst_32247 = (state_32385[(8)]);
var inst_32246 = (state_32385[(9)]);
var inst_32245 = (state_32385[(10)]);
var inst_32253 = cljs.core._nth.call(null,inst_32246,inst_32248);
var inst_32254 = figwheel.client.file_reloading.eval_body.call(null,inst_32253,opts);
var inst_32255 = (inst_32248 + (1));
var tmp32387 = inst_32247;
var tmp32388 = inst_32246;
var tmp32389 = inst_32245;
var inst_32245__$1 = tmp32389;
var inst_32246__$1 = tmp32388;
var inst_32247__$1 = tmp32387;
var inst_32248__$1 = inst_32255;
var state_32385__$1 = (function (){var statearr_32390 = state_32385;
(statearr_32390[(7)] = inst_32248__$1);

(statearr_32390[(8)] = inst_32247__$1);

(statearr_32390[(9)] = inst_32246__$1);

(statearr_32390[(10)] = inst_32245__$1);

(statearr_32390[(11)] = inst_32254);

return statearr_32390;
})();
var statearr_32391_32474 = state_32385__$1;
(statearr_32391_32474[(2)] = null);

(statearr_32391_32474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (20))){
var inst_32288 = (state_32385[(12)]);
var inst_32296 = figwheel.client.file_reloading.sort_files.call(null,inst_32288);
var state_32385__$1 = state_32385;
var statearr_32392_32475 = state_32385__$1;
(statearr_32392_32475[(2)] = inst_32296);

(statearr_32392_32475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (27))){
var state_32385__$1 = state_32385;
var statearr_32393_32476 = state_32385__$1;
(statearr_32393_32476[(2)] = null);

(statearr_32393_32476[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (1))){
var inst_32237 = (state_32385[(13)]);
var inst_32234 = before_jsload.call(null,files);
var inst_32235 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32236 = (function (){return ((function (inst_32237,inst_32234,inst_32235,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32225_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32225_SHARP_);
});
;})(inst_32237,inst_32234,inst_32235,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32237__$1 = cljs.core.filter.call(null,inst_32236,files);
var inst_32238 = cljs.core.not_empty.call(null,inst_32237__$1);
var state_32385__$1 = (function (){var statearr_32394 = state_32385;
(statearr_32394[(14)] = inst_32234);

(statearr_32394[(13)] = inst_32237__$1);

(statearr_32394[(15)] = inst_32235);

return statearr_32394;
})();
if(cljs.core.truth_(inst_32238)){
var statearr_32395_32477 = state_32385__$1;
(statearr_32395_32477[(1)] = (2));

} else {
var statearr_32396_32478 = state_32385__$1;
(statearr_32396_32478[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (24))){
var state_32385__$1 = state_32385;
var statearr_32397_32479 = state_32385__$1;
(statearr_32397_32479[(2)] = null);

(statearr_32397_32479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (39))){
var inst_32338 = (state_32385[(16)]);
var state_32385__$1 = state_32385;
var statearr_32398_32480 = state_32385__$1;
(statearr_32398_32480[(2)] = inst_32338);

(statearr_32398_32480[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (46))){
var inst_32380 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32399_32481 = state_32385__$1;
(statearr_32399_32481[(2)] = inst_32380);

(statearr_32399_32481[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (4))){
var inst_32282 = (state_32385[(2)]);
var inst_32283 = cljs.core.List.EMPTY;
var inst_32284 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32283);
var inst_32285 = (function (){return ((function (inst_32282,inst_32283,inst_32284,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32226_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32226_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32226_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32226_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32282,inst_32283,inst_32284,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32286 = cljs.core.filter.call(null,inst_32285,files);
var inst_32287 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32288 = cljs.core.concat.call(null,inst_32286,inst_32287);
var state_32385__$1 = (function (){var statearr_32400 = state_32385;
(statearr_32400[(17)] = inst_32284);

(statearr_32400[(18)] = inst_32282);

(statearr_32400[(12)] = inst_32288);

return statearr_32400;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32401_32482 = state_32385__$1;
(statearr_32401_32482[(1)] = (16));

} else {
var statearr_32402_32483 = state_32385__$1;
(statearr_32402_32483[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (15))){
var inst_32272 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32403_32484 = state_32385__$1;
(statearr_32403_32484[(2)] = inst_32272);

(statearr_32403_32484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (21))){
var inst_32298 = (state_32385[(19)]);
var inst_32298__$1 = (state_32385[(2)]);
var inst_32299 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32298__$1);
var state_32385__$1 = (function (){var statearr_32404 = state_32385;
(statearr_32404[(19)] = inst_32298__$1);

return statearr_32404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32385__$1,(22),inst_32299);
} else {
if((state_val_32386 === (31))){
var inst_32383 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32385__$1,inst_32383);
} else {
if((state_val_32386 === (32))){
var inst_32338 = (state_32385[(16)]);
var inst_32343 = inst_32338.cljs$lang$protocol_mask$partition0$;
var inst_32344 = (inst_32343 & (64));
var inst_32345 = inst_32338.cljs$core$ISeq$;
var inst_32346 = (cljs.core.PROTOCOL_SENTINEL === inst_32345);
var inst_32347 = ((inst_32344) || (inst_32346));
var state_32385__$1 = state_32385;
if(cljs.core.truth_(inst_32347)){
var statearr_32405_32485 = state_32385__$1;
(statearr_32405_32485[(1)] = (35));

} else {
var statearr_32406_32486 = state_32385__$1;
(statearr_32406_32486[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (40))){
var inst_32360 = (state_32385[(20)]);
var inst_32359 = (state_32385[(2)]);
var inst_32360__$1 = cljs.core.get.call(null,inst_32359,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32361 = cljs.core.get.call(null,inst_32359,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32362 = cljs.core.not_empty.call(null,inst_32360__$1);
var state_32385__$1 = (function (){var statearr_32407 = state_32385;
(statearr_32407[(20)] = inst_32360__$1);

(statearr_32407[(21)] = inst_32361);

return statearr_32407;
})();
if(cljs.core.truth_(inst_32362)){
var statearr_32408_32487 = state_32385__$1;
(statearr_32408_32487[(1)] = (41));

} else {
var statearr_32409_32488 = state_32385__$1;
(statearr_32409_32488[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (33))){
var state_32385__$1 = state_32385;
var statearr_32410_32489 = state_32385__$1;
(statearr_32410_32489[(2)] = false);

(statearr_32410_32489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (13))){
var inst_32258 = (state_32385[(22)]);
var inst_32262 = cljs.core.chunk_first.call(null,inst_32258);
var inst_32263 = cljs.core.chunk_rest.call(null,inst_32258);
var inst_32264 = cljs.core.count.call(null,inst_32262);
var inst_32245 = inst_32263;
var inst_32246 = inst_32262;
var inst_32247 = inst_32264;
var inst_32248 = (0);
var state_32385__$1 = (function (){var statearr_32411 = state_32385;
(statearr_32411[(7)] = inst_32248);

(statearr_32411[(8)] = inst_32247);

(statearr_32411[(9)] = inst_32246);

(statearr_32411[(10)] = inst_32245);

return statearr_32411;
})();
var statearr_32412_32490 = state_32385__$1;
(statearr_32412_32490[(2)] = null);

(statearr_32412_32490[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (22))){
var inst_32298 = (state_32385[(19)]);
var inst_32306 = (state_32385[(23)]);
var inst_32301 = (state_32385[(24)]);
var inst_32302 = (state_32385[(25)]);
var inst_32301__$1 = (state_32385[(2)]);
var inst_32302__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32301__$1);
var inst_32303 = (function (){var all_files = inst_32298;
var res_SINGLEQUOTE_ = inst_32301__$1;
var res = inst_32302__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32298,inst_32306,inst_32301,inst_32302,inst_32301__$1,inst_32302__$1,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32227_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32227_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32298,inst_32306,inst_32301,inst_32302,inst_32301__$1,inst_32302__$1,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32304 = cljs.core.filter.call(null,inst_32303,inst_32301__$1);
var inst_32305 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32306__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32305);
var inst_32307 = cljs.core.not_empty.call(null,inst_32306__$1);
var state_32385__$1 = (function (){var statearr_32413 = state_32385;
(statearr_32413[(23)] = inst_32306__$1);

(statearr_32413[(24)] = inst_32301__$1);

(statearr_32413[(25)] = inst_32302__$1);

(statearr_32413[(26)] = inst_32304);

return statearr_32413;
})();
if(cljs.core.truth_(inst_32307)){
var statearr_32414_32491 = state_32385__$1;
(statearr_32414_32491[(1)] = (23));

} else {
var statearr_32415_32492 = state_32385__$1;
(statearr_32415_32492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (36))){
var state_32385__$1 = state_32385;
var statearr_32416_32493 = state_32385__$1;
(statearr_32416_32493[(2)] = false);

(statearr_32416_32493[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (41))){
var inst_32360 = (state_32385[(20)]);
var inst_32364 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32365 = cljs.core.map.call(null,inst_32364,inst_32360);
var inst_32366 = cljs.core.pr_str.call(null,inst_32365);
var inst_32367 = ["figwheel-no-load meta-data: ",inst_32366].join('');
var inst_32368 = figwheel.client.utils.log.call(null,inst_32367);
var state_32385__$1 = state_32385;
var statearr_32417_32494 = state_32385__$1;
(statearr_32417_32494[(2)] = inst_32368);

(statearr_32417_32494[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (43))){
var inst_32361 = (state_32385[(21)]);
var inst_32371 = (state_32385[(2)]);
var inst_32372 = cljs.core.not_empty.call(null,inst_32361);
var state_32385__$1 = (function (){var statearr_32418 = state_32385;
(statearr_32418[(27)] = inst_32371);

return statearr_32418;
})();
if(cljs.core.truth_(inst_32372)){
var statearr_32419_32495 = state_32385__$1;
(statearr_32419_32495[(1)] = (44));

} else {
var statearr_32420_32496 = state_32385__$1;
(statearr_32420_32496[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (29))){
var inst_32298 = (state_32385[(19)]);
var inst_32306 = (state_32385[(23)]);
var inst_32301 = (state_32385[(24)]);
var inst_32302 = (state_32385[(25)]);
var inst_32304 = (state_32385[(26)]);
var inst_32338 = (state_32385[(16)]);
var inst_32334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32337 = (function (){var all_files = inst_32298;
var res_SINGLEQUOTE_ = inst_32301;
var res = inst_32302;
var files_not_loaded = inst_32304;
var dependencies_that_loaded = inst_32306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32338,inst_32334,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32336){
var map__32421 = p__32336;
var map__32421__$1 = (((((!((map__32421 == null))))?(((((map__32421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32421):map__32421);
var namespace = cljs.core.get.call(null,map__32421__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32338,inst_32334,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32338__$1 = cljs.core.group_by.call(null,inst_32337,inst_32304);
var inst_32340 = (inst_32338__$1 == null);
var inst_32341 = cljs.core.not.call(null,inst_32340);
var state_32385__$1 = (function (){var statearr_32423 = state_32385;
(statearr_32423[(28)] = inst_32334);

(statearr_32423[(16)] = inst_32338__$1);

return statearr_32423;
})();
if(inst_32341){
var statearr_32424_32497 = state_32385__$1;
(statearr_32424_32497[(1)] = (32));

} else {
var statearr_32425_32498 = state_32385__$1;
(statearr_32425_32498[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (44))){
var inst_32361 = (state_32385[(21)]);
var inst_32374 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32361);
var inst_32375 = cljs.core.pr_str.call(null,inst_32374);
var inst_32376 = ["not required: ",inst_32375].join('');
var inst_32377 = figwheel.client.utils.log.call(null,inst_32376);
var state_32385__$1 = state_32385;
var statearr_32426_32499 = state_32385__$1;
(statearr_32426_32499[(2)] = inst_32377);

(statearr_32426_32499[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (6))){
var inst_32279 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32427_32500 = state_32385__$1;
(statearr_32427_32500[(2)] = inst_32279);

(statearr_32427_32500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (28))){
var inst_32304 = (state_32385[(26)]);
var inst_32331 = (state_32385[(2)]);
var inst_32332 = cljs.core.not_empty.call(null,inst_32304);
var state_32385__$1 = (function (){var statearr_32428 = state_32385;
(statearr_32428[(29)] = inst_32331);

return statearr_32428;
})();
if(cljs.core.truth_(inst_32332)){
var statearr_32429_32501 = state_32385__$1;
(statearr_32429_32501[(1)] = (29));

} else {
var statearr_32430_32502 = state_32385__$1;
(statearr_32430_32502[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (25))){
var inst_32302 = (state_32385[(25)]);
var inst_32318 = (state_32385[(2)]);
var inst_32319 = cljs.core.not_empty.call(null,inst_32302);
var state_32385__$1 = (function (){var statearr_32431 = state_32385;
(statearr_32431[(30)] = inst_32318);

return statearr_32431;
})();
if(cljs.core.truth_(inst_32319)){
var statearr_32432_32503 = state_32385__$1;
(statearr_32432_32503[(1)] = (26));

} else {
var statearr_32433_32504 = state_32385__$1;
(statearr_32433_32504[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (34))){
var inst_32354 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
if(cljs.core.truth_(inst_32354)){
var statearr_32434_32505 = state_32385__$1;
(statearr_32434_32505[(1)] = (38));

} else {
var statearr_32435_32506 = state_32385__$1;
(statearr_32435_32506[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (17))){
var state_32385__$1 = state_32385;
var statearr_32436_32507 = state_32385__$1;
(statearr_32436_32507[(2)] = recompile_dependents);

(statearr_32436_32507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (3))){
var state_32385__$1 = state_32385;
var statearr_32437_32508 = state_32385__$1;
(statearr_32437_32508[(2)] = null);

(statearr_32437_32508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (12))){
var inst_32275 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32438_32509 = state_32385__$1;
(statearr_32438_32509[(2)] = inst_32275);

(statearr_32438_32509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (2))){
var inst_32237 = (state_32385[(13)]);
var inst_32244 = cljs.core.seq.call(null,inst_32237);
var inst_32245 = inst_32244;
var inst_32246 = null;
var inst_32247 = (0);
var inst_32248 = (0);
var state_32385__$1 = (function (){var statearr_32439 = state_32385;
(statearr_32439[(7)] = inst_32248);

(statearr_32439[(8)] = inst_32247);

(statearr_32439[(9)] = inst_32246);

(statearr_32439[(10)] = inst_32245);

return statearr_32439;
})();
var statearr_32440_32510 = state_32385__$1;
(statearr_32440_32510[(2)] = null);

(statearr_32440_32510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (23))){
var inst_32298 = (state_32385[(19)]);
var inst_32306 = (state_32385[(23)]);
var inst_32301 = (state_32385[(24)]);
var inst_32302 = (state_32385[(25)]);
var inst_32304 = (state_32385[(26)]);
var inst_32309 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32311 = (function (){var all_files = inst_32298;
var res_SINGLEQUOTE_ = inst_32301;
var res = inst_32302;
var files_not_loaded = inst_32304;
var dependencies_that_loaded = inst_32306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32309,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32310){
var map__32441 = p__32310;
var map__32441__$1 = (((((!((map__32441 == null))))?(((((map__32441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32441):map__32441);
var request_url = cljs.core.get.call(null,map__32441__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32309,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32312 = cljs.core.reverse.call(null,inst_32306);
var inst_32313 = cljs.core.map.call(null,inst_32311,inst_32312);
var inst_32314 = cljs.core.pr_str.call(null,inst_32313);
var inst_32315 = figwheel.client.utils.log.call(null,inst_32314);
var state_32385__$1 = (function (){var statearr_32443 = state_32385;
(statearr_32443[(31)] = inst_32309);

return statearr_32443;
})();
var statearr_32444_32511 = state_32385__$1;
(statearr_32444_32511[(2)] = inst_32315);

(statearr_32444_32511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (35))){
var state_32385__$1 = state_32385;
var statearr_32445_32512 = state_32385__$1;
(statearr_32445_32512[(2)] = true);

(statearr_32445_32512[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (19))){
var inst_32288 = (state_32385[(12)]);
var inst_32294 = figwheel.client.file_reloading.expand_files.call(null,inst_32288);
var state_32385__$1 = state_32385;
var statearr_32446_32513 = state_32385__$1;
(statearr_32446_32513[(2)] = inst_32294);

(statearr_32446_32513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (11))){
var state_32385__$1 = state_32385;
var statearr_32447_32514 = state_32385__$1;
(statearr_32447_32514[(2)] = null);

(statearr_32447_32514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (9))){
var inst_32277 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32448_32515 = state_32385__$1;
(statearr_32448_32515[(2)] = inst_32277);

(statearr_32448_32515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (5))){
var inst_32248 = (state_32385[(7)]);
var inst_32247 = (state_32385[(8)]);
var inst_32250 = (inst_32248 < inst_32247);
var inst_32251 = inst_32250;
var state_32385__$1 = state_32385;
if(cljs.core.truth_(inst_32251)){
var statearr_32449_32516 = state_32385__$1;
(statearr_32449_32516[(1)] = (7));

} else {
var statearr_32450_32517 = state_32385__$1;
(statearr_32450_32517[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (14))){
var inst_32258 = (state_32385[(22)]);
var inst_32267 = cljs.core.first.call(null,inst_32258);
var inst_32268 = figwheel.client.file_reloading.eval_body.call(null,inst_32267,opts);
var inst_32269 = cljs.core.next.call(null,inst_32258);
var inst_32245 = inst_32269;
var inst_32246 = null;
var inst_32247 = (0);
var inst_32248 = (0);
var state_32385__$1 = (function (){var statearr_32451 = state_32385;
(statearr_32451[(7)] = inst_32248);

(statearr_32451[(8)] = inst_32247);

(statearr_32451[(9)] = inst_32246);

(statearr_32451[(32)] = inst_32268);

(statearr_32451[(10)] = inst_32245);

return statearr_32451;
})();
var statearr_32452_32518 = state_32385__$1;
(statearr_32452_32518[(2)] = null);

(statearr_32452_32518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (45))){
var state_32385__$1 = state_32385;
var statearr_32453_32519 = state_32385__$1;
(statearr_32453_32519[(2)] = null);

(statearr_32453_32519[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (26))){
var inst_32298 = (state_32385[(19)]);
var inst_32306 = (state_32385[(23)]);
var inst_32301 = (state_32385[(24)]);
var inst_32302 = (state_32385[(25)]);
var inst_32304 = (state_32385[(26)]);
var inst_32321 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32323 = (function (){var all_files = inst_32298;
var res_SINGLEQUOTE_ = inst_32301;
var res = inst_32302;
var files_not_loaded = inst_32304;
var dependencies_that_loaded = inst_32306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32321,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32322){
var map__32454 = p__32322;
var map__32454__$1 = (((((!((map__32454 == null))))?(((((map__32454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32454):map__32454);
var namespace = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32321,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32324 = cljs.core.map.call(null,inst_32323,inst_32302);
var inst_32325 = cljs.core.pr_str.call(null,inst_32324);
var inst_32326 = figwheel.client.utils.log.call(null,inst_32325);
var inst_32327 = (function (){var all_files = inst_32298;
var res_SINGLEQUOTE_ = inst_32301;
var res = inst_32302;
var files_not_loaded = inst_32304;
var dependencies_that_loaded = inst_32306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32321,inst_32323,inst_32324,inst_32325,inst_32326,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32298,inst_32306,inst_32301,inst_32302,inst_32304,inst_32321,inst_32323,inst_32324,inst_32325,inst_32326,state_val_32386,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32328 = setTimeout(inst_32327,(10));
var state_32385__$1 = (function (){var statearr_32456 = state_32385;
(statearr_32456[(33)] = inst_32326);

(statearr_32456[(34)] = inst_32321);

return statearr_32456;
})();
var statearr_32457_32520 = state_32385__$1;
(statearr_32457_32520[(2)] = inst_32328);

(statearr_32457_32520[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (16))){
var state_32385__$1 = state_32385;
var statearr_32458_32521 = state_32385__$1;
(statearr_32458_32521[(2)] = reload_dependents);

(statearr_32458_32521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (38))){
var inst_32338 = (state_32385[(16)]);
var inst_32356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32338);
var state_32385__$1 = state_32385;
var statearr_32459_32522 = state_32385__$1;
(statearr_32459_32522[(2)] = inst_32356);

(statearr_32459_32522[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (30))){
var state_32385__$1 = state_32385;
var statearr_32460_32523 = state_32385__$1;
(statearr_32460_32523[(2)] = null);

(statearr_32460_32523[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (10))){
var inst_32258 = (state_32385[(22)]);
var inst_32260 = cljs.core.chunked_seq_QMARK_.call(null,inst_32258);
var state_32385__$1 = state_32385;
if(inst_32260){
var statearr_32461_32524 = state_32385__$1;
(statearr_32461_32524[(1)] = (13));

} else {
var statearr_32462_32525 = state_32385__$1;
(statearr_32462_32525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (18))){
var inst_32292 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
if(cljs.core.truth_(inst_32292)){
var statearr_32463_32526 = state_32385__$1;
(statearr_32463_32526[(1)] = (19));

} else {
var statearr_32464_32527 = state_32385__$1;
(statearr_32464_32527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (42))){
var state_32385__$1 = state_32385;
var statearr_32465_32528 = state_32385__$1;
(statearr_32465_32528[(2)] = null);

(statearr_32465_32528[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (37))){
var inst_32351 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32466_32529 = state_32385__$1;
(statearr_32466_32529[(2)] = inst_32351);

(statearr_32466_32529[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (8))){
var inst_32258 = (state_32385[(22)]);
var inst_32245 = (state_32385[(10)]);
var inst_32258__$1 = cljs.core.seq.call(null,inst_32245);
var state_32385__$1 = (function (){var statearr_32467 = state_32385;
(statearr_32467[(22)] = inst_32258__$1);

return statearr_32467;
})();
if(inst_32258__$1){
var statearr_32468_32530 = state_32385__$1;
(statearr_32468_32530[(1)] = (10));

} else {
var statearr_32469_32531 = state_32385__$1;
(statearr_32469_32531[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29776__auto__,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto____0 = (function (){
var statearr_32470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32470[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto__);

(statearr_32470[(1)] = (1));

return statearr_32470;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto____1 = (function (state_32385){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_32385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e32471){if((e32471 instanceof Object)){
var ex__29780__auto__ = e32471;
var statearr_32472_32532 = state_32385;
(statearr_32472_32532[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32533 = state_32385;
state_32385 = G__32533;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto__ = function(state_32385){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto____1.call(this,state_32385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29873__auto__ = (function (){var statearr_32473 = f__29872__auto__.call(null);
(statearr_32473[(6)] = c__29871__auto__);

return statearr_32473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto__,map__32230,map__32230__$1,opts,before_jsload,on_jsload,reload_dependents,map__32231,map__32231__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29871__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32536,link){
var map__32537 = p__32536;
var map__32537__$1 = (((((!((map__32537 == null))))?(((((map__32537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32537):map__32537);
var file = cljs.core.get.call(null,map__32537__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__32537,map__32537__$1,file){
return (function (p1__32534_SHARP_,p2__32535_SHARP_){
if(cljs.core._EQ_.call(null,p1__32534_SHARP_,p2__32535_SHARP_)){
return p1__32534_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__32537,map__32537__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32540){
var map__32541 = p__32540;
var map__32541__$1 = (((((!((map__32541 == null))))?(((((map__32541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32541):map__32541);
var match_length = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32539_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32539_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32543_SHARP_,p2__32544_SHARP_){
return cljs.core.assoc.call(null,p1__32543_SHARP_,cljs.core.get.call(null,p2__32544_SHARP_,key),p2__32544_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32545 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32545);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32545);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32546,p__32547){
var map__32548 = p__32546;
var map__32548__$1 = (((((!((map__32548 == null))))?(((((map__32548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32548):map__32548);
var on_cssload = cljs.core.get.call(null,map__32548__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32549 = p__32547;
var map__32549__$1 = (((((!((map__32549 == null))))?(((((map__32549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32549):map__32549);
var files_msg = map__32549__$1;
var files = cljs.core.get.call(null,map__32549__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1555764113262
