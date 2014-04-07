angular.module("mnd.multi-transclude", [])

.directive("mndMultiTransclude", function () {
	return {
		link: function ($scope, $element, $attrs, controller, $transclude) {
			if (!$transclude) {
				throw new Error("Illegal use of mndMultiTransculde");
			}
			$transclude(function (clone) {
				var wrapper = angular.element("<div></div>");
				wrapper.append(clone);
				var selector = "[name=" + $attrs.mndMultiTransclude + "]";
				var target = wrapper[0].querySelector(selector);
				target = angular.element(target);
				$element.replaceWith(target);
			});
		}
	};
});
