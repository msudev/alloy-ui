YUI.add("aui-event-delegate-change",function(e,t){var n=e.Object,r=e.Selector;e.Event.define("change",{delegate:function(e,t,n,r){var i=this;i._attachEvents(e,t,n,r)},detach:function(e,t,n){var r=this;r._detachEvents(e,t,n)},detachDelegate:function(e,t,n){var r=this;r._detachEvents(e,t,n)},on:function(e,t,n){var r=this;r._attachEvent(e,t,n)},_attachEvent:function(t,i,s,o,u){var a=this,f=a._getEventName(t),l=a._prepareHandles(i,t);if(!n.owns(l,f)){var c=s.fire;o&&(c=function(n){var i=o.getDOM(),a=!0,f=t.getDOM(),l=e.clone(n);do f&&r.test(f,u)&&(l.currentTarget=e.one(f),l.container=o,a=s.fire(l)),f=f.parentNode;while(a!==!1&&!l.stopped&&f&&f!==i);return a!==!1&&l.stopped!==2}),l[f]=e.Event._attach([f,c,t,s])}},_attachEvents:function(e,t,n,r){var i=this,s=i._prepareHandles(t,e);s.beforeactivate=e.delegate("beforeactivate",function(s){var o=s.target;i._attachEvent(o,t,n,e,r)},r)},_detachEvents:function(t,n){e.each(n._handles,function(t){e.each(t,function(e){e.detach()})}),delete n._handles},_getEventName:e.cached(function(e){var t="change",n=e.attr("tagName").toLowerCase(),r=e.attr("type").toLowerCase();return n==="input"&&(r==="checkbox"||r==="radio")&&(t="click"),t}),_prepareHandles:function(e,t){n.owns(e,"_handles")||(e._handles={});var r=e._handles;return n.owns(r,t)||(r[t]={}),r[t]}},!0)},"3.0.3-deprecated.82",{requires:["aui-event-base","event-delegate","event-synthetic"]});
