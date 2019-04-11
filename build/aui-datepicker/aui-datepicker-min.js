YUI.add("aui-datepicker",function(e,t){function i(){}var n=e.Lang,r=function(e,t,n){return Math.min(Math.max(e,t),n)};i.PANES=[e.CalendarBase.ONE_PANE_TEMPLATE,e.CalendarBase.TWO_PANE_TEMPLATE,e.CalendarBase.THREE_PANE_TEMPLATE],i.ATTRS={autoHide:{validator:n.isBoolean,value:!0},calendar:{setter:"_setCalendar",value:{},writeOnce:!0},live:{validator:n.isString,value:"assertive"},panes:{setter:"_setPanes",validator:n.isNumber,value:1,writeOnce:!0},useARIA:{validator:e.Lang.isBoolean,value:!0,writeOnce:"initOnly"}},e.mix(i.prototype,{calendar:null,initializer:function(){var t=this;t.after("selectionChange",t._afterDatePickerSelectionChange),t.get("useARIA")&&t.plug(e.Plugin.Aria)},clearSelection:function(e){var t=this,r=t.get("activeInput");t.getCalendar()._clearSelection(e),n.trim(r.val())==""&&t._defSelectionChangeFn({newSelection:null}),t.get("useARIA")&&t.aria.setAttribute("label","",r)},deselectDates:function(e){var t=this;t.getCalendar().deselectDates(e)},getCalendar:function(){var t=this,n=t.calendar,r;return n||(r=e.CalendarBase.CONTENT_TEMPLATE,e.CalendarBase.CONTENT_TEMPLATE=i.PANES[t.get("panes")-1],t.getPopover(),n=new e.Calendar(t.get("calendar")),n.render(t.popover.bodyNode),t.calendar=n,n.after("selectionChange",t._afterCalendarSelectionChange,t),n.after("dateClick",t._afterCalendarDateClick,t),e.CalendarBase.CONTENT_TEMPLATE=r),n},selectDates:function(e){var t=this;t.getCalendar().selectDates(e)},selectDatesFromInputValue:function(t){var n=this,r=n.getCalendar();e.Array.each(t,function(e){r._addDateToSelection(e,!0)}),r._fireSelectionChange()},useInputNode:function(e){var t=this,n=t.getPopover();n.set("trigger",e),n.get("visible")||(t.set("activeInput",e),t.alignTo(e)),t.get("useARIA")&&t.aria.setAttribute("live",t.get("live"),t.get("activeInput")),t.clearSelection(!0),t.selectDatesFromInputValue(t.getParsedDatesFromInputValue())},_afterCalendarDateClick:function(){var e=this,t=e.getCalendar(),n=e.getSelectedDates(),r=t.get("selectionMode");e.get("autoHide")&&r!=="multiple"&&e.hide(),e.get("useARIA")&&this.aria.setAttribute("label",n,e.get("activeInput"))},_afterCalendarSelectionChange:function(t){var n=this,r,i=t.newSelection,s=n.getSelectedDates()||[];r=i.concat(s),r=e.Array.dedupe(r),i.length&&(r.length!==s.length||i.length<s.length)&&n.fire("selectionChange",{newSelection:i})},_afterDatePickerSelectionChange:function(){var e=this,t=e.getCalendar(),n=t.get("selectionMode");e._setCalendarToFirstSelectedDate(),e.get("autoHide")&&n!=="multiple"&&(e.hide(),e.get("activeInput").focus())},_isSameDay:function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},_onceUserInteractionRelease:function(e){var t=this;t.useInputNodeOnce(e.currentTarget),t.alignTo(e.currentTarget),t._userInteractionInProgress=!1},_setCalendarToFirstSelectedDate:function(){var e=this,t=e.getSelectedDates(),r;t&&(r=t[0]),r&&n.isDate(r)&&e.getCalendar().set("date",r)},_setCalendar:function(t){return e.merge({showNextMonth:!0,showPrevMonth:!0},t)},_setPanes:function(e){return r(e,1,3)}},!0),e.DatePickerBase=i,e.DatePicker=e.Base.create("datepicker",e.Base,[e.DatePickerDelegate,e.DatePickerPopover,e.DatePickerBase])},"3.0.3-deprecated.91",{requires:["aui-aria","aui-datepicker-delegate","aui-datepicker-popover","base","base-build","calendar"],skinnable:!0});
