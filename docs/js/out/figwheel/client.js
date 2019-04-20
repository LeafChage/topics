// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33528){if((e33528 instanceof Error)){
var e = e33528;
return "Error: Unable to stringify";
} else {
throw e33528;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33531 = arguments.length;
switch (G__33531) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33529_SHARP_){
if(typeof p1__33529_SHARP_ === 'string'){
return p1__33529_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33529_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33534 = arguments.length;
var i__4731__auto___33535 = (0);
while(true){
if((i__4731__auto___33535 < len__4730__auto___33534)){
args__4736__auto__.push((arguments[i__4731__auto___33535]));

var G__33536 = (i__4731__auto___33535 + (1));
i__4731__auto___33535 = G__33536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33533){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33533));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33538 = arguments.length;
var i__4731__auto___33539 = (0);
while(true){
if((i__4731__auto___33539 < len__4730__auto___33538)){
args__4736__auto__.push((arguments[i__4731__auto___33539]));

var G__33540 = (i__4731__auto___33539 + (1));
i__4731__auto___33539 = G__33540;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33537){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33537));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33541){
var map__33542 = p__33541;
var map__33542__$1 = (((((!((map__33542 == null))))?(((((map__33542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33542):map__33542);
var message = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29871__auto___33621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto___33621,ch){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto___33621,ch){
return (function (state_33593){
var state_val_33594 = (state_33593[(1)]);
if((state_val_33594 === (7))){
var inst_33589 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33595_33622 = state_33593__$1;
(statearr_33595_33622[(2)] = inst_33589);

(statearr_33595_33622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (1))){
var state_33593__$1 = state_33593;
var statearr_33596_33623 = state_33593__$1;
(statearr_33596_33623[(2)] = null);

(statearr_33596_33623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (4))){
var inst_33546 = (state_33593[(7)]);
var inst_33546__$1 = (state_33593[(2)]);
var state_33593__$1 = (function (){var statearr_33597 = state_33593;
(statearr_33597[(7)] = inst_33546__$1);

return statearr_33597;
})();
if(cljs.core.truth_(inst_33546__$1)){
var statearr_33598_33624 = state_33593__$1;
(statearr_33598_33624[(1)] = (5));

} else {
var statearr_33599_33625 = state_33593__$1;
(statearr_33599_33625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (15))){
var inst_33553 = (state_33593[(8)]);
var inst_33568 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33553);
var inst_33569 = cljs.core.first.call(null,inst_33568);
var inst_33570 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33569);
var inst_33571 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33570)].join('');
var inst_33572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33571);
var state_33593__$1 = state_33593;
var statearr_33600_33626 = state_33593__$1;
(statearr_33600_33626[(2)] = inst_33572);

(statearr_33600_33626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (13))){
var inst_33577 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33601_33627 = state_33593__$1;
(statearr_33601_33627[(2)] = inst_33577);

(statearr_33601_33627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (6))){
var state_33593__$1 = state_33593;
var statearr_33602_33628 = state_33593__$1;
(statearr_33602_33628[(2)] = null);

(statearr_33602_33628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (17))){
var inst_33575 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33603_33629 = state_33593__$1;
(statearr_33603_33629[(2)] = inst_33575);

(statearr_33603_33629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (3))){
var inst_33591 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33593__$1,inst_33591);
} else {
if((state_val_33594 === (12))){
var inst_33552 = (state_33593[(9)]);
var inst_33566 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33552,opts);
var state_33593__$1 = state_33593;
if(inst_33566){
var statearr_33604_33630 = state_33593__$1;
(statearr_33604_33630[(1)] = (15));

} else {
var statearr_33605_33631 = state_33593__$1;
(statearr_33605_33631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (2))){
var state_33593__$1 = state_33593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33593__$1,(4),ch);
} else {
if((state_val_33594 === (11))){
var inst_33553 = (state_33593[(8)]);
var inst_33558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33559 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33553);
var inst_33560 = cljs.core.async.timeout.call(null,(1000));
var inst_33561 = [inst_33559,inst_33560];
var inst_33562 = (new cljs.core.PersistentVector(null,2,(5),inst_33558,inst_33561,null));
var state_33593__$1 = state_33593;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33593__$1,(14),inst_33562);
} else {
if((state_val_33594 === (9))){
var inst_33553 = (state_33593[(8)]);
var inst_33579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33580 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33553);
var inst_33581 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33580);
var inst_33582 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33581)].join('');
var inst_33583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33582);
var state_33593__$1 = (function (){var statearr_33606 = state_33593;
(statearr_33606[(10)] = inst_33579);

return statearr_33606;
})();
var statearr_33607_33632 = state_33593__$1;
(statearr_33607_33632[(2)] = inst_33583);

(statearr_33607_33632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (5))){
var inst_33546 = (state_33593[(7)]);
var inst_33548 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33549 = (new cljs.core.PersistentArrayMap(null,2,inst_33548,null));
var inst_33550 = (new cljs.core.PersistentHashSet(null,inst_33549,null));
var inst_33551 = figwheel.client.focus_msgs.call(null,inst_33550,inst_33546);
var inst_33552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33551);
var inst_33553 = cljs.core.first.call(null,inst_33551);
var inst_33554 = figwheel.client.autoload_QMARK_.call(null);
var state_33593__$1 = (function (){var statearr_33608 = state_33593;
(statearr_33608[(9)] = inst_33552);

(statearr_33608[(8)] = inst_33553);

return statearr_33608;
})();
if(cljs.core.truth_(inst_33554)){
var statearr_33609_33633 = state_33593__$1;
(statearr_33609_33633[(1)] = (8));

} else {
var statearr_33610_33634 = state_33593__$1;
(statearr_33610_33634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (14))){
var inst_33564 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33611_33635 = state_33593__$1;
(statearr_33611_33635[(2)] = inst_33564);

(statearr_33611_33635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (16))){
var state_33593__$1 = state_33593;
var statearr_33612_33636 = state_33593__$1;
(statearr_33612_33636[(2)] = null);

(statearr_33612_33636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (10))){
var inst_33585 = (state_33593[(2)]);
var state_33593__$1 = (function (){var statearr_33613 = state_33593;
(statearr_33613[(11)] = inst_33585);

return statearr_33613;
})();
var statearr_33614_33637 = state_33593__$1;
(statearr_33614_33637[(2)] = null);

(statearr_33614_33637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (8))){
var inst_33552 = (state_33593[(9)]);
var inst_33556 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33552,opts);
var state_33593__$1 = state_33593;
if(cljs.core.truth_(inst_33556)){
var statearr_33615_33638 = state_33593__$1;
(statearr_33615_33638[(1)] = (11));

} else {
var statearr_33616_33639 = state_33593__$1;
(statearr_33616_33639[(1)] = (12));

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
});})(c__29871__auto___33621,ch))
;
return ((function (switch__29776__auto__,c__29871__auto___33621,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29777__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29777__auto____0 = (function (){
var statearr_33617 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33617[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29777__auto__);

(statearr_33617[(1)] = (1));

return statearr_33617;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29777__auto____1 = (function (state_33593){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_33593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e33618){if((e33618 instanceof Object)){
var ex__29780__auto__ = e33618;
var statearr_33619_33640 = state_33593;
(statearr_33619_33640[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33641 = state_33593;
state_33593 = G__33641;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29777__auto__ = function(state_33593){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29777__auto____1.call(this,state_33593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29777__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29777__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto___33621,ch))
})();
var state__29873__auto__ = (function (){var statearr_33620 = f__29872__auto__.call(null);
(statearr_33620[(6)] = c__29871__auto___33621);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto___33621,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33642_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33642_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33648 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33648){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33644 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33645 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33646 = true;
var _STAR_print_fn_STAR__temp_val__33647 = ((function (_STAR_print_newline_STAR__orig_val__33644,_STAR_print_fn_STAR__orig_val__33645,_STAR_print_newline_STAR__temp_val__33646,sb,base_path_33648){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__33644,_STAR_print_fn_STAR__orig_val__33645,_STAR_print_newline_STAR__temp_val__33646,sb,base_path_33648))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33646;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33647;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33645;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33644;
}}catch (e33643){if((e33643 instanceof Error)){
var e = e33643;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33648], null));
} else {
var e = e33643;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33648))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33649){
var map__33650 = p__33649;
var map__33650__$1 = (((((!((map__33650 == null))))?(((((map__33650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33650):map__33650);
var opts = map__33650__$1;
var build_id = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33650,map__33650__$1,opts,build_id){
return (function (p__33652){
var vec__33653 = p__33652;
var seq__33654 = cljs.core.seq.call(null,vec__33653);
var first__33655 = cljs.core.first.call(null,seq__33654);
var seq__33654__$1 = cljs.core.next.call(null,seq__33654);
var map__33656 = first__33655;
var map__33656__$1 = (((((!((map__33656 == null))))?(((((map__33656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33656):map__33656);
var msg = map__33656__$1;
var msg_name = cljs.core.get.call(null,map__33656__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33654__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33653,seq__33654,first__33655,seq__33654__$1,map__33656,map__33656__$1,msg,msg_name,_,map__33650,map__33650__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33653,seq__33654,first__33655,seq__33654__$1,map__33656,map__33656__$1,msg,msg_name,_,map__33650,map__33650__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33650,map__33650__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33658){
var vec__33659 = p__33658;
var seq__33660 = cljs.core.seq.call(null,vec__33659);
var first__33661 = cljs.core.first.call(null,seq__33660);
var seq__33660__$1 = cljs.core.next.call(null,seq__33660);
var map__33662 = first__33661;
var map__33662__$1 = (((((!((map__33662 == null))))?(((((map__33662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33662):map__33662);
var msg = map__33662__$1;
var msg_name = cljs.core.get.call(null,map__33662__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33660__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33664){
var map__33665 = p__33664;
var map__33665__$1 = (((((!((map__33665 == null))))?(((((map__33665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33665):map__33665);
var on_compile_warning = cljs.core.get.call(null,map__33665__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33665__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33665,map__33665__$1,on_compile_warning,on_compile_fail){
return (function (p__33667){
var vec__33668 = p__33667;
var seq__33669 = cljs.core.seq.call(null,vec__33668);
var first__33670 = cljs.core.first.call(null,seq__33669);
var seq__33669__$1 = cljs.core.next.call(null,seq__33669);
var map__33671 = first__33670;
var map__33671__$1 = (((((!((map__33671 == null))))?(((((map__33671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33671):map__33671);
var msg = map__33671__$1;
var msg_name = cljs.core.get.call(null,map__33671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33669__$1;
var pred__33673 = cljs.core._EQ_;
var expr__33674 = msg_name;
if(cljs.core.truth_(pred__33673.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33674))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33673.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33674))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33665,map__33665__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto__,msg_hist,msg_names,msg){
return (function (state_33763){
var state_val_33764 = (state_33763[(1)]);
if((state_val_33764 === (7))){
var inst_33683 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
if(cljs.core.truth_(inst_33683)){
var statearr_33765_33812 = state_33763__$1;
(statearr_33765_33812[(1)] = (8));

} else {
var statearr_33766_33813 = state_33763__$1;
(statearr_33766_33813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (20))){
var inst_33757 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33767_33814 = state_33763__$1;
(statearr_33767_33814[(2)] = inst_33757);

(statearr_33767_33814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (27))){
var inst_33753 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33768_33815 = state_33763__$1;
(statearr_33768_33815[(2)] = inst_33753);

(statearr_33768_33815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (1))){
var inst_33676 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33763__$1 = state_33763;
if(cljs.core.truth_(inst_33676)){
var statearr_33769_33816 = state_33763__$1;
(statearr_33769_33816[(1)] = (2));

} else {
var statearr_33770_33817 = state_33763__$1;
(statearr_33770_33817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (24))){
var inst_33755 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33771_33818 = state_33763__$1;
(statearr_33771_33818[(2)] = inst_33755);

(statearr_33771_33818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (4))){
var inst_33761 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33763__$1,inst_33761);
} else {
if((state_val_33764 === (15))){
var inst_33759 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33772_33819 = state_33763__$1;
(statearr_33772_33819[(2)] = inst_33759);

(statearr_33772_33819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (21))){
var inst_33712 = (state_33763[(2)]);
var inst_33713 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33714 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33713);
var state_33763__$1 = (function (){var statearr_33773 = state_33763;
(statearr_33773[(7)] = inst_33712);

return statearr_33773;
})();
var statearr_33774_33820 = state_33763__$1;
(statearr_33774_33820[(2)] = inst_33714);

(statearr_33774_33820[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (31))){
var inst_33742 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33763__$1 = state_33763;
if(inst_33742){
var statearr_33775_33821 = state_33763__$1;
(statearr_33775_33821[(1)] = (34));

} else {
var statearr_33776_33822 = state_33763__$1;
(statearr_33776_33822[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (32))){
var inst_33751 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33777_33823 = state_33763__$1;
(statearr_33777_33823[(2)] = inst_33751);

(statearr_33777_33823[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (33))){
var inst_33738 = (state_33763[(2)]);
var inst_33739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33740 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33739);
var state_33763__$1 = (function (){var statearr_33778 = state_33763;
(statearr_33778[(8)] = inst_33738);

return statearr_33778;
})();
var statearr_33779_33824 = state_33763__$1;
(statearr_33779_33824[(2)] = inst_33740);

(statearr_33779_33824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (13))){
var inst_33697 = figwheel.client.heads_up.clear.call(null);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(16),inst_33697);
} else {
if((state_val_33764 === (22))){
var inst_33718 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33719 = figwheel.client.heads_up.append_warning_message.call(null,inst_33718);
var state_33763__$1 = state_33763;
var statearr_33780_33825 = state_33763__$1;
(statearr_33780_33825[(2)] = inst_33719);

(statearr_33780_33825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (36))){
var inst_33749 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33781_33826 = state_33763__$1;
(statearr_33781_33826[(2)] = inst_33749);

(statearr_33781_33826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (29))){
var inst_33729 = (state_33763[(2)]);
var inst_33730 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33731 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33730);
var state_33763__$1 = (function (){var statearr_33782 = state_33763;
(statearr_33782[(9)] = inst_33729);

return statearr_33782;
})();
var statearr_33783_33827 = state_33763__$1;
(statearr_33783_33827[(2)] = inst_33731);

(statearr_33783_33827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (6))){
var inst_33678 = (state_33763[(10)]);
var state_33763__$1 = state_33763;
var statearr_33784_33828 = state_33763__$1;
(statearr_33784_33828[(2)] = inst_33678);

(statearr_33784_33828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (28))){
var inst_33725 = (state_33763[(2)]);
var inst_33726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33727 = figwheel.client.heads_up.display_warning.call(null,inst_33726);
var state_33763__$1 = (function (){var statearr_33785 = state_33763;
(statearr_33785[(11)] = inst_33725);

return statearr_33785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(29),inst_33727);
} else {
if((state_val_33764 === (25))){
var inst_33723 = figwheel.client.heads_up.clear.call(null);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(28),inst_33723);
} else {
if((state_val_33764 === (34))){
var inst_33744 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(37),inst_33744);
} else {
if((state_val_33764 === (17))){
var inst_33703 = (state_33763[(2)]);
var inst_33704 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33705 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33704);
var state_33763__$1 = (function (){var statearr_33786 = state_33763;
(statearr_33786[(12)] = inst_33703);

return statearr_33786;
})();
var statearr_33787_33829 = state_33763__$1;
(statearr_33787_33829[(2)] = inst_33705);

(statearr_33787_33829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (3))){
var inst_33695 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33763__$1 = state_33763;
if(inst_33695){
var statearr_33788_33830 = state_33763__$1;
(statearr_33788_33830[(1)] = (13));

} else {
var statearr_33789_33831 = state_33763__$1;
(statearr_33789_33831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (12))){
var inst_33691 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33790_33832 = state_33763__$1;
(statearr_33790_33832[(2)] = inst_33691);

(statearr_33790_33832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (2))){
var inst_33678 = (state_33763[(10)]);
var inst_33678__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33763__$1 = (function (){var statearr_33791 = state_33763;
(statearr_33791[(10)] = inst_33678__$1);

return statearr_33791;
})();
if(cljs.core.truth_(inst_33678__$1)){
var statearr_33792_33833 = state_33763__$1;
(statearr_33792_33833[(1)] = (5));

} else {
var statearr_33793_33834 = state_33763__$1;
(statearr_33793_33834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (23))){
var inst_33721 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33763__$1 = state_33763;
if(inst_33721){
var statearr_33794_33835 = state_33763__$1;
(statearr_33794_33835[(1)] = (25));

} else {
var statearr_33795_33836 = state_33763__$1;
(statearr_33795_33836[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (35))){
var state_33763__$1 = state_33763;
var statearr_33796_33837 = state_33763__$1;
(statearr_33796_33837[(2)] = null);

(statearr_33796_33837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (19))){
var inst_33716 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33763__$1 = state_33763;
if(inst_33716){
var statearr_33797_33838 = state_33763__$1;
(statearr_33797_33838[(1)] = (22));

} else {
var statearr_33798_33839 = state_33763__$1;
(statearr_33798_33839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (11))){
var inst_33687 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33799_33840 = state_33763__$1;
(statearr_33799_33840[(2)] = inst_33687);

(statearr_33799_33840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (9))){
var inst_33689 = figwheel.client.heads_up.clear.call(null);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(12),inst_33689);
} else {
if((state_val_33764 === (5))){
var inst_33680 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33763__$1 = state_33763;
var statearr_33800_33841 = state_33763__$1;
(statearr_33800_33841[(2)] = inst_33680);

(statearr_33800_33841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (14))){
var inst_33707 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33763__$1 = state_33763;
if(inst_33707){
var statearr_33801_33842 = state_33763__$1;
(statearr_33801_33842[(1)] = (18));

} else {
var statearr_33802_33843 = state_33763__$1;
(statearr_33802_33843[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (26))){
var inst_33733 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33763__$1 = state_33763;
if(inst_33733){
var statearr_33803_33844 = state_33763__$1;
(statearr_33803_33844[(1)] = (30));

} else {
var statearr_33804_33845 = state_33763__$1;
(statearr_33804_33845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (16))){
var inst_33699 = (state_33763[(2)]);
var inst_33700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33701 = figwheel.client.heads_up.display_exception.call(null,inst_33700);
var state_33763__$1 = (function (){var statearr_33805 = state_33763;
(statearr_33805[(13)] = inst_33699);

return statearr_33805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(17),inst_33701);
} else {
if((state_val_33764 === (30))){
var inst_33735 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33736 = figwheel.client.heads_up.display_warning.call(null,inst_33735);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(33),inst_33736);
} else {
if((state_val_33764 === (10))){
var inst_33693 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33806_33846 = state_33763__$1;
(statearr_33806_33846[(2)] = inst_33693);

(statearr_33806_33846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (18))){
var inst_33709 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33710 = figwheel.client.heads_up.display_exception.call(null,inst_33709);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(21),inst_33710);
} else {
if((state_val_33764 === (37))){
var inst_33746 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33807_33847 = state_33763__$1;
(statearr_33807_33847[(2)] = inst_33746);

(statearr_33807_33847[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (8))){
var inst_33685 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(11),inst_33685);
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
});})(c__29871__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29776__auto__,c__29871__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto____0 = (function (){
var statearr_33808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33808[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto__);

(statearr_33808[(1)] = (1));

return statearr_33808;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto____1 = (function (state_33763){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_33763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e33809){if((e33809 instanceof Object)){
var ex__29780__auto__ = e33809;
var statearr_33810_33848 = state_33763;
(statearr_33810_33848[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33849 = state_33763;
state_33763 = G__33849;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto__ = function(state_33763){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto____1.call(this,state_33763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto__,msg_hist,msg_names,msg))
})();
var state__29873__auto__ = (function (){var statearr_33811 = f__29872__auto__.call(null);
(statearr_33811[(6)] = c__29871__auto__);

return statearr_33811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto__,msg_hist,msg_names,msg))
);

return c__29871__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29871__auto___33878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto___33878,ch){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto___33878,ch){
return (function (state_33864){
var state_val_33865 = (state_33864[(1)]);
if((state_val_33865 === (1))){
var state_33864__$1 = state_33864;
var statearr_33866_33879 = state_33864__$1;
(statearr_33866_33879[(2)] = null);

(statearr_33866_33879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (2))){
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33864__$1,(4),ch);
} else {
if((state_val_33865 === (3))){
var inst_33862 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33864__$1,inst_33862);
} else {
if((state_val_33865 === (4))){
var inst_33852 = (state_33864[(7)]);
var inst_33852__$1 = (state_33864[(2)]);
var state_33864__$1 = (function (){var statearr_33867 = state_33864;
(statearr_33867[(7)] = inst_33852__$1);

return statearr_33867;
})();
if(cljs.core.truth_(inst_33852__$1)){
var statearr_33868_33880 = state_33864__$1;
(statearr_33868_33880[(1)] = (5));

} else {
var statearr_33869_33881 = state_33864__$1;
(statearr_33869_33881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (5))){
var inst_33852 = (state_33864[(7)]);
var inst_33854 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33852);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33864__$1,(8),inst_33854);
} else {
if((state_val_33865 === (6))){
var state_33864__$1 = state_33864;
var statearr_33870_33882 = state_33864__$1;
(statearr_33870_33882[(2)] = null);

(statearr_33870_33882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (7))){
var inst_33860 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33871_33883 = state_33864__$1;
(statearr_33871_33883[(2)] = inst_33860);

(statearr_33871_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (8))){
var inst_33856 = (state_33864[(2)]);
var state_33864__$1 = (function (){var statearr_33872 = state_33864;
(statearr_33872[(8)] = inst_33856);

return statearr_33872;
})();
var statearr_33873_33884 = state_33864__$1;
(statearr_33873_33884[(2)] = null);

(statearr_33873_33884[(1)] = (2));


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
});})(c__29871__auto___33878,ch))
;
return ((function (switch__29776__auto__,c__29871__auto___33878,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29777__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29777__auto____0 = (function (){
var statearr_33874 = [null,null,null,null,null,null,null,null,null];
(statearr_33874[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29777__auto__);

(statearr_33874[(1)] = (1));

return statearr_33874;
});
var figwheel$client$heads_up_plugin_$_state_machine__29777__auto____1 = (function (state_33864){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_33864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object)){
var ex__29780__auto__ = e33875;
var statearr_33876_33885 = state_33864;
(statearr_33876_33885[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_33864;
state_33864 = G__33886;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29777__auto__ = function(state_33864){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29777__auto____1.call(this,state_33864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29777__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29777__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto___33878,ch))
})();
var state__29873__auto__ = (function (){var statearr_33877 = f__29872__auto__.call(null);
(statearr_33877[(6)] = c__29871__auto___33878);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto___33878,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto__){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto__){
return (function (state_33892){
var state_val_33893 = (state_33892[(1)]);
if((state_val_33893 === (1))){
var inst_33887 = cljs.core.async.timeout.call(null,(3000));
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,(2),inst_33887);
} else {
if((state_val_33893 === (2))){
var inst_33889 = (state_33892[(2)]);
var inst_33890 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33892__$1 = (function (){var statearr_33894 = state_33892;
(statearr_33894[(7)] = inst_33889);

return statearr_33894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33892__$1,inst_33890);
} else {
return null;
}
}
});})(c__29871__auto__))
;
return ((function (switch__29776__auto__,c__29871__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29777__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29777__auto____0 = (function (){
var statearr_33895 = [null,null,null,null,null,null,null,null];
(statearr_33895[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29777__auto__);

(statearr_33895[(1)] = (1));

return statearr_33895;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29777__auto____1 = (function (state_33892){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_33892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e33896){if((e33896 instanceof Object)){
var ex__29780__auto__ = e33896;
var statearr_33897_33899 = state_33892;
(statearr_33897_33899[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33900 = state_33892;
state_33892 = G__33900;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29777__auto__ = function(state_33892){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29777__auto____1.call(this,state_33892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29777__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29777__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto__))
})();
var state__29873__auto__ = (function (){var statearr_33898 = f__29872__auto__.call(null);
(statearr_33898[(6)] = c__29871__auto__);

return statearr_33898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto__))
);

return c__29871__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29871__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29871__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__29872__auto__ = (function (){var switch__29776__auto__ = ((function (c__29871__auto__,figwheel_version,temp__5720__auto__){
return (function (state_33907){
var state_val_33908 = (state_33907[(1)]);
if((state_val_33908 === (1))){
var inst_33901 = cljs.core.async.timeout.call(null,(2000));
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,(2),inst_33901);
} else {
if((state_val_33908 === (2))){
var inst_33903 = (state_33907[(2)]);
var inst_33904 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33905 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33904);
var state_33907__$1 = (function (){var statearr_33909 = state_33907;
(statearr_33909[(7)] = inst_33903);

return statearr_33909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33907__$1,inst_33905);
} else {
return null;
}
}
});})(c__29871__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__29776__auto__,c__29871__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto____0 = (function (){
var statearr_33910 = [null,null,null,null,null,null,null,null];
(statearr_33910[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto__);

(statearr_33910[(1)] = (1));

return statearr_33910;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto____1 = (function (state_33907){
while(true){
var ret_value__29778__auto__ = (function (){try{while(true){
var result__29779__auto__ = switch__29776__auto__.call(null,state_33907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29779__auto__;
}
break;
}
}catch (e33911){if((e33911 instanceof Object)){
var ex__29780__auto__ = e33911;
var statearr_33912_33914 = state_33907;
(statearr_33912_33914[(5)] = ex__29780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33915 = state_33907;
state_33907 = G__33915;
continue;
} else {
return ret_value__29778__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29777__auto__;
})()
;})(switch__29776__auto__,c__29871__auto__,figwheel_version,temp__5720__auto__))
})();
var state__29873__auto__ = (function (){var statearr_33913 = f__29872__auto__.call(null);
(statearr_33913[(6)] = c__29871__auto__);

return statearr_33913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29873__auto__);
});})(c__29871__auto__,figwheel_version,temp__5720__auto__))
);

return c__29871__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33916){
var map__33917 = p__33916;
var map__33917__$1 = (((((!((map__33917 == null))))?(((((map__33917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33917):map__33917);
var file = cljs.core.get.call(null,map__33917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33917__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33917__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33919 = "";
var G__33919__$1 = (cljs.core.truth_(file)?[G__33919,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33919);
var G__33919__$2 = (cljs.core.truth_(line)?[G__33919__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33919__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__33919__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33919__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33920){
var map__33921 = p__33920;
var map__33921__$1 = (((((!((map__33921 == null))))?(((((map__33921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33921):map__33921);
var ed = map__33921__$1;
var exception_data = cljs.core.get.call(null,map__33921__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33921__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_33924 = (function (){var G__33923 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33923)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__33923;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_33924);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33925){
var map__33926 = p__33925;
var map__33926__$1 = (((((!((map__33926 == null))))?(((((map__33926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33926):map__33926);
var w = map__33926__$1;
var message = cljs.core.get.call(null,map__33926__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"docs/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"docs/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33928 = cljs.core.seq.call(null,plugins);
var chunk__33929 = null;
var count__33930 = (0);
var i__33931 = (0);
while(true){
if((i__33931 < count__33930)){
var vec__33938 = cljs.core._nth.call(null,chunk__33929,i__33931);
var k = cljs.core.nth.call(null,vec__33938,(0),null);
var plugin = cljs.core.nth.call(null,vec__33938,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33944 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33928,chunk__33929,count__33930,i__33931,pl_33944,vec__33938,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33944.call(null,msg_hist);
});})(seq__33928,chunk__33929,count__33930,i__33931,pl_33944,vec__33938,k,plugin))
);
} else {
}


var G__33945 = seq__33928;
var G__33946 = chunk__33929;
var G__33947 = count__33930;
var G__33948 = (i__33931 + (1));
seq__33928 = G__33945;
chunk__33929 = G__33946;
count__33930 = G__33947;
i__33931 = G__33948;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33928);
if(temp__5720__auto__){
var seq__33928__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33928__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33928__$1);
var G__33949 = cljs.core.chunk_rest.call(null,seq__33928__$1);
var G__33950 = c__4550__auto__;
var G__33951 = cljs.core.count.call(null,c__4550__auto__);
var G__33952 = (0);
seq__33928 = G__33949;
chunk__33929 = G__33950;
count__33930 = G__33951;
i__33931 = G__33952;
continue;
} else {
var vec__33941 = cljs.core.first.call(null,seq__33928__$1);
var k = cljs.core.nth.call(null,vec__33941,(0),null);
var plugin = cljs.core.nth.call(null,vec__33941,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33953 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33928,chunk__33929,count__33930,i__33931,pl_33953,vec__33941,k,plugin,seq__33928__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33953.call(null,msg_hist);
});})(seq__33928,chunk__33929,count__33930,i__33931,pl_33953,vec__33941,k,plugin,seq__33928__$1,temp__5720__auto__))
);
} else {
}


var G__33954 = cljs.core.next.call(null,seq__33928__$1);
var G__33955 = null;
var G__33956 = (0);
var G__33957 = (0);
seq__33928 = G__33954;
chunk__33929 = G__33955;
count__33930 = G__33956;
i__33931 = G__33957;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33959 = arguments.length;
switch (G__33959) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33960_33965 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33961_33966 = null;
var count__33962_33967 = (0);
var i__33963_33968 = (0);
while(true){
if((i__33963_33968 < count__33962_33967)){
var msg_33969 = cljs.core._nth.call(null,chunk__33961_33966,i__33963_33968);
figwheel.client.socket.handle_incoming_message.call(null,msg_33969);


var G__33970 = seq__33960_33965;
var G__33971 = chunk__33961_33966;
var G__33972 = count__33962_33967;
var G__33973 = (i__33963_33968 + (1));
seq__33960_33965 = G__33970;
chunk__33961_33966 = G__33971;
count__33962_33967 = G__33972;
i__33963_33968 = G__33973;
continue;
} else {
var temp__5720__auto___33974 = cljs.core.seq.call(null,seq__33960_33965);
if(temp__5720__auto___33974){
var seq__33960_33975__$1 = temp__5720__auto___33974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33960_33975__$1)){
var c__4550__auto___33976 = cljs.core.chunk_first.call(null,seq__33960_33975__$1);
var G__33977 = cljs.core.chunk_rest.call(null,seq__33960_33975__$1);
var G__33978 = c__4550__auto___33976;
var G__33979 = cljs.core.count.call(null,c__4550__auto___33976);
var G__33980 = (0);
seq__33960_33965 = G__33977;
chunk__33961_33966 = G__33978;
count__33962_33967 = G__33979;
i__33963_33968 = G__33980;
continue;
} else {
var msg_33981 = cljs.core.first.call(null,seq__33960_33975__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33981);


var G__33982 = cljs.core.next.call(null,seq__33960_33975__$1);
var G__33983 = null;
var G__33984 = (0);
var G__33985 = (0);
seq__33960_33965 = G__33982;
chunk__33961_33966 = G__33983;
count__33962_33967 = G__33984;
i__33963_33968 = G__33985;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33990 = arguments.length;
var i__4731__auto___33991 = (0);
while(true){
if((i__4731__auto___33991 < len__4730__auto___33990)){
args__4736__auto__.push((arguments[i__4731__auto___33991]));

var G__33992 = (i__4731__auto___33991 + (1));
i__4731__auto___33991 = G__33992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33987){
var map__33988 = p__33987;
var map__33988__$1 = (((((!((map__33988 == null))))?(((((map__33988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33988):map__33988);
var opts = map__33988__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33986));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33993){if((e33993 instanceof Error)){
var e = e33993;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33993;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33994){
var map__33995 = p__33994;
var map__33995__$1 = (((((!((map__33995 == null))))?(((((map__33995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33995):map__33995);
var msg_name = cljs.core.get.call(null,map__33995__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1555764114421
