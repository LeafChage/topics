// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33181){
var map__33182 = p__33181;
var map__33182__$1 = (((((!((map__33182 == null))))?(((((map__33182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33182):map__33182);
var m = map__33182__$1;
var n = cljs.core.get.call(null,map__33182__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33184_33216 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33185_33217 = null;
var count__33186_33218 = (0);
var i__33187_33219 = (0);
while(true){
if((i__33187_33219 < count__33186_33218)){
var f_33220 = cljs.core._nth.call(null,chunk__33185_33217,i__33187_33219);
cljs.core.println.call(null,"  ",f_33220);


var G__33221 = seq__33184_33216;
var G__33222 = chunk__33185_33217;
var G__33223 = count__33186_33218;
var G__33224 = (i__33187_33219 + (1));
seq__33184_33216 = G__33221;
chunk__33185_33217 = G__33222;
count__33186_33218 = G__33223;
i__33187_33219 = G__33224;
continue;
} else {
var temp__5720__auto___33225 = cljs.core.seq.call(null,seq__33184_33216);
if(temp__5720__auto___33225){
var seq__33184_33226__$1 = temp__5720__auto___33225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33184_33226__$1)){
var c__4550__auto___33227 = cljs.core.chunk_first.call(null,seq__33184_33226__$1);
var G__33228 = cljs.core.chunk_rest.call(null,seq__33184_33226__$1);
var G__33229 = c__4550__auto___33227;
var G__33230 = cljs.core.count.call(null,c__4550__auto___33227);
var G__33231 = (0);
seq__33184_33216 = G__33228;
chunk__33185_33217 = G__33229;
count__33186_33218 = G__33230;
i__33187_33219 = G__33231;
continue;
} else {
var f_33232 = cljs.core.first.call(null,seq__33184_33226__$1);
cljs.core.println.call(null,"  ",f_33232);


var G__33233 = cljs.core.next.call(null,seq__33184_33226__$1);
var G__33234 = null;
var G__33235 = (0);
var G__33236 = (0);
seq__33184_33216 = G__33233;
chunk__33185_33217 = G__33234;
count__33186_33218 = G__33235;
i__33187_33219 = G__33236;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33237 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33237);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33237)))?cljs.core.second.call(null,arglists_33237):arglists_33237));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33188_33238 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33189_33239 = null;
var count__33190_33240 = (0);
var i__33191_33241 = (0);
while(true){
if((i__33191_33241 < count__33190_33240)){
var vec__33202_33242 = cljs.core._nth.call(null,chunk__33189_33239,i__33191_33241);
var name_33243 = cljs.core.nth.call(null,vec__33202_33242,(0),null);
var map__33205_33244 = cljs.core.nth.call(null,vec__33202_33242,(1),null);
var map__33205_33245__$1 = (((((!((map__33205_33244 == null))))?(((((map__33205_33244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33205_33244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33205_33244):map__33205_33244);
var doc_33246 = cljs.core.get.call(null,map__33205_33245__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33247 = cljs.core.get.call(null,map__33205_33245__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33243);

cljs.core.println.call(null," ",arglists_33247);

if(cljs.core.truth_(doc_33246)){
cljs.core.println.call(null," ",doc_33246);
} else {
}


var G__33248 = seq__33188_33238;
var G__33249 = chunk__33189_33239;
var G__33250 = count__33190_33240;
var G__33251 = (i__33191_33241 + (1));
seq__33188_33238 = G__33248;
chunk__33189_33239 = G__33249;
count__33190_33240 = G__33250;
i__33191_33241 = G__33251;
continue;
} else {
var temp__5720__auto___33252 = cljs.core.seq.call(null,seq__33188_33238);
if(temp__5720__auto___33252){
var seq__33188_33253__$1 = temp__5720__auto___33252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33188_33253__$1)){
var c__4550__auto___33254 = cljs.core.chunk_first.call(null,seq__33188_33253__$1);
var G__33255 = cljs.core.chunk_rest.call(null,seq__33188_33253__$1);
var G__33256 = c__4550__auto___33254;
var G__33257 = cljs.core.count.call(null,c__4550__auto___33254);
var G__33258 = (0);
seq__33188_33238 = G__33255;
chunk__33189_33239 = G__33256;
count__33190_33240 = G__33257;
i__33191_33241 = G__33258;
continue;
} else {
var vec__33207_33259 = cljs.core.first.call(null,seq__33188_33253__$1);
var name_33260 = cljs.core.nth.call(null,vec__33207_33259,(0),null);
var map__33210_33261 = cljs.core.nth.call(null,vec__33207_33259,(1),null);
var map__33210_33262__$1 = (((((!((map__33210_33261 == null))))?(((((map__33210_33261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33210_33261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33210_33261):map__33210_33261);
var doc_33263 = cljs.core.get.call(null,map__33210_33262__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33264 = cljs.core.get.call(null,map__33210_33262__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33260);

cljs.core.println.call(null," ",arglists_33264);

if(cljs.core.truth_(doc_33263)){
cljs.core.println.call(null," ",doc_33263);
} else {
}


var G__33265 = cljs.core.next.call(null,seq__33188_33253__$1);
var G__33266 = null;
var G__33267 = (0);
var G__33268 = (0);
seq__33188_33238 = G__33265;
chunk__33189_33239 = G__33266;
count__33190_33240 = G__33267;
i__33191_33241 = G__33268;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__33212 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33213 = null;
var count__33214 = (0);
var i__33215 = (0);
while(true){
if((i__33215 < count__33214)){
var role = cljs.core._nth.call(null,chunk__33213,i__33215);
var temp__5720__auto___33269__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33269__$1)){
var spec_33270 = temp__5720__auto___33269__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33270));
} else {
}


var G__33271 = seq__33212;
var G__33272 = chunk__33213;
var G__33273 = count__33214;
var G__33274 = (i__33215 + (1));
seq__33212 = G__33271;
chunk__33213 = G__33272;
count__33214 = G__33273;
i__33215 = G__33274;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__33212);
if(temp__5720__auto____$1){
var seq__33212__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33212__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33212__$1);
var G__33275 = cljs.core.chunk_rest.call(null,seq__33212__$1);
var G__33276 = c__4550__auto__;
var G__33277 = cljs.core.count.call(null,c__4550__auto__);
var G__33278 = (0);
seq__33212 = G__33275;
chunk__33213 = G__33276;
count__33214 = G__33277;
i__33215 = G__33278;
continue;
} else {
var role = cljs.core.first.call(null,seq__33212__$1);
var temp__5720__auto___33279__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33279__$2)){
var spec_33280 = temp__5720__auto___33279__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33280));
} else {
}


var G__33281 = cljs.core.next.call(null,seq__33212__$1);
var G__33282 = null;
var G__33283 = (0);
var G__33284 = (0);
seq__33212 = G__33281;
chunk__33213 = G__33282;
count__33214 = G__33283;
i__33215 = G__33284;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33285 = cljs.core.conj.call(null,via,t);
var G__33286 = cljs.core.ex_cause.call(null,t);
via = G__33285;
t = G__33286;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__33289 = datafied_throwable;
var map__33289__$1 = (((((!((map__33289 == null))))?(((((map__33289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33289):map__33289);
var via = cljs.core.get.call(null,map__33289__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33289__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33289__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33290 = cljs.core.last.call(null,via);
var map__33290__$1 = (((((!((map__33290 == null))))?(((((map__33290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33290):map__33290);
var type = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33291 = data;
var map__33291__$1 = (((((!((map__33291 == null))))?(((((map__33291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33291):map__33291);
var problems = cljs.core.get.call(null,map__33291__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33291__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33291__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33292 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33292__$1 = (((((!((map__33292 == null))))?(((((map__33292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33292):map__33292);
var top_data = map__33292__$1;
var source = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33297 = phase;
var G__33297__$1 = (((G__33297 instanceof cljs.core.Keyword))?G__33297.fqn:null);
switch (G__33297__$1) {
case "read-source":
var map__33298 = data;
var map__33298__$1 = (((((!((map__33298 == null))))?(((((map__33298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33298):map__33298);
var line = cljs.core.get.call(null,map__33298__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33298__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33300 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33300__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33300,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33300);
var G__33300__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33300__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33300__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33300__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33300__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33301 = top_data;
var G__33301__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33301,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33301);
var G__33301__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33301__$1);
var G__33301__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33301__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33301__$2);
var G__33301__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33301__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33301__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33301__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33301__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33302 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33302,(0),null);
var method = cljs.core.nth.call(null,vec__33302,(1),null);
var file = cljs.core.nth.call(null,vec__33302,(2),null);
var line = cljs.core.nth.call(null,vec__33302,(3),null);
var G__33305 = top_data;
var G__33305__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33305,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33305);
var G__33305__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33305__$1);
var G__33305__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__33305__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33305__$2);
var G__33305__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33305__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33305__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33305__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33305__$4;
}

break;
case "execution":
var vec__33306 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33306,(0),null);
var method = cljs.core.nth.call(null,vec__33306,(1),null);
var file = cljs.core.nth.call(null,vec__33306,(2),null);
var line = cljs.core.nth.call(null,vec__33306,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__33306,source__$1,method,file,line,G__33297,G__33297__$1,map__33289,map__33289__$1,via,trace,phase,map__33290,map__33290__$1,type,message,data,map__33291,map__33291__$1,problems,fn,caller,map__33292,map__33292__$1,top_data,source){
return (function (p1__33288_SHARP_){
var or__4131__auto__ = (p1__33288_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33288_SHARP_);
}
});})(vec__33306,source__$1,method,file,line,G__33297,G__33297__$1,map__33289,map__33289__$1,via,trace,phase,map__33290,map__33290__$1,type,message,data,map__33291,map__33291__$1,problems,fn,caller,map__33292,map__33292__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__33309 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33309__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33309,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33309);
var G__33309__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33309__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33309__$1);
var G__33309__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__33309__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33309__$2);
var G__33309__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33309__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33309__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33309__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33309__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33297__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33313){
var map__33314 = p__33313;
var map__33314__$1 = (((((!((map__33314 == null))))?(((((map__33314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33314):map__33314);
var triage_data = map__33314__$1;
var phase = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33314__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33316 = phase;
var G__33316__$1 = (((G__33316 instanceof cljs.core.Keyword))?G__33316.fqn:null);
switch (G__33316__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33317_33326 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33318_33327 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33319_33328 = true;
var _STAR_print_fn_STAR__temp_val__33320_33329 = ((function (_STAR_print_newline_STAR__orig_val__33317_33326,_STAR_print_fn_STAR__orig_val__33318_33327,_STAR_print_newline_STAR__temp_val__33319_33328,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33317_33326,_STAR_print_fn_STAR__orig_val__33318_33327,_STAR_print_newline_STAR__temp_val__33319_33328,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33319_33328;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33320_33329;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33317_33326,_STAR_print_fn_STAR__orig_val__33318_33327,_STAR_print_newline_STAR__temp_val__33319_33328,_STAR_print_fn_STAR__temp_val__33320_33329,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33317_33326,_STAR_print_fn_STAR__orig_val__33318_33327,_STAR_print_newline_STAR__temp_val__33319_33328,_STAR_print_fn_STAR__temp_val__33320_33329,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33311_SHARP_){
return cljs.core.dissoc.call(null,p1__33311_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33317_33326,_STAR_print_fn_STAR__orig_val__33318_33327,_STAR_print_newline_STAR__temp_val__33319_33328,_STAR_print_fn_STAR__temp_val__33320_33329,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33317_33326,_STAR_print_fn_STAR__orig_val__33318_33327,_STAR_print_newline_STAR__temp_val__33319_33328,_STAR_print_fn_STAR__temp_val__33320_33329,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33318_33327;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33317_33326;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33321_33330 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33322_33331 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33323_33332 = true;
var _STAR_print_fn_STAR__temp_val__33324_33333 = ((function (_STAR_print_newline_STAR__orig_val__33321_33330,_STAR_print_fn_STAR__orig_val__33322_33331,_STAR_print_newline_STAR__temp_val__33323_33332,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33321_33330,_STAR_print_fn_STAR__orig_val__33322_33331,_STAR_print_newline_STAR__temp_val__33323_33332,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33323_33332;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33324_33333;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33321_33330,_STAR_print_fn_STAR__orig_val__33322_33331,_STAR_print_newline_STAR__temp_val__33323_33332,_STAR_print_fn_STAR__temp_val__33324_33333,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33321_33330,_STAR_print_fn_STAR__orig_val__33322_33331,_STAR_print_newline_STAR__temp_val__33323_33332,_STAR_print_fn_STAR__temp_val__33324_33333,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33312_SHARP_){
return cljs.core.dissoc.call(null,p1__33312_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33321_33330,_STAR_print_fn_STAR__orig_val__33322_33331,_STAR_print_newline_STAR__temp_val__33323_33332,_STAR_print_fn_STAR__temp_val__33324_33333,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33321_33330,_STAR_print_fn_STAR__orig_val__33322_33331,_STAR_print_newline_STAR__temp_val__33323_33332,_STAR_print_fn_STAR__temp_val__33324_33333,sb__4661__auto__,G__33316,G__33316__$1,loc,class_name,simple_class,cause_type,format,map__33314,map__33314__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33322_33331;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33321_33330;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33316__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1555764114056
