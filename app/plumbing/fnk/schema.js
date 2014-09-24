// Compiled by ClojureScript 0.0-2342
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7372__7373__auto__){var G__10784 = p1__7372__7373__auto__;if(G__10784)
{var bit__4287__auto__ = null;if(cljs.core.truth_((function (){var or__3624__auto__ = bit__4287__auto__;if(cljs.core.truth_(or__3624__auto__))
{return or__3624__auto__;
} else
{return G__10784.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__10784.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10784);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10784);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__10785_SHARP_){return (cljs.core.val.call(null,p1__10785_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__10787 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__10787,(0),null);var v = cljs.core.nth.call(null,vec__10787,(1),null);var p = vec__10787;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___10793 = schema.utils.use_fn_validation;var output_schema10788_10794 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema10789_10795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker10790_10796 = schema.core.checker.call(null,input_schema10789_10795);var output_checker10791_10797 = schema.core.checker.call(null,output_schema10788_10794);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___10793,output_schema10788_10794,input_schema10789_10795,input_checker10790_10796,output_checker10791_10797){
return (function unwrap_schema_form_key(G__10792){var validate__7342__auto__ = ufv___10793.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10792], null);var temp__4126__auto___10799 = input_checker10790_10796.call(null,args__7343__auto___10798);if(cljs.core.truth_(temp__4126__auto___10799))
{var error__7344__auto___10800 = temp__4126__auto___10799;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7344__auto___10800)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10789_10795,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10798,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10800], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var k = G__10792;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10801 = output_checker10791_10797.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10801))
{var error__7344__auto___10802 = temp__4126__auto___10801;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7344__auto___10802)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10788_10794,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10802], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10793,output_schema10788_10794,input_schema10789_10795,input_checker10790_10796,output_checker10791_10797))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema10788_10794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10789_10795], null)));
var ufv___10808 = schema.utils.use_fn_validation;var output_schema10803_10809 = schema.core.Any;var input_schema10804_10810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10805_10811 = schema.core.checker.call(null,input_schema10804_10810);var output_checker10806_10812 = schema.core.checker.call(null,output_schema10803_10809);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___10808,output_schema10803_10809,input_schema10804_10810,input_checker10805_10811,output_checker10806_10812){
return (function explicit_schema_key_map(G__10807){var validate__7342__auto__ = ufv___10808.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10807], null);var temp__4126__auto___10814 = input_checker10805_10811.call(null,args__7343__auto___10813);if(cljs.core.truth_(temp__4126__auto___10814))
{var error__7344__auto___10815 = temp__4126__auto___10814;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7344__auto___10815)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10804_10810,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10813,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10815], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var s = G__10807;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10816 = output_checker10806_10812.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10816))
{var error__7344__auto___10817 = temp__4126__auto___10816;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7344__auto___10817)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10803_10809,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10817], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10808,output_schema10803_10809,input_schema10804_10810,input_checker10805_10811,output_checker10806_10812))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema10803_10809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10804_10810], null)));
var ufv___10823 = schema.utils.use_fn_validation;var output_schema10818_10824 = schema.core.Any;var input_schema10819_10825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10820_10826 = schema.core.checker.call(null,input_schema10819_10825);var output_checker10821_10827 = schema.core.checker.call(null,output_schema10818_10824);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___10823,output_schema10818_10824,input_schema10819_10825,input_checker10820_10826,output_checker10821_10827){
return (function split_schema_keys(G__10822){var validate__7342__auto__ = ufv___10823.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10822], null);var temp__4126__auto___10829 = input_checker10820_10826.call(null,args__7343__auto___10828);if(cljs.core.truth_(temp__4126__auto___10829))
{var error__7344__auto___10830 = temp__4126__auto___10829;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7344__auto___10830)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10819_10825,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10828,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10830], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var s = G__10822;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10831 = output_checker10821_10827.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10831))
{var error__7344__auto___10832 = temp__4126__auto___10831;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7344__auto___10832)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10818_10824,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10832], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10823,output_schema10818_10824,input_schema10819_10825,input_checker10820_10826,output_checker10821_10827))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema10818_10824,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10819_10825], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__10836){var vec__10837 = p__10836;var k = cljs.core.nth.call(null,vec__10837,(0),null);var v = cljs.core.nth.call(null,vec__10837,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10838 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__10838,(0),null);var ov = cljs.core.nth.call(null,vec__10838,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__10839){
var key_project = cljs.core.first(arglist__10839);
arglist__10839 = cljs.core.next(arglist__10839);
var key_combine = cljs.core.first(arglist__10839);
arglist__10839 = cljs.core.next(arglist__10839);
var val_combine = cljs.core.first(arglist__10839);
var maps = cljs.core.rest(arglist__10839);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___10847 = schema.utils.use_fn_validation;var output_schema10841_10848 = plumbing.fnk.schema.InputSchema;var input_schema10842_10849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker10843_10850 = schema.core.checker.call(null,input_schema10842_10849);var output_checker10844_10851 = schema.core.checker.call(null,output_schema10841_10848);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851){
return (function union_input_schemata(G__10845,G__10846){var validate__7342__auto__ = ufv___10847.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10845,G__10846], null);var temp__4126__auto___10853 = input_checker10843_10850.call(null,args__7343__auto___10852);if(cljs.core.truth_(temp__4126__auto___10853))
{var error__7344__auto___10854 = temp__4126__auto___10853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7344__auto___10854)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10842_10849,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10852,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10854], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var i1 = G__10845;var i2 = G__10846;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7342__auto__,ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851){
return (function (p1__10840_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__10840_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__10840_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__7342__auto__,ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851))
,((function (validate__7342__auto__,ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__7342__auto__,ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851))
,((function (validate__7342__auto__,ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7342__auto__,ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10855 = output_checker10844_10851.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10855))
{var error__7344__auto___10856 = temp__4126__auto___10855;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7344__auto___10856)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10841_10848,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10856], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10847,output_schema10841_10848,input_schema10842_10849,input_checker10843_10850,output_checker10844_10851))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema10841_10848,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10842_10849], null)));
var ufv___10862 = schema.utils.use_fn_validation;var output_schema10857_10863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema10858_10864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker10859_10865 = schema.core.checker.call(null,input_schema10858_10864);var output_checker10860_10866 = schema.core.checker.call(null,output_schema10857_10863);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___10862,output_schema10857_10863,input_schema10858_10864,input_checker10859_10865,output_checker10860_10866){
return (function required_toplevel_keys(G__10861){var validate__7342__auto__ = ufv___10862.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10861], null);var temp__4126__auto___10868 = input_checker10859_10865.call(null,args__7343__auto___10867);if(cljs.core.truth_(temp__4126__auto___10868))
{var error__7344__auto___10869 = temp__4126__auto___10868;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7344__auto___10869)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10858_10864,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10867,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10869], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var input_schema = G__10861;while(true){
return cljs.core.keep.call(null,((function (validate__7342__auto__,ufv___10862,output_schema10857_10863,input_schema10858_10864,input_checker10859_10865,output_checker10860_10866){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__7342__auto__,ufv___10862,output_schema10857_10863,input_schema10858_10864,input_checker10859_10865,output_checker10860_10866))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10870 = output_checker10860_10866.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10870))
{var error__7344__auto___10871 = temp__4126__auto___10870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7344__auto___10871)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10857_10863,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10871], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10862,output_schema10857_10863,input_schema10858_10864,input_checker10859_10865,output_checker10860_10866))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema10857_10863,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10858_10864], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4362__auto__ = (function iter__10880(s__10881){return (new cljs.core.LazySeq(null,(function (){var s__10881__$1 = s__10881;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10881__$1);if(temp__4126__auto__)
{var s__10881__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10881__$2))
{var c__4360__auto__ = cljs.core.chunk_first.call(null,s__10881__$2);var size__4361__auto__ = cljs.core.count.call(null,c__4360__auto__);var b__10883 = cljs.core.chunk_buffer.call(null,size__4361__auto__);if((function (){var i__10882 = (0);while(true){
if((i__10882 < size__4361__auto__))
{var vec__10886 = cljs.core._nth.call(null,c__4360__auto__,i__10882);var k = cljs.core.nth.call(null,vec__10886,(0),null);var v = cljs.core.nth.call(null,vec__10886,(1),null);cljs.core.chunk_append.call(null,b__10883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__10888 = (i__10882 + (1));
i__10882 = G__10888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10883),iter__10880.call(null,cljs.core.chunk_rest.call(null,s__10881__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10883),null);
}
} else
{var vec__10887 = cljs.core.first.call(null,s__10881__$2);var k = cljs.core.nth.call(null,vec__10887,(0),null);var v = cljs.core.nth.call(null,vec__10887,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__10880.call(null,cljs.core.rest.call(null,s__10881__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4362__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4362__auto__ = (function iter__10897(s__10898){return (new cljs.core.LazySeq(null,(function (){var s__10898__$1 = s__10898;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10898__$1);if(temp__4126__auto__)
{var s__10898__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10898__$2))
{var c__4360__auto__ = cljs.core.chunk_first.call(null,s__10898__$2);var size__4361__auto__ = cljs.core.count.call(null,c__4360__auto__);var b__10900 = cljs.core.chunk_buffer.call(null,size__4361__auto__);if((function (){var i__10899 = (0);while(true){
if((i__10899 < size__4361__auto__))
{var vec__10903 = cljs.core._nth.call(null,c__4360__auto__,i__10899);var k = cljs.core.nth.call(null,vec__10903,(0),null);var v = cljs.core.nth.call(null,vec__10903,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__10900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__10905 = (i__10899 + (1));
i__10899 = G__10905;
continue;
}
} else
{{
var G__10906 = (i__10899 + (1));
i__10899 = G__10906;
continue;
}
}
} else
{{
var G__10907 = (i__10899 + (1));
i__10899 = G__10907;
continue;
}
}
} else
{{
var G__10908 = (i__10899 + (1));
i__10899 = G__10908;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10900),iter__10897.call(null,cljs.core.chunk_rest.call(null,s__10898__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10900),null);
}
} else
{var vec__10904 = cljs.core.first.call(null,s__10898__$2);var k = cljs.core.nth.call(null,vec__10904,(0),null);var v = cljs.core.nth.call(null,vec__10904,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__10897.call(null,cljs.core.rest.call(null,s__10898__$2)));
} else
{{
var G__10909 = cljs.core.rest.call(null,s__10898__$2);
s__10898__$1 = G__10909;
continue;
}
}
} else
{{
var G__10910 = cljs.core.rest.call(null,s__10898__$2);
s__10898__$1 = G__10910;
continue;
}
}
} else
{{
var G__10911 = cljs.core.rest.call(null,s__10898__$2);
s__10898__$1 = G__10911;
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
});return iter__4362__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___10934 = schema.utils.use_fn_validation;var output_schema10912_10935 = schema.core.Any;var input_schema10913_10936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker10914_10937 = schema.core.checker.call(null,input_schema10913_10936);var output_checker10915_10938 = schema.core.checker.call(null,output_schema10912_10935);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___10934,output_schema10912_10935,input_schema10913_10936,input_checker10914_10937,output_checker10915_10938){
return (function compose_schemata(G__10916,G__10917){var validate__7342__auto__ = true;if(validate__7342__auto__)
{var args__7343__auto___10939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10916,G__10917], null);var temp__4126__auto___10940 = input_checker10914_10937.call(null,args__7343__auto___10939);if(cljs.core.truth_(temp__4126__auto___10940))
{var error__7344__auto___10941 = temp__4126__auto___10940;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7344__auto___10941)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10913_10936,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10939,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10941], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var G__10928 = G__10916;var vec__10930 = G__10928;var i2 = cljs.core.nth.call(null,vec__10930,(0),null);var o2 = cljs.core.nth.call(null,vec__10930,(1),null);var G__10929 = G__10917;var vec__10931 = G__10929;var i1 = cljs.core.nth.call(null,vec__10931,(0),null);var o1 = cljs.core.nth.call(null,vec__10931,(1),null);var G__10928__$1 = G__10928;var G__10929__$1 = G__10929;while(true){
var vec__10932 = G__10928__$1;var i2__$1 = cljs.core.nth.call(null,vec__10932,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__10932,(1),null);var vec__10933 = G__10929__$1;var i1__$1 = cljs.core.nth.call(null,vec__10933,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__10933,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__7342__auto__)
{var temp__4126__auto___10942 = output_checker10915_10938.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10942))
{var error__7344__auto___10943 = temp__4126__auto___10942;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7344__auto___10943)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10912_10935,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10943], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10934,output_schema10912_10935,input_schema10913_10936,input_checker10914_10937,output_checker10915_10938))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema10912_10935,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10913_10936], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___11022 = schema.utils.use_fn_validation;var output_schema10944_11023 = schema.core.Any;var input_schema10945_11024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker10946_11025 = schema.core.checker.call(null,input_schema10945_11024);var output_checker10947_11026 = schema.core.checker.call(null,output_schema10944_11023);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026){
return (function split_schema(G__10948,G__10949){var validate__7342__auto__ = ufv___11022.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___11027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10948,G__10949], null);var temp__4126__auto___11028 = input_checker10946_11025.call(null,args__7343__auto___11027);if(cljs.core.truth_(temp__4126__auto___11028))
{var error__7344__auto___11029 = temp__4126__auto___11028;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7344__auto___11029)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10945_11024,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___11027,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___11029], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var s = G__10948;var ks = G__10949;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4362__auto__ = ((function (ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026){
return (function iter__10986(s__10987){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026){
return (function (){var s__10987__$1 = s__10987;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10987__$1);if(temp__4126__auto__)
{var s__10987__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10987__$2))
{var c__4360__auto__ = cljs.core.chunk_first.call(null,s__10987__$2);var size__4361__auto__ = cljs.core.count.call(null,c__4360__auto__);var b__10989 = cljs.core.chunk_buffer.call(null,size__4361__auto__);if((function (){var i__10988 = (0);while(true){
if((i__10988 < size__4361__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4360__auto__,i__10988);cljs.core.chunk_append.call(null,b__10989,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4362__auto__ = ((function (i__10988,in_QMARK_,c__4360__auto__,size__4361__auto__,b__10989,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026){
return (function iter__11006(s__11007){return (new cljs.core.LazySeq(null,((function (i__10988,in_QMARK_,c__4360__auto__,size__4361__auto__,b__10989,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026){
return (function (){var s__11007__$1 = s__11007;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11007__$1);if(temp__4126__auto____$1)
{var s__11007__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11007__$2))
{var c__4360__auto____$1 = cljs.core.chunk_first.call(null,s__11007__$2);var size__4361__auto____$1 = cljs.core.count.call(null,c__4360__auto____$1);var b__11009 = cljs.core.chunk_buffer.call(null,size__4361__auto____$1);if((function (){var i__11008 = (0);while(true){
if((i__11008 < size__4361__auto____$1))
{var vec__11012 = cljs.core._nth.call(null,c__4360__auto____$1,i__11008);var k = cljs.core.nth.call(null,vec__11012,(0),null);var v = cljs.core.nth.call(null,vec__11012,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__11009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11030 = (i__11008 + (1));
i__11008 = G__11030;
continue;
}
} else
{{
var G__11031 = (i__11008 + (1));
i__11008 = G__11031;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11009),iter__11006.call(null,cljs.core.chunk_rest.call(null,s__11007__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11009),null);
}
} else
{var vec__11013 = cljs.core.first.call(null,s__11007__$2);var k = cljs.core.nth.call(null,vec__11013,(0),null);var v = cljs.core.nth.call(null,vec__11013,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11006.call(null,cljs.core.rest.call(null,s__11007__$2)));
} else
{{
var G__11032 = cljs.core.rest.call(null,s__11007__$2);
s__11007__$1 = G__11032;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10988,in_QMARK_,c__4360__auto__,size__4361__auto__,b__10989,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026))
,null,null));
});})(i__10988,in_QMARK_,c__4360__auto__,size__4361__auto__,b__10989,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026))
;return iter__4362__auto__.call(null,s);
})()));
{
var G__11033 = (i__10988 + (1));
i__10988 = G__11033;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10989),iter__10986.call(null,cljs.core.chunk_rest.call(null,s__10987__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10989),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__10987__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4362__auto__ = ((function (in_QMARK_,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026){
return (function iter__11014(s__11015){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026){
return (function (){var s__11015__$1 = s__11015;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11015__$1);if(temp__4126__auto____$1)
{var s__11015__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11015__$2))
{var c__4360__auto__ = cljs.core.chunk_first.call(null,s__11015__$2);var size__4361__auto__ = cljs.core.count.call(null,c__4360__auto__);var b__11017 = cljs.core.chunk_buffer.call(null,size__4361__auto__);if((function (){var i__11016 = (0);while(true){
if((i__11016 < size__4361__auto__))
{var vec__11020 = cljs.core._nth.call(null,c__4360__auto__,i__11016);var k = cljs.core.nth.call(null,vec__11020,(0),null);var v = cljs.core.nth.call(null,vec__11020,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__11017,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11034 = (i__11016 + (1));
i__11016 = G__11034;
continue;
}
} else
{{
var G__11035 = (i__11016 + (1));
i__11016 = G__11035;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11017),iter__11014.call(null,cljs.core.chunk_rest.call(null,s__11015__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11017),null);
}
} else
{var vec__11021 = cljs.core.first.call(null,s__11015__$2);var k = cljs.core.nth.call(null,vec__11021,(0),null);var v = cljs.core.nth.call(null,vec__11021,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11014.call(null,cljs.core.rest.call(null,s__11015__$2)));
} else
{{
var G__11036 = cljs.core.rest.call(null,s__11015__$2);
s__11015__$1 = G__11036;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026))
,null,null));
});})(in_QMARK_,s__10987__$2,temp__4126__auto__,ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026))
;return iter__4362__auto__.call(null,s);
})()),iter__10986.call(null,cljs.core.rest.call(null,s__10987__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026))
,null,null));
});})(ks__$1,validate__7342__auto__,ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026))
;return iter__4362__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___11037 = output_checker10947_11026.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___11037))
{var error__7344__auto___11038 = temp__4126__auto___11037;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7344__auto___11038)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10944_11023,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___11038], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___11022,output_schema10944_11023,input_schema10945_11024,input_checker10946_11025,output_checker10947_11026))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema10944_11023,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10945_11024], null)));
var ufv___11069 = schema.utils.use_fn_validation;var output_schema11039_11070 = plumbing.fnk.schema.GraphIOSchemata;var input_schema11040_11071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker11041_11072 = schema.core.checker.call(null,input_schema11040_11071);var output_checker11042_11073 = schema.core.checker.call(null,output_schema11039_11070);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___11069,output_schema11039_11070,input_schema11040_11071,input_checker11041_11072,output_checker11042_11073){
return (function sequence_schemata(G__11043,G__11044){var validate__7342__auto__ = ufv___11069.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___11074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11043,G__11044], null);var temp__4126__auto___11075 = input_checker11041_11072.call(null,args__7343__auto___11074);if(cljs.core.truth_(temp__4126__auto___11075))
{var error__7344__auto___11076 = temp__4126__auto___11075;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7344__auto___11076)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11040_11071,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___11074,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___11076], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var G__11060 = G__11043;var vec__11062 = G__11060;var i1 = cljs.core.nth.call(null,vec__11062,(0),null);var o1 = cljs.core.nth.call(null,vec__11062,(1),null);var G__11061 = G__11044;var vec__11063 = G__11061;var k = cljs.core.nth.call(null,vec__11063,(0),null);var vec__11064 = cljs.core.nth.call(null,vec__11063,(1),null);var i2 = cljs.core.nth.call(null,vec__11064,(0),null);var o2 = cljs.core.nth.call(null,vec__11064,(1),null);var G__11060__$1 = G__11060;var G__11061__$1 = G__11061;while(true){
var vec__11065 = G__11060__$1;var i1__$1 = cljs.core.nth.call(null,vec__11065,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__11065,(1),null);var vec__11066 = G__11061__$1;var k__$1 = cljs.core.nth.call(null,vec__11066,(0),null);var vec__11067 = cljs.core.nth.call(null,vec__11066,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__11067,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__11067,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__11068 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__11068,(0),null);var unused = cljs.core.nth.call(null,vec__11068,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___11077 = output_checker11042_11073.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___11077))
{var error__7344__auto___11078 = temp__4126__auto___11077;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7344__auto___11078)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11039_11070,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___11078], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___11069,output_schema11039_11070,input_schema11040_11071,input_checker11041_11072,output_checker11042_11073))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema11039_11070,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11040_11071], null)));

//# sourceMappingURL=schema.js.map