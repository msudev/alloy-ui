YUI.add("aui-form-builder-field-textarea-deprecated",function(e,t){var n=e.Array,r=e.getClassName,i=r("form","control"),s=r("field"),o=r("field","text"),u=r("field","textarea"),a=r("form-builder-field"),f=r("form-builder-field","node"),l='<div class="form-builder-field-wrapper"><textarea id="{id}" class="'+[f,s,o,u,i].join(" ")+'" name="{name}">{value}</textarea></div>',c=e.Component.create({NAME:"form-builder-textarea-field",ATTRS:{template:{valueFn:function(){return l}}},CSS_PREFIX:a,EXTENDS:e.FormBuilderTextField,prototype:{getPropertyModel:function(){var t=this,r=e.FormBuilderTextAreaField.superclass.getPropertyModel.apply(t,arguments);return n.each(r,function(t,n,r){t.attributeName==="predefinedValue"&&(r[n].editor=new e.TextAreaCellEditor)}),r}}});e.FormBuilderTextAreaField=c,e.FormBuilderField.types.textarea=e.FormBuilderTextAreaField},"3.0.3-deprecated.91",{requires:["aui-form-builder-field-deprecated"]});
