define(function(require, exports, module) {
	var $ = require('jquery');

	function Util(obj) {
		this.obj = $(obj);
	}

	module.exports = Util;

	Util.prototype = {
		constructor: Util,
		init: function() {
			this.obj.on('click', function() {
				$(this).clone().insertAfter(this);
			});
		}
	}
});