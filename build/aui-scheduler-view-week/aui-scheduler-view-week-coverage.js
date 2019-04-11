if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-scheduler-view-week/aui-scheduler-view-week.js']) {
   __coverage__['build/aui-scheduler-view-week/aui-scheduler-view-week.js'] = {"path":"build/aui-scheduler-view-week/aui-scheduler-view-week.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":54}}},"2":{"name":"(anonymous_2)","line":98,"loc":{"start":{"line":98,"column":21},"end":{"line":98,"column":32}}},"3":{"name":"(anonymous_3)","line":124,"loc":{"start":{"line":124,"column":29},"end":{"line":124,"column":44}}},"4":{"name":"(anonymous_4)","line":139,"loc":{"start":{"line":139,"column":21},"end":{"line":139,"column":32}}},"5":{"name":"(anonymous_5)","line":154,"loc":{"start":{"line":154,"column":21},"end":{"line":154,"column":32}}},"6":{"name":"(anonymous_6)","line":168,"loc":{"start":{"line":168,"column":18},"end":{"line":168,"column":29}}},"7":{"name":"(anonymous_7)","line":183,"loc":{"start":{"line":183,"column":25},"end":{"line":183,"column":40}}},"8":{"name":"(anonymous_8)","line":199,"loc":{"start":{"line":199,"column":39},"end":{"line":199,"column":54}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":230,"column":87}},"2":{"start":{"line":10,"column":0},"end":{"line":15,"column":39}},"3":{"start":{"line":26,"column":0},"end":{"line":225,"column":3}},"4":{"start":{"line":99,"column":16},"end":{"line":99,"column":58}},"5":{"start":{"line":125,"column":12},"end":{"line":125,"column":32}},"6":{"start":{"line":126,"column":12},"end":{"line":126,"column":54}},"7":{"start":{"line":127,"column":12},"end":{"line":127,"column":65}},"8":{"start":{"line":129,"column":12},"end":{"line":129,"column":89}},"9":{"start":{"line":140,"column":12},"end":{"line":140,"column":32}},"10":{"start":{"line":141,"column":12},"end":{"line":141,"column":54}},"11":{"start":{"line":142,"column":12},"end":{"line":142,"column":77}},"12":{"start":{"line":144,"column":12},"end":{"line":144,"column":81}},"13":{"start":{"line":155,"column":12},"end":{"line":155,"column":32}},"14":{"start":{"line":156,"column":12},"end":{"line":156,"column":54}},"15":{"start":{"line":157,"column":12},"end":{"line":157,"column":53}},"16":{"start":{"line":159,"column":12},"end":{"line":159,"column":86}},"17":{"start":{"line":169,"column":12},"end":{"line":169,"column":32}},"18":{"start":{"line":170,"column":12},"end":{"line":170,"column":89}},"19":{"start":{"line":172,"column":12},"end":{"line":172,"column":55}},"20":{"start":{"line":184,"column":12},"end":{"line":184,"column":32}},"21":{"start":{"line":185,"column":12},"end":{"line":185,"column":54}},"22":{"start":{"line":186,"column":12},"end":{"line":186,"column":65}},"23":{"start":{"line":188,"column":12},"end":{"line":188,"column":68}},"24":{"start":{"line":200,"column":12},"end":{"line":200,"column":32}},"25":{"start":{"line":201,"column":12},"end":{"line":201,"column":54}},"26":{"start":{"line":202,"column":12},"end":{"line":202,"column":49}},"27":{"start":{"line":204,"column":12},"end":{"line":204,"column":59}},"28":{"start":{"line":206,"column":12},"end":{"line":211,"column":14}},"29":{"start":{"line":213,"column":12},"end":{"line":213,"column":90}},"30":{"start":{"line":215,"column":12},"end":{"line":220,"column":14}},"31":{"start":{"line":222,"column":12},"end":{"line":222,"column":71}},"32":{"start":{"line":227,"column":0},"end":{"line":227,"column":40}}},"branchMap":{"1":{"line":217,"type":"cond-expr","locations":[{"start":{"line":217,"column":70},"end":{"line":217,"column":77}},{"start":{"line":217,"column":80},"end":{"line":217,"column":84}}]}},"code":["(function () { YUI.add('aui-scheduler-view-week', function (A, NAME) {","","/**"," * The Scheduler Component"," *"," * @module aui-scheduler"," * @submodule aui-scheduler-view-week"," */","","var Lang = A.Lang,","    isFunction = Lang.isFunction,","","    DateMath = A.DataType.DateMath,","","    WEEK_LENGTH = DateMath.WEEK_LENGTH;","","/**"," * A base class for `SchedulerWeekView`."," *"," * @class A.SchedulerWeekView"," * @extends A.SchedulerDayView"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var SchedulerWeekView = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type {String}","     * @static","     */","    NAME: 'scheduler-view-week',","","    /**","     * Static property used to define the default attribute","     * configuration for the `SchedulerWeekView`.","     *","     * @property ATTRS","     * @type {Object}","     * @static","     */","    ATTRS: {","","        /**","         * Determines the content of Scheduler week view's body section.","         *","         * @attribute bodyContent","         * @default ''","         * @type {String}","         */","        bodyContent: {","            value: ''","        },","","        /**","         * Contains the number of days in a week.","         *","         * @attribute days","         * @default 7","         * @type {Number}","         */","        days: {","            value: 7","        },","","        /**","         * Configures the header week view.","         *","         * @attribute headerViewConfig","         */","        headerViewConfig: {","            value: {","                displayDaysInterval: WEEK_LENGTH","            }","        },","","        /**","         * Determines the name for this week view.","         *","         * @attribute name","         * @default 'week'","         * @type {String}","         */","        name: {","            value: 'week'","        },","","        /**","         * Contains the formatted navigation date formatter for this week view.","         *","         * @attribute navigationDateFormatter","         * @type {Function}","         */","        navigationDateFormatter: {","            valueFn: function() {","                return this._valueNavigationDateFormatter;","            },","            validator: isFunction","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type {Object}","     * @static","     */","    EXTENDS: A.SchedulerDayView,","","    prototype: {","","        /**","         * Returns a date value of the first day of the week with its time","         * adjusted to midnight.","         *","         * @method getAdjustedViewDate","         * @param {Date} date","         * @return {Date}","         */","        getAdjustedViewDate: function(date) {","            var instance = this;","            var scheduler = instance.get('scheduler');","            var firstDayOfWeek = scheduler.get('firstDayOfWeek');","","            return DateMath.toMidnight(DateMath.getFirstDayOfWeek(date, firstDayOfWeek));","        },","","        /**","         * Returns the value of the date that follows the week view's current","         * date.","         *","         * @method getNextDate","         * @return {Date}","         */","        getNextDate: function() {","            var instance = this;","            var scheduler = instance.get('scheduler');","            var viewDate = DateMath.safeClearTime(scheduler.get('viewDate'));","","            return DateMath.toLastHour(DateMath.add(viewDate, DateMath.WEEK, 1));","        },","","        /**","         * Returns the value of the date that preceeds the week view's current","         * date.","         *","         * @method getPrevDate","         * @return {Date}","         */","        getPrevDate: function() {","            var instance = this;","            var scheduler = instance.get('scheduler');","            var viewDate = scheduler.get('viewDate');","","            return DateMath.toMidnight(DateMath.subtract(viewDate, DateMath.WEEK, 1));","        },","","        /**","         * Returns the value of the week view's current date.","         *","         * @method getToday","         * @return {Date}","         */","        getToday: function() {","            var instance = this;","            var todayDate = SchedulerWeekView.superclass.getToday.apply(this, arguments);","","            return instance._firstDayOfWeek(todayDate);","        },","","        /**","         * Returns the value of the first day of week in this view.","         *","         * @method _firstDayOfWeek","         * @param {Date} date","         * @return {Date}","         * @protected","         */","        _firstDayOfWeek: function(date) {","            var instance = this;","            var scheduler = instance.get('scheduler');","            var firstDayOfWeek = scheduler.get('firstDayOfWeek');","","            return DateMath.getFirstDayOfWeek(date, firstDayOfWeek);","        },","","        /**","         * Returns a formatted navigation date formatter for this week view.","         *","         * @method _valueNavigationDateFormatter","         * @param {Date} date","         * @return {Date}","         * @protected","         */","        _valueNavigationDateFormatter: function(date) {","            var instance = this;","            var scheduler = instance.get('scheduler');","            var locale = scheduler.get('locale');","","            var startDate = instance._firstDayOfWeek(date);","","            var startDateLabel = A.DataType.Date.format(","                startDate, {","                    format: '%B %d',","                    locale: locale","                }","            );","","            var endDate = DateMath.add(startDate, DateMath.DAY, instance.get('days') - 1);","","            var endDateLabel = A.DataType.Date.format(","                endDate, {","                    format: (DateMath.isMonthOverlapWeek(startDate) ? '%B %d' : '%d') + ', %Y',","                    locale: locale","                }","            );","","            return [startDateLabel, '&mdash;', endDateLabel].join(' ');","        }","    }","});","","A.SchedulerWeekView = SchedulerWeekView;","","","}, '3.0.3-deprecated.91', {\"requires\": [\"aui-scheduler-view-day\"], \"skinnable\": true});","","}());"]};
}
var __cov_EmrU7HsPEbmrN6Pbv5cixg = __coverage__['build/aui-scheduler-view-week/aui-scheduler-view-week.js'];
__cov_EmrU7HsPEbmrN6Pbv5cixg.s['1']++;YUI.add('aui-scheduler-view-week',function(A,NAME){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['1']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['2']++;var Lang=A.Lang,isFunction=Lang.isFunction,DateMath=A.DataType.DateMath,WEEK_LENGTH=DateMath.WEEK_LENGTH;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['3']++;var SchedulerWeekView=A.Component.create({NAME:'scheduler-view-week',ATTRS:{bodyContent:{value:''},days:{value:7},headerViewConfig:{value:{displayDaysInterval:WEEK_LENGTH}},name:{value:'week'},navigationDateFormatter:{valueFn:function(){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['2']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['4']++;return this._valueNavigationDateFormatter;},validator:isFunction}},EXTENDS:A.SchedulerDayView,prototype:{getAdjustedViewDate:function(date){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['3']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['5']++;var instance=this;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['6']++;var scheduler=instance.get('scheduler');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['7']++;var firstDayOfWeek=scheduler.get('firstDayOfWeek');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['8']++;return DateMath.toMidnight(DateMath.getFirstDayOfWeek(date,firstDayOfWeek));},getNextDate:function(){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['4']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['9']++;var instance=this;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['10']++;var scheduler=instance.get('scheduler');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['11']++;var viewDate=DateMath.safeClearTime(scheduler.get('viewDate'));__cov_EmrU7HsPEbmrN6Pbv5cixg.s['12']++;return DateMath.toLastHour(DateMath.add(viewDate,DateMath.WEEK,1));},getPrevDate:function(){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['5']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['13']++;var instance=this;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['14']++;var scheduler=instance.get('scheduler');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['15']++;var viewDate=scheduler.get('viewDate');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['16']++;return DateMath.toMidnight(DateMath.subtract(viewDate,DateMath.WEEK,1));},getToday:function(){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['6']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['17']++;var instance=this;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['18']++;var todayDate=SchedulerWeekView.superclass.getToday.apply(this,arguments);__cov_EmrU7HsPEbmrN6Pbv5cixg.s['19']++;return instance._firstDayOfWeek(todayDate);},_firstDayOfWeek:function(date){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['7']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['20']++;var instance=this;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['21']++;var scheduler=instance.get('scheduler');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['22']++;var firstDayOfWeek=scheduler.get('firstDayOfWeek');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['23']++;return DateMath.getFirstDayOfWeek(date,firstDayOfWeek);},_valueNavigationDateFormatter:function(date){__cov_EmrU7HsPEbmrN6Pbv5cixg.f['8']++;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['24']++;var instance=this;__cov_EmrU7HsPEbmrN6Pbv5cixg.s['25']++;var scheduler=instance.get('scheduler');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['26']++;var locale=scheduler.get('locale');__cov_EmrU7HsPEbmrN6Pbv5cixg.s['27']++;var startDate=instance._firstDayOfWeek(date);__cov_EmrU7HsPEbmrN6Pbv5cixg.s['28']++;var startDateLabel=A.DataType.Date.format(startDate,{format:'%B %d',locale:locale});__cov_EmrU7HsPEbmrN6Pbv5cixg.s['29']++;var endDate=DateMath.add(startDate,DateMath.DAY,instance.get('days')-1);__cov_EmrU7HsPEbmrN6Pbv5cixg.s['30']++;var endDateLabel=A.DataType.Date.format(endDate,{format:(DateMath.isMonthOverlapWeek(startDate)?(__cov_EmrU7HsPEbmrN6Pbv5cixg.b['1'][0]++,'%B %d'):(__cov_EmrU7HsPEbmrN6Pbv5cixg.b['1'][1]++,'%d'))+', %Y',locale:locale});__cov_EmrU7HsPEbmrN6Pbv5cixg.s['31']++;return[startDateLabel,'&mdash;',endDateLabel].join(' ');}}});__cov_EmrU7HsPEbmrN6Pbv5cixg.s['32']++;A.SchedulerWeekView=SchedulerWeekView;},'3.0.3-deprecated.91',{'requires':['aui-scheduler-view-day'],'skinnable':true});
