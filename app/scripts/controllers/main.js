'use strict';

/**
 * @ngdoc function
 * @name cronometroMasacreAyotzinapaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cronometroMasacreAyotzinapaApp
 */
angular.module('cronometroMasacreAyotzinapaApp')
	.controller('MainCtrl', function($scope, dateService) {

		$scope.eventDate = new Date(2014, 8, 26, 21, 0, 0);

		$scope.calculateDate = function() {

			var eventdate = $scope.eventDate;
			var now = dateService.now();
			var count = Math.floor((now.getTime() - eventdate.getTime()) / 1000);

			var secsValue = count % 60;
			count = Math.floor(count / 60);
			var minsValue = count % 60;
			count = Math.floor(count / 60);
			var hoursValue = count % 24;
			count = Math.floor(count / 24);

			var daysValue;
			if (count >= 365) {
				daysValue = count - 365 * Math.floor(count / 365);
			} else {
				daysValue = count
			}
			count = Math.floor(count / 365);
			var yearsValue = count

			$scope.hour = new Number(hoursValue)
			$scope.min = new Number(minsValue)
			$scope.sec = new Number(secsValue)
			$scope.day = new Number(daysValue)
			$scope.year = new Number(yearsValue)
		};
		$scope.calculateDate();

		// see http://dbsgeo.com/latlon/
		$scope.map = {
			center: {
				latitude: 18.34673,
				longitude: -99.54201
			},
			zoom: 14,
			options: {
				scrollwheel: true
			},
			draggable: true
		};

	});