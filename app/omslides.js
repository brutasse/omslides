// Compiled by ClojureScript 0.0-2342
goog.provide('omslides');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
omslides.state_from_event = (function state_from_event(app,k){var f = (function (app__$1,k__$1,e){return om.core.transact_BANG_.call(null,app__$1,k__$1,(function (){return e.target.value;
}));
});return cljs.core.partial.call(null,f,app,k);
});
omslides.get_hash_words = (function get_hash_words(){return clojure.string.split.call(null,cljs.core.subs.call(null,window.location.hash,(1)),",");
});
omslides.text_from_hash = (function text_from_hash(){return clojure.string.join.call(null,"\n",omslides.get_hash_words.call(null));
});
omslides.text_to_hash = (function text_to_hash(text){return clojure.string.join.call(null,",",cljs.core.filter.call(null,cljs.core.not_empty,cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,text,"\n"))));
});
omslides.update_hash = (function update_hash(app,e){e.preventDefault();
return document.location.hash = omslides.text_to_hash.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)));
});
omslides.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),omslides.text_from_hash.call(null),new cljs.core.Keyword(null,"counter","counter",804008177),null], null));
omslides.giphy = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"//api.giphy.com/v1/gifs/random",new cljs.core.Keyword(null,"key","key",-1516042587),"dc6zaTOxFJmzC"], null);
omslides.get_images = (function get_images(app,p__10464){var vec__10468 = p__10464;var tag = cljs.core.nth.call(null,vec__10468,(0),null);var tags = cljs.core.nthnext.call(null,vec__10468,(1));om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.inc);
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(omslides.giphy),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"api_key","api_key",-1567758224),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(omslides.giphy),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"accept","accept",1874130431),"application/json"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__10468,tag,tags){
return (function (res){var img_10471 = cljs.core.get_in.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","image_original_url"], null));om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"slides","slides",-1933049910),((function (img_10471,vec__10468,tag,tags){
return (function (slides){return cljs.core.conj.call(null,slides,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),tag,new cljs.core.Keyword(null,"src","src",-1651076051),img_10471], null));
});})(img_10471,vec__10468,tag,tags))
);
if(cljs.core.empty_QMARK_.call(null,tags))
{om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"counter","counter",804008177),null);
return Reveal.initialize();
} else
{return get_images.call(null,app,tags);
}
});})(vec__10468,tag,tags))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__10468,tag,tags){
return (function (p__10469){var map__10470 = p__10469;var map__10470__$1 = ((cljs.core.seq_QMARK_.call(null,map__10470))?cljs.core.apply.call(null,cljs.core.hash_map,map__10470):map__10470);var status_text = cljs.core.get.call(null,map__10470__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));return console.log(status_text);
});})(vec__10468,tag,tags))
], null));
});
omslides.generate_slides = (function generate_slides(app){var words = omslides.get_hash_words.call(null);om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"counter","counter",804008177),(0));
om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,words));
om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"slides","slides",-1933049910),cljs.core.PersistentVector.EMPTY);
return omslides.get_images.call(null,app,words);
});
omslides.hash_changed = (function hash_changed(app,e){Reveal.navigateTo((0));
om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"text","text",-1790561697),omslides.text_from_hash.call(null));
return omslides.generate_slides.call(null,app);
});
var ufv___10493 = schema.utils.use_fn_validation;var output_schema10473_10494 = schema.core.Any;var input_schema10474_10495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10475_10496 = schema.core.checker.call(null,input_schema10474_10495);var output_checker10476_10497 = schema.core.checker.call(null,output_schema10473_10494);/**
* Inputs: [{:keys [counter total]} owner]
*/
omslides.loader = ((function (ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497){
return (function loader(G__10477,G__10478){var validate__7342__auto__ = ufv___10493.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10477,G__10478], null);var temp__4126__auto___10499 = input_checker10475_10496.call(null,args__7343__auto___10498);if(cljs.core.truth_(temp__4126__auto___10499))
{var error__7344__auto___10500 = temp__4126__auto___10499;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"loader","loader",1178136104,null),cljs.core.pr_str.call(null,error__7344__auto___10500)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10474_10495,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10498,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10500], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var G__10487 = G__10477;var map__10488 = G__10487;var map__10488__$1 = ((cljs.core.seq_QMARK_.call(null,map__10488))?cljs.core.apply.call(null,cljs.core.hash_map,map__10488):map__10488);var total = cljs.core.get.call(null,map__10488__$1,new cljs.core.Keyword(null,"total","total",1916810418));var counter = cljs.core.get.call(null,map__10488__$1,new cljs.core.Keyword(null,"counter","counter",804008177));var owner = G__10478;var G__10487__$1 = G__10487;var owner__$1 = owner;while(true){
var map__10489 = G__10487__$1;var map__10489__$1 = ((cljs.core.seq_QMARK_.call(null,map__10489))?cljs.core.apply.call(null,cljs.core.hash_map,map__10489):map__10489);var total__$1 = cljs.core.get.call(null,map__10489__$1,new cljs.core.Keyword(null,"total","total",1916810418));var counter__$1 = cljs.core.get.call(null,map__10489__$1,new cljs.core.Keyword(null,"counter","counter",804008177));var owner__$2 = owner__$1;if(typeof omslides.t10490 !== 'undefined')
{} else
{
/**
* @constructor
*/
omslides.t10490 = (function (output_schema10473,owner,map__10489,loader,validate__7342__auto__,G__10477,input_checker10475,G__10478,map__10488,output_checker10476,counter,total,input_schema10474,ufv__,G__10487,meta10491){
this.output_schema10473 = output_schema10473;
this.owner = owner;
this.map__10489 = map__10489;
this.loader = loader;
this.validate__7342__auto__ = validate__7342__auto__;
this.G__10477 = G__10477;
this.input_checker10475 = input_checker10475;
this.G__10478 = G__10478;
this.map__10488 = map__10488;
this.output_checker10476 = output_checker10476;
this.counter = counter;
this.total = total;
this.input_schema10474 = input_schema10474;
this.ufv__ = ufv__;
this.G__10487 = G__10487;
this.meta10491 = meta10491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omslides.t10490.cljs$lang$type = true;
omslides.t10490.cljs$lang$ctorStr = "omslides/t10490";
omslides.t10490.cljs$lang$ctorPrWriter = ((function (map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497){
return (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"omslides/t10490");
});})(map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497))
;
omslides.t10490.prototype.om$core$IRender$ = true;
omslides.t10490.prototype.om$core$IRender$render$arity$1 = ((function (map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497){
return (function (_){var self__ = this;
var ___$1 = this;if((self__.counter == null))
{return cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "ok"},"\u221A"),React.DOM.span(null,"Your slideshow is ready. Press the right arrow key and speak up. Press ESC to get an overview.")],null))));
} else
{return cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("GIFing slide "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.counter)+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.total))],null))));
}
});})(map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497))
;
omslides.t10490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497){
return (function (_10492){var self__ = this;
var _10492__$1 = this;return self__.meta10491;
});})(map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497))
;
omslides.t10490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497){
return (function (_10492,meta10491__$1){var self__ = this;
var _10492__$1 = this;return (new omslides.t10490(self__.output_schema10473,self__.owner,self__.map__10489,self__.loader,self__.validate__7342__auto__,self__.G__10477,self__.input_checker10475,self__.G__10478,self__.map__10488,self__.output_checker10476,self__.counter,self__.total,self__.input_schema10474,self__.ufv__,self__.G__10487,meta10491__$1));
});})(map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497))
;
omslides.__GT_t10490 = ((function (map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497){
return (function __GT_t10490(output_schema10473__$1,owner__$3,map__10489__$2,loader__$1,validate__7342__auto____$1,G__10477__$1,input_checker10475__$1,G__10478__$1,map__10488__$2,output_checker10476__$1,counter__$2,total__$2,input_schema10474__$1,ufv____$1,G__10487__$2,meta10491){return (new omslides.t10490(output_schema10473__$1,owner__$3,map__10489__$2,loader__$1,validate__7342__auto____$1,G__10477__$1,input_checker10475__$1,G__10478__$1,map__10488__$2,output_checker10476__$1,counter__$2,total__$2,input_schema10474__$1,ufv____$1,G__10487__$2,meta10491));
});})(map__10489,map__10489__$1,total__$1,counter__$1,owner__$2,G__10487,map__10488,map__10488__$1,total,counter,owner,validate__7342__auto__,ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497))
;
}
return (new omslides.t10490(output_schema10473_10494,owner__$2,map__10489__$1,loader,validate__7342__auto__,G__10477,input_checker10475_10496,G__10478,map__10488__$1,output_checker10476_10497,counter__$1,total__$1,input_schema10474_10495,ufv___10493,G__10487__$1,null));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10501 = output_checker10476_10497.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10501))
{var error__7344__auto___10502 = temp__4126__auto___10501;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"loader","loader",1178136104,null),cljs.core.pr_str.call(null,error__7344__auto___10502)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10473_10494,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10502], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10493,output_schema10473_10494,input_schema10474_10495,input_checker10475_10496,output_checker10476_10497))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,omslides.loader),schema.core.make_fn_schema.call(null,output_schema10473_10494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10474_10495], null)));
omslides.__GT_loader = (function() {
var __GT_loader = null;
var __GT_loader__1 = (function (cursor__9110__auto__){return om.core.build.call(null,omslides.loader,cursor__9110__auto__);
});
var __GT_loader__2 = (function (cursor__9110__auto__,m10472){return om.core.build.call(null,omslides.loader,cursor__9110__auto__,m10472);
});
__GT_loader = function(cursor__9110__auto__,m10472){
switch(arguments.length){
case 1:
return __GT_loader__1.call(this,cursor__9110__auto__);
case 2:
return __GT_loader__2.call(this,cursor__9110__auto__,m10472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_loader.cljs$core$IFn$_invoke$arity$1 = __GT_loader__1;
__GT_loader.cljs$core$IFn$_invoke$arity$2 = __GT_loader__2;
return __GT_loader;
})()
;
var ufv___10516 = schema.utils.use_fn_validation;var output_schema10504_10517 = schema.core.Any;var input_schema10505_10518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10506_10519 = schema.core.checker.call(null,input_schema10505_10518);var output_checker10507_10520 = schema.core.checker.call(null,output_schema10504_10517);/**
* Inputs: [app owner]
*/
omslides.form = ((function (ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520){
return (function form(G__10508,G__10509){var validate__7342__auto__ = ufv___10516.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10508,G__10509], null);var temp__4126__auto___10522 = input_checker10506_10519.call(null,args__7343__auto___10521);if(cljs.core.truth_(temp__4126__auto___10522))
{var error__7344__auto___10523 = temp__4126__auto___10522;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.call(null,error__7344__auto___10523)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10505_10518,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10521,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10523], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var app = G__10508;var owner = G__10509;while(true){
if(typeof omslides.t10513 !== 'undefined')
{} else
{
/**
* @constructor
*/
omslides.t10513 = (function (form,input_schema10505,input_checker10506,owner,G__10508,validate__7342__auto__,output_schema10504,output_checker10507,G__10509,app,ufv__,meta10514){
this.form = form;
this.input_schema10505 = input_schema10505;
this.input_checker10506 = input_checker10506;
this.owner = owner;
this.G__10508 = G__10508;
this.validate__7342__auto__ = validate__7342__auto__;
this.output_schema10504 = output_schema10504;
this.output_checker10507 = output_checker10507;
this.G__10509 = G__10509;
this.app = app;
this.ufv__ = ufv__;
this.meta10514 = meta10514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omslides.t10513.cljs$lang$type = true;
omslides.t10513.cljs$lang$ctorStr = "omslides/t10513";
omslides.t10513.cljs$lang$ctorPrWriter = ((function (validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520){
return (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"omslides/t10513");
});})(validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520))
;
omslides.t10513.prototype.om$core$IRender$ = true;
omslides.t10513.prototype.om$core$IRender$render$arity$1 = ((function (validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.section,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.a({"href": "./#"},"Omslides")],null)))),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span(null,"Enter one term per line and generate a fancy slideshow. "),React.DOM.a({"href": "#correct,horse,battery,staple"},"Example")],null)))),cljs.core.apply.call(null,React.DOM.form,{"onSubmit": om_tools.dom.format_opts.call(null,cljs.core.partial.call(null,omslides.update_hash,self__.app))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.textarea.call(null,{"value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app)), "onChange": om_tools.dom.format_opts.call(null,omslides.state_from_event.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null)))})],null)))),cljs.core.apply.call(null,React.DOM.p,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button(null,"Let me ridicule myself")],null))))],null)))),om.core.build.call(null,omslides.loader,self__.app)],null))));
});})(validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520))
;
omslides.t10513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520){
return (function (_10515){var self__ = this;
var _10515__$1 = this;return self__.meta10514;
});})(validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520))
;
omslides.t10513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520){
return (function (_10515,meta10514__$1){var self__ = this;
var _10515__$1 = this;return (new omslides.t10513(self__.form,self__.input_schema10505,self__.input_checker10506,self__.owner,self__.G__10508,self__.validate__7342__auto__,self__.output_schema10504,self__.output_checker10507,self__.G__10509,self__.app,self__.ufv__,meta10514__$1));
});})(validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520))
;
omslides.__GT_t10513 = ((function (validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520){
return (function __GT_t10513(form__$1,input_schema10505__$1,input_checker10506__$1,owner__$1,G__10508__$1,validate__7342__auto____$1,output_schema10504__$1,output_checker10507__$1,G__10509__$1,app__$1,ufv____$1,meta10514){return (new omslides.t10513(form__$1,input_schema10505__$1,input_checker10506__$1,owner__$1,G__10508__$1,validate__7342__auto____$1,output_schema10504__$1,output_checker10507__$1,G__10509__$1,app__$1,ufv____$1,meta10514));
});})(validate__7342__auto__,ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520))
;
}
return (new omslides.t10513(form,input_schema10505_10518,input_checker10506_10519,owner,G__10508,validate__7342__auto__,output_schema10504_10517,output_checker10507_10520,G__10509,app,ufv___10516,null));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10524 = output_checker10507_10520.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10524))
{var error__7344__auto___10525 = temp__4126__auto___10524;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.call(null,error__7344__auto___10525)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10504_10517,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10525], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10516,output_schema10504_10517,input_schema10505_10518,input_checker10506_10519,output_checker10507_10520))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,omslides.form),schema.core.make_fn_schema.call(null,output_schema10504_10517,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10505_10518], null)));
omslides.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__9110__auto__){return om.core.build.call(null,omslides.form,cursor__9110__auto__);
});
var __GT_form__2 = (function (cursor__9110__auto__,m10503){return om.core.build.call(null,omslides.form,cursor__9110__auto__,m10503);
});
__GT_form = function(cursor__9110__auto__,m10503){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__9110__auto__);
case 2:
return __GT_form__2.call(this,cursor__9110__auto__,m10503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form.cljs$core$IFn$_invoke$arity$1 = __GT_form__1;
__GT_form.cljs$core$IFn$_invoke$arity$2 = __GT_form__2;
return __GT_form;
})()
;
var ufv___10539 = schema.utils.use_fn_validation;var output_schema10527_10540 = schema.core.Any;var input_schema10528_10541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"slide","slide",1783023419,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10529_10542 = schema.core.checker.call(null,input_schema10528_10541);var output_checker10530_10543 = schema.core.checker.call(null,output_schema10527_10540);/**
* Inputs: [slide owner]
*/
omslides.slide = ((function (ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543){
return (function slide(G__10531,G__10532){var validate__7342__auto__ = ufv___10539.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10531,G__10532], null);var temp__4126__auto___10545 = input_checker10529_10542.call(null,args__7343__auto___10544);if(cljs.core.truth_(temp__4126__auto___10545))
{var error__7344__auto___10546 = temp__4126__auto___10545;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"slide","slide",1783023419,null),cljs.core.pr_str.call(null,error__7344__auto___10546)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10528_10541,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10544,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10546], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var slide__$1 = G__10531;var owner = G__10532;while(true){
if(typeof omslides.t10536 !== 'undefined')
{} else
{
/**
* @constructor
*/
omslides.t10536 = (function (input_checker10529,owner,output_schema10527,output_checker10530,G__10532,validate__7342__auto__,input_schema10528,slide,G__10531,ufv__,meta10537){
this.input_checker10529 = input_checker10529;
this.owner = owner;
this.output_schema10527 = output_schema10527;
this.output_checker10530 = output_checker10530;
this.G__10532 = G__10532;
this.validate__7342__auto__ = validate__7342__auto__;
this.input_schema10528 = input_schema10528;
this.slide = slide;
this.G__10531 = G__10531;
this.ufv__ = ufv__;
this.meta10537 = meta10537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omslides.t10536.cljs$lang$type = true;
omslides.t10536.cljs$lang$ctorStr = "omslides/t10536";
omslides.t10536.cljs$lang$ctorPrWriter = ((function (validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543){
return (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"omslides/t10536");
});})(validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543))
;
omslides.t10536.prototype.om$core$IRender$ = true;
omslides.t10536.prototype.om$core$IRender$render$arity$1 = ((function (validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.section,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h1,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.slide)],null)))),React.DOM.img({"src": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(self__.slide))},null)],null))));
});})(validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543))
;
omslides.t10536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543){
return (function (_10538){var self__ = this;
var _10538__$1 = this;return self__.meta10537;
});})(validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543))
;
omslides.t10536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543){
return (function (_10538,meta10537__$1){var self__ = this;
var _10538__$1 = this;return (new omslides.t10536(self__.input_checker10529,self__.owner,self__.output_schema10527,self__.output_checker10530,self__.G__10532,self__.validate__7342__auto__,self__.input_schema10528,self__.slide,self__.G__10531,self__.ufv__,meta10537__$1));
});})(validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543))
;
omslides.__GT_t10536 = ((function (validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543){
return (function __GT_t10536(input_checker10529__$1,owner__$1,output_schema10527__$1,output_checker10530__$1,G__10532__$1,validate__7342__auto____$1,input_schema10528__$1,slide__$2,G__10531__$1,ufv____$1,meta10537){return (new omslides.t10536(input_checker10529__$1,owner__$1,output_schema10527__$1,output_checker10530__$1,G__10532__$1,validate__7342__auto____$1,input_schema10528__$1,slide__$2,G__10531__$1,ufv____$1,meta10537));
});})(validate__7342__auto__,ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543))
;
}
return (new omslides.t10536(input_checker10529_10542,owner,output_schema10527_10540,output_checker10530_10543,G__10532,validate__7342__auto__,input_schema10528_10541,slide__$1,G__10531,ufv___10539,null));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10547 = output_checker10530_10543.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10547))
{var error__7344__auto___10548 = temp__4126__auto___10547;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"slide","slide",1783023419,null),cljs.core.pr_str.call(null,error__7344__auto___10548)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10527_10540,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10548], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10539,output_schema10527_10540,input_schema10528_10541,input_checker10529_10542,output_checker10530_10543))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,omslides.slide),schema.core.make_fn_schema.call(null,output_schema10527_10540,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10528_10541], null)));
omslides.__GT_slide = (function() {
var __GT_slide = null;
var __GT_slide__1 = (function (cursor__9110__auto__){return om.core.build.call(null,omslides.slide,cursor__9110__auto__);
});
var __GT_slide__2 = (function (cursor__9110__auto__,m10526){return om.core.build.call(null,omslides.slide,cursor__9110__auto__,m10526);
});
__GT_slide = function(cursor__9110__auto__,m10526){
switch(arguments.length){
case 1:
return __GT_slide__1.call(this,cursor__9110__auto__);
case 2:
return __GT_slide__2.call(this,cursor__9110__auto__,m10526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_slide.cljs$core$IFn$_invoke$arity$1 = __GT_slide__1;
__GT_slide.cljs$core$IFn$_invoke$arity$2 = __GT_slide__2;
return __GT_slide;
})()
;
var ufv___10562 = schema.utils.use_fn_validation;var output_schema10550_10563 = schema.core.Any;var input_schema10551_10564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10552_10565 = schema.core.checker.call(null,input_schema10551_10564);var output_checker10553_10566 = schema.core.checker.call(null,output_schema10550_10563);/**
* Inputs: [app owner]
*/
omslides.slideshow = ((function (ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function slideshow(G__10554,G__10555){var validate__7342__auto__ = ufv___10562.get_cell();if(cljs.core.truth_(validate__7342__auto__))
{var args__7343__auto___10567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10554,G__10555], null);var temp__4126__auto___10568 = input_checker10552_10565.call(null,args__7343__auto___10567);if(cljs.core.truth_(temp__4126__auto___10568))
{var error__7344__auto___10569 = temp__4126__auto___10568;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"slideshow","slideshow",1926782398,null),cljs.core.pr_str.call(null,error__7344__auto___10569)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10551_10564,new cljs.core.Keyword(null,"value","value",305978217),args__7343__auto___10567,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10569], null));
} else
{}
} else
{}
var o__7345__auto__ = (function (){var app = G__10554;var owner = G__10555;while(true){
if(typeof omslides.t10559 !== 'undefined')
{} else
{
/**
* @constructor
*/
omslides.t10559 = (function (owner,output_schema10550,G__10554,input_checker10552,validate__7342__auto__,input_schema10551,output_checker10553,G__10555,app,ufv__,slideshow,meta10560){
this.owner = owner;
this.output_schema10550 = output_schema10550;
this.G__10554 = G__10554;
this.input_checker10552 = input_checker10552;
this.validate__7342__auto__ = validate__7342__auto__;
this.input_schema10551 = input_schema10551;
this.output_checker10553 = output_checker10553;
this.G__10555 = G__10555;
this.app = app;
this.ufv__ = ufv__;
this.slideshow = slideshow;
this.meta10560 = meta10560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omslides.t10559.cljs$lang$type = true;
omslides.t10559.cljs$lang$ctorStr = "omslides/t10559";
omslides.t10559.cljs$lang$ctorPrWriter = ((function (validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"omslides/t10559");
});})(validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
omslides.t10559.prototype.om$core$IRender$ = true;
omslides.t10559.prototype.om$core$IRender$render$arity$1 = ((function (validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "reveal"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "slides"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,omslides.form,self__.app),om.core.build_all.call(null,omslides.slide,new cljs.core.Keyword(null,"slides","slides",-1933049910).cljs$core$IFn$_invoke$arity$1(self__.app))],null))))],null))))],null))));
});})(validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
omslides.t10559.prototype.om$core$IWillMount$ = true;
omslides.t10559.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function (_){var self__ = this;
var ___$1 = this;return window.addEventListener("hashchange",cljs.core.partial.call(null,omslides.hash_changed,self__.app));
});})(validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
omslides.t10559.prototype.om$core$IDidMount$ = true;
omslides.t10559.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function (_){var self__ = this;
var ___$1 = this;Reveal.initialize();
return omslides.generate_slides.call(null,self__.app);
});})(validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
omslides.t10559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function (_10561){var self__ = this;
var _10561__$1 = this;return self__.meta10560;
});})(validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
omslides.t10559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function (_10561,meta10560__$1){var self__ = this;
var _10561__$1 = this;return (new omslides.t10559(self__.owner,self__.output_schema10550,self__.G__10554,self__.input_checker10552,self__.validate__7342__auto__,self__.input_schema10551,self__.output_checker10553,self__.G__10555,self__.app,self__.ufv__,self__.slideshow,meta10560__$1));
});})(validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
omslides.__GT_t10559 = ((function (validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566){
return (function __GT_t10559(owner__$1,output_schema10550__$1,G__10554__$1,input_checker10552__$1,validate__7342__auto____$1,input_schema10551__$1,output_checker10553__$1,G__10555__$1,app__$1,ufv____$1,slideshow__$1,meta10560){return (new omslides.t10559(owner__$1,output_schema10550__$1,G__10554__$1,input_checker10552__$1,validate__7342__auto____$1,input_schema10551__$1,output_checker10553__$1,G__10555__$1,app__$1,ufv____$1,slideshow__$1,meta10560));
});})(validate__7342__auto__,ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
}
return (new omslides.t10559(owner,output_schema10550_10563,G__10554,input_checker10552_10565,validate__7342__auto__,input_schema10551_10564,output_checker10553_10566,G__10555,app,ufv___10562,slideshow,null));
break;
}
})();if(cljs.core.truth_(validate__7342__auto__))
{var temp__4126__auto___10570 = output_checker10553_10566.call(null,o__7345__auto__);if(cljs.core.truth_(temp__4126__auto___10570))
{var error__7344__auto___10571 = temp__4126__auto___10570;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"slideshow","slideshow",1926782398,null),cljs.core.pr_str.call(null,error__7344__auto___10571)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10550_10563,new cljs.core.Keyword(null,"value","value",305978217),o__7345__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7344__auto___10571], null));
} else
{}
} else
{}
return o__7345__auto__;
});})(ufv___10562,output_schema10550_10563,input_schema10551_10564,input_checker10552_10565,output_checker10553_10566))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,omslides.slideshow),schema.core.make_fn_schema.call(null,output_schema10550_10563,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10551_10564], null)));
omslides.__GT_slideshow = (function() {
var __GT_slideshow = null;
var __GT_slideshow__1 = (function (cursor__9110__auto__){return om.core.build.call(null,omslides.slideshow,cursor__9110__auto__);
});
var __GT_slideshow__2 = (function (cursor__9110__auto__,m10549){return om.core.build.call(null,omslides.slideshow,cursor__9110__auto__,m10549);
});
__GT_slideshow = function(cursor__9110__auto__,m10549){
switch(arguments.length){
case 1:
return __GT_slideshow__1.call(this,cursor__9110__auto__);
case 2:
return __GT_slideshow__2.call(this,cursor__9110__auto__,m10549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_slideshow.cljs$core$IFn$_invoke$arity$1 = __GT_slideshow__1;
__GT_slideshow.cljs$core$IFn$_invoke$arity$2 = __GT_slideshow__2;
return __GT_slideshow;
})()
;
om.core.root.call(null,omslides.slideshow,omslides.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));

//# sourceMappingURL=omslides.js.map