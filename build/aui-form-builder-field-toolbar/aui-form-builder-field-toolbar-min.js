YUI.add("aui-form-builder-field-toolbar",function(e,t){var n=e.getClassName("form","builder","field"),r=e.getClassName("form","builder","field","content"),i=e.getClassName("form","builder","field","content","toolbar"),s=e.getClassName("form","builder","field","toolbar"),o=e.getClassName("form","builder","field","toolbar","container"),u=e.getClassName("form","builder","field","toolbar","item"),a=e.getClassName("form","builder","field","toolbar","items"),f=e.getClassName("form","builder","field","toolbar","toggle");e.FormBuilderFieldToolbar=e.Base.create("form-builder-field-toolbar",e.Base,[],{TPL_TOOLBAR:'<div class="'+s+'">'+'<button type="button" class="btn btn-default '+f+'">'+'<span class="glyphicon glyphicon-cog"></span></button>'+'<div class="btn-group '+a+'"></div></div>',TPL_TOOLBAR_ITEM:'<button type="button" class="btn btn-default '+u+' {buttonClass}">'+'<span class="{iconClass}"></span></button>',initializer:function(){var t=this.get("formBuilder").get("contentBox");this._toolbar=e.Node.create(this.TPL_TOOLBAR),this._eventHandles=[this.after("itemsChange",this._afterItemsChange),this._toolbar.delegate("click",this._onToggleClick,"."+f,this),this._toolbar.delegate("click",this._onItemClick,"."+u,this)],e.UA.mobile?(this._toolbar.one("."+f).remove(),this._eventHandles.push(t.delegate("click",this._onFieldClick,"."+r,this))):this._eventHandles.push(t.delegate("mouseenter",this._onFieldMouseEnter,"."+i,this),t.delegate("mouseleave",this._onFieldMouseLeave,"."+i,this)),this._uiSetItems(this.get("items"))},destructor:function(){(new e.EventHandle(this._eventHandles)).detach()},addForField:function(e){e.get("content").one("."+o).append(this._toolbar),this.fire("onToolbarHasAddedToField",{colNode:e.get("content").ancestor(".col")})},close:function(){this._toolbar.removeClass("open")},getItem:function(e){return this._toolbar.one(e)},open:function(){this._toolbar.addClass("open")},remove:function(){this._toolbar.remove(),this.close()},_afterItemsChange:function(){this._uiSetItems(this.get("items"))},_getFieldFromEvent:function(e){return e.currentTarget.ancestor("."+n).getData("field-instance")},_getItemFromEvent:function(e){var t=this._toolbar.all("."+u).indexOf(e.currentTarget);return this.get("items")[t]},_onFieldClick:function(e){var t=e.currentTarget.ancestor("."+n).getData("field-instance");this.addForField(t),this.open()},_onFieldMouseEnter:function(e){var t=this._getFieldFromEvent(e);this.get("disabled")||this.addForField(t)},_onFieldMouseLeave:function(){this.remove()},_onItemClick:function(e){var t=this._getFieldFromEvent(e),n=this.get("formBuilder"),r=this._getItemFromEvent(e);this.close(),r.handler&&n[r.handler].call(n,t)},_onToggleClick:function(){this.open()},_uiSetItems:function(t){var n,r=this._toolbar.one("."+a);r.empty();for(n=0;n<t.length;n++)r.append(e.Node.create(e.Lang.sub(this.TPL_TOOLBAR_ITEM,{buttonClass:t[n].buttonClass||"",iconClass:t[n].iconClass})))}},{ATTRS:{disabled:{validator:e.Lang.isBoolean,value:!1},formBuilder:{writeOnce:"initOnly"},items:{validator:e.Lang.isArray,valueFn:function(){return[e.FormBuilderFieldToolbar.ITEM_ADD_NESTED,e.FormBuilderFieldToolbar.ITEM_EDIT,e.FormBuilderFieldToolbar.ITEM_MOVE,e.FormBuilderFieldToolbar.ITEM_REMOVE,e.FormBuilderFieldToolbar.ITEM_CLOSE]}}}}),e.FormBuilderFieldToolbar.ITEM_ADD_NESTED={handler:"addNestedField",iconClass:"glyphicon glyphicon-plus"},e.FormBuilderFieldToolbar.ITEM_EDIT={handler:"editField",iconClass:"glyphicon glyphicon-wrench"},e.FormBuilderFieldToolbar.ITEM_MOVE={buttonClass:"layout-builder-move-cut-button layout-builder-move-cut-col-button",iconClass:"glyphicon glyphicon-move"},e.FormBuilderFieldToolbar.ITEM_REMOVE={handler:"removeField",iconClass:"glyphicon glyphicon-trash"},e.FormBuilderFieldToolbar.ITEM_CLOSE={iconClass:"glyphicon glyphicon-remove"}},"3.0.3-deprecated.91",{requires:["aui-classnamemanager","base","node-base"],skinnable:!0});
