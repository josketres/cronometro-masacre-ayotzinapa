'use strict';

/**
 * @ngdoc service
 * @name cronometroMasacreAyotzinapaApp.dateService
 * @description
 * # dateService
 * Service in the cronometroMasacreAyotzinapaApp.
 */
angular.module('cronometroMasacreAyotzinapaApp')
	.service('dateService', function dateService() {
		this.now = function() {
			return new Date();
		};
	});