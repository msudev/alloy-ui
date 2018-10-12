YUI.add("aui-resize-base-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isBoolean,s=n.isString,o=n.trim,u=e.Array.indexOf,a=".",f=",",l=" ",c="active",h="activeHandle",p="activeHandleEl",d="all",v="autoHide",m="bottom",g="className",y="cursor",b="diagonal",w="dotted",E="dragCursor",S="grip",x="gripsmall",T="handle",N="handles",C="hidden",k="horizontal",L="icon",A="inner",O="left",M="margin",_="node",D="nodeName",P="none",H="offsetHeight",B="offsetWidth",j="parentNode",F="position",I="proxy",q="proxyEl",R="relative",U="resize",z="resizing",W="right",X="static",V="top",$="vertical",J="wrap",K="wrapper",Q="wrapTypes",G="resize:mouseUp",Y="resize:resize",Z="resize:align",et="resize:end",tt="resize:start",nt="t",rt="tr",it="r",st="br",ot="b",ut="bl",at="l",ft="tl",lt=function(t){return t instanceof e.Node},ct=function(e){return T+e.toUpperCase()},ht=function(){return Array.prototype.slice.call(arguments).join(l)},pt=e.cached(function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),dt=e.getClassName,vt=dt(L),mt=dt(L,x,b,st),gt=dt(L,S,w,k),yt=dt(L,S,w,$),bt=dt(U),wt=dt(U,T),Et=dt(U,T,c),St=dt(U,T,A),xt=dt(U,T,A,"{handle}"),Tt=dt(U,T,"{handle}"),Nt=dt(U,C,N),Ct=dt(U,I),kt=dt(U,K),Lt=ht(vt,mt),At=ht(vt,gt),Ot=ht(vt,yt),Mt=/^(t|tr|b|bl|br|tl)$/i,_t=/^(tl|l|bl)$/i,Dt=/^(tl|t|tr)$/i,Pt=/^(bl|br|l|r|tl|tr)$/i,Ht='<div class="'+ht(wt,Tt)+'">'+'<div class="'+ht(St,xt)+'"></div>'+"</div>",Bt='<div class="'+Ct+'"></div>',jt='<div class="'+kt+'"></div>',Ft=[nt,rt,it,st,ot,ut,at,ft],It=e.Component.create({NAME:U,ATTRS:{activeHandle:{value:null,validator:s},activeHandleEl:{value:null,validator:lt},autoHide:{value:!1,validator:i},handles:{setter:function(t){var n=this,i=[];return r(t)?i=t:s(t)&&(t.toLowerCase()==d?i=Ft:e.each(t.split(f),function(e,t){var n=o(e);u(Ft,n)>-1&&i.push(n)})),i},value:d},node:{setter:e.one},proxy:{value:!1,validator:i},proxyEl:{setter:e.one,valueFn:function(){return e.Node.create(Bt)}},resizing:{value:!1,validator:i},wrap:{setter:function(e){var t=this,n=t.get(_),r=n.get(D),i=t.get(Q);return i.test(r)&&(e=!0),e},value:!1,validator:i},wrapTypes:{readOnly:!0,value:/canvas|textarea|input|select|button|img/i},wrapper:{setter:function(){var t=this,n=t.get(_),r=n;return t.get(J)&&(r=e.Node.create(jt),n.placeBefore(r),r.append(n),t._copyStyles(n,r),n.setStyles({position:X,left:0,top:0})),r},value:null,writeOnce:!0}},EXTENDS:e.Base,prototype:{CSS_INNER_HANDLE_MAP:{r:Ot,l:Ot,t:At,b:At,br:Lt},changeHeightHandles:!1,changeLeftHandles:!1,changeTopHandles:!1,changeWidthHandles:!1,delegate:null,info:null,lastInfo:null,originalInfo:null,initializer:function(){var e=this;e.info={},e.originalInfo={},e.get(_).addClass(bt),e.renderer()},renderUI:function(){var e=this;e._renderHandles(),e._renderProxy()},bindUI:function(){var e=this;e._createEvents(),e._bindDD(),e._bindHandle()},syncUI:function(){var e=this;e._setHideHandlesUI(e.get(v))},destructor:function(){var t=this,n=t.get(_),r=t.get(K);e.Event.purgeElement(r,!0),t.eachHandle(function(e){t.delegate.dd.destroy(),e.remove(!0)}),t.get(J)&&(n.setStyles({margin:r.getStyle(M),position:r.getStyle(F)}),r.placeBefore(n),r.remove(!0)),n.removeClass(bt),n.removeClass(Nt)},renderer:function(){this.renderUI(),this.bindUI(),this.syncUI()},eachHandle:function(t){var n=this;e.each(n.get(N),function(e,r){var i=n.get(ct(e));t.apply(n,[i,e,r])})},_bindDD:function(){var t=this;t.delegate=new e.DD.Delegate({bubbleTargets:t,container:t.get(K),dragConfig:{clickPixelThresh:0,clickTimeThresh:0,useShim:!0,move:!1},nodes:a+wt,target:!1}),t.on("drag:drag",t._handleResizeEvent),t.on("drag:dropmiss",t._handleMouseUpEvent),t.on("drag:end",t._handleResizeEndEvent),t.on("drag:start",t._handleResizeStartEvent)},_bindHandle:function(){var t=this,n=t.get(K);n.on("mouseenter",e.bind(t._onWrapperMouseEnter,t)),n.on("mouseleave",e.bind(t._onWrapperMouseLeave,t)),n.delegate("mouseenter",e.bind(t._onHandleMouseEnter,t),a+wt),n.delegate("mouseleave",e.bind(t._onHandleMouseLeave,t),a+wt)},_createEvents:function(){var e=this,t=function(t,n){e.publish(t,{defaultFn:n,queuable:!1,emitFacade:!0,bubbles:!0,prefix:U})};t(tt,this._defResizeStartFn),t(Y,this._defResizeFn),t(Z,this._defResizeAlignFn),t(et,this._defResizeEndFn),t(G,this._defMouseUpFn)},_renderHandles:function(){var e=this,t=e.get(K);e.eachHandle(function(e){t.append(e)})},_renderProxy:function(){var e=this,t=e.get(q);e.get(K).get(j).append(t.hide())},_buildHandle:function(t){var r=this,i=e.Node.create(n.sub(Ht,{handle:t}));return i.one(a+St).addClass(r.CSS_INNER_HANDLE_MAP[t]),i},_checkSize:function(e,t){var n=this,r=n.info,i=n.originalInfo,s=e==H?V:O;r[e]=t;if(s==O&&n.changeLeftHandles||s==V&&n.changeTopHandles)r[s]=i[s]+i[e]-t},_copyStyles:function(t,n){var r=this,i=t.getStyle(F).toLowerCase();i==X&&(i=R);var s={position:i},o={};e.each([V,W,m,O],function(e){var r=M+pt(e);o[r]=n.getStyle(r),s[r]=t.getStyle(r)}),n.setStyles(s),t.setStyles(o),t.setStyles({margin:0}),n.set(H,t.get(H)),n.set(B,t.get(B))},_extractHandleName:e.cached(function(e){var t=e.get(g),n=t.match(new RegExp(dt(U,T,"(\\w{1,2})\\b")));return n?n[1]:null}),_getInfo:function(e,t){var n=this,r,i=t.dragEvent.target;t&&(r=i.actXY.length?i.actXY:i.lastXY);var s=e.getXY(),o=s[0],u=s[1],a=e.get(H),f=e.get(B);return{actXY:r,bottom:u+a,left:o,offsetHeight:a,offsetWidth:f,right:o+f,top:u}},_resize:function(){var e=this,t=e.get(h),n=e.info,r=e.originalInfo,i=n.actXY[0]-r.actXY[0],s=n.actXY[1]-r.actXY[1],o={t:function(){n.top=r.top+s,n.offsetHeight=r.offsetHeight-s},r:function(){n.offsetWidth=r.offsetWidth+i},l:function(){n.left=r.left+i,n.offsetWidth=r.offsetWidth-i},b:function(){n.offsetHeight=r.offsetHeight+s},tr:function(){this.t(),this.r()},br:function(){this.b(),this.r()},tl:function(){this.t(),this.l()},bl:function(){this.b(),this.l()}};o[t](i,s)},_setOffset:function(e,t,n){e.set(B,t),e.set(H,n)},_syncUI:function(){var t=this,n=t.info,r=t.get(K),i=t.get(_);t._setOffset(r,n.offsetWidth,n.offsetHeight),(t.changeLeftHandles||t.changeTopHandles)&&r.setXY([n.left
,n.top]),r.compareTo(i)||t._setOffset(i,n.offsetWidth,n.offsetHeight),e.UA.webkit&&i.setStyle(U,P)},_syncProxyUI:function(){var e=this,t=e.info,n=e.get(p),r=e.get(q),i=n.getStyle(y);r.show().setStyle(y,i),e.delegate.dd.set(E,i),e._setOffset(r,t.offsetWidth,t.offsetHeight),r.setXY([t.left,t.top])},_updateChangeHandleInfo:function(e){var t=this;t.changeHeightHandles=Mt.test(e),t.changeLeftHandles=_t.test(e),t.changeTopHandles=Dt.test(e),t.changeWidthHandles=Pt.test(e)},_updateInfo:function(e){var t=this;t.info=t._getInfo(t.get(K),e)},_setActiveHandlesUI:function(e){var t=this,n=t.get(p);n&&(e?(t.eachHandle(function(e){e.removeClass(Et)}),n.addClass(Et)):n.removeClass(Et))},_setHideHandlesUI:function(e){var t=this,n=t.get(K);t.get(z)||(e?n.addClass(Nt):n.removeClass(Nt))},_defMouseUpFn:function(e){var t=this;t.set(z,!1)},_defResizeFn:function(e){var t=this;t._handleResizeAlignEvent(e.dragEvent),t.get(I)?t._syncProxyUI():t._syncUI()},_defResizeAlignFn:function(e){var t=this,n=t.originalInfo;t.lastInfo=t.info,t._updateInfo(e);var r=t.info;t._resize(),t.con||(r.offsetHeight<=15&&t._checkSize(H,15),r.offsetWidth<=15&&t._checkSize(B,15))},_defResizeEndFn:function(e){var t=this,n=e.dragEvent.target;n.actXY=[],t.get(I)&&(t._syncProxyUI(),t.get(q).hide()),t._syncUI(),t.set(h,null),t.set(p,null),t._setActiveHandlesUI(!1)},_defResizeStartFn:function(e){var t=this;t.set(z,!0),t.originalInfo=t._getInfo(t.get(K),e),t._updateInfo(e)},_handleMouseUpEvent:function(e){this.fire(G,{dragEvent:e,info:this.info})},_handleResizeEvent:function(e){this.fire(Y,{dragEvent:e,info:this.info})},_handleResizeAlignEvent:function(e){this.fire(Z,{dragEvent:e,info:this.info})},_handleResizeEndEvent:function(e){this.fire(et,{dragEvent:e,info:this.info})},_handleResizeStartEvent:function(e){this.fire(tt,{dragEvent:e,info:this.info})},_onWrapperMouseEnter:function(e){var t=this;t.get(v)&&t._setHideHandlesUI(!1)},_onWrapperMouseLeave:function(e){var t=this;t.get(v)&&t._setHideHandlesUI(!0)},_onHandleMouseEnter:function(e){var t=this,n=e.currentTarget,r=t._extractHandleName(n);t.get(z)||(t.set(h,r),t.set(p,n),t._setActiveHandlesUI(!0),t._updateChangeHandleInfo(r))},_onHandleMouseLeave:function(e){var t=this;t.get(z)||t._setActiveHandlesUI(!1)}}});e.each(Ft,function(e,t){It.ATTRS[ct(e)]={setter:function(){return this._buildHandle(e)},value:null,writeOnce:!0}}),e.Resize=It},"3.0.3-deprecated.82",{requires:["dd-drag","dd-delegate","dd-drop","aui-base-deprecated"],skinnable:!0});
