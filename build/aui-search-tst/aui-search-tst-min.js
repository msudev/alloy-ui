YUI.add("aui-search-tst",function(e,t){var n=e.Lang,r=e.Component.create({NAME:"TernarySearchTree",NS:"ternarysearchtree",EXTENDS:e.Base,prototype:{add:function(e){var t=this,r=t._root,i=t._insert(r,e,0);n.isValue(r)||(t._root=i)},contains:function(e){var t=this,r=t._search(t._root,e,0);return!!n.isValue(r)&&!!r.isEndOfWord()},empty:function(){var e=this;e._root=null},patternMatch:function(e){var t=this,n=[];return t._patternMatch(t._root,e,0,n),n},prefixSearch:function(e){var t=this,n=[],r=t._search(t._root,e,0);return r&&t._inOrderTraversal(r.get("child"),n),n},_inOrderTraversal:function(e,t){var r=this;if(!n.isValue(e))return;r._inOrderTraversal(e.get("smallerNode"),t),e.isEndOfWord()&&t.push(e.get("word")),r._inOrderTraversal(e.get("child"),t),r._inOrderTraversal(e.get("largerNode"),t)},_insert:function(t,r,i){var s=this,o=r.charAt(i);return n.isValue(t)?o===t.get("character")?i+1<r.length?t.set("child",s._insert(t.get("child"),r,i+1)):t.set("word",r):o<t.get("character")?t.set("smallerNode",s._insert(t.get("smallerNode"),r,i)):t.set("largerNode",s._insert(t.get("largerNode"),r,i)):t=s._insert(new e.TernarySearchNode({character:o}),r,i),t},_patternMatch:function(e,t,i,s){var o=this;if(n.isValue(e)){var u=t.charAt(i),a=e.get("character"),f=r.PATTERN_CHAR;(u===f||u<a)&&o._patternMatch(e.get("smallerNode"),t,i,s);if(u===f||u===a)i+1<t.length?o._patternMatch(e.get("child"),t,i+1,s):e.isEndOfWord()&&s.push(e.get("word"));(u===f||u>a)&&o._patternMatch(e.get("largerNode"),t,i,s)}},_search:function(e,t,r){var i=this,s=e;if(n.isValue(e)){var o=t.charAt(r),u=e.get("character");o===u?r+1<t.length&&(s=i._search(e.get("child"),t,r+1)):o<u?s=i._search(e.get("smallerNode"),t,r):s=i._search(e.get("largerNode"),t,r)}return s}}});r.PATTERN_CHAR="?",e.TernarySearchTree=r;var n=e.Lang,i=e.Component.create({NAME:"TernarySearchNode",NS:"ternarysearchnode",ATTRS:{character:{validator:"_validateCharacter",writeOnce:!0},child:{validator:"_validateChild"},largerNode:{validator:"_isInstanceOfNode"},smallerNode:{validator:"_isInstanceOfNode"},word:{validator:n.isString}},EXTENDS:e.Base,prototype:{isEndOfWord:function(){return!!this.get("word")},_isInstanceOfNode:function(t){return t instanceof e.TernarySearchNode},_validateCharacter:function(e){return n.isString(e)&&e.length===1}}});e.TernarySearchNode=i},"3.0.3-deprecated.91",{requires:["aui-component"]});
