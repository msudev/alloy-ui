if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-available-field-deprecated/aui-form-builder-available-field-deprecated.js']) {
   __coverage__['build/aui-form-builder-available-field-deprecated/aui-form-builder-available-field-deprecated.js'] = {"path":"build/aui-form-builder-available-field-deprecated/aui-form-builder-available-field-deprecated.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":55},"end":{"line":1,"column":74}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":128,"column":82}},"2":{"start":{"line":13,"column":0},"end":{"line":123,"column":3}},"3":{"start":{"line":125,"column":0},"end":{"line":125,"column":56}}},"branchMap":{},"code":["(function () { YUI.add('aui-form-builder-available-field-deprecated', function (A, NAME) {","","/**"," * A base class for `A.FormBuilderAvailableField`."," *"," * @class A.FormBuilderAvailableField"," * @extends A.PropertyBuilderAvailableField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","","var FormBuilderAvailableField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'availableField',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderAvailableField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * List of hidden attributes.","         *","         * @attribute hiddenAttributes","         * @type Array","         */","        hiddenAttributes: {","            validator: A.Lang.isArray","        },","","        /**","         * Collection of options.","         *","         * @attribute options","         * @type Object","         */","        options: {","            validator: A.Lang.isObject","        },","","        /**","         * Specifies a predefined value for the input field.","         *","         * @attribute predefinedValue","         */","        predefinedValue: {},","","        /**","         * List of read-only input fields.","         *","         * @attribute readOnlyAttributes","         * @type Array","         */","        readOnlyAttributes: {","            validator: A.Lang.isArray","        },","","        /**","         * Checks if an input field is required. In other words, it needs","         * content to be valid.","         *","         * @attribute required","         * @type Boolean","         */","        required: {","            validator: A.Lang.isBoolean","        },","","        /**","         * If `true` the label is showed.","         *","         * @attribute showLabel","         * @default true","         * @type Boolean","         */","        showLabel: {","            validator: A.Lang.isBoolean,","            value: true","        },","","        /**","         * Hint to help the user to fill the input field.","         *","         * @attribute tip","         * @type String","         */","        tip: {","            validator: A.Lang.isString","        },","","        /**","         * Checks if the input field is unique or not.","         *","         * @attribute unique","         * @type Boolean","         */","        unique: {","            validator: A.Lang.isBoolean","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type String","     * @static","     */","    EXTENDS: A.PropertyBuilderAvailableField","});","","A.FormBuilderAvailableField = FormBuilderAvailableField;","","","}, '3.0.3-deprecated.82', {\"requires\": [\"aui-property-builder-available-field\"]});","","}());"]};
}
var __cov_87e$BbvPT434fqPprJ1hwQ = __coverage__['build/aui-form-builder-available-field-deprecated/aui-form-builder-available-field-deprecated.js'];
__cov_87e$BbvPT434fqPprJ1hwQ.s['1']++;YUI.add('aui-form-builder-available-field-deprecated',function(A,NAME){__cov_87e$BbvPT434fqPprJ1hwQ.f['1']++;__cov_87e$BbvPT434fqPprJ1hwQ.s['2']++;var FormBuilderAvailableField=A.Component.create({NAME:'availableField',ATTRS:{hiddenAttributes:{validator:A.Lang.isArray},options:{validator:A.Lang.isObject},predefinedValue:{},readOnlyAttributes:{validator:A.Lang.isArray},required:{validator:A.Lang.isBoolean},showLabel:{validator:A.Lang.isBoolean,value:true},tip:{validator:A.Lang.isString},unique:{validator:A.Lang.isBoolean}},EXTENDS:A.PropertyBuilderAvailableField});__cov_87e$BbvPT434fqPprJ1hwQ.s['3']++;A.FormBuilderAvailableField=FormBuilderAvailableField;},'3.0.3-deprecated.82',{'requires':['aui-property-builder-available-field']});
