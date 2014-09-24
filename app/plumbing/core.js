// Compiled by ClojureScript 0.0-2342
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__11356__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__11356 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__11356__delegate.call(this,m,k,f,x1,x2,xs);};
G__11356.cljs$lang$maxFixedArity = 5;
G__11356.cljs$lang$applyTo = (function (arglist__11357){
var m = cljs.core.first(arglist__11357);
arglist__11357 = cljs.core.next(arglist__11357);
var k = cljs.core.first(arglist__11357);
arglist__11357 = cljs.core.next(arglist__11357);
var f = cljs.core.first(arglist__11357);
arglist__11357 = cljs.core.next(arglist__11357);
var x1 = cljs.core.first(arglist__11357);
arglist__11357 = cljs.core.next(arglist__11357);
var x2 = cljs.core.first(arglist__11357);
var xs = cljs.core.rest(arglist__11357);
return G__11356__delegate(m,k,f,x1,x2,xs);
});
G__11356.cljs$core$IFn$_invoke$arity$variadic = G__11356__delegate;
return G__11356;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8843__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11366_11372 = cljs.core.seq.call(null,m);var chunk__11367_11373 = null;var count__11368_11374 = (0);var i__11369_11375 = (0);while(true){
if((i__11369_11375 < count__11368_11374))
{var vec__11370_11376 = cljs.core._nth.call(null,chunk__11367_11373,i__11369_11375);var k_11377 = cljs.core.nth.call(null,vec__11370_11376,(0),null);var v_11378 = cljs.core.nth.call(null,vec__11370_11376,(1),null);var m11365_11379 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11365_11379,k_11377,f.call(null,v_11378)));
{
var G__11380 = seq__11366_11372;
var G__11381 = chunk__11367_11373;
var G__11382 = count__11368_11374;
var G__11383 = (i__11369_11375 + (1));
seq__11366_11372 = G__11380;
chunk__11367_11373 = G__11381;
count__11368_11374 = G__11382;
i__11369_11375 = G__11383;
continue;
}
} else
{var temp__4126__auto___11384 = cljs.core.seq.call(null,seq__11366_11372);if(temp__4126__auto___11384)
{var seq__11366_11385__$1 = temp__4126__auto___11384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11366_11385__$1))
{var c__4393__auto___11386 = cljs.core.chunk_first.call(null,seq__11366_11385__$1);{
var G__11387 = cljs.core.chunk_rest.call(null,seq__11366_11385__$1);
var G__11388 = c__4393__auto___11386;
var G__11389 = cljs.core.count.call(null,c__4393__auto___11386);
var G__11390 = (0);
seq__11366_11372 = G__11387;
chunk__11367_11373 = G__11388;
count__11368_11374 = G__11389;
i__11369_11375 = G__11390;
continue;
}
} else
{var vec__11371_11391 = cljs.core.first.call(null,seq__11366_11385__$1);var k_11392 = cljs.core.nth.call(null,vec__11371_11391,(0),null);var v_11393 = cljs.core.nth.call(null,vec__11371_11391,(1),null);var m11365_11394 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11365_11394,k_11392,f.call(null,v_11393)));
{
var G__11395 = cljs.core.next.call(null,seq__11366_11385__$1);
var G__11396 = null;
var G__11397 = (0);
var G__11398 = (0);
seq__11366_11372 = G__11395;
chunk__11367_11373 = G__11396;
count__11368_11374 = G__11397;
i__11369_11375 = G__11398;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8843__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8843__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11407_11413 = cljs.core.seq.call(null,m);var chunk__11408_11414 = null;var count__11409_11415 = (0);var i__11410_11416 = (0);while(true){
if((i__11410_11416 < count__11409_11415))
{var vec__11411_11417 = cljs.core._nth.call(null,chunk__11408_11414,i__11410_11416);var k_11418 = cljs.core.nth.call(null,vec__11411_11417,(0),null);var v_11419 = cljs.core.nth.call(null,vec__11411_11417,(1),null);var m11406_11420 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11406_11420,f.call(null,k_11418),v_11419));
{
var G__11421 = seq__11407_11413;
var G__11422 = chunk__11408_11414;
var G__11423 = count__11409_11415;
var G__11424 = (i__11410_11416 + (1));
seq__11407_11413 = G__11421;
chunk__11408_11414 = G__11422;
count__11409_11415 = G__11423;
i__11410_11416 = G__11424;
continue;
}
} else
{var temp__4126__auto___11425 = cljs.core.seq.call(null,seq__11407_11413);if(temp__4126__auto___11425)
{var seq__11407_11426__$1 = temp__4126__auto___11425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11407_11426__$1))
{var c__4393__auto___11427 = cljs.core.chunk_first.call(null,seq__11407_11426__$1);{
var G__11428 = cljs.core.chunk_rest.call(null,seq__11407_11426__$1);
var G__11429 = c__4393__auto___11427;
var G__11430 = cljs.core.count.call(null,c__4393__auto___11427);
var G__11431 = (0);
seq__11407_11413 = G__11428;
chunk__11408_11414 = G__11429;
count__11409_11415 = G__11430;
i__11410_11416 = G__11431;
continue;
}
} else
{var vec__11412_11432 = cljs.core.first.call(null,seq__11407_11426__$1);var k_11433 = cljs.core.nth.call(null,vec__11412_11432,(0),null);var v_11434 = cljs.core.nth.call(null,vec__11412_11432,(1),null);var m11406_11435 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11406_11435,f.call(null,k_11433),v_11434));
{
var G__11436 = cljs.core.next.call(null,seq__11407_11426__$1);
var G__11437 = null;
var G__11438 = (0);
var G__11439 = (0);
seq__11407_11413 = G__11436;
chunk__11408_11414 = G__11437;
count__11409_11415 = G__11438;
i__11410_11416 = G__11439;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8843__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__8843__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11446_11450 = cljs.core.seq.call(null,ks);var chunk__11447_11451 = null;var count__11448_11452 = (0);var i__11449_11453 = (0);while(true){
if((i__11449_11453 < count__11448_11452))
{var k_11454 = cljs.core._nth.call(null,chunk__11447_11451,i__11449_11453);var m11445_11455 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11445_11455,k_11454,f.call(null,k_11454)));
{
var G__11456 = seq__11446_11450;
var G__11457 = chunk__11447_11451;
var G__11458 = count__11448_11452;
var G__11459 = (i__11449_11453 + (1));
seq__11446_11450 = G__11456;
chunk__11447_11451 = G__11457;
count__11448_11452 = G__11458;
i__11449_11453 = G__11459;
continue;
}
} else
{var temp__4126__auto___11460 = cljs.core.seq.call(null,seq__11446_11450);if(temp__4126__auto___11460)
{var seq__11446_11461__$1 = temp__4126__auto___11460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11446_11461__$1))
{var c__4393__auto___11462 = cljs.core.chunk_first.call(null,seq__11446_11461__$1);{
var G__11463 = cljs.core.chunk_rest.call(null,seq__11446_11461__$1);
var G__11464 = c__4393__auto___11462;
var G__11465 = cljs.core.count.call(null,c__4393__auto___11462);
var G__11466 = (0);
seq__11446_11450 = G__11463;
chunk__11447_11451 = G__11464;
count__11448_11452 = G__11465;
i__11449_11453 = G__11466;
continue;
}
} else
{var k_11467 = cljs.core.first.call(null,seq__11446_11461__$1);var m11445_11468 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11445_11468,k_11467,f.call(null,k_11467)));
{
var G__11469 = cljs.core.next.call(null,seq__11446_11461__$1);
var G__11470 = null;
var G__11471 = (0);
var G__11472 = (0);
seq__11446_11450 = G__11469;
chunk__11447_11451 = G__11470;
count__11448_11452 = G__11471;
i__11449_11453 = G__11472;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8843__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__8843__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11479_11483 = cljs.core.seq.call(null,vs);var chunk__11480_11484 = null;var count__11481_11485 = (0);var i__11482_11486 = (0);while(true){
if((i__11482_11486 < count__11481_11485))
{var v_11487 = cljs.core._nth.call(null,chunk__11480_11484,i__11482_11486);var m11478_11488 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11478_11488,f.call(null,v_11487),v_11487));
{
var G__11489 = seq__11479_11483;
var G__11490 = chunk__11480_11484;
var G__11491 = count__11481_11485;
var G__11492 = (i__11482_11486 + (1));
seq__11479_11483 = G__11489;
chunk__11480_11484 = G__11490;
count__11481_11485 = G__11491;
i__11482_11486 = G__11492;
continue;
}
} else
{var temp__4126__auto___11493 = cljs.core.seq.call(null,seq__11479_11483);if(temp__4126__auto___11493)
{var seq__11479_11494__$1 = temp__4126__auto___11493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11479_11494__$1))
{var c__4393__auto___11495 = cljs.core.chunk_first.call(null,seq__11479_11494__$1);{
var G__11496 = cljs.core.chunk_rest.call(null,seq__11479_11494__$1);
var G__11497 = c__4393__auto___11495;
var G__11498 = cljs.core.count.call(null,c__4393__auto___11495);
var G__11499 = (0);
seq__11479_11483 = G__11496;
chunk__11480_11484 = G__11497;
count__11481_11485 = G__11498;
i__11482_11486 = G__11499;
continue;
}
} else
{var v_11500 = cljs.core.first.call(null,seq__11479_11494__$1);var m11478_11501 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11478_11501,f.call(null,v_11500),v_11500));
{
var G__11502 = cljs.core.next.call(null,seq__11479_11494__$1);
var G__11503 = null;
var G__11504 = (0);
var G__11505 = (0);
seq__11479_11483 = G__11502;
chunk__11480_11484 = G__11503;
count__11481_11485 = G__11504;
i__11482_11486 = G__11505;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8843__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__11506){var vec__11508 = p__11506;var k = cljs.core.nth.call(null,vec__11508,(0),null);var ks = cljs.core.nthnext.call(null,vec__11508,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3612__auto__ = ks;if(and__3612__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3612__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__8843__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11517_11523 = cljs.core.seq.call(null,x);var chunk__11518_11524 = null;var count__11519_11525 = (0);var i__11520_11526 = (0);while(true){
if((i__11520_11526 < count__11519_11525))
{var vec__11521_11527 = cljs.core._nth.call(null,chunk__11518_11524,i__11520_11526);var k_11528 = cljs.core.nth.call(null,vec__11521_11527,(0),null);var v_11529 = cljs.core.nth.call(null,vec__11521_11527,(1),null);var m11516_11530 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11516_11530,((typeof k_11528 === 'string')?cljs.core.keyword.call(null,k_11528):k_11528),keywordize_map.call(null,v_11529)));
{
var G__11531 = seq__11517_11523;
var G__11532 = chunk__11518_11524;
var G__11533 = count__11519_11525;
var G__11534 = (i__11520_11526 + (1));
seq__11517_11523 = G__11531;
chunk__11518_11524 = G__11532;
count__11519_11525 = G__11533;
i__11520_11526 = G__11534;
continue;
}
} else
{var temp__4126__auto___11535 = cljs.core.seq.call(null,seq__11517_11523);if(temp__4126__auto___11535)
{var seq__11517_11536__$1 = temp__4126__auto___11535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11517_11536__$1))
{var c__4393__auto___11537 = cljs.core.chunk_first.call(null,seq__11517_11536__$1);{
var G__11538 = cljs.core.chunk_rest.call(null,seq__11517_11536__$1);
var G__11539 = c__4393__auto___11537;
var G__11540 = cljs.core.count.call(null,c__4393__auto___11537);
var G__11541 = (0);
seq__11517_11523 = G__11538;
chunk__11518_11524 = G__11539;
count__11519_11525 = G__11540;
i__11520_11526 = G__11541;
continue;
}
} else
{var vec__11522_11542 = cljs.core.first.call(null,seq__11517_11536__$1);var k_11543 = cljs.core.nth.call(null,vec__11522_11542,(0),null);var v_11544 = cljs.core.nth.call(null,vec__11522_11542,(1),null);var m11516_11545 = cljs.core.deref.call(null,m_atom__8843__auto__);cljs.core.reset_BANG_.call(null,m_atom__8843__auto__,cljs.core.assoc_BANG_.call(null,m11516_11545,((typeof k_11543 === 'string')?cljs.core.keyword.call(null,k_11543):k_11543),keywordize_map.call(null,v_11544)));
{
var G__11546 = cljs.core.next.call(null,seq__11517_11536__$1);
var G__11547 = null;
var G__11548 = (0);
var G__11549 = (0);
seq__11517_11523 = G__11546;
chunk__11518_11524 = G__11547;
count__11519_11525 = G__11548;
i__11520_11526 = G__11549;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8843__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__8912__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__8912__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__11550 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__11551 = cljs.core.next.call(null,ks);
m = G__11550;
ks = G__11551;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3624__auto__ = m;if(cljs.core.truth_(or__3624__auto__))
{return or__3624__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4362__auto__ = (function iter__11560(s__11561){return (new cljs.core.LazySeq(null,(function (){var s__11561__$1 = s__11561;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11561__$1);if(temp__4126__auto__)
{var s__11561__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11561__$2))
{var c__4360__auto__ = cljs.core.chunk_first.call(null,s__11561__$2);var size__4361__auto__ = cljs.core.count.call(null,c__4360__auto__);var b__11563 = cljs.core.chunk_buffer.call(null,size__4361__auto__);if((function (){var i__11562 = (0);while(true){
if((i__11562 < size__4361__auto__))
{var vec__11566 = cljs.core._nth.call(null,c__4360__auto__,i__11562);var k = cljs.core.nth.call(null,vec__11566,(0),null);var v = cljs.core.nth.call(null,vec__11566,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__11563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11568 = (i__11562 + (1));
i__11562 = G__11568;
continue;
}
} else
{{
var G__11569 = (i__11562 + (1));
i__11562 = G__11569;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11563),iter__11560.call(null,cljs.core.chunk_rest.call(null,s__11561__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11563),null);
}
} else
{var vec__11567 = cljs.core.first.call(null,s__11561__$2);var k = cljs.core.nth.call(null,vec__11567,(0),null);var v = cljs.core.nth.call(null,vec__11567,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11560.call(null,cljs.core.rest.call(null,s__11561__$2)));
} else
{{
var G__11570 = cljs.core.rest.call(null,s__11561__$2);
s__11561__$1 = G__11570;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4362__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__11571){
var m = cljs.core.first(arglist__11571);
var kvs = cljs.core.rest(arglist__11571);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__11572){
var m = cljs.core.first(arglist__11572);
arglist__11572 = cljs.core.next(arglist__11572);
var key_seq = cljs.core.first(arglist__11572);
arglist__11572 = cljs.core.next(arglist__11572);
var f = cljs.core.first(arglist__11572);
var args = cljs.core.rest(arglist__11572);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4362__auto__ = ((function (s){
return (function iter__11577(s__11578){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__11578__$1 = s__11578;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11578__$1);if(temp__4126__auto__)
{var s__11578__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11578__$2))
{var c__4360__auto__ = cljs.core.chunk_first.call(null,s__11578__$2);var size__4361__auto__ = cljs.core.count.call(null,c__4360__auto__);var b__11580 = cljs.core.chunk_buffer.call(null,size__4361__auto__);if((function (){var i__11579 = (0);while(true){
if((i__11579 < size__4361__auto__))
{var x = cljs.core._nth.call(null,c__4360__auto__,i__11579);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__11580,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__11581 = (i__11579 + (1));
i__11579 = G__11581;
continue;
}
} else
{{
var G__11582 = (i__11579 + (1));
i__11579 = G__11582;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11580),iter__11577.call(null,cljs.core.chunk_rest.call(null,s__11578__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11580),null);
}
} else
{var x = cljs.core.first.call(null,s__11578__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__11577.call(null,cljs.core.rest.call(null,s__11578__$2)));
} else
{{
var G__11583 = cljs.core.rest.call(null,s__11578__$2);
s__11578__$1 = G__11583;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4362__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__11584){
var colls = cljs.core.seq(arglist__11584);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__11585__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__11586 = conj_when.call(null,coll,x);
var G__11587 = cljs.core.first.call(null,xs);
var G__11588 = cljs.core.next.call(null,xs);
coll = G__11586;
x = G__11587;
xs = G__11588;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__11585 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11585__delegate.call(this,coll,x,xs);};
G__11585.cljs$lang$maxFixedArity = 2;
G__11585.cljs$lang$applyTo = (function (arglist__11589){
var coll = cljs.core.first(arglist__11589);
arglist__11589 = cljs.core.next(arglist__11589);
var x = cljs.core.first(arglist__11589);
var xs = cljs.core.rest(arglist__11589);
return G__11585__delegate(coll,x,xs);
});
G__11585.cljs$core$IFn$_invoke$arity$variadic = G__11585__delegate;
return G__11585;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__11591__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__11590_SHARP_){return cljs.core.apply.call(null,f,p1__11590_SHARP_,args);
}));
};
var G__11591 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11591__delegate.call(this,a,f,args);};
G__11591.cljs$lang$maxFixedArity = 2;
G__11591.cljs$lang$applyTo = (function (arglist__11592){
var a = cljs.core.first(arglist__11592);
arglist__11592 = cljs.core.next(arglist__11592);
var f = cljs.core.first(arglist__11592);
var args = cljs.core.rest(arglist__11592);
return G__11591__delegate(a,f,args);
});
G__11591.cljs$core$IFn$_invoke$arity$variadic = G__11591__delegate;
return G__11591;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__11593__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__11593 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11593__delegate.call(this,f,arg,args);};
G__11593.cljs$lang$maxFixedArity = 2;
G__11593.cljs$lang$applyTo = (function (arglist__11594){
var f = cljs.core.first(arglist__11594);
arglist__11594 = cljs.core.next(arglist__11594);
var arg = cljs.core.first(arglist__11594);
var args = cljs.core.rest(arglist__11594);
return G__11593__delegate(f,arg,args);
});
G__11593.cljs$core$IFn$_invoke$arity$variadic = G__11593__delegate;
return G__11593;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map