// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__27165 = e.target.readyState;
var fexpr__27164 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__27164.cljs$core$IFn$_invoke$arity$1 ? fexpr__27164.cljs$core$IFn$_invoke$arity$1(G__27165) : fexpr__27164.call(null,G__27165));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27167,handler){
var map__27168 = p__27167;
var map__27168__$1 = (((((!((map__27168 == null))))?(((((map__27168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27168):map__27168);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27168__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27168__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27168__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27168__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27168__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27168__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27168__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27168,map__27168__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27166_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__27166_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__27168,map__27168__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___27186 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___27186)){
var response_type_27187 = temp__5720__auto___27186;
this$__$1.responseType = cljs.core.name(response_type_27187);
} else {
}

var seq__27170_27188 = cljs.core.seq(headers);
var chunk__27171_27189 = null;
var count__27172_27190 = (0);
var i__27173_27191 = (0);
while(true){
if((i__27173_27191 < count__27172_27190)){
var vec__27180_27192 = chunk__27171_27189.cljs$core$IIndexed$_nth$arity$2(null,i__27173_27191);
var k_27193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27180_27192,(0),null);
var v_27194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27180_27192,(1),null);
this$__$1.setRequestHeader(k_27193,v_27194);


var G__27195 = seq__27170_27188;
var G__27196 = chunk__27171_27189;
var G__27197 = count__27172_27190;
var G__27198 = (i__27173_27191 + (1));
seq__27170_27188 = G__27195;
chunk__27171_27189 = G__27196;
count__27172_27190 = G__27197;
i__27173_27191 = G__27198;
continue;
} else {
var temp__5720__auto___27199 = cljs.core.seq(seq__27170_27188);
if(temp__5720__auto___27199){
var seq__27170_27200__$1 = temp__5720__auto___27199;
if(cljs.core.chunked_seq_QMARK_(seq__27170_27200__$1)){
var c__4550__auto___27201 = cljs.core.chunk_first(seq__27170_27200__$1);
var G__27202 = cljs.core.chunk_rest(seq__27170_27200__$1);
var G__27203 = c__4550__auto___27201;
var G__27204 = cljs.core.count(c__4550__auto___27201);
var G__27205 = (0);
seq__27170_27188 = G__27202;
chunk__27171_27189 = G__27203;
count__27172_27190 = G__27204;
i__27173_27191 = G__27205;
continue;
} else {
var vec__27183_27206 = cljs.core.first(seq__27170_27200__$1);
var k_27207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27183_27206,(0),null);
var v_27208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27183_27206,(1),null);
this$__$1.setRequestHeader(k_27207,v_27208);


var G__27209 = cljs.core.next(seq__27170_27200__$1);
var G__27210 = null;
var G__27211 = (0);
var G__27212 = (0);
seq__27170_27188 = G__27209;
chunk__27171_27189 = G__27210;
count__27172_27190 = G__27211;
i__27173_27191 = G__27212;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
